import { generateId } from '@common/utils/uuid-generator';
import { Part, PartData } from './part.entity';

export interface RepairData {
  name: string;
  laborCost: number;
  parts: PartData[];
  id?: string;
  totalPrice?: number;
  description?: string;
}

export interface RepairObject {
  id: string;
  name: string;
  laborCost: number;
  totalPrice: number;
  parts: Part[];
  description?: string;
}

export class Repair {
  public readonly id: string;
  public readonly name: string;
  public readonly laborCost: number;
  public readonly totalPrice: number;
  public readonly parts: Part[];
  public readonly description?: string;

  constructor(data: RepairObject) {
    this.id = data.id;
    this.name = data.name;
    this.laborCost = data.laborCost;
    this.totalPrice = data.totalPrice;
    this.parts = data.parts;
    this.description = data.description;
  }

  static create(data: RepairData): Repair {
    const finalId = data.id ? data.id : generateId();

    if (data.parts.length < 0) {
      throw new Error('Repair needs at least one part');
    }

    const parts = data.parts.map((part) =>
      Part.create({
        id: part.id,
        name: part.name,
        currentStock: part.currentStock,
        costPrice: part.costPrice,
        description: data.description,
      }),
    );

    let finalTotalPrice = data.totalPrice ? data.totalPrice : 0;

    if (!data.totalPrice) {
      const totalPartsPrice = parts.reduce(
        (acc, part) => Number(part.costPrice) + acc,
        0,
      );
      const totalPrice = data.laborCost + totalPartsPrice;
      finalTotalPrice = totalPrice;
    }

    return new Repair({
      id: finalId,
      name: data.name,
      laborCost: data.laborCost,
      totalPrice: finalTotalPrice,
      parts,
      description: data.description ? data.description : undefined,
    });
  }
}
