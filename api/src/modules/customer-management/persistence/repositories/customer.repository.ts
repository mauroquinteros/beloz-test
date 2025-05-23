import { Customer } from '@customer-management/domain/entities/customer.entity';
import { CustomerRepository } from '@customer-management/domain/repositories/customer.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from '../entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerPostgresRepository implements CustomerRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly repo: Repository<CustomerEntity>,
  ) {}

  getById(id: string): Promise<Customer> {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<Customer[]> {
    throw new Error('Method not implemented.');
  }

  async save(customer: Customer): Promise<void> {
    const customerDb = this.mapToDb(customer);
    const newCustomer = this.repo.create(customerDb);
    await this.repo.save(newCustomer);
  }

  update(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  protected mapToDomain(model: CustomerEntity): Customer {
    return Customer.create({
      id: model.id,
      name: model.name,
      email: model.email,
      phone: model.phone,
      address: model.address,
    });
  }

  protected mapToDb(entity: Customer): CustomerEntity {
    const customer = new CustomerEntity();
    customer.id = entity.id;
    customer.name = entity.name;
    customer.email = entity.email;
    customer.phone = entity.phone;
    customer.address = entity.address;

    return customer;
  }
}
