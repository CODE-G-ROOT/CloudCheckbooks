# CloudCheckbooks - Simplifica tu contabilidad en la nube 📚💻

¡Bienvenidos a CloudCheckbooks! La solución definitiva para simplificar la administración de documentos y papeleo contable. Con CloudCheckbooks, podrás decir adiós a los talonarios físicos y llevar todo tu papeleo al mundo virtual de forma rápida y segura. 🎉

## ¿Qué es CloudCheckbooks? 🤔💡

CloudCheckbooks es una plataforma que te permite crear y almacenar tus "cuadernillos" o "libros" contables en la nube, sin necesidad de lidiar con documentos impresos. Olvídate de las firmas en papel, ahora podrás firmar y editar de manera virtual, ahorrando tiempo y recursos. 💻✏️

## Objetivos 🎯🚀

- Facilitar la gestión y almacenamiento de documentos contables de manera virtual.
- Eliminar el uso de papeleo y firmas en papel, ofreciendo opciones de firma y edición totalmente digitales.
- Ofrecer acceso remoto a los documentos desde cualquier lugar y en cualquier momento.
- Agilizar la emisión de facturas, recibos, órdenes de compra y cheques sin la necesidad de impresiones **(por ser la primera versión de este programa, solo estarán disponibles las opciones de facturas, recibos y cheques).**
- Generar archivos imprimibles para aquellos casos que lo requieran, manteniendo la flexibilidad y comodidad para el usuario. 🖨️

## Ventajas de CloudCheckbooks ✅🌟

- Acceso remoto a tus documentos desde cualquier lugar 🌐
- Firma y edición virtual, sin necesidad de papel ✏️🖱️
- Gestiona tu contabilidad de forma rápida y eficiente 📈
- Emitir facturas, recibos, órdenes de compra y cheques sin papeleo 📝🧾✅

# Mas info ℹ️

Este es un archivo README.md para proporcionar información adicional sobre la implementación del proyecto "CloudCheckbooks" en la nube ☁️. Aquí encontrarás detalles sobre las tecnologías utilizadas en el desarrollo del proyecto, las dependencias requeridas y otros temas relacionados con la contabilidad en línea. 📝💻

## Tecnologías utilizadas 🛠️

- **Node.js**: Para el desarrollo del backend y la creación de API REST.
- **Express.js**: Framework de Node.js para la creación de servidores web.
- **MySQL**: Base de datos relacional para almacenar los documentos contables de forma estructurada. 🗃️

## Dependencias utlizadas 📋🔍

- class-transformer
- class-validator
- dotenv
- express
- jose
- mysql2
- nodemon
- promise-mysql
- reflect-metadata
- typescript

## Proyección básica de la base de datos 📋🔍

![Diagrama de la base de datos](./assets/img/README/diagrama.png)

Definición de la construcción de la base de datos según la importancia de las tablas y las relaciones que tenían entre sí.

| TABLA       | DEFINICION                                                   |
| ----------- | ------------------------------------------------------------ |
| Usuario     | Un usuario puede tener muchos libros                         |
| Libros      | Un libro puede tener muchos talones                          |
| Talonario   | Puede tener solo uno de los 3 tipos de talón registrado      |
| Persona     | Una persona puede representar varios talones                 |
| Ubicacion   | Varias personas pueden estar ubicadas en el mismo lugar      |
| talon_tipo  | Factura, cheque o recibo de caja, cada uno puede pertenecer a muchos talones |
| Metodo_pago | Define la forma de pago y según su validación                |
| Pago        | Se define según la forma de pago                             |

# Manual de uso 📖🚀 

## Instalación 🛠️🚀

1. Clona este repositorio en tu computadora.

```bash
git clone https://github.com/JuanDavidAvilaRaveloCampus/CloudCheckbooks.git
```

2. Instala las dependencias necesarias para el frontend y el backend.

Para ello, primero debemos ubicarnos en la carpeta "backend" con el comando:

```bash
cd ./backend
```

3. Ahora, instalamos las dependencias:

```bash
npm update
```

4. Crea el archivo controllers con el siguiente comando:

```bash
npm run tsc
```

Luego procedemos a dar de baja el servicio con CTRL + C.

5. Configura las variables de entorno.

Crea un archivo `.env` en la carpeta "backend" y agrega las siguientes variables de entorno:

