import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '@common/persistence/base.entity';
import { VehicleEntity } from './vehicle.entity';

@Entity({ name: 'customers' })
export class CustomerEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone?: number;

  @Column({ nullable: true })
  address?: string;

  @OneToMany(() => VehicleEntity, (vehicle) => vehicle.customer, {
    cascade: true,
    eager: false,
  })
  vehicles: VehicleEntity[];
}
