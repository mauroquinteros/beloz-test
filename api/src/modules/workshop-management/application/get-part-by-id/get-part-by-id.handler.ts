import { Inject, Injectable } from '@nestjs/common';
import { PartRepository } from '@workshop-management/domain/repositories/part.repository';

@Injectable()
export class GetPartByIdHandler {
  constructor(@Inject('PART_REPO') private readonly repo: PartRepository) {}

  async execute(partId: string) {
    try {
      const part = await this.repo.getById(partId);

      if (!part) {
        throw new Error('Part not found');
      }

      return { part };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
