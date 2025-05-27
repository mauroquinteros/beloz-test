import { Repair } from '../entities/repair.entity';

export interface RepairRepository {
  getById(id: string): Promise<Repair | null>;
  getAll(): Promise<Repair[] | null>;
  save(repair: Repair): Promise<void>;
  update(id: string, data: Partial<Repair>): Promise<void>;
  delete(id: string): Promise<void>;
}
