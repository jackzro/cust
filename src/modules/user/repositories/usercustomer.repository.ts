import { EntityRepository, Repository } from 'typeorm';
import { UserToCustomer } from '../entities/usercustomer.entity';

@EntityRepository(UserToCustomer)
export class UserToCustomerRepository extends Repository<UserToCustomer> {}
