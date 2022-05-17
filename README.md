# **Projeto Car Shop**

### **- PROJETO COM FOCO DE APRENDIZADO EM BACK-END**


### *_Resumo_*:

#### Uma aplicação de uma API Restful utilizando POO (Programação Orientada a Objetos), conceitos de SOLID e TDD (Desenvolvimento Dirigido por Testes).

#### Requisitos do projeto: 

#### 01 - Criar a interface ```Model``` genérica

###### A interface ```Model``` será usada para fazer a conexão com o banco de dados. Ela terá funções como ```create()```, ```read()```, ```readOne()```, ```update()``` e ```delete()```. Por ser genérica, a interface recebe um tipo ```T``` qualquer e deverá esperar, em cada função, as seguintes especificações:

###### - `create()`: Deve receber um objeto do tipo `T`e retornar uma Promise do tipo `T`.
###### - `read()`: Deve retornar uma Promise contendo um array de objetos do tipo `T`.
###### - `readOne()`: Deve receber uma string e retornar uma Promise do tipo `T` ou nula.
###### - `update()`: Deve receber uma string e um objeto do tipo `T` e retornar uma Promise do tipo `T` ou nula.
###### - `delete()`: Deve receber uma string e retornar uma Promise do tipo `T` ou nula.
###### - O arquivo deve ficar no diretório `/src/interfaces/` e  ter o nome de `ModelInterface.ts`.
###### - A interface deve ser exportada com o nome de `Model` e **não deve** ser exportada de forma padrão.

#### 02 - Criar a interface Vehicle genérica

###### A interface `Vehicle`, que será genérica, poderá ser usada para criar os tipos de veículo, como por exemplo carro, moto e caminhão. Deverá ter todos os atributos comuns de todos os veículos, que são:

###### - `model`: Marca e/ou modelo do veículo. Deve ser uma string com, pelo menos, 3 caracteres;
###### - `year`: Ano de fabricação do veículo. Deve ser maior ou igual a 1900, porém menor ou igual a 2022;
###### - `color`: Cor principal do veículo. Deve ser uma string com, pelo menos, 3 caracteres;
###### - `status`: Status que define se um veículo pode ou não ser comprado. Deve receber valores booleanos e deve ser opcional;
###### - `buyValue`: Valor de compra do veículo. Deve receber apenas números inteiros;
###### - O arquivo deve ficar no diretório `/src/interfaces/` e ter o nome de `VehicleInterface.ts`.

#### 03 - Criar a interface Car a partir da interface Vehicle

#### 04 - Criar uma rota para o endpoint /cars onde seja possível cadastrar um novo carro

#### 05 - Escrever testes para cobrir 15% da camada de model

#### 06 - Escrever testes para cobrir 15% da camada de service

#### 07 - Escrever testes para cobrir 15% da camada de controller

#### 08 - Criar uma rota para o endpoint /cars onde seja possível listar todos os carros registrados

#### 09 - Criar uma rota para o endpoint /cars/id onde seja possível listar um único carro através do seu id

#### 10 - Escrever testes para cobrir 30% da camada de model

#### 11 - Escrever testes para cobrir 30% da camada de service

#### 12 - Escrever testes para cobrir 30% da camada de controller

#### 13 - Crie uma rota para o endpoint /cars/id, onde é possível atualizar o registro de um carro através do seu id

#### 14 - Escrever testes para cobrir 60% da camada de model

#### 15 - Escrever testes para cobrir 60% da camada de service

#### 16 - Escrever testes para cobrir 60% da camada de controller

#### 17 - Crie uma rota para o endpoint /cars/id para excluir os registros de um carro
