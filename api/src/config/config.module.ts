import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { configuration } from './configuration';

export const ConfigModuleOptions = ConfigModule.forRoot({
  isGlobal: true,
  cache: true,
  load: [configuration],
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'test', 'production')
      .default('development'),
    SERVER_PORT: Joi.number().default(3000),
    DB_HOST: Joi.string().default('localhost'),
    DB_PORT: Joi.number().default(5432),
    DB_NAME: Joi.string().required(),
    DB_USER: Joi.string().default('postgres'),
    DB_PASSWORD: Joi.string().default('postgres'),
  }),
});
