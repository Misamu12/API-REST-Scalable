# API-REST-Scalable

## Docker

### Production

```bash
docker compose up --build -d
```

L'API sera disponible sur `http://localhost:2006`.

### Developpement

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

Ce mode monte le code source dans le conteneur et lance `nodemon`.
