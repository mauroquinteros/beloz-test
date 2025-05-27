import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Part } from '@workshop-management/domain/entities/part.entity';
import { PartRepository } from '@workshop-management/domain/repositories/part.repository';
import { PartEntity } from '../entities/part.entity';

@Injectable()
export class PartPostgresRepository implements PartRepository {
  constructor(
    @InjectRepository(PartEntity)
    private readonly repo: Repository<PartEntity>,
  ) {}

  async getById(id: string): Promise<Part | null> {
    const part = await this.repo.findOne({ where: { id } });
    if (!part) {
      return null;
    }
    return this.mapToDomain(part);
  }

  async getAll(): Promise<Part[] | null> {
    const parts = await this.repo.find();
    if (!parts) {
      return null;
    }
    return parts.map((part) => this.mapToDomain(part));
  }

  async save(part: Part): Promise<void> {
    const partDb = this.mapToDb(part);
    const newPart = this.repo.create(partDb);
    await this.repo.save(newPart);
  }

  async update(id: string, data: Partial<Part>): Promise<void> {
    const updateData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined),
    ) as Partial<PartEntity>;

    if (Object.keys(updateData).length === 0) {
      throw new Error('There is no data to update');
    }

    await this.repo.update({ id }, updateData);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  protected mapToDomain(entity: PartEntity): Part {
    return Part.create({
      id: entity.id,
      name: entity.name,
      currentStock: entity.currentStock,
      costPrice: entity.costPrice,
      description: entity.description,
    });
  }

  protected mapToDb(model: Part): PartEntity {
    const part = new PartEntity();
    part.id = model.id;
    part.name = model.name;
    part.currentStock = model.currentStock;
    part.costPrice = model.costPrice;
    part.description = model.description;
    return part;
  }
}
