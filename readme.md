# Docker com NodeJS

## docker ponpose

É um orquestrador do Docker

- Define como cada conteiner deve se comportar em nosssa aplicação

  ex: fazer aplicação subir, um banco PG subir, os dois se conectarem...

### Dockerfile

Define como nossa nossa aplicaçao vai _funcionar_ | como o servidor deve subir

| recurso   | função                                            |
| --------- | ------------------------------------------------- |
| `volumes` | Espelhar uma pasta local para dentro do container |

````yml
  version: "3" # versão do docker-compose

  services: # serviçõs da aplicação
    app: # nome da aplicação (?)
      build: . # qual a localização do Dockerfile | nome da imagem
      command: npm start # comando para executar assim que a aplicação subir
      ports: # definir o redirecionamento (de 3000 para 3000)
        - "3000:3000"
      volumes: # qual pasta que vai ser refletida as alterações (atual '.' para : usr/app)
        - .:/usr/app
```
````

| comando                                   | função                                      |
| ----------------------------------------- | ------------------------------------------- |
| `docker ps`                               | mostra o estado dos conteiners              |
| `docker rm (ID)`                          | remove um serviço referente ao ID           |
| `docker stop (ID)`                        | para de executar um serviço referente ao ID |
| `docker-compose up`                       | executa o compose                           |
| `docker build -t [image-name] .`          | cria a imagem do container na raiz (.)      |
| `docker run -p 3000:3000 -d [image-name]` | roda a imagem criada especificando a porta  |
