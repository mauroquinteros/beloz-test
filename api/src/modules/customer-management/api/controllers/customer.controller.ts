import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import {
  CreateCustomerRequest,
  UpdateCustomerRequest,
} from '../schemas/customer.schema';
import { CreateCustomerHandler } from '@customer-management/application/create-customer/create-customer.handler';
import { GetCustomerByIdHandler } from '@customer-management/application/get-customer-by-id/get-customer-by-id.handler';
import { GetCustomersHandler } from '@customer-management/application/get-customers/get-customers.handler';
import { UpdateCustomerHandler } from '@customer-management/application/update-customer/update-customer.handler';
import { DeleteCustomerHandler } from '@customer-management/application/delete-customer/delete-customer.handler';

@Controller({ path: 'customers' })
export class CustomerController {
  constructor(
    private readonly createCustomerHandler: CreateCustomerHandler,
    private readonly getCustomerByIdHandler: GetCustomerByIdHandler,
    private readonly getCustomersHandler: GetCustomersHandler,
    private readonly updateCustomerHandler: UpdateCustomerHandler,
    private readonly deleteCustomerHandler: DeleteCustomerHandler,
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

  @Put('/:customerId')
  async updateCustomer(
    @Param() params: { customerId: string },
    @Body() body: UpdateCustomerRequest,
  ) {
    try {
      const response = await this.updateCustomerHandler.execute({
        customerId: params.customerId,
        body,
      });
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/:customerId')
  async deleteCustomer(@Param() params: { customerId: string }) {
    try {
      const response = await this.deleteCustomerHandler.execute(
        params.customerId,
      );
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
