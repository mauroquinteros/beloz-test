import { Inject, Injectable } from '@nestjs/common';
import { CustomerRepository } from '@customer-management/domain/repositories/customer.repository';

@Injectable()
export class DeleteCustomerHandler {
  constructor(
    @Inject('CUSTOMER_REPO') private readonly repo: CustomerRepository,
  ) {}

  async execute(customerId: string) {
    try {
      await this.repo.delete(customerId);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
