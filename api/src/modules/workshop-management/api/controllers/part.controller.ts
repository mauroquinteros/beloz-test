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
import { CreatePartRequest, UpdatePartRequest } from '../schemas/part.schema';
import { CreatePartHandler } from '@workshop-management/application/create-part/create-part.handler';
import { GetPartByIdHandler } from '@workshop-management/application/get-part-by-id/get-part-by-id.handler';
import { GetPartsHandler } from '@workshop-management/application/get-parts/get-parts.handler';
import { UpdatePartHandler } from '@workshop-management/application/update-part/update-part.handler';
import { DeletePartHandler } from '@workshop-management/application/delete-part/delete-part.handler';

@Controller({ path: 'parts' })
export class PartController {
  constructor(
    private readonly createPartHandler: CreatePartHandler,
    private readonly getPartByIdHandler: GetPartByIdHandler,
    private readonly getPartsHandler: GetPartsHandler,
    private readonly updatePartHandler: UpdatePartHandler,
    private readonly deletePartHandler: DeletePartHandler,
  ) {}

  @Post('')
  async createPart(@Body() body: CreatePartRequest) {
    try {
      const response = await this.createPartHandler.execute(body);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/:partId')
  async getPartById(@Param() params: { partId: string }) {
    try {
      const response = await this.getPartByIdHandler.execute(params.partId);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('')
  async getParts() {
    try {
      const response = await this.getPartsHandler.execute();
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('/:partId')
  async updatePart(
    @Param() params: { partId: string },
    @Body() body: UpdatePartRequest,
  ) {
    try {
      const response = await this.updatePartHandler.execute({
        partId: params.partId,
        body,
      });
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/:partId')
  async deletePart(@Param() params: { partId: string }) {
    try {
      const response = await this.deletePartHandler.execute(params.partId);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
