import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './persistence/entities/order.entity';
import { RepairEntity } from './persistence/entities/repair.entity';
import { PartEntity } from './persistence/entities/part.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, RepairEntity, PartEntity])],
})
export class WorkshopManagementModule {}
