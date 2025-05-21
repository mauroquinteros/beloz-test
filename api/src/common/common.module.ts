import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { OrmModule } from './orm/orm.module';
import { ValidationModule } from './validation/validation.module';

@Module({
  imports: [OrmModule, ValidationModule, HealthModule],
})
export class CommonModule {}
