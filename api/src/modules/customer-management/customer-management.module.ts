import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './persistence/entities/customer.entity';
import { VehicleEntity } from './persistence/entities/vehicle.entity';
import { CustomerController } from './api/controllers/customer.controller';
import { CustomerPostgresRepository } from './persistence/repositories/customer.repository';
import { GetCustomerByIdHandler } from './application/get-customer-by-id/get-customer-by-id.handler';
import { GetCustomersHandler } from './application/get-customers/get-customers.handler';
import { CreateCustomerHandler } from './application/create-customer/create-customer.handler';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, VehicleEntity])],
  controllers: [CustomerController],
  providers: [
    GetCustomerByIdHandler,
    GetCustomersHandler,
    CreateCustomerHandler,
    {
      provide: 'CUSTOMER_REPO',
      useClass: CustomerPostgresRepository,
    },
  ],
})
export class CustomerManagementModule {}
