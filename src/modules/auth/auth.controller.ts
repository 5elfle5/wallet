import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { UserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // TODO: fix
  // @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() login) {
    return await this.authService.login(login);
  }

  @Post('signup')
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }
}
