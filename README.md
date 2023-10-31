# Desafio Comprimir String - NeoPro

## Descrição
Neste projeto encontra-se o desafio proposto pela NeoPro.
Consiste em pegar fazer uma request para pegar um valor em string, e com isso comprimi-lá e depois descomprimir.
Realizando este processo 5 vezes

### Etapas
- Fazer uma request para [api neopro](https://api.neopro.com.br/v1/test/compact)
- A api irá retornar o seguinte objeto

```json
{ "string": "eeeeeeeeegggggggvvvvvvvuuuuuqqqq" }
```

- Comprimir a string retornada pela api e a porcentagem comprimida, em comparação com a string original, retornando o seguinte objeto

```json
{
  "compressedString": "9e7g7v5u4q",
  "percentage": 68
}
```

- Repita o processo 5 vezes, armazenando o objeto em um array
- Descomprimir a lista, retornando o valor original


### Instalar dependências
```bash
# Yarn
$ yarn install

# Npm
$ npm install
```

### Rodando o projeto
```bash
# Development
$ npm run start:dev

# Production
$ npm run start
```

### Testes
```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```