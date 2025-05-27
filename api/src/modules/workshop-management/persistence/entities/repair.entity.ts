import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '@common/persistence/base.entity';
import { PartEntity } from './part.entity';

@Entity({ name: 'repairs' })
export class RepairEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  laborCost: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ nullable: true })
  description?: string;

  @ManyToMany(() => PartEntity, (part) => part.repairs)
  @JoinTable({
    name: 'repair_parts',
    joinColumn: { name: 'repair_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'part_id', referencedColumnName: 'id' },
  })
  parts: PartEntity[];
}
