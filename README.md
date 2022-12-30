# SERVERLESS DOCKER S3 TOOLING

Simple application to list all S3 Buckets in an AWS Profile.
This application has as goal integrate Docker, DockerCompose, Jest, LocalStack and Serverless Framework. 


  Developed by: <a href="https://www.github.com/gabrielAlonsoCabral">@GabrielAlonsoCabral</a>  
  <br/>

### Install

```
$ git clone https://github.com/GabrielAlonsoCabral/tooling.git
$ cd tooling
$ npm install
```


### Usage

```
$ npm docker-build:app
```


### Tests

```
$ npm docker-build:test
```


### Deployment

```
$ serverless deploy
```


### Invocation

After successful deployment, you can call the created application via HTTP:

```
$ curl http://${HOST}:3000
```
