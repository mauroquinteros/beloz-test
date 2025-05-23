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
  description: string;

  @Column()
  currenStock: number;

  @Column()
  costPrice: number;

  @ManyToMany(() => RepairEntity, (repair) => repair.parts)
  repairs: RepairEntity[];
}
