import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './persistence/customer.entity';
import { VehicleEntity } from './persistence/vehicle.entity';
import { PartEntity } from './persistence/part.entity';
import { RepairEntity } from './persistence/repair.entity';
import { OrderEntity } from './persistence/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerEntity,
      VehicleEntity,
      PartEntity,
      RepairEntity,
      OrderEntity,
    ]),
  ],
})
export class RepairsModule {}
