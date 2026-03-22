import express from 'express';
import cors from 'cors';

// Inicializamos la aplicacion
const app = express();
const PORT = 3000;

app.use(cors()); // Permite que tu frontend se conecte sin problemas de seguridad
app.use(express.json()); // Permite que el servidor entienda los JSON que le enviemos

//Ruta de comprobacion
app.get('/', (req, res) => {
    res.send('¡Servidor de Pedidos QR funcionando perfectamente!');
});

//primer Endpoint real Obtener el menu
app.get('/api/menu', (req, res) => {
    // como no hemos conectado la base de datos SQL
    // devolvemos unos datos falsos en formato JSON.
    const menuMock = [
        {
            id: 1,
            nombre: "Croquetas Caseras",
            descripcion: "Ración de 6 croquetas de jamón ibérico",
            precio: 8.50,
            disponibilidad: true,
            categoria: 0
        },
        {
            id: 2,
            nombre: "Tarta de Queso",
            descripcion: "Tarta al horno cremosa",
            precio: 5.00,
            disponibilidad: true,
            categoria: 2
        }
    ];

    // Enviamos la respuesta en formato JSON
    res.json(menuMock);
});

//INICIAR SERVIDOR
app.listen(PORT, () => {
    console.log(` Servidor corriendo en http://localhost:${PORT}`);
    console.log(` Puedes ver el menú en http://localhost:${PORT}/api/menu`);
});