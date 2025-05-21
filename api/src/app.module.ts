import { Module } from '@nestjs/common';
import { ConfigModuleOptions } from './config/config.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ConfigModuleOptions, CommonModule],
})
export class AppModule {}
