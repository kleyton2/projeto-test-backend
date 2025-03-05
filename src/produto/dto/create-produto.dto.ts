import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

// Schema de validação com Zod
export const CreateProdutoSchema = z.object({
  codigo: z.string().min(1, 'Código é obrigatório'),
  nome: z.string().min(1, 'Nome é obrigatório'),
  codigo_barras: z.string().optional(),
  quantidade: z.number().min(0, 'Quantidade deve ser maior ou igual a 0'),
  preco: z.number().min(0, 'Preço deve ser maior ou igual a 0'),
});

// DTO com Zod
export class CreateProdutoDto {
  @ApiProperty({ example: '12345', description: 'Código único do produto' })
  codigo: string;

  @ApiProperty({ example: 'Produto Teste', description: 'Nome do produto' })
  nome: string;

  @ApiProperty({ example: '7891234567890', description: 'Código de barras do produto (opcional)', required: false })
  codigo_barras?: string;

  @ApiProperty({ example: 10.5, description: 'Quantidade disponível em estoque', type: Number })
  quantidade: number;

  @ApiProperty({ example: 99.99, description: 'Preço do produto', type: Number })
  preco: number;
}