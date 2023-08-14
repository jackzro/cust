import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Bulans } from '../enum/cdr.enum';

@Entity({ name: 'cdrmonths' })
export class Cdrmonth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Bulans })
  bulan: Bulans;

  @Column()
  totalsec: number;

  @ManyToOne(() => Customer, (customers) => customers.cdrmonths)
  customers: Customer[];
}
