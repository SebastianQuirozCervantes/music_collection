# Colección Musical
## Back-end
### Description
Este proyecto es para realizar servicios a consumir sobre una colección musical.

### Technologies
***
Principales Tecnologías usadas en el proyecto:
* [Node] Version 14 
* [Express] Version 4.18.1
* [Typeorm] Version 0.2.27
* [Babel]

### Installation
***
Cómo instalar el proyecto. 
PD: Antes de ejecutar los seeds es necesario configurar la base de datos local en el archivo /lib/infrastructure/config/env/dev que está en postgres
```
$ git clone https://github.com/SebastianQuirozCervantes/music_collection.git
$ npm install
$ npm run seed
$ npm run dev
```

### Deploy URL
https://musical-collection-sq.herokuapp.com/production

### Services
1. POST -> /auth/sign-in Loguearse. (SIN AUTENTICACIÓN)
2. GET -> /author/:id/songs Obtener canciones de un autor. (SIN AUTENTICACIÓN)
3. GET -> /songs Obtener canciones por nombre de autor o canción. (SIN AUTENTICACIÓN)
4. GET -> /collections/:id/songs Obtener canciones de una colección propia. (CON AUTENTICACIÓN)
5. POST -> /collection-song Agregar una canción en una colección (CON AUTENTICACIÓN)
6. PUT -> /songs/:id Actualizar una canción (CON AUTENTICACIÓN)

### Estructura del proyecto
1. Interfaces:
    - Rutas por donde se acceden a los servicios
    - Controladores para recibir peticiones y mandar repositorios a los casos de uso

2. Infraestructura: Está el core de la app
    - API: configuración básica del proyecto
    - config: configuración de ambientes (DB)
    - orm: Configuración de Typeorm, Entidades y Repositorios (Donde se hacen las consultas sql)
3. Application:
    - Casos de uso: Une los controladores con el repositorio