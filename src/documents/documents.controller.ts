/// <reference types="multer" />
import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  UploadedFile,
  UseInterceptors,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  // POST /documents/upload
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() _file: Express.Multer.File) {
    // TODO: Validate file, call documentsService.ingest()
    return { message: 'Not implemented yet' };
  }

  // GET /documents
  @Get()
  async findAll() {
    // TODO: Call documentsService.findAll()
    return { message: 'Not implemented yet' };
  }

  // DELETE /documents/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) _id: string) {
    // TODO: Call documentsService.remove(id)
  }
}
