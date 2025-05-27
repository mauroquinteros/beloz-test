import { Part } from '../entities/part.entity';

export interface PartRepository {
  getById(id: string): Promise<Part | null>;
  getAll(): Promise<Part[] | null>;
  save(part: Part): Promise<void>;
  update(id: string, data: Partial<Part>): Promise<void>;
  delete(id: string): Promise<void>;
}
