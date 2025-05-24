import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '@customer-management/domain/entities/customer.entity';
import { CustomerRepository } from '@customer-management/domain/repositories/customer.repository';

interface UpdateCustomerArgs {
  readonly customerId: string;
  readonly body: Partial<Customer>;
}

@Injectable()
export class UpdateCustomerHandler {
  constructor(
    @Inject('CUSTOMER_REPO') private readonly repo: CustomerRepository,
  ) {}

  async execute(data: UpdateCustomerArgs) {
    try {
      await this.repo.update(data.customerId, data.body);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
