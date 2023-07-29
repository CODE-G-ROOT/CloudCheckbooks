# MongoDB :leaves:

MongoDB es un gestor de bases de datos no relacionales o **NoSQL** orientado a documentos, utilizado para almacenar volúmenes masivos de datos. A diferencia de las bases de datos tradicionales basadas en SQL, MongoDB no se basa en tablas y columnas. 📚🌐

## Manual de instalación 🛠️

A continuación, se presenta un breve manual de instalación de MongoDB:

1. **Descargar MongoDB:** Ve al sitio web oficial de [MongoDB](https://www.mongodb.com/docs/manual/installation/) y descarga la versión adecuada para tu sistema operativo. 📥💻. Ten en cuenta que las versiones oficiales (**Enterprise Edition**) son versiones que tienen soporte técnico proporcionado por el equipo de MongoDB y otras características, sin embargo es de pago. La otra opción es la versión de la comunidad (**Community Edition**), que son versiones de código abierto con características y funcionalidades básicas, pero no ofrecen un soporte oficial por parte de MongoDB, aunque la comunidad puede brindar ayuda.

2. **Instalar MongoDB:** Sigue las instrucciones de instalación proporcionadas en el sitio web para instalar MongoDB en tu sistema. 🔧🚀

3. **Configurar MongoDB:** Una vez instalado, es posible que debas configurar ciertos parámetros, como la ruta de almacenamiento de datos o el puerto de escucha. Puedes encontrar información detallada sobre la configuración en la documentación oficial de MongoDB. 📄⚙️

4. **Iniciar el servidor:** Para iniciar el servidor de MongoDB, abre una terminal o línea de comandos y ejecuta el comando adecuado para tu sistema operativo. Por lo general, el comando es **"mongod"** o **"mongod.exe"**. 🚀🖥️

5. **Interactuar con MongoDB:** Una vez que el servidor esté en funcionamiento, puedes interactuar con MongoDB a través de la línea de comandos o mediante herramientas de interfaz gráfica como **MongoDB Compass**. 💻🔍

¡Listo! Ahora tienes MongoDB instalado y listo para ser utilizado en tu sistema. 🎉🚀



#### Ahora instalaremos **MongoDB Compass** 

1. Accede al siguiente link: https://www.mongodb.com/products/compass

2. Elige la última versión estable disponible.

3. En "Plataforma", selecciona la opción que corresponda a tu sistema operativo.

4. Descarga la aplicación.

5. Una vez descargado el archivo, accede a la carpeta de "Descargas" y arrastra el archivo recién descargado a la terminal para conocer la ruta del archivo.

6. En la terminal, ingresa el siguiente comando (esto solo aplica para Ubuntu, para otros sistemas operativos consulta la documentación oficial):

   ```bash
   sudo dpkg -i 
   ```

   Debe verse de la siguiente forma:

   ![ruta](./assets/readme/ruta.png)

7. Si el comando anterior muestra un error, ejecuta los siguientes comandos en orden:

   ```bash
   sudo apt --fix-broken install
   ```

   Este comando buscará las pre-dependencias necesarias para que la instalación sea exitosa.

   Luego, repite el paso 6.

¡Listo! Ahora has instalado **MongoDB Compass**.



#### **Corrección de error de conexión con MongoDB Compass**

Si llegado el caso ocurre el siguiente error al darle click en **Connect** y la conexión es rechazada, sigue estos pasos:

1. Verifica la conexión:

   ```bash
   service mongod status
   ```

2. Activa la conexión:

   ```bash
   sudo systemctl start mongod
   ```

3. Vuelve al paso 1. Si la conexión funciona, ¡felicidades! Si no, busca en la [documentación oficial de MongoDB](https://docs.mongodb.com/) o en la comunidad para obtener más ayuda. 🛠️🚀