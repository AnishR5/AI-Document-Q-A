import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentEntity } from './entities/document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentEntity])],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
