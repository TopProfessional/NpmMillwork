require('dotenv').config()
const express = require('express')
const router = require('./routes/index')

const PORT = process.env.PORT || 7000

const app = express()

app.use(express.static('public'))

app.use(express.json())
app.use(router)

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e){
        console.log(e);
    }
}

start()