import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePartRequest {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly currentStock: number;

  @IsNumber()
  readonly costPrice: number;

  @IsString()
  @IsOptional()
  readonly description?: string;
}

export class UpdatePartRequest {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsNumber()
  @IsOptional()
  readonly currentStock?: number;

  @IsNumber()
  @IsOptional()
  readonly costPrice?: number;

  @IsString()
  @IsOptional()
  readonly description?: string;
}
