import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { OrderStatus } from '../domain/order';
import { CustomerEntity } from './customer.entity';
import { VehicleEntity } from './vehicle.entity';
import { RepairEntity } from './repair.entity';

@Entity({ name: 'orders' })
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: string;

  @Column()
  totalPrice: number;

  @Column()
  notes: string;

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
