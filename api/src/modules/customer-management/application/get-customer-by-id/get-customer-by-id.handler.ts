import { Inject, Injectable } from '@nestjs/common';
import { CustomerRepository } from '@customer-management/domain/repositories/customer.repository';

@Injectable()
export class GetCustomerByIdHandler {
  constructor(
    @Inject('CUSTOMER_REPO') private readonly repo: CustomerRepository,
  ) {}

  async execute(customerId: string) {
    try {
      const customer = await this.repo.getById(customerId);

      if (!customer) {
        throw new Error('Customer not found');
      }

      return { customer };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
