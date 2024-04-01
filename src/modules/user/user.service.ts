import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserToCustomerRepository } from './repositories/usercustomer.repository';
import { UserToCustomer } from './entities/usercustomer.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    @InjectRepository(UserToCustomerRepository)
    private userToCustomerRepository: UserToCustomerRepository,
  ) {}
  async doUserRegistration(
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    const user = new User();
    user.username = userRegister.username;
    user.email = userRegister.email;
    user.password = userRegister.password;
    user.code = userRegister.code;

    return await user.save();
  }
  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async getUserById(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async getUserByUsername(username: string) {
    return await this.userRepository.findOne({ where: { username } });
  }

  async clientListById(id: string) {
    return await this.userToCustomerRepository.find({
      where: { usid: id },
      relations: ['customer'],
    });
  }

  async addClientList(data) {
    const userToCustomer = new UserToCustomer();
    userToCustomer.cusid = data.cusid;
    userToCustomer.usid = data.usid;
    userToCustomer.customer = data.cusid;
    userToCustomer.user = data.usid;
    return await userToCustomer.save();
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
