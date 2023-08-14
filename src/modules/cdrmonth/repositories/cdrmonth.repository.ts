import { EntityRepository, Repository } from 'typeorm';
import { Cdrmonth } from '../entities/cdrmonth.entity';

@EntityRepository(Cdrmonth)
export class CdrmonthRepository extends Repository<Cdrmonth> {}
