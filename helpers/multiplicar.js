require('colors');

const fs = require ('fs');

const crearTabla = async (base, extension = 10, listar = false) => {

    try {
    
        let salida = '';
        let consola = '';

        for ( let i = 1; i <= extension; i++ ) {

            if (i < extension) {
                
                salida += `${base} x ${i} = ${base * i} \n`;

                consola += `${base}`.green + ' ' + 'x'.yellow + ' ' + `${i}`.blue + ' ' + '='.red + ' ' + `${base * i}`.magenta + '\n';
                    
            } else {

                salida += `${base} x ${i} = ${base * i}`;
                    
                consola += `${base}`.green + ' ' + 'x'.yellow + ' ' + `${i}`.blue + ' ' + '='.red + ' ' + `${base * i}`.magenta;
                
            };

        };

        if (listar) {

            console.log(`=========================\n`.rainbow +  `      Tabla del:`.white + ' ' + `${base}`.cyan + '\n=========================\n'.rainbow);

            console.log(consola);
        };

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
        return '\n' + 'El archivo' + ' ' + `tabla-${base}.txt`.cyan.underline + ', fue creado con éxito.';
        
    } catch (error) {

        throw Error('El archivo no pudo ser creado.');

    };

};

module.exports = {

    crearTabla,

};