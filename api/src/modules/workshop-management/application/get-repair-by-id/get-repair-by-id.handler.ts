import { Inject, Injectable } from '@nestjs/common';
import { RepairRepository } from '@workshop-management/domain/repositories/repair.repository';

@Injectable()
export class GetRepairByIdHandler {
  constructor(@Inject('REPAIR_REPO') private readonly repo: RepairRepository) {}

  async execute(repairId: string) {
    try {
      const repair = await this.repo.getById(repairId);

      if (!repair) {
        throw new Error('Repair not found');
      }

      return { repair };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
