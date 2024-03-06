# ejecutar para frontend y backend
npm run dev
# correc en cmd
mongod

# Backend

### instalacion
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




### Validaciones
https://www.npmjs.com/package/zod
 Con zod indicamos el tipo de dato
-npm i zod
En la carpeta schemas agregamos validaciones

### cors
npm i cors

# Cliente

npm create vite (react y js)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Instalar react router: npm install react-router-dom
Instalar form: npm install react-hook-form
Instalar axios(engloba fecth): npm i axios
middlewares:si el usuario esta autenticado puede pasar si no no puede pasar
leer las cookies del front: npm i js-cookie 
npm install dayjs