import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeCaseNamingStrategy } from './snake-case-naming-strategy';

export const OrmModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'postgres',
    host: config.get('database.host'),
    port: config.get('database.port'),
    username: config.get('database.user'),
    password: config.get('database.password'),
    database: config.get('database.name'),
    synchronize: config.get('database.synchronize'),
    namingStrategy: new SnakeCaseNamingStrategy(),
    autoLoadEntities: true,
    ssl:
      config.get('environment') === 'development' ||
      config.get('environment') === 'test'
        ? false
        : { rejectUnauthorized: false },
  }),
});
