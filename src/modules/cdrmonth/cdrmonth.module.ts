import { Module } from '@nestjs/common';
import { CdrmonthService } from './cdrmonth.service';
import { CdrmonthController } from './cdrmonth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CdrmonthRepository } from './repositories/cdrmonth.repository';
import { CustomerRepository } from '../customer/repositories/customer.repository';

@Module({
  controllers: [CdrmonthController],
  providers: [CdrmonthService],
  imports: [TypeOrmModule.forFeature([CdrmonthRepository, CustomerRepository])],
})
export class CdrmonthModule {}
