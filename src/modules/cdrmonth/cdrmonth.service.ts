import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCdrmonthDto } from './dto/create-cdrmonth.dto';
import { UpdateCdrmonthDto } from './dto/update-cdrmonth.dto';
import { Cdrmonth } from './entities/cdrmonth.entity';
import { Bulans } from './enum/cdr.enum';
import { CdrmonthRepository } from './repositories/cdrmonth.repository';
import { CustomerRepository } from '../customer/repositories/customer.repository';

@Injectable()
export class CdrmonthService {
  constructor(
    @InjectRepository(CdrmonthRepository)
    private cdrmonthRepository: CdrmonthRepository,
    private customerRepository: CustomerRepository,
  ) {}
  async create(createCdrmonthDto) {
    const customer = await this.customerRepository.findOne({
      name: createCdrmonthDto.name,
    });
    const id: any = customer.id;
    const cdrmonth = new Cdrmonth();
    cdrmonth.bulan = Bulans[createCdrmonthDto.bulan];
    cdrmonth.totalsec = Number(createCdrmonthDto.total);
    cdrmonth.customers = id;
    cdrmonth.tahun = createCdrmonthDto.tahun;
    cdrmonth.provider = createCdrmonthDto.provider;

    return await cdrmonth.save();
  }

  findAll() {
    return `This action returns all cdrmonth`;
  }

  async findMonth(data) {
    const customer = await this.cdrmonthRepository.find({
      relations: ['customers'],
      where: {
        bulan: data.bulan,
        tahun: data.tahun,
      },
    });

    return customer;
  }

  async findOne(id: number) {
    const cdrmonth = await this.cdrmonthRepository.findOne(
      { id },
      { relations: ['customers'] },
    );
    return cdrmonth;
  }

  update(id: number, updateCdrmonthDto: UpdateCdrmonthDto) {
    return `This action updates a #${id} cdrmonth`;
  }

  remove(id: number) {
    return `This action removes a #${id} cdrmonth`;
  }
}
