import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUserCreds(criteria, password: string): Promise<any> {
    const user =
      criteria['email'] === undefined
        ? await this.userService.getUserByUsername(criteria.username)
        : await this.userService.getUserByEmail(criteria.email);
    if (!user) throw new BadRequestException();
    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException();
    return user;
  }

  generateToken(user: any) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        code: user.code,
      },
    };
  }
}
