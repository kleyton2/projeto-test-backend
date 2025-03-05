# Estágio 1: Build da aplicação
FROM node:18 AS build

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código-fonte
COPY . .

# Compila a aplicação
RUN npm run build

# Estágio 2: Execução da aplicação
FROM node:18

WORKDIR /app

# Copia apenas os arquivos necessários do estágio de build
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação em produção
CMD ["npm", "run", "start:prod"]