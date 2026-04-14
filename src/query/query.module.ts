import { Module } from '@nestjs/common';
import { QueryController } from './query.controller';
import { QueryService } from './query.service';
import { OpenAIModule } from '../openai/openai.module';
import { PineconeModule } from '../pinecone/pinecone.module';

@Module({
  imports: [OpenAIModule, PineconeModule],
  controllers: [QueryController],
  providers: [QueryService],
})
export class QueryModule {}
