import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCdrmonthDto } from './dto/create-cdrmonth.dto';
import { UpdateCdrmonthDto } from './dto/update-cdrmonth.dto';
import { Cdrmonth } from './entities/cdrmonth.entity';
import { Bulans } from './enum/cdr.enum';
import { CdrmonthRepository } from './repositories/cdrmonth.repository';

@Injectable()
export class CdrmonthService {
  constructor(
    @InjectRepository(CdrmonthRepository)
    private cdrmonthRepository: CdrmonthRepository,
  ) {}
  async create(createCdrmonthDto) {
    const cdrmonth = new Cdrmonth();
    cdrmonth.bulan = Bulans[createCdrmonthDto.bulan];
    cdrmonth.totalsec = Number(createCdrmonthDto.total);
    cdrmonth.customers = createCdrmonthDto.customerid;

    return await cdrmonth.save();
  }

  findAll() {
    return `This action returns all cdrmonth`;
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
