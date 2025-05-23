import { Customer } from '../entities/customer.entity';

export interface CustomerRepository {
  getById(id: string): Promise<Customer | null>;
  getAll(): Promise<Customer[] | null>;
  save(customer: Customer): Promise<void>;
  update(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
