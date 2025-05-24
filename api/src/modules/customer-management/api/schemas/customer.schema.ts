import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCustomerRequest {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNumber()
  @IsOptional()
  readonly phone?: number;

  @IsString()
  @IsOptional()
  readonly address?: string;
}

export class UpdateCustomerRequest {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @IsNumber()
  @IsOptional()
  readonly phone?: number;

  @IsString()
  @IsOptional()
  readonly address?: string;
}
