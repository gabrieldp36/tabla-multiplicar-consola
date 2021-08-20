const argv = require('yargs')
.option('b', {
    alias: 'base',
    type:'number',
    demandOption: true,
    describe:'Es la base de la tabla de mutiplicar.'
})
.option('e', {
    alias: 'extension',
    type:'number',
    default: 10,
    describe:'Es el número hasta donde quieres la tabla.'
})
.option('l', {
    alias:'listar',
    type: 'boolean',
    default: false,
    describe:'Muestra la tabla de multiplicar en consola.'
})
.check( (argv, options) => {

    if ( isNaN(argv.base) ) {

        throw 'El argumento base requiere un número.';

    } else if ( isNaN(argv.extension) ) {

        throw 'El argumento extensión requiere un número.';

    };

    return true

}).argv;

module.exports = argv;