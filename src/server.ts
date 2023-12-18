import express  from 'express' 
import { appendFile } from 'fs'

const server = express()

server.use(express.json())

server.get('/',(req, res)=>{
    console.log('oi')
    res.send('ok')
})

server.post('/',(req,res)=>{
    const nome = req.body.nome

    console.log(nome)   
        res.send(nome)
})

server.listen(3000,()=>{
    console.log('on')
})