// Client MONGO
const { MongoClient } = require('mongodb');
// Importar la cadena de conexion a la BD
const uri = require('./atlas_uri');

// comprobar la cadena de conexion
// Se debe mostrar la URI en la consola, eso significa qu es correcta la conexion
console.log(uri);

// Usaremos un objeto para iniciar la conexion a la BD
const client = new MongoClient( uri );

// Identificamos la BD que estamos utilizando
const dbname = "banck";

// funcion para hacer la conexion a la BD
const connectToDatabase = async () => {

    // trycatch
    try {
        // conexion a la BD
        await client.connect();
        // Mostrar un mensaje en caso de que la conexion sea exitosa
        console.log(`Connected to the ${dbname} database`);
    } catch (error) {
        // En caso de que haya un error de conexion mostramos un mensaje
        console.error(`Error connecting to the database`);
    }

};
// Funcion que ejecuta la funcion connectToDatabase y luego se llama la funcion main()
const main = async () => {
    try {
    // llamar la funcion connectToDatabase
        await connectToDatabase();
    } catch (error) {
        // Mostrar una alerta en caso de que haya un error a la hora de hacer la conexion
        console.error(`Error connecting to the database: ${err}`);
    } finally {
        // cerramos la conexion
        await client.close();
    }
}
// Corremos la funcion princial
main();

