import { User } from './user.entity';
import { USER_REPOSITORY } from '../../core/constants/strings';

export const usersProviders = [{
    provide: USER_REPOSITORY,
    useValue: User,
}];
