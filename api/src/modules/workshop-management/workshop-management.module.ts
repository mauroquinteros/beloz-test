import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './persistence/entities/order.entity';
import { RepairEntity } from './persistence/entities/repair.entity';
import { PartEntity } from './persistence/entities/part.entity';
import { PartController } from './api/controllers/part.controller';
import { PartPostgresRepository } from './persistence/repositories/part.repository';
import { CreatePartHandler } from './application/create-part/create-part.handler';
import { GetPartByIdHandler } from './application/get-part-by-id/get-part-by-id.handler';
import { GetPartsHandler } from './application/get-parts/get-parts.handler';
import { UpdatePartHandler } from './application/update-part/update-part.handler';
import { DeletePartHandler } from './application/delete-part/delete-part.handler';
import { CreateRepairHandler } from './application/create-repair/create-repair.handler';
import { RepairController } from './api/controllers/repair.controller';
import { RepairPostgresRepository } from './persistence/repositories/repair.repository';
import { GetRepairByIdHandler } from './application/get-repair-by-id/get-repair-by-id.handler';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, RepairEntity, PartEntity])],
  controllers: [PartController, RepairController],
  providers: [
    GetPartByIdHandler,
    GetPartsHandler,
    CreatePartHandler,
    UpdatePartHandler,
    DeletePartHandler,
    GetRepairByIdHandler,
    CreateRepairHandler,
    {
      provide: 'PART_REPO',
      useClass: PartPostgresRepository,
    },
    {
      provide: 'REPAIR_REPO',
      useClass: RepairPostgresRepository,
    },
  ],
})
export class WorkshopManagementModule {}
