import { Inject, Injectable } from '@nestjs/common';
import { VehicleRepository } from '@customer-management/domain/repositories/vehicle.repository';

@Injectable()
export class GetVehicleByIdHandler {
  constructor(
    @Inject('VEHICLE_REPO') private readonly repo: VehicleRepository,
  ) {}

  async execute(vehicleId: string) {
    try {
      const vehicle = await this.repo.getById(vehicleId);

      if (!vehicle) {
        throw new Error('Vehicle not found');
      }

      return { vehicle };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