```bash
touch .env           
```

Dentro de ese archivo ingresar el siguiente script.

```json
SERVER_CONFIG={"hostname": "localhost", "port": 4001}
DB_CONFIG={"host":"localhost","database":"Talonarios","user":"AQUÍ_VA_TU_USUARIO","password":"AQUÍ_VA_TU_CONTRASEÑA_DE_MYSQL", "port": 3306}
JWT_PRIVATE_KEY = "Miguel, porfa, dejeme dormir hoy todo bien :')"
```

Ingresar tu usuario de la base de datos en **"AQUÍ_VA_TU_USUARIO"** y tu constraseña en **"AQUÍ__VA_TU_CONTRASEÑA_DE_MYSQL"**

Ahora puedes correr el servidor.

6. Inicia el servidor backend y la validación de TypeScript para correr el backend.

Dentro de la carpeta "backend", ejecuta el siguiente comando:

```bash
npm run dev
```

Crea una nueva terminal y ejecuta este otro comando:

```bash
npm run tsc
```

7. Accede a la ruta impresa en la terminal.

La aplicación estará disponible en `http://localhost:3000`.

Puedes acceder al directorio desde `http://localhost:3000/home`



### ⚠️ **ADVERTENCIA:** Para usar la API, primero debes obtener un token de verificación. 🔒🔑



### Herramientas para acceder a la API:

Por motivos prácticos utilizaremos las siguientes herramientas

- Visual Estudio Code

  ![Logotipo completo de Visual Studio Code PNG transparente - StickPNG](https://assets.stickpng.com/images/62a79050e42d729d928b1756.png)

- Thunder Client: Extención de visual estudio code

![image-20230727092917413](./assets/img/README/thunder.png)



### Pasos a tener en cuenta para generar el token:

1. Hacer una peticion a la URL proporcionada por el servidor, agregar el `/token/:id` , donde **:id** será cualquier valor numérico que le asignemos.

   Ejemplo:

   ```url
   http://localhost:3000/token/456
   ```

2. Una vez hecho esto, se generará un token:

   - Copiar el **token**

     ![image-20230727093302175](./assets/img/README/token.png)

3. Acceso:

   1. Crear un nuevo parámetro el cual será un **Header** cuyo nombre **extrictamente** y para el funcionamiento de la api será **Authorization** 

   2. Agregar como valor el token generado **(SIN COMMILLAS)**

   3. Hacer una peticion por metodo **GET** a la url que desea acceder, por ejemplo**/talonarios**

   4. Darle en send

      ![image-20230727093431933](./assets/img/README/parámetros.png)

      Listo, con esto ya tendrás tu **token** y sabrás usarlo :wink:

      


## ROUTES 🔍🛣️

Aquí encontrarás las rutas de acceso a diferentes secciones:

- Factura: http://localhost:3000/home/factura
- Libros: http://localhost:3000/home/libros
- Metodo_pago: http://localhost:3000/home/metodo_pago
- Pago: http://localhost:3000/home/pago
- Persona: http://localhost:3000/home/persona
- Recibo_caja: http://localhost:3000/home/recibo_caja
- Talonario: http://localhost:3000/home/talonario
- Ubicacion: http://localhost:3000/home/ubicacion
- Usuario: http://localhost:3000/home/usuario
- Fecha: http://localhost:3000/home/fecha
- Banco: http://localhost:3000/home/banco



## Contribuciones y Licencia 📝📄

¡Agradecemos tus contribuciones al proyecto! Si deseas colaborar, sigue los siguientes pasos:

1. Crea un nuevo "branch" para tus cambios.

```bash
git checkout -b mi-nueva-funcionalidad
```

2. Realiza tus modificaciones y mejoras.

3. Haz un "commit" de tus cambios.

```bash
git commit -m "Agrego nueva funcionalidad"
```

4. Envía tus cambios al repositorio remoto.

```bash
git push origin mi-nueva-funcionalidad
```

5. Abre un "Pull Request" en GitHub para que revisemos tus cambios.

Este proyecto se encuentra bajo la Licencia MIT. Siéntete libre de utilizar, modificar y distribuir el código según tus necesidades.

¡Gracias por contribuir al proyecto "CloudCheckbooks"! 🙌💰