import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
        return null;
    }
    const match = await this.comparePassword(pass, user.password);
    if (!match) {
        return null;
    }
    const { password, ...result } = user['dataValues'];
    return result;
  }

  public async login(login) {
    const user = await this.userService.findOneByEmail(login.email);
    if (!user) {
      return {};
    }
    delete user.password;
    return user;
  }

  public async create(user) {
    const foundUser = await this.userService.findOneByEmail(user.email);
    if (foundUser) {
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
    }
    const pass = bcrypt.hashSync(user.password, 10);
    const newUser = await this.userService.create({
      ...user,
      password: pass,
    });
    const { password, ...result } = newUser['dataValues'];
    // TODO: figure out whether or not we need the token

    const token = await this.generateToken(result);
    return { token: token };
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}
