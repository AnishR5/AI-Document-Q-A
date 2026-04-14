import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import { PineconeService, QueryMatch } from '../pinecone/pinecone.service';
import { QueryDto } from './dto/query.dto';

export interface QueryResult {
  answer: string;
  sources: QueryMatch[];
}

@Injectable()
export class QueryService {
  constructor(
    private readonly openaiService: OpenAIService,
    private readonly pineconeService: PineconeService,
  ) {}

  // TODO: Embed question → search Pinecone → build prompt → call GPT → return answer + sources
  async query(dto: QueryDto): Promise<QueryResult> {
    throw new Error('Not implemented yet');
  }
}
