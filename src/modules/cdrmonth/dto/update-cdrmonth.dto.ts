import { PartialType } from '@nestjs/mapped-types';
import { CreateCdrmonthDto } from './create-cdrmonth.dto';

export class UpdateCdrmonthDto extends PartialType(CreateCdrmonthDto) {}
