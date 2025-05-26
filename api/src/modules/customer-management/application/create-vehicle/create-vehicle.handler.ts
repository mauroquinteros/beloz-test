import { Inject, Injectable } from '@nestjs/common';
import { VehicleRepository } from '@customer-management/domain/repositories/vehicle.repository';
import { CustomerRepository } from '@customer-management/domain/repositories/customer.repository';
import { Vehicle } from '@customer-management/domain/entities/vehicle.entity';

interface CreateVehicleArgs {
  readonly customerId: string;
  readonly license: string;
  readonly make: string;
  readonly year?: number;
}

@Injectable()
export class CreateVehicleHandler {
  constructor(
    @Inject('VEHICLE_REPO') private readonly vehicleRepo: VehicleRepository,
    @Inject('CUSTOMER_REPO') private readonly customerRepo: CustomerRepository,
  ) {}

  async execute(data: CreateVehicleArgs) {
    try {
      const customer = await this.customerRepo.getById(data.customerId);

      if (!customer) {
        throw new Error('Provide a valid customer');
      }

      const vehicle = Vehicle.create({
        license: data.license,
        make: data.make,
        year: data.year,
        customer,
      });
      await this.vehicleRepo.save(vehicle);
      return { vehicle };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
