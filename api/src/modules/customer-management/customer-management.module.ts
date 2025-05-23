import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './persistence/entities/customer.entity';
import { VehicleEntity } from './persistence/entities/vehicle.entity';
import { CustomerController } from './api/controllers/customer.controller';
import { CreateCustomerHandler } from './application/create-customer/create-customer.handler';
import { CustomerPostgresRepository } from './persistence/repositories/customer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, VehicleEntity])],
  controllers: [CustomerController],
  providers: [
    CreateCustomerHandler,
    {
      provide: 'CUSTOMER_REPO',
      useClass: CustomerPostgresRepository,
    },
  ],
})
export class CustomerManagementModule {}
