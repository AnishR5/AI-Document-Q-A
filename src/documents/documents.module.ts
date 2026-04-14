import { Module } from '@nestjs/common';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
import { DatabaseModule } from '../database/database.module';
import { OpenAIModule } from '../openai/openai.module';
import { PineconeModule } from '../pinecone/pinecone.module';

@Module({
  imports: [DatabaseModule, OpenAIModule, PineconeModule],
  controllers: [DocumentsController],
  providers: [DocumentsService],
  exports: [DocumentsService],
})
export class DocumentsModule {}
