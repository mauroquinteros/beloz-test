import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '@common/persistence/base.entity';
import { CustomerEntity } from '@customer-management/persistence/entities/customer.entity';
import { VehicleEntity } from '@customer-management/persistence/entities/vehicle.entity';
import { OrderStatus } from '@workshop-management/domain/entities/order.entity';
import { RepairEntity } from './repair.entity';

@Entity({ name: 'orders' })
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ nullable: true })
  notes?: string;

  @ManyToOne(() => CustomerEntity, { nullable: false })
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @ManyToOne(() => VehicleEntity, { nullable: false })
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: VehicleEntity;

  @ManyToOne(() => RepairEntity, { nullable: false })
  @JoinColumn({ name: 'repair_id' })
  repair: RepairEntity;
}
