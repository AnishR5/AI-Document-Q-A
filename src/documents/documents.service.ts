import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentEntity } from '../database/entities/document.entity';
import { OpenAIService } from '../openai/openai.service';
import { PineconeService } from '../pinecone/pinecone.service';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(DocumentEntity)
    private readonly documentRepo: Repository<DocumentEntity>,
    private readonly openaiService: OpenAIService,
    private readonly pineconeService: PineconeService,
  ) {}

  // TODO: Extract text → chunk → embed → upsert to Pinecone → save to DB
  async ingest(file: Express.Multer.File): Promise<{
    documentId: string;
    chunkCount: number;
    message: string;
  }> {
    throw new Error('Not implemented yet');
  }

  // TODO: Return all documents from DB
  async findAll(): Promise<DocumentEntity[]> {
    return this.documentRepo.find({ order: { createdAt: 'DESC' } });
  }

  // TODO: Delete document record from DB + vectors from Pinecone
  async remove(id: string): Promise<void> {
    const doc = await this.documentRepo.findOne({ where: { id } });
    if (!doc) {
      throw new NotFoundException(`Document ${id} not found`);
    }
    // TODO: await this.pineconeService.deleteNamespace(doc.pineconeNamespace);
    // TODO: await this.documentRepo.delete(id);
    throw new Error('Not implemented yet');
  }
}
