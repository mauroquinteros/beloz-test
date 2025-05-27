import { InjectRepository } from '@nestjs/typeorm';
import { Repair } from '@workshop-management/domain/entities/repair.entity';
import { RepairRepository } from '@workshop-management/domain/repositories/repair.repository';
import { RepairEntity } from '../entities/repair.entity';
import { Repository } from 'typeorm';
import { PartEntity } from '../entities/part.entity';
import { Part } from '@workshop-management/domain/entities/part.entity';

export class RepairPostgresRepository implements RepairRepository {
  constructor(
    @InjectRepository(RepairEntity)
    private readonly repo: Repository<RepairEntity>,
  ) {}

  async getById(id: string): Promise<Repair | null> {
    const repair = await this.repo.findOne({
      where: { id },
      relations: ['parts'],
    });
    if (!repair) {
      return null;
    }
    return this.mapToDomain(repair);
  }

  getAll(): Promise<Repair[] | null> {
    throw new Error('Method not implemented.');
  }

  async save(repair: Repair): Promise<void> {
    const partDb = this.mapToDb(repair);
    const newPart = this.repo.create(partDb);
    await this.repo.save(newPart);
  }

  update(id: string, data: Partial<Repair>): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  protected mapToDb(model: Repair): RepairEntity {
    const repair = new RepairEntity();
    repair.id = model.id;
    repair.name = model.name;
    repair.laborCost = model.laborCost;
    repair.totalPrice = model.totalPrice;

    if (model.parts.length > 0) {
      const parts = model.parts.map((part) => {
        const partDb = new PartEntity();
        partDb.id = part.id;
        partDb.name = part.name;
        partDb.currentStock = part.currentStock;
        partDb.costPrice = part.costPrice;
        partDb.description = part.description;

        return partDb;
      });
      repair.parts = parts;
    }

    return repair;
  }

  protected mapToDomain(entity: RepairEntity): Repair {
    const parts = entity.parts.map((part) =>
      Part.create({
        id: part.id,
        name: part.name,
        currentStock: part.currentStock,
        costPrice: part.costPrice,
        description: part.description,
      }),
    );

    return Repair.create({
      id: entity.id,
      name: entity.name,
      laborCost: entity.laborCost,
      totalPrice: entity.totalPrice,
      parts,
    });
  }
}
