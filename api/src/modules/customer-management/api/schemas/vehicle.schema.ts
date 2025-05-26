import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVehicleRequest {
  @IsString()
  readonly customerId: string;

  @IsString()
  readonly license: string;

  @IsString()
  readonly make: string;

  @IsNumber()
  @IsOptional()
  readonly year?: number;
}

export class UpdateVehicleRequest {
  @IsString()
  @IsOptional()
  readonly customerId?: string;

  @IsString()
  @IsOptional()
  readonly license?: string;

  @IsString()
  @IsOptional()
  readonly make?: string;

  @IsNumber()
  @IsOptional()
  readonly year?: number;
}
