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
import {
  CreateVehicleRequest,
  UpdateVehicleRequest,
} from '../schemas/vehicle.schema';
import { GetVehicleByIdHandler } from '@customer-management/application/get-vehicle-by-id/get-vehicle-by-id.handler';
import { GetVehiclesHandler } from '@customer-management/application/get-vehicles/get-vehicles.handler';
import { DeleteVehicleHandler } from '@customer-management/application/delete-vehicle/delete-vehicle.handler';
import { UpdateVehicleHandler } from '@customer-management/application/update-vehicle/update-vehicle.handler';

@Controller({ path: 'vehicles' })
export class VehicleController {
  constructor(
    private readonly createVehicleHandler: CreateVehicleHandler,
    private readonly getVehicleByIdHandler: GetVehicleByIdHandler,
    private readonly getVehiclesHandler: GetVehiclesHandler,
    private readonly deleteVehicleHandler: DeleteVehicleHandler,
    private readonly updateVehicleHandler: UpdateVehicleHandler,
  ) {}

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
  async getVehicleById(@Param() params: { vehicleId: string }) {
    try {
      const response = await this.getVehicleByIdHandler.execute(
        params.vehicleId,
      );
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('')
  async getVehicles() {
    try {
      const response = await this.getVehiclesHandler.execute();
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('/:vehicleId')
  async updateVehicle(
    @Param() params: { vehicleId: string },
    @Body() body: UpdateVehicleRequest,
  ) {
    try {
      const response = await this.updateVehicleHandler.execute({
        vehicleId: params.vehicleId,
        body,
      });
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/:vehicleId')
  async deleteVehicle(@Param() params: { vehicleId: string }) {
    try {
      const response = await this.deleteVehicleHandler.execute(
        params.vehicleId,
      );
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
