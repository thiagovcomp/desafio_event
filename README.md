# Desafio Tratamento de Eventos

Desafio aplicado para vaga de emprego. Realizado em NodeJs e banco de dados Mongo.

1) Realizar uma api coletora recebendo os parâmetros abaixo e um autocomplete para consumir os dados inseridos
  
{
"event": "buy",
"timestamp": "2016-09-22T13:57:31.2311892-04:00"
}

2) Receber uma lista de compras(Lojas e Produtos) e ordernar seus itens


## Instalação

git clone https://github.com/thiagovcomp/desafio_eventos.git

cd desafio_eventos/backend

yarn install

Banco de Dados *instalar docker*

docker run --name mongoditodesafio -p 27017:27017 -d -t mongo

Executar servidor Node

yarn dev


## Testes

1) Criando Evento
![create_event](https://user-images.githubusercontent.com/695109/61189589-0444bf00-a666-11e9-8c06-16c80af3ab44.jpg)

Auto complete
Acessar a pasta frontend e abrir o arquivo index.html no seu navegador
** Necessário executar todos os itens da instalação, inclusive executar o servidor *yarn dev 

2)
![order_event](https://user-images.githubusercontent.com/695109/61189627-7ddcad00-a666-11e9-9438-e0376327f59c.jpg)

## Licença

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Agradecimentos

* HocketSeat - Bootcamp
