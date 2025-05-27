import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '@common/persistence/base.entity';
import { RepairEntity } from './repair.entity';

@Entity({ name: 'parts' })
export class PartEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  currentStock: number;

  @Column('decimal', { precision: 10, scale: 2 })
  costPrice: number;

  @Column({ nullable: true })
  description?: string;

  @ManyToMany(() => RepairEntity, (repair) => repair.parts)
  repairs: RepairEntity[];
}
