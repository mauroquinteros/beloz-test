import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRepairHandler } from '@workshop-management/application/create-repair/create-repair.handler';
import { CreateRepairRequest } from '../schemas/repair.schema';
import { GetRepairByIdHandler } from '@workshop-management/application/get-repair-by-id/get-repair-by-id.handler';

@Controller({ path: 'repairs' })
export class RepairController {
  constructor(
    private readonly createRepairHandler: CreateRepairHandler,
    private readonly getRepairByIdHandler: GetRepairByIdHandler,
  ) {}

  @Post('')
  async createPart(@Body() body: CreateRepairRequest) {
    try {
      const response = await this.createRepairHandler.execute(body);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/:repairId')
  async getRepairById(@Param() params: { repairId: string }) {
    try {
      const response = await this.getRepairByIdHandler.execute(params.repairId);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('')
  async getParts() {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('/:partId')
  async updatePart(
    @Param() params: { partId: string },
    // @Body() body: UpdatePartRequest,
  ) {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/:partId')
  async deletePart(@Param() params: { partId: string }) {
    try {
      //
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
