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

## Proyección básica de la base de datos 📋🔍

![Diagrama de la base de datos](https://chat.openai.com/c/assets/img/README/diagrama.png)

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

## Manual de uso 📖🚀 ( en construcción 🔧👷‍♀️ )

### ⚠️ **ADVERTENCIA:** Para usar la API, primero debes obtener un token de verificación. 🔒🔑

Pasos a tener en cuenta para generar el token:

1. Hacer una petición a la URL proporcionada por el servidor, el método debe ser GET.

2. Registro: En los parámetros de la URL, agregar el `/:id` y `/:nombre` como en el siguiente ejemplo:

   ```bash
   https://127.121.12.16:5500/token/14/juanavila
   ```

3. Una vez hecho esto, necesitarás:

   - Copiar el token
   - Hacer una petición con método POST

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

## Instalación y uso 🛠️🚀

1. Clona este repositorio en tu computadora.

```bash
git clone https://github.com/JuanDavidAvilaRaveloCampus/CloudCheckbooks.git
```

1. Instala las dependencias necesarias para el frontend y el backend.

Para ello, primero debemos ubicarnos en la carpeta "backend" con el comando:

```bash
cd /backend
```

Ahora, instalamos las dependencias:

```bash
npm update
```

1. Configura las variables de entorno.

Crea un archivo `.env` en la carpeta "backend" y agrega las siguientes variables de entorno:

```
jsonCopy codeSERVER_CONFIG={"hostname": "localhost", "port": 4001}
DB_CONFIG={"host":"localhost","database":"Talonarios","user":"AQUÍ_VA_TU_USUARIO","password":"AQUÍ_VA_TU_CONTRASEÑA_DE_MYSQL", "port": 3306}
JWT_PRIVATE_KEY = "Miguel, porfa, dejeme dormir hoy todo bien :')"
```

1. Inicia el servidor backend y la validación de TypeScript para correr el backend.

Dentro de la carpeta "backend", ejecuta el siguiente comando:

```bash
npm run dev
```

Crea una nueva terminal y ejecuta este otro comando:

```bash
npm run tsc
```

1. Accede a la aplicación en tu navegador web.

La aplicación estará disponible en `http://localhost:3000/home`.

## Contribuciones y Licencia 📝📄

¡Agradecemos tus contribuciones al proyecto! Si deseas colaborar, sigue los siguientes pasos:

1. Crea un nuevo "branch" para tus cambios.

```bash
git checkout -b mi-nueva-funcionalidad
```

1. Realiza tus modificaciones y mejoras.
2. Haz un "commit" de tus cambios.

```
bashCopy code
git commit -m "Agrego nueva funcionalidad"
```

1. Envía tus cambios al repositorio remoto.

```
bashCopy code
git push origin mi-nueva-funcionalidad
```

1. Abre un "Pull Request" en GitHub para que revisemos tus cambios.

Este proyecto se encuentra bajo la Licencia MIT. Siéntete libre de utilizar, modificar y distribuir el código según tus necesidades.

¡Gracias por contribuir al proyecto "CloudCheckbooks"! 🙌💰