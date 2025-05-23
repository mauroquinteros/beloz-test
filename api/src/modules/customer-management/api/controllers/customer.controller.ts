import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateCustomerHandler } from '@customer-management/application/create-customer/create-customer.handler';
import { CreateCustomerRequest } from '../schemas/customer.schema';

@Controller({ path: 'customers' })
export class CustomerController {
  constructor(private readonly createCustomerHandler: CreateCustomerHandler) {}

  @Post('')
  async createCustomer(@Body() body: CreateCustomerRequest) {
    try {
      const response = await this.createCustomerHandler.execute(body);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
