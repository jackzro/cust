import { Customer } from 'src/modules/customer/entities/customer.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'usertocustomers' })
export class UserToCustomer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usid: string;

  @Column()
  cusid: string;

  @ManyToOne(() => Customer, (customer) => customer.userToCustomer)
  customer: Customer;

  @ManyToOne(() => User, (user) => user.userToCustomer)
  user: User;
}
