import { generateId } from '@common/utils/uuid-generator';

export interface CustomerData {
  name: string;
  email: string;
  id?: string;
  phone?: number;
  address?: string;
}

export interface CustomerObject {
  id: string;
  name: string;
  email: string;
  phone?: number;
  address?: string;
}

export class Customer {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly phone?: number;
  public readonly address?: string;

  constructor(data: CustomerObject) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.address = data.address;
  }

  static create(data: CustomerData): Customer {
    const finalId = data.id ? data.id : generateId();
    return new Customer({
      id: finalId,
      name: data.name,
      email: data.email,
      phone: data.phone ? data.phone : undefined,
      address: data.address ? data.address : undefined,
    });
  }
}
