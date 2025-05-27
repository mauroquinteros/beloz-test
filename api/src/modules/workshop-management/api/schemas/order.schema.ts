import { OrderStatus } from '@workshop-management/domain/entities/order.entity';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateOrderRequest {
  @IsString()
  customerId: string;

  @IsString()
  vehicleId: string;

  @IsString()
  repairId: string;

  @IsOptional()
  @IsString()
  @IsEnum(OrderStatus)
  status: OrderStatus = OrderStatus.PENDING;

  @IsOptional()
  @IsString()
  notes?: string;
}
