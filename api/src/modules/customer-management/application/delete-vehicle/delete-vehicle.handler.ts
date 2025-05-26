import { Inject, Injectable } from '@nestjs/common';
import { VehicleRepository } from '@customer-management/domain/repositories/vehicle.repository';

@Injectable()
export class DeleteVehicleHandler {
  constructor(
    @Inject('VEHICLE_REPO') private readonly repo: VehicleRepository,
  ) {}

  async execute(vehicleId: string) {
    try {
      await this.repo.delete(vehicleId);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
