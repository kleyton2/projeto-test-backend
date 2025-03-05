import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProdutoModule } from './produto/produto.module';
import { Produto } from './produto/entities/produto.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module'; // Importe o UsersModule
import { User } from './users/entities/user.entity'; // Importe a entidade User

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST || 'mariadb',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'produtosdb',
      entities: [Produto, User], // Adicione a entidade User
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    ProdutoModule,
    AuthModule,
    UsersModule, // Adicione o UsersModule
  ],
})
export class AppModule {}