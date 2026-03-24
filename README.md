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

### lampp
```Demarer lampp server : 
sudo systemctl stop apache2
sudo /opt/lampp/lampp start

```Arreter un serveur :
sudo /opt/lampp/lampp stop

```Verifier un serveur :
sudo /opt/lampp/lampp status

```

Ce mode monte le code source dans le conteneur et lance `nodemon`.

## API GATEWAY : 
http://localhost:2006/api/get-user

## API CLIENT : 
json-server ./db/db.json --port 3000

