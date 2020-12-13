# Challenge Bexs

## Descrição
Esse é o teste técnico realizado para o processo seletivo da [Bexs](https://www.bexs.com.br/).

## Explicação arquitetural
* Optei pelo máximo de desacomplamento possível, para isso utilizei programação modular (com isso posso modificar módulos e isso não vai interferir no funcionamento final da aplicação, contanto que eu não quebre o contrato das classes implementadas).
* Dentro dos módulos, escolhi separar por controller, service, repository e um arquivo pras rotas.
  * Talvez soe repetitivo e algumas pessoas optariam por juntar controller e service, mas eu prefiro manter com a separação atual pois na service posso tratar de transformações nos objetos e executar as regras de negócio (por exemplo), enquanto na controller eu me preocupo apenas com a chamada http de fato.
  * Optei também por não juntar o arquivo de rotas com a controller pois assim acho que fica mais fácil desacopar, pois caso eu queira usar outro framework para servir http (como o [Fastify](https://www.fastify.io/) por exemplo), eu apenas preciso manter o contrato da função (parseando os tipos dos parâmetros passados para a função existente na controller).
* Decidi por não usar nenhum banco de dados ou sistema de cache pois isso iria apenas aumentar a complexidade da aplicação desnecessariamente. Caso isso se faça necessário, graças a programação modular e a forma que o código foi escrito implementar um banco de dados será muito fácil :)

## Como rodar o projeto?
* Renomeie o arquivo `example.env` para `.env`.
* Rode o comando `docker build . --build-arg ROUTE_PATH=input-routes.csv -t wricke/bexs_challenge` para gerar uma imagem do docker.
* Rode o comando `docker-compose up` para subir o container em tempo real.

### Como testar as rotas da aplicação?
Para realizar os testes, é necessário usar algum aplicativo que faça requisições. Eu recomendo fortemente o [Insomnia](https://insomnia.rest/) ou o [Postman](https://www.postman.com/) caso você prefira um app com interface. Caso faça mais o estilo "old school" e prefira usar o terminal, recomendo o [cURL](https://curl.se/).

### Como calcular a rota mais curta?

* Faça uma requisição get para a rota [http://localhost:3000/api/route/get?from={FROM}&to={TO}](http://localhost:3000/api/route/get?from=GRU&to=CDG).

### Como adicionar uma nova rota?

* Faça uma requisição post para a rota [http://localhost:3000/api/route/add](http://localhost:3000/api/route/add) e escreva um texto na requisição no modelo {FROM},{TO},{VALUE}

## Como rodar os testes
Nessa aplicação, foram escritos testes apenas para as funções essencias da aplicação, ou seja, não foram escritos testes para a camada de "interface" (contato externo) da aplicação, apenas para testar o funcionamento do algoritmo de dijkstra.

Para rodar esses testes, siga as instruções:
### Se já tiver buildado a imagem do docker
* Rode o comando `npm run test` e verá o resultado dos testes realizados.

### Se ainda não tiver buildado a imagem do docker, rode o comando
* Rode o comando `npm install` para instalar as dependências do projeto.
* Rode o comando `npm run test` para ver o resultado dos testes.

## Referências utilizadas:
* [Curso de Estrutura de Dados da UNIVESP](https://www.youtube.com/playlist?list=PLxI8Can9yAHf8k8LrUePyj0y3lLpigGcl)
* [Implementação do algoritmo de dijkstra](https://github.com/andrewhayward/dijkstra)
* [Explicação da implementação algoritmo de dijkstra](https://hackernoon.com/how-to-implement-dijkstras-algorithm-in-javascript-abdfd1702d04)
* [Algoritmo de dijkstra - on wikipedia](https://pt.wikipedia.org/wiki/Algoritmo_de_Dijkstra)


