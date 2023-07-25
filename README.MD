# **Bienvenidos a CloudCheckbooks!** :money_with_wings: :cloud:

¡La solución definitiva para simplificar la administración de documentos y papeleo contable! :page_with_curl:

Con CloudCheckbooks, podrás decir adiós a los talonarios físicos y llevar todo tu papeleo al mundo virtual de forma rápida y segura. :tada:

## ¿Qué es CloudCheckbooks? :bulb:

CloudCheckbooks es una plataforma que te permite crear y almacenar tus "cuadernillos" o "libros" contables en la nube, sin necesidad de lidiar con documentos impresos. Olvídate de las firmas en papel, ahora podrás firmar y editar de manera virtual, ahorrando tiempo y recursos. :computer: :pencil2:

## Objetivos :dart:

- Facilitar la gestión y almacenamiento de documentos contables de manera virtual.
- Eliminar el uso de papeleo y firmas en papel, ofreciendo opciones de firma y edición totalmente digitales.
- Ofrecer acceso remoto a los documentos desde cualquier lugar y en cualquier momento.
- Agilizar la emisión de facturas, recibos, órdenes de compra y cheques sin la necesidad de impresiones **(por ser la primera versión de este programa, solo estarán disponibles las opciones de facturas, recibos y cheques).**
- Generar archivos imprimibles para aquellos casos que lo requieran, manteniendo la flexibilidad y comodidad para el usuario. :printer:

## Ventajas de CloudCheckbooks :white_check_mark:

- Acceso remoto a tus documentos desde cualquier lugar :globe_with_meridians:
- Firma y edición virtual, sin necesidad de papel :pencil: :computer_mouse:
- Gestiona tu contabilidad de forma rápida y eficiente :chart_with_upwards_trend:
- Emitir facturas, recibos, órdenes de compra y cheques sin papeleo :memo: :receipt: :heavy_check_mark:



<hr>
# **Mas info :information_source:**

Este es un archivo README.md para proporcionar información adicional sobre la implementación del proyecto "CloudCheckbooks" :cloud:. Aquí encontrarás detalles sobre las tecnologías utilizadas :computer:, las dependencias requeridas y otros temas relacionados al desarrollo del proyecto.

## Tecnologías utilizadas 🛠️

- **Node.js**: Para el desarrollo del backend y la creación de API REST.
- **Express.js**: Framework de Node.js para la creación de servidores web.
- **MySQL**: Base de datos relacional para almacenar los documentos contables de forma estructurada.



##  Proyección básica de la base de datos :memo:

![image-20230714151437987](https://github.com/JuanDavidAvilaRaveloCampus/Proyect_Talonarios/raw/main/assets/img/README/diagrama.png)

Definición de la construcción de la base de datos según la importancia de las tablas y las relaciones que tenían entre sí.

|    TABLA    | DEFINICION                                                   |
| :---------: | :----------------------------------------------------------- |
|   Usuario   | Un usuario puede tener muchos libros                         |
|   Libros    | Un libro, puede tener muchos talones                         |
|  Talonario  | Puede tener solo uno de los 3 tipos de talón registrado      |
|   Persona   | Una persona puede representar varios talones                 |
|  Ubicacion  | Varias peronsas pueden estar ubicadas en el mismo lugar      |
| talon_tipo  | Factura, cheque o recibo de caja, cada uno puede pertenecer a muchos talones |
| Metodo_pago | Define la forma de pago y según su validación                |
|    Pago     | Se Define según la forma de pago                             |



<hr>

# **Manual de uso** :orange_book: ( en construcción :construction: )

### :rotating_light: **ADVERTENCIA: ** Para usar la API, primero debes tener un tokes de verificacion! :closed_lock_with_key:

Pasos a tener en cuenta para generar el token: 

1. Hacer una peticion a la url dada por el servidor, el método debe ser get

   - **Method = GET**

2.  Registro: 

   - En los parámetros de la url, agregar el **/:id** y **/:nombre** como el siguiente ejemplo:

     ```bash
     https://127.121.12.16:5500/token/14/juanavila
     ```

3. Una vez hecho esto, necesitarás:

   1. Copiar el token
   2. Hacer una petición **Method = POST**



## ROUTES  :mag:







<hr>



## **Instalación :wrench:**

1. Clona este repositorio en tu computadora.

```bash
git clone https://github.com/JuanDavidAvilaRaveloCampus/Proyect_Talonarios.git
```

2. Instala las dependencias necesarias para el frontend y el backend.

```bash
npm i -E -D class-transformer class-validator dotenv mysql2 nodemon reflect-metadata typescript express jose
```

3. Configura las variables de entorno.

Crea un archivo `.env` en la carpeta "backend" y agrega las siguientes variables de entorno:

```json
SERVER_CONFIG={"hostname": "localhost", "port": 4001}
DB_CONFIG={"host":"localhost","database":"Talonarios","user":"AQUÍ_VA_TU_USUARIO","password":"AQUÍ_VA_TU_CONTRASEÑA_DE_MYSQL", "port": 3306}
JWT_PRIVATE_KEY = "Miguel, porfa, dejeme dormir hoy todo bien :')"
```

## Uso :rocket:

1. Inicia el servidor backend. (aún no implementado)

```bash
npm start
```

2. Inicia la aplicación frontend. (aún no implementado)

```bash
npm start
```

3. Accede a la aplicación en tu navegador web.

La aplicación estará disponible en `http://localhost:3000`.

## Contribuciones :memo: 

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

## Licencia :page_facing_up:

Este proyecto se encuentra bajo la Licencia MIT. Siéntete libre de utilizar, modificar y distribuir el código según tus necesidades.

¡Gracias por contribuir al proyecto "CloudCheckbooks"! :raised_hands: :moneybag: 
