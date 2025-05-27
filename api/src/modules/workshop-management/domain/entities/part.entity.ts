import { generateId } from '@common/utils/uuid-generator';

export interface PartData {
  name: string;
  currentStock: number;
  costPrice: number;
  id?: string;
  description?: string;
}

export interface PartObject {
  id: string;
  name: string;
  currentStock: number;
  costPrice: number;
  description?: string;
}

export class Part {
  public readonly id: string;
  public readonly name: string;
  public readonly currentStock: number;
  public readonly costPrice: number;
  public readonly description?: string;

  constructor(data: PartObject) {
    this.id = data.id;
    this.name = data.name;
    this.currentStock = data.currentStock;
    this.costPrice = data.costPrice;
    this.description = data.description;
  }

  static create(data: PartData) {
    const finalId = data.id ? data.id : generateId();
    return new Part({
      id: finalId,
      name: data.name,
      currentStock: data.currentStock,
      costPrice: data.costPrice,
      description: data.description ? data.description : undefined,
    });
  }
}
