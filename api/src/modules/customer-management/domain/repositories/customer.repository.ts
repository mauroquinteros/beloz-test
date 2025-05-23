import { Customer } from '../entities/customer.entity';

export interface CustomerRepository {
  getById(id: string): Promise<Customer>;
  getAll(): Promise<Customer[]>;
  save(customer: Customer): Promise<void>;
  update(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
