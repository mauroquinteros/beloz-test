import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderHandler } from '@workshop-management/application/create-order/create-order.handler';
import { CreateOrderRequest } from '../schemas/order.schema';

@Controller({ path: 'orders' })
export class OrderController {
  constructor(private readonly createOrderHandler: CreateOrderHandler) {}

  @Post('')
  async createOrder(@Body() body: CreateOrderRequest) {
    try {
      const response = await this.createOrderHandler.execute(body);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/:orderId')
  async getOrderById(@Param() params: { orderId: string }) {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('')
  async getOrders() {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('/:orderId')
  async updateOrder(@Param() params: { orderId: string }) {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/:orderId')
  async deleteOrder(@Param() params: { orderId: string }) {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
