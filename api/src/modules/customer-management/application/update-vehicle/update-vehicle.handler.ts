import { Inject, Injectable } from '@nestjs/common';
import { VehicleRepository } from '@customer-management/domain/repositories/vehicle.repository';
import { CustomerRepository } from '@customer-management/domain/repositories/customer.repository';
import { Customer } from '@customer-management/domain/entities/customer.entity';

interface UpdateVehicleArgs {
  readonly vehicleId: string;
  readonly body: {
    customerId?: string;
    license?: string;
    make?: string;
    year?: number;
  };
}

@Injectable()
export class UpdateVehicleHandler {
  constructor(
    @Inject('VEHICLE_REPO') private readonly vehicleRepo: VehicleRepository,
    @Inject('CUSTOMER_REPO') private readonly customerRepo: CustomerRepository,
  ) {}

  private prepareBody(
    body: UpdateVehicleArgs['body'],
    customer?: Customer | null,
  ) {
    const updateBody = { ...body };
    delete updateBody.customerId;

    if (customer) {
      return { ...updateBody, customer };
    }

    return updateBody;
  }

  async execute(data: UpdateVehicleArgs) {
    try {
      const customer = data.body.customerId
        ? await this.customerRepo.getById(data.body.customerId)
        : undefined;

      const updateBody = this.prepareBody(data.body, customer);
      await this.vehicleRepo.update(data.vehicleId, updateBody);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
