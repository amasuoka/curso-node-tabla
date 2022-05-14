const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'numberr',
        default: 10,
        describe: 'Este es el número hasta donde quieres la tabla'
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la table en consola'
    })
    .check( (argv, options) => {
        if (isNaN( argv.b ) ){
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

    module.exports = argv;