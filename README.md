### A continuacion agregaremos el readme no desesperen.


<h1 align="center">Crud-Products-Prisma.</h1>

## Stacks 🛠️
<hr>

- [Prisma](https://www.prisma.io/) - Construye aplicaciones impulsadas por datos, con una excelente experiencia de desarrollo (DX). Prisma ofrece la mejor experiencia para que tu equipo trabaje e interactúe con bases de datos. Incluso tareas complejas como agrupación de conexiones, caché y suscripciones en tiempo real a la base de datos son fáciles con nuestros productos. Construye tu aplicación, optimízala para que todo funcione sin problemas y crece junto a tus usuarios y requerimientos.
- [Express](https://expressjs.com/) - Express marco de aplicación web para Node.js que simplifica el desarrollo de aplicaciones. Proporciona una estructura y conjunto de herramientas flexibles para crear rápidamente servidores web y API. Express permite manejar rutas, solicitudes HTTP y respuestas de manera eficiente.
- [Zod](https://zod.dev/) - Zod es una biblioteca de validación de tipos en TypeScript que permite definir y validar estructuras de datos. Proporciona funciones para definir esquemas, realizar validaciones y generar mensajes de error personalizados. Zod ayuda a garantizar la integridad y consistencia de los datos dentro de una aplicación TypeScript.
- [Cors](https://www.npmjs.com/package/cors) - CORS(Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado en los navegadores web que controla las solicitudes de recursos entre diferentes dominios. Permite que un servidor especifique qué dominios tienen permiso para acceder a sus recursos, lo cual ayuda a prevenir ataques XSS y CSRF al restringir el acceso desde orígenes no autorizados. CORS se utiliza comúnmente en aplicaciones web para permitir la comunicación segura entre dominios diferentes.

- [Nodemon](https://www.npmjs.com/package/nodemon) - nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en Node.js al reiniciar automáticamente la aplicación de Node cuando se detectan cambios en los archivos del directorio.


## Empezar 🚀
<hr>

#### 1. Clona el este proyecto.
```bash
git clone https://github.com/gergg90/crud-prisma-mvc.git
```

#### 2. Crea un archivo `.env` en tu `main root` para tus variables de entorno.

- Dentro del arhivo `.env` establecemos una variable de entorno que sera invocada desde desde el modulo `prisma` archivo `schema.prisma`.

```javascript
DATABASE_URL="file:./dev.db"
```

#### 3. Instala dependencias en nodejs.
```bash
npm i
```

#### 4. Realiza las migraciones de prisma.
```bash
npx prisma migrate dev --name init
```
> Ya deberiamos nuestra base de datos echa con prisma.

#### 5. Levanta un servidor con un script de node que ejecuta la herramienta `nodemon`.
```bash
npm run dev
```
> nota: en el caso no querer ejecutar `nodemon` puede ejecutar el siguiente comando de `node` que permite reiniciar automaticamente la aplicacion.

```bash
node --watch .\src\app.js
```

#### 6. Ejecuta la api utilizando un `API testing tools`.

- Crea un objecto en post