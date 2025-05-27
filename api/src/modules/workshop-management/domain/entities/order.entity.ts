import {
  Customer,
  CustomerData,
} from '@customer-management/domain/entities/customer.entity';
import {
  Vehicle,
  VehicleData,
} from '@customer-management/domain/entities/vehicle.entity';
import { Repair, RepairData } from './repair.entity';
import { generateId } from '@common/utils/uuid-generator';

export enum OrderStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  COMPLETED = 'completed',
}

export interface OrderData {
  status: OrderStatus;
  customer: Customer;
  vehicle: Vehicle;
  repair: Repair;
  id?: string;
  totalPrice?: number;
  notes?: string;
}

export interface OrderObject {
  id: string;
  status: OrderStatus;
  totalPrice: number;
  customer: Customer;
  vehicle: Vehicle;
  repair: Repair;
  notes?: string;
}

export class Order {
  public readonly id: string;
  public readonly status: OrderStatus;
  public readonly totalPrice: number;
  public readonly customer: Customer;
  public readonly vehicle: Vehicle;
  public readonly repair: Repair;
  public readonly notes?: string;

  constructor(data: OrderObject) {
    this.id = data.id;
    this.status = data.status;
    this.totalPrice = data.totalPrice;
    this.customer = data.customer;
    this.vehicle = data.vehicle;
    this.repair = data.repair;
    this.notes = data.notes;
  }

  static create(data: OrderData): Order {
    const finalId = data.id ? data.id : generateId();

    return new Order({
      id: finalId,
      status: data.status,
      totalPrice: data.repair?.totalPrice || 0,
      customer: data.customer,
      vehicle: data.vehicle,
      repair: data.repair,
      notes: data.notes ? data.notes : undefined,
    });
  }
}
