import { Inject, Injectable } from '@nestjs/common';
import { PartRepository } from '@workshop-management/domain/repositories/part.repository';

@Injectable()
export class DeletePartHandler {
  constructor(@Inject('PART_REPO') private readonly repo: PartRepository) {}

  async execute(partId: string) {
    try {
      await this.repo.delete(partId);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
