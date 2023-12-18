import { Router } from 'express'
import { Database } from '../database/db'
import { randomUUID } from 'crypto'
import { Request, Response } from 'express'


const router = Router()
const db = new Database

router.get('/', (req:Request, res:Response) => {
    console.log('oi')
    res.send('HAHHAHAHAHA')
   
})

router.post('/', (req, res) => {
    const randomId = randomUUID()
    const create = new Date().toDateString()
    const {title, description} = req.body


 
    db.create({
        id: randomId,
        title: title,
        description: description,
        completed_at:null,
        created_at: create,
        updated_at:create,
    
    })
    res.send({
        randomId,
        title,
        description
    })
})

export default router