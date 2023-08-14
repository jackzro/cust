import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { AuthModule } from '../auth/auth.module';
import { UserToCustomerRepository } from './repositories/usercustomer.repository';

@Module({
  controllers: [UserController],
  imports: [
    TypeOrmModule.forFeature([UserRepository, UserToCustomerRepository]),
    // forwardRef(() => AuthModule),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
