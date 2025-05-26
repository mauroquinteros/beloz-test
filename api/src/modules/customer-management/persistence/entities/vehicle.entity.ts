import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '@common/persistence/base.entity';
import { CustomerEntity } from './customer.entity';

@Entity({ name: 'vehicles' })
export class VehicleEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  license: string;

  @Column()
  make: string;

  @Column({ nullable: true })
  year?: number;

  @ManyToOne(() => CustomerEntity, (customer) => customer.vehicles, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;
}
