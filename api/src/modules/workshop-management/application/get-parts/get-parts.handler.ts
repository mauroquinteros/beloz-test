import { Inject, Injectable } from '@nestjs/common';
import { PartRepository } from '@workshop-management/domain/repositories/part.repository';

@Injectable()
export class GetPartsHandler {
  constructor(@Inject('PART_REPO') private readonly repo: PartRepository) {}

  async execute() {
    try {
      const parts = await this.repo.getAll();
      return { parts };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
