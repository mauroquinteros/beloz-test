import { Module } from '@nestjs/common';
import { ConfigModuleOptions } from './config/config.module';
import { CommonModule } from './common/common.module';
import { RepairsModule } from './modules/repairs/repairs.module';

@Module({
  imports: [ConfigModuleOptions, CommonModule, RepairsModule],
})
export class AppModule {}
