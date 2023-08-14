import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { CustomerRepository } from './repositories/customer.repository';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerRepository)
    private customerRepository: CustomerRepository,
  ) {}
  async create(createCustomerDto) {
    const customer = new Customer();
    customer.name = createCustomerDto.name;
    customer.show = false;
    return await customer.save();
  }

  async findAll() {
    return this.customerRepository.find({
      show: true,
    });
  }

  async findWithCdrMonths() {
    return this.customerRepository.find({ relations: ['cdrmonths'] });
  }

  async findOne(id) {
    const customer = await this.customerRepository.findOne(
      { name: id },
      { relations: ['cdrmonths'] },
    );
    return customer;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
