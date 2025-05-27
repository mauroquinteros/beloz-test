import { Inject, Injectable } from '@nestjs/common';
import { PartRepository } from '@workshop-management/domain/repositories/part.repository';
import { Repair } from '@workshop-management/domain/entities/repair.entity';
import { Part } from '@workshop-management/domain/entities/part.entity';
import { RepairRepository } from '@workshop-management/domain/repositories/repair.repository';

interface CreateRepairArgs {
  readonly name: string;
  readonly laborCost: number;
  readonly parts: string[];
  readonly description?: string;
}

@Injectable()
export class CreateRepairHandler {
  constructor(
    @Inject('PART_REPO') private readonly partRepo: PartRepository,
    @Inject('REPAIR_REPO') private readonly repairRepo: RepairRepository,
  ) {}

  async execute(data: CreateRepairArgs) {
    try {
      const parts: Part[] = [];

      for (const partId of data.parts) {
        const part = await this.partRepo.getById(partId);
        if (!part) {
          throw new Error('Provide a valid part');
        }
        parts.push(part);
      }

      const repair = Repair.create({
        name: data.name,
        laborCost: data.laborCost,
        parts,
        description: data.description,
      });
      await this.repairRepo.save(repair);

      return { repair };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
