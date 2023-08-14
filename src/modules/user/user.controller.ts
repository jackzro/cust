import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { SETTINGS } from 'src/app.utils';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/register')
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE) userRegister: UserRegisterRequestDto,
  ) {
    return this.userService.doUserRegistration(userRegister);
  }

  @Post('/coba')
  async coba(@Body() data) {
    console.log(data);
    return data;
  }

  @Get('/client/:id')
  async clientList(@Param('id') id: string) {
    return this.userService.clientListById(id);
  }

  @Post('/client')
  async createUserToCustomer(@Body() createUserToCustomer) {
    return await this.userService.addClientList(createUserToCustomer);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
