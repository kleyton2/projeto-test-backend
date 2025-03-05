import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      return this.schema.parse(value); // Valida os dados com o Zod
    } catch (error) {
      throw new BadRequestException('Validação falhou', error.errors);
    }
  }
}