import { Inject, Injectable } from '@nestjs/common';
import { Part } from '@workshop-management/domain/entities/part.entity';
import { PartRepository } from '@workshop-management/domain/repositories/part.repository';

interface UpdatePartArgs {
  readonly partId: string;
  readonly body: Partial<Part>;
}

@Injectable()
export class UpdatePartHandler {
  constructor(@Inject('PART_REPO') private readonly repo: PartRepository) {}

  async execute(data: UpdatePartArgs) {
    try {
      await this.repo.update(data.partId, data.body);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
