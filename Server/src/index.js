const server = require('./app')
const PORT = 3001;
const { conn } = require('./DB_connection')

conn.sync({force:false}).then(() => {
    console.log('Database conected')
    server.listen(PORT, () => {
    console.log('Listening on port 3001')
})    
})