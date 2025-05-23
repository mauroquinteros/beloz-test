import { Inject, Injectable } from '@nestjs/common';
import { CustomerRepository } from '@customer-management/domain/repositories/customer.repository';

@Injectable()
export class GetCustomersHandler {
  constructor(
    @Inject('CUSTOMER_REPO') private readonly repo: CustomerRepository,
  ) {}

  async execute() {
    try {
      const customers = await this.repo.getAll();
      return { customers };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
