import { IsString, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class QueryDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsOptional()
  @IsUUID()
  documentId?: string;
}
