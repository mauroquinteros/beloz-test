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
