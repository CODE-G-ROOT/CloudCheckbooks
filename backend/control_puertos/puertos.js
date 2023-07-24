export default server = () =>{
    //TODO   ESTA FUNCION Y CLOSE SERVER, SON PARA CERRAR EL SERVIDOR 
    //TODO   Y EL PUERTO A LA HORA DE CERRAR LA PÁGINA
    process.on('SIGINT', () => {
        console.log('Cerrando el servidor...');
        server.close();
        
        process.exit(0);
    });

    const closeServer = () => {
        console.log('Cerrando el servidor...');
        server.close();
        
        process.exit(0);
    };

    const tiempoEspera = 10 * 1000; // 10 minutos en milisegundos
    setTimeout(closeServer, tiempoEspera);
}