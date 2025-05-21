import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth(): object {
    return {
      status: 'ok',
      message: 'Service is up and running',
    };
  }
}
