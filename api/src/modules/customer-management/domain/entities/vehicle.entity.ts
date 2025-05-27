import { generateId } from '@common/utils/uuid-generator';
import { Customer, CustomerData } from './customer.entity';

export interface VehicleData {
  license: string;
  make: string;
  customer?: CustomerData;
  id?: string;
  year?: number;
}

export interface VehicleObject {
  id: string;
  license: string;
  make: string;
  customer?: Customer;
  year?: number;
}

export class Vehicle {
  public readonly id: string;
  public readonly license: string;
  public readonly make: string;
  public readonly customer?: Customer;
  public readonly year?: number;

  constructor(data: VehicleObject) {
    this.id = data.id;
    this.license = data.license;
    this.make = data.make;
    this.customer = data.customer;
    this.year = data.year;
  }

  static create(data: VehicleData): Vehicle {
    const finalId = data.id ? data.id : generateId();
    const customer = data.customer ? Customer.create(data.customer) : undefined;
    return new Vehicle({
      id: finalId,
      license: data.license,
      make: data.make,
      customer,
      year: data.year ? data.year : undefined,
    });
  }
}
