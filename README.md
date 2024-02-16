### A continuacion agregaremos el readme no desesperen.


<h1 align="center">Crud-Products-Prisma.</h1>

Proyecto creado con arquitectura MVC (Modelo-Vista-Controlador) es un patrón de diseño ampliamente utilizado en el desarrollo de aplicaciones web y software en general. Se basa en la separación de responsabilidades para lograr un código más modular, fácil de mantener y escalab

## Stacks 🛠️
<hr>

- [Prisma](https://www.prisma.io/) - Construye aplicaciones impulsadas por datos, con una excelente experiencia de desarrollo (DX). Prisma ofrece la mejor experiencia para que tu equipo trabaje e interactúe con bases de datos. Incluso tareas complejas como agrupación de conexiones, caché y suscripciones en tiempo real a la base de datos son fáciles con nuestros productos. Construye tu aplicación, optimízala para que todo funcione sin problemas y crece junto a tus usuarios y requerimientos.
- [Express](https://expressjs.com/) - Express marco de aplicación web para Node.js que simplifica el desarrollo de aplicaciones. Proporciona una estructura y conjunto de herramientas flexibles para crear rápidamente servidores web y API. Express permite manejar rutas, solicitudes HTTP y respuestas de manera eficiente.
- [Zod](https://zod.dev/) - Zod es una biblioteca de validación de tipos en TypeScript que permite definir y validar estructuras de datos. Proporciona funciones para definir esquemas, realizar validaciones y generar mensajes de error personalizados. Zod ayuda a garantizar la integridad y consistencia de los datos dentro de una aplicación TypeScript.
- [Cors](https://www.npmjs.com/package/cors) - CORS(Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado en los navegadores web que controla las solicitudes de recursos entre diferentes dominios. Permite que un servidor especifique qué dominios tienen permiso para acceder a sus recursos, lo cual ayuda a prevenir ataques XSS y CSRF al restringir el acceso desde orígenes no autorizados. CORS se utiliza comúnmente en aplicaciones web para permitir la comunicación segura entre dominios diferentes.

- [Nodemon](https://www.npmjs.com/package/nodemon) - nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en Node.js al reiniciar automáticamente la aplicación de Node cuando se detectan cambios en los archivos del directorio.


<div align="left">
<img src="https://logowik.com/content/uploads/images/prisma2244.jpg" height="70" alt="prisma logo"  />
<img width="12" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="70" alt="nodejs logo"  />
<img width="12" />
<img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" height="70" alt="express logo"  />
<img width="12" />
<img src="https://seeklogo.com/images/Z/zod-logo-B57E684330-seeklogo.com.png" height="70" alt="zod logo"  />
<img width="12" />

</div>


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
Se levantara la aplicacion en el puerto http://localhost:4321
> nota: en el caso no querer ejecutar `nodemon` puede ejecutar el siguiente comando de `node` que permite reiniciar automaticamente la aplicacion.

```bash
node --watch .\src\app.js
```

#### 6. Ejecuta la api utilizando un `API testing tools`.
[postman](https://www.postman.com/), [insomnia](https://insomnia.rest/download), [thunderClient en vscode](https://www.thunderclient.com/)

> Es importante que se cree un category primero, ya que en el modelo products es requerido este campo para la creacion. Las validaciones se hicieron con `zod`.

##### Rutas:
Rutas categoria:

- `GET` `http://localhost:4321/category` - Listado de categorias.
- `GET` `http://localhost:4321/category/:id` - Listado por id.
- `POST` `http://localhost:4321/category` - Creacion de categoria enviado un `body.json`.
- `PATCH` `http://localhost:4321/category/:id` - Actualizar categoria.
- `DELETE` `http://localhost:4321/category/:id` - Eliminar categoria.

Rutas products:

- `GET` `http://localhost:4321/products` - Listado de productos.
- `GET` `http://localhost:4321/products/:id` - Listado por id.
- `POST` `http://localhost:4321/products` - Creacion de producto enviado un `body.json`.
- `PATCH` `http://localhost:4321/products/:id` - Actualizar producto.
- `DELETE` `http://localhost:4321/products/:id` - Eliminar producto.