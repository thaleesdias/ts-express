import express  from 'express' 
import router from './routes/routes' 

const server = express()

server.use(express.json())

server.use('/tasks',router)



server.listen(3000,()=>{
    console.log('on')
})