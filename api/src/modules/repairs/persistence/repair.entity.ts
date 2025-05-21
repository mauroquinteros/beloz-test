import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { PartEntity } from './part.entity';

@Entity({ name: 'repairs' })
export class RepairEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  laborCost: number;

  @Column()
  totalPrice: number;

  @ManyToMany(() => PartEntity, (part) => part.repairs)
  @JoinTable({
    name: 'repair_parts',
    joinColumn: { name: 'repair_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'part_id', referencedColumnName: 'id' },
  })
  parts: PartEntity[];
}
