import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '@common/persistence/base.entity';

@Entity({ name: 'vehicles' })
export class VehicleEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  license: string;

  @Column()
  make: string;

  @Column({ nullable: true })
  year: number;
}
