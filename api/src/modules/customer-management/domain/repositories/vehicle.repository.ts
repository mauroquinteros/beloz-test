import { Vehicle } from '../entities/vehicle.entity';

export interface VehicleRepository {
  getById(id: string): Promise<Vehicle | null>;
  getAll(): Promise<Vehicle[] | null>;
  save(vehicle: Vehicle): Promise<void>;
  update(id: string, data: Partial<Vehicle>): Promise<void>;
  delete(id: string): Promise<void>;
}
