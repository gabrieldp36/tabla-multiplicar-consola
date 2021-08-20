const {crearTabla} = require('./helpers/multiplicar.js');

const argv = require('./config/yargs.js');

console.clear();

// Forma para extraer argumentos enviados desde consola. No recomendado.

// const [ , , arg3 = 'base=5', arg4 = 'limite=10' , arg5 = 'archivo=txt'] = process.argv;

// const [ , base = 5] = arg3.split('=');

// const [ , limite = 10] = arg4.split('=');

// const [ , archivo = 'txt'] = arg5.split('=');

crearTabla(argv.base, argv.extension, argv.listar)

.then( nombreArchivo => console.log(nombreArchivo) )

.catch( error => console.log(error) );