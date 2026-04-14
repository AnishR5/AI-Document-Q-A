import { Injectable, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pinecone, Index } from '@pinecone-database/pinecone';

export interface VectorRecord {
  id: string;
  values: number[];
  metadata: {
    text: string;
    documentId: string;
    chunkIndex: number;
  };
}

export interface QueryMatch {
  id: string;
  score: number;
  metadata: {
    text: string;
    documentId: string;
    chunkIndex: number;
  };
}

@Injectable()
export class PineconeService implements OnModuleInit {
  private client: Pinecone;
  private index: Index;

  constructor(private readonly config: ConfigService) {}

  async onModuleInit() {
    this.client = new Pinecone({
      apiKey: this.config.getOrThrow<string>('PINECONE_API_KEY'),
    });

    const indexName = this.config.getOrThrow<string>('PINECONE_INDEX_NAME');
    this.index = this.client.index(indexName);
  }

  // TODO: Upsert vectors into a namespace
  async upsertVectors(
    namespace: string,
    vectors: VectorRecord[],
  ): Promise<void> {
    throw new InternalServerErrorException('Not implemented yet');
  }

  // TODO: Query top-k similar vectors from a namespace
  async querySimilar(
    namespace: string,
    queryVector: number[],
    topK: number,
  ): Promise<QueryMatch[]> {
    throw new InternalServerErrorException('Not implemented yet');
  }

  // TODO: Delete all vectors in a namespace (used when deleting a document)
  async deleteNamespace(namespace: string): Promise<void> {
    throw new InternalServerErrorException('Not implemented yet');
  }
}
