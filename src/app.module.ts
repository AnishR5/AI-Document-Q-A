import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsModule } from './documents/documents.module';
import { QueryModule } from './query/query.module';
import { PineconeModule } from './pinecone/pinecone.module';
import { OpenAIModule } from './openai/openai.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { DocumentEntity } from './database/entities/document.entity';

@Module({
  imports: [
    // Global config — loads .env automatically
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // TypeORM connection using DATABASE_URL from env
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get<string>('DATABASE_URL'),
        entities: [DocumentEntity],
        synchronize: config.get<string>('NODE_ENV') !== 'production',
        logging: config.get<string>('NODE_ENV') === 'development',
      }),
    }),

    // Feature modules
    DatabaseModule,
    AuthModule,
    OpenAIModule,
    PineconeModule,
    DocumentsModule,
    QueryModule,
  ],
})
export class AppModule {}
