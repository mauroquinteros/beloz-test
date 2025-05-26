import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './persistence/entities/customer.entity';
import { VehicleEntity } from './persistence/entities/vehicle.entity';
import { CustomerController } from './api/controllers/customer.controller';
import { VehicleController } from './api/controllers/vehicle.controller';
import { CustomerPostgresRepository } from './persistence/repositories/customer.repository';
import { VehiclePostgresRepositoryy } from './persistence/repositories/vehicle.repository';
import { GetCustomerByIdHandler } from './application/get-customer-by-id/get-customer-by-id.handler';
import { GetCustomersHandler } from './application/get-customers/get-customers.handler';
import { CreateCustomerHandler } from './application/create-customer/create-customer.handler';
import { UpdateCustomerHandler } from './application/update-customer/update-customer.handler';
import { DeleteCustomerHandler } from './application/delete-customer/delete-customer.handler';
import { CreateVehicleHandler } from './application/create-vehicle/create-vehicle.handler';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, VehicleEntity])],
  controllers: [CustomerController, VehicleController],
  providers: [
    GetCustomerByIdHandler,
    GetCustomersHandler,
    CreateCustomerHandler,
    UpdateCustomerHandler,
    DeleteCustomerHandler,
    CreateVehicleHandler,
    {
      provide: 'CUSTOMER_REPO',
      useClass: CustomerPostgresRepository,
    },
    {
      provide: 'VEHICLE_REPO',
      useClass: VehiclePostgresRepositoryy,
    },
  ],
})
export class CustomerManagementModule {}
