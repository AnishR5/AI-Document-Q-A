import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('documents')
export class DocumentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  filename: string;

  @Column({ name: 'original_name', type: 'varchar' })
  originalName: string;

  @Column({ name: 'chunk_count', type: 'int', default: 0 })
  chunkCount: number;

  @Column({ name: 'pinecone_namespace', type: 'varchar' })
  pineconeNamespace: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
