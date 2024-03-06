# Stack MERN
### Ejecutar front-end y back-end
npm run dev

# Correr en cmd
- mongod

# Backend

### comandos

- npm init -y
- npm i express
- npm i nodemon -D
- npm i morgan
- npm install mongoose (validar los datos)

### ENCRIPTAR UNA CONTRASEÑA Y GENERAN UN TOKEN
- npm i bcryptjs
- npm i jsonwebtoken


### CRUD
1. Defino las rutas
2. creo las funciones que estan en controller.js
3. Estas funciones() las import en tasks.routes.js
4. Defino el modelo task
5.import el modelo en task.controller.js

### VALIDACIONES DE DATOS
https://www.npmjs.com/package/zod
- npm i zod (modulo)
 Con zod indicamos el tipo de dato, en la carpeta schemas agregamos validaciones

### CORS
- npm i cors

# Cliente

- npm create vite (react y js)
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- npm install react-router-dom
- npm install react-hook-form
- Instalar axios(engloba fecth): npm i axios
- npm i js-cookie (leer las cookies del front)
- npm install dayjs (fechas)