# ejecutar
npm run dev
# correc en cmd
mongod

# instalacion
npm init -y
npm i express
npm i nodemon -D
npm i morgan
npm install mongoose (valida los datos)

ENCRIPTAR UNA CONTRASEÑA Y GENERAN UN TOKEN
-creacion del token
npm i bcryptjs

-Dar un pase(token) (jwt)
npm i jsonwebtoken


CRUD
-defino las rutas
-creo las funciones que estan en controller.js
-estas funciones() las import en tasks.routes.js
-defino el modelo task
-import el modelo en task.controller.js

VALIDACIONES DE DATOS
-npm i zod (modulo)

CLIENTE
-npm create vite
-npm install -D tailwindcss postcss autoprefixer
-npx tailwindcss init -p
-npm i react-router-dom
-npm install react-hook-form

middlewares:si el usuario esta autenticado puede pasar si no no puede pasar

# Validaciones
https://www.npmjs.com/package/zod
 Con zod indicamos el tipo de dato
-npm i zod

En la carpeta schemas agregamos validaciones