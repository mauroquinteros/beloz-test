import { Module } from '@nestjs/common';
import { ConfigModuleOptions } from './config/config.module';
import { CommonModule } from './common/common.module';
import { CustomerManagementModule } from '@customer-management/customer-management.module';
import { WorkshopManagementModule } from '@workshop-management/workshop-management.module';

@Module({
  imports: [
    ConfigModuleOptions,
    CommonModule,
    CustomerManagementModule,
    WorkshopManagementModule,
  ],
})
export class AppModule {}
