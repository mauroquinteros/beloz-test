import { Inject, Injectable } from '@nestjs/common';
import { VehicleRepository } from '@customer-management/domain/repositories/vehicle.repository';

@Injectable()
export class GetVehiclesHandler {
  constructor(
    @Inject('VEHICLE_REPO') private readonly repo: VehicleRepository,
  ) {}

  async execute() {
    try {
      const vehicles = await this.repo.getAll();
      return { vehicles };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
