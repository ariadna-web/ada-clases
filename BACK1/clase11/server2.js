const server = net.createServer((Socket) => {
    console.log('cliente conectado.')
    Socket.on('data', (data) => {
        const inputPath = data.toString().trim()
        const normalizedPath = pat.normalize(inputPath)


        Socket.write(normalizedpath)
    })
    Socket.on('end', () => {
        console.log('cliente desconectado')
    })
})

server.listen(8081, () => {
    console.log('servidor escuchando en el puerto: ' + server.address().port)
})