import { UserToCustomer } from 'src/modules/user/entities/usercustomer.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Cdrmonth } from '../../cdrmonth/entities/cdrmonth.entity';

@Entity({ name: 'customers' })
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  show: boolean;

  @OneToMany(() => Cdrmonth, (cdrmonths) => cdrmonths.customers)
  cdrmonths: Cdrmonth[];

  @OneToMany(() => UserToCustomer, (userToCustomer) => userToCustomer.customer)
  userToCustomer: UserToCustomer[];
}
