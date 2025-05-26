import { CreateVehicleHandler } from '@customer-management/application/create-vehicle/create-vehicle.handler';
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
import { CreateVehicleRequest } from '../schemas/vehicle.schema';

@Controller({ path: 'vehicles' })
export class VehicleController {
  constructor(private readonly createVehicleHandler: CreateVehicleHandler) {}

  @Post('')
  async createVehicle(@Body() body: CreateVehicleRequest) {
    try {
      const response = await this.createVehicleHandler.execute(body);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/:vehicleId')
  async getVehicleById() {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('')
  async getVehicles() {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('/:vehicleId')
  async updateVehicle() {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/:vehicleId')
  async deleteVehicle() {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
