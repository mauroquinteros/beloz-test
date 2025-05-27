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

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, RepairEntity, PartEntity])],
  controllers: [PartController],
  providers: [
    GetPartByIdHandler,
    GetPartsHandler,
    CreatePartHandler,
    UpdatePartHandler,
    DeletePartHandler,
    {
      provide: 'PART_REPO',
      useClass: PartPostgresRepository,
    },
  ],
})
export class WorkshopManagementModule {}
