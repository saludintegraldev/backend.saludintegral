<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Salud Integral API

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Dev
### Clone project
```bash
# https 
$ https://github.com/saludintegraldev/backend.saludintegral.git
```

### Installation

```bash
# Dependencies Installation 
$ yarn install
```

### Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```

### Docker Image
```bash
## Build new multiplatform image and push to DockerHub
$ docker buildx build \
--platform linux/amd64,linux/arm64 \
-t milangrisano/salud-integral-backend:0.3.0 \
--push .
```

```bash
## Build & Run container image in local
docker container run \
-p 3000:3000 \
saludintegraldev/backend
```