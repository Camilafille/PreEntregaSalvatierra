# VasoPosa
Bienvenidos a VasoPosa: Elegancia Tejida en Cada Posavasos
* En **VasoPosa**, transformamos el simple acto de proteger tus superficies en una expresión de arte y elegancia. Somos apasionados por la creación de posavasos únicos y encantadores, tejidos con la técnica meticulosa del "punching needle", que combina destreza artesanal con una estética inigualable. *


## Contenido
- Tecnologias usadas
- Instalacion necesaria
- Variables de entorno
- Video
- Proyecto


## Tecnologias usadas
- React
- React Vite
- Bootstrap
- Bootstrap Icons
- Firebase
- Toastify

## Instalacion necesaria
*Instalar las dependencias de Bootstrap:
$ npm i bootstrap*
*Para Firebase:
$ npm init
$ npm install --save firebase *

* Para Toastify:
$ npm install --save toastify *

* Para levantar el proyecto se usa los siguientes comandos:
npm install
npm run dev *

## Variables de entorno
Para el correcto funcionamiento, es necesario tener seteadas las variables de entorno en el archivo `.env`. Las variables son:

- `VITE_API_KEY`: la API key de Firebase.
- `VITE_AUTH_DOMAIN`: el dominio de autenticación de Firebase.
- `VITE_PROJECT_ID`: el ID del proyecto de Firebase.
- `VITE_STORAGE_BUCKET`: el bucket de almacenamiento de Firebase.
- `VITE_MESSAGING_SENDER_ID`: el ID del sender de Firebase.
- `VITE_APP_ID`: el ID de la aplicación de Firebase.

## Video
[VP.webm](https://github.com/Camilafille/PreEntregaSalvatierra/assets/93635030/9e740087-0c06-4d07-99b0-03428cb05749)


## Video

Proyecto final con fin educativo hecho en React. Ecommerce orientado a la venta de posavasos. En la página se puede ver un menu de navegacion que te muestra en primer lugar el INICIO en donde se encuentra la lista de todos los productos que se ofrecen, y luego te permite navegar de acuerdo a la categoria en la que pertenezca el posavaso. Se puede hacer click en el boton de ver más que te permitirá seleccionar la cantidad que prefieras del producto y luego agregarlo al carrito. Al hacer click en el widget del carrito, en el cual se puede ver el número de productos seleccionados, nos lleva a la seccion del carrito en la que se puede deseleccionar un producto, también seguir con la compra. Al finalizar la compra te dirige a un formulario en donde se generará la orden y te muestra el id de la compra generada. 
