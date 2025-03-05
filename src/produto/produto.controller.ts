import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, UsePipes } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto, CreateProdutoSchema } from './dto/create-produto.dto';
import { ApiTags, ApiResponse, ApiParam, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';

@ApiTags('produtos')
@ApiBearerAuth() // Indica que a autenticação é necessária
@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @UseGuards(AuthGuard('jwt')) // Protege o endpoint com JWT
  @UsePipes(new ZodValidationPipe(CreateProdutoSchema)) // Valida os dados com Zod
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiBody({ type: CreateProdutoDto })
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de produtos retornada com sucesso.' })
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':codigo')
  @ApiParam({ name: 'codigo', description: 'Código do produto' })
  @ApiResponse({ status: 200, description: 'Produto retornado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado.' })
  findOne(@Param('codigo') codigo: string) {
    return this.produtoService.findOne(codigo);
  }

  @Put(':codigo')
  @UseGuards(AuthGuard('jwt')) // Protege o endpoint com JWT
  @UsePipes(new ZodValidationPipe(CreateProdutoSchema)) // Valida os dados com Zod
  @ApiParam({ name: 'codigo', description: 'Código do produto' })
  @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado.' })
  @ApiBody({ type: CreateProdutoDto })
  update(@Param('codigo') codigo: string, @Body() updateProdutoDto: CreateProdutoDto) {
    return this.produtoService.update(codigo, updateProdutoDto);
  }

  @Delete(':codigo')
  @UseGuards(AuthGuard('jwt')) // Protege o endpoint com JWT
  @ApiParam({ name: 'codigo', description: 'Código do produto' })
  @ApiResponse({ status: 200, description: 'Produto removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado.' })
  remove(@Param('codigo') codigo: string) {
    return this.produtoService.remove(codigo);
  }
}