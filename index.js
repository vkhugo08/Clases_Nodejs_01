//importar modulo
const http = require('http');

//commonJs --> exma scripts modules

//admite una funcion de callback
//dos parametros
//request, response
const app = http.createServer((request, response) => {
    response.end('Hola es mi primir servirdor en node js');
});

const PORT = 3000;

app.listen(PORT);

console.log(`Servidor escuchando en el puerto ${PORT}`);