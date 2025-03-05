import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const produto = this.produtoRepository.create(createProdutoDto);
    return this.produtoRepository.save(produto);
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async findOne(codigo: string): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({ where: { codigo } });
    if (!produto) {
      throw new NotFoundException(`Produto com código ${codigo} não encontrado.`);
    }
    return produto;
  }

  async update(codigo: string, updateProdutoDto: CreateProdutoDto): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({ where: { codigo } });
    if (!produto) {
      throw new NotFoundException(`Produto com código ${codigo} não encontrado.`);
    }
    Object.assign(produto, updateProdutoDto);
    return this.produtoRepository.save(produto);
  }

  async remove(codigo: string): Promise<void> {
    const result = await this.produtoRepository.delete(codigo);
    if (result.affected === 0) {
      throw new NotFoundException(`Produto com código ${codigo} não encontrado.`);
    }
  }
}