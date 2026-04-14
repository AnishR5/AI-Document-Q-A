import { Injectable, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService implements OnModuleInit {
  private client: OpenAI;

  constructor(private readonly config: ConfigService) {}

  onModuleInit() {
    this.client = new OpenAI({
      apiKey: this.config.getOrThrow<string>('OPENAI_API_KEY'),
    });
  }

  // TODO: Implement embedding generation (text-embedding-3-small)
  async createEmbedding(text: string): Promise<number[]> {
    throw new InternalServerErrorException('Not implemented yet');
  }

  // TODO: Implement chat completion (gpt-4o-mini)
  async createChatCompletion(
    systemPrompt: string,
    userMessage: string,
  ): Promise<string> {
    throw new InternalServerErrorException('Not implemented yet');
  }
}
