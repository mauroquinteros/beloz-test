import { ArrayNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRepairRequest {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly laborCost: number;

  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly parts: string[];

  @IsString()
  @IsOptional()
  readonly description?: string;
}
