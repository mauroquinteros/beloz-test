import { CustomerRepository } from '@customer-management/domain/repositories/customer.repository';
import { VehicleRepository } from '@customer-management/domain/repositories/vehicle.repository';
import { Inject } from '@nestjs/common';
import {
  Order,
  OrderStatus,
} from '@workshop-management/domain/entities/order.entity';
import { OrderRepository } from '@workshop-management/domain/repositories/order.repository';
import { RepairRepository } from '@workshop-management/domain/repositories/repair.repository';

interface CreateOrderArgs {
  readonly customerId: string;
  readonly vehicleId: string;
  readonly repairId: string;
  readonly status: OrderStatus;
  readonly notes?: string;
}

export class CreateOrderHandler {
  constructor(
    @Inject('REPAIR_REPO') private readonly repairRepo: RepairRepository,
    @Inject('CUSTOMER_REPO') private readonly customerRepo: CustomerRepository,
    @Inject('VEHICLE_REPO') private readonly vehicleRepo: VehicleRepository,
    @Inject('ORDER_REPO') private readonly orderRepo: OrderRepository,
  ) {}

  async execute(data: CreateOrderArgs) {
    try {
      const customer = await this.customerRepo.getById(data.customerId);
      if (!customer) {
        throw new Error('Provide a valid customer');
      }

      const repair = await this.repairRepo.getById(data.repairId);
      if (!repair) {
        throw new Error('Provide a valid repair');
      }

      const vehicle = await this.vehicleRepo.getById(data.vehicleId);
      if (!vehicle) {
        throw new Error('Provide a valid vehicle');
      }

      const order = Order.create({
        status: data.status,
        customer,
        vehicle,
        repair,
      });
      await this.orderRepo.save(order);

      return { order };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
