const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch(err => console.log(err) );     
    





/* fs.writeFile(`tabla-${base}.txt`, salida, ( err ) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creada`);
})

 */