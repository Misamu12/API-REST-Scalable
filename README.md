# API-REST-Scalable

![api rest]()

## Docker

![docker]()

### Production

```sh
docker compose up --build -d
```

*L'API sera disponible sur* `http://localhost:2006`

### Developpement

```sh
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

## Lampp

#### Demarer lampp server : 

```sh
+ sudo systemctl stop apache2
+ sudo /opt/lampp/lampp start
```
---
#### Arreter un serveur :

```bash
+ sudo /opt/lampp/lampp stop
```
---
#### Verifier un serveur :

```bash
+ sudo /opt/lampp/lampp status
```

---
---

> **Ce mode monte le code source dans le conteneur et lance** `nodemon`.

## API GATEWAY : 
http://localhost:2006/api/get-user

## API CLIENT : 
`json-server --watch ./db/db.json --port 3000`


- Faire l'appelau back-end :

```js   

(async ()=>{
    try {
        const response = await fetch("http://127.0.0.1:2006/");
        const DATA = await response.json();

        document.body.innerHTML = DATA.nom
        console.log(DATA.nom)

        } catch (err) {
        console.log(err);
    }
}
})()
```


