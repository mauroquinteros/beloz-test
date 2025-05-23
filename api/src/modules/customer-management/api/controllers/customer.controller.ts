import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  Get,
  Param,
} from '@nestjs/common';
import { CreateCustomerHandler } from '@customer-management/application/create-customer/create-customer.handler';
import { CreateCustomerRequest } from '../schemas/customer.schema';
import { GetCustomerByIdHandler } from '@customer-management/application/get-customer-by-id/get-customer-by-id.handler';
import { GetCustomersHandler } from '@customer-management/application/get-customers/get-customers.handler';

@Controller({ path: 'customers' })
export class CustomerController {
  constructor(
    private readonly createCustomerHandler: CreateCustomerHandler,
    private readonly getCustomerByIdHandler: GetCustomerByIdHandler,
    private readonly getCustomersHandler: GetCustomersHandler,
  ) {}

  @Post('')
  async createCustomer(@Body() body: CreateCustomerRequest) {
    try {
      const response = await this.createCustomerHandler.execute(body);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/:customerId')
  async getCustomerById(@Param() params: { customerId: string }) {
    try {
      const response = await this.getCustomerByIdHandler.execute(
        params.customerId,
      );
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('')
  async getCustomers() {
    try {
      const response = await this.getCustomersHandler.execute();
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
