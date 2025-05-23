import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '@customer-management/domain/entities/customer.entity';
import { CustomerRepository } from '@customer-management/domain/repositories/customer.repository';

export class CreateCustomerArgs {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly phone?: number,
    readonly address?: string,
  ) {}
}

@Injectable()
export class CreateCustomerHandler {
  constructor(
    @Inject('CUSTOMER_REPO') private readonly repo: CustomerRepository,
  ) {}

  async execute(data: CreateCustomerArgs) {
    try {
      const customer = Customer.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
      });

      await this.repo.save(customer);
      return { customer };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
