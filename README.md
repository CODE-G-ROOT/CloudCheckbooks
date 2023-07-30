4. # MongoDB :leaves:

   MongoDB es un gestor de bases de datos no relacionales o **NoSQL** orientado a documentos, utilizado para almacenar volúmenes masivos de datos. A diferencia de las bases de datos tradicionales basadas en SQL, MongoDB no se basa en tablas y columnas. 📚🌐
 
   

   
   ## BJON Y JSON
   
   BJSON (Binary Json) es una extensión binaria de los archivos JSON, BSON también es una notación de objetos con estructura similar de pares clave-valor. Sin embargo representa los datos en una forma binaria, lo que lo hace más eficiente para su almacenamiento y tranferencia. BSON es ampliamente utilizado en bases de datos NoSQL, como MongoDB, para almacenar y recuperar datos de forma rápida y eficiente. A diferencia d e JSON, BSON es binario y no legible por humanos, peor esto lo hace más adecuado para aplicaciones que requierren un alto rendimiento y un menor uso de recursos.

   En resumen, JSON es una representación de datos legible por humanos y ampliamente utilizado en aplicaciones web y API's, mientras BSON es una extension binaria de JSON  utilizada principalmente en bases de datos NoSQL para un almacenamiento.

   

   ## Manual de instalación 🛠️

   Herramientas a instalar:

   - MongoDB
   - MongoDB Compass
   
   ### Instalación de MongoDB
   
   1. **Descargar MongoDB:** Ve al sitio web oficial de [MongoDB](https://www.mongodb.com/docs/manual/installation/) y descarga la versión adecuada para tu sistema operativo. 📥💻. Ten en cuenta que las versiones oficiales (**Enterprise Edition**) son versiones que tienen soporte técnico proporcionado por el equipo de MongoDB y otras características, sin embargo es de pago. La otra opción es la versión de la comunidad (**Community Edition**), que son versiones de código abierto con características y funcionalidades básicas, pero no ofrecen un soporte oficial por parte de MongoDB, aunque la comunidad puede brindar ayuda.
   
   2. **Instalar MongoDB:** Sigue las instrucciones de instalación proporcionadas en el sitio web para instalar MongoDB en tu sistema. 🔧🚀
   
   3. **Configurar MongoDB:** Una vez instalado, es posible que debas configurar ciertos parámetros, como la ruta de almacenamiento de datos o el puerto de escucha. Puedes encontrar información detallada sobre la configuración en la documentación oficial de MongoDB. 📄⚙️
   
   4. **Iniciar el servidor:** Para iniciar el servidor de MongoDB, abre una terminal o línea de comandos y ejecuta el comando adecuado para tu sistema operativo. Por lo general, el comando es **"mongod"** o **"mongod.exe"**. 🚀🖥️
   
   5. **Interactuar con MongoDB:** Una vez que el servidor esté en funcionamiento, puedes interactuar con MongoDB a través de la línea de comandos o mediante herramientas de interfaz gráfica como **MongoDB Compass**. 💻🔍
   
   ¡Listo! Ahora tienes MongoDB instalado y listo para ser utilizado en tu sistema. 🎉🚀
   
   #### Ahora instalaremos **MongoDB Compass** 
   
   1. Accede al siguiente enlace: [MongoDB Compass](https://www.mongodb.com/products/compass)
   
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
   
      <hr>
      
      
   
   # Atlas 🌐
   
   Atlas es un servicio de base de datos en la nube. Permite alojar y administrar bases de datos sin la necesidad de configurar y mantener la infraestructura de servidores.

   ### **Características**

   - Facilidad de uso
   - Escalabilidad
   - Alta disponibilidad 
   - Seguridad
   - Localizaciones globales
   - Integraciones
   - Automatización
   - Tarificación flexible
   
   ### Creación de cuenta en Atlas
   
   Pasos a seguir:
   
   1. Acceder a la página oficial: [MongoDB](https://www.mongodb.com/) 
   2. Darle click a **Start Free** o **Try Free** para crear la cuenta, esto te redireccionará a la página de registro. 🌟🚀

   ![cuenta_atlas](./assets/readme/cuenta_atlas.png)
   
   3. Llenar el formulario o crear la cuenta por medio de Google y seguir los pasos que se muestren en pantalla.
   4. Seleccionar la opción **Free**, llenar el formulario y crear tu cuenta. 📄💡

   ![crear_cuenta](./assets/readme/crear_cuenta.png)

   Ten en cuenta que al asignar el nombre del grupo **"Cluster"** no se podrá cambiar. ![cluster](./assets/readme/cluster.png)

   5. Asigna tu usuario y contraseña. Ten en cuenta que esta contraseña debe ser fácil de recordar. 🔑🤔

   6. Click en **Create User**.
   7. Click en **Finish and Close**. 🎉🔐
   
   ¡Felicidades! Ya tienes tu cuenta de MongoDB, ahora puedes acceder a ella desde el navegador o desde tu aplicación MongoDB Compass. 🌐💻
   
   ### Conexión de tu cuenta Atlas con MongoDB Compass
   
   1. En tu navegador, inicia sesión con tu cuenta Atlas en la página oficial de MongoDB.
   
   2. Accede a la opción Database. ![db_mongo](./assets/readme/db_mongo.png)
   
   3. Accede a la opción de Compass.
   
      ![driver](./assets/readme/driver.png)
   
   4. Selecciona todas las opciones que cumplan tus parámetros y sigue los pasos.
   
   5. Copia el punto 2 de la siguiente imagen:
   
   ![form](./assets/readme/form.png)
   
   6. Pega el punto 3 en la aplicación de **MongoDB Compass**. ![db_conexion](./assets/readme/password.png)
   7. Cambia **<password>** por tu contraseña.
   8. Activa la conexión dándole click en **Connect**.
   
   ### Llegado el caso de que ocurra algún error de conexión realizar los siguientes pasos: 
   
   1. Ubícate en el navbar lateral e ve a las opciones de seguridad (**Security**).
   2. Click en **Network Access**.
   3. Click en **EDIT**. ![edit](./assets/readme/edit.png)
   4. Click en **ADD CURRENT IIP ADDRESS
