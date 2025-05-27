import { Inject, Injectable } from '@nestjs/common';
import { Part } from '@workshop-management/domain/entities/part.entity';
import { PartRepository } from '@workshop-management/domain/repositories/part.repository';

interface CreatePartArgs {
  readonly name: string;
  readonly currentStock: number;
  readonly costPrice: number;
  readonly description?: string;
}

@Injectable()
export class CreatePartHandler {
  constructor(@Inject('PART_REPO') private readonly repo: PartRepository) {}

  async execute(data: CreatePartArgs) {
    try {
      const part = Part.create({
        name: data.name,
        currentStock: data.currentStock,
        costPrice: data.costPrice,
        description: data.description,
      });

      await this.repo.save(part);
      return { part };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
