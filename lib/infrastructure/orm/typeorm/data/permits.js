module.exports = [
    {
        id_permit: 1,
        url: '/api/collection/:id',
        method: 'POST',
        description: 'Guardar canción en colección',
    },
    {
        id_permit: 2,
        url: '/api/collection/:id/songs',
        method: 'GET',
        description: 'Obtener canciones de una colección propia',
    },
    {
        id_permit: 3,
        url: '/api/songs/:id',
        method: 'PUT',
        description: 'Actualizar canción',
    }
]