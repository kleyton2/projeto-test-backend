import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'usuario@example.com', description: 'Email do usuário', required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ example: 'senha123', description: 'Senha do usuário', required: false })
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;
}