import { Router, request } from 'express'
import { Database, Task } from '../database/db'
import { randomUUID } from 'crypto'
import { Request, Response } from 'express'


const router = Router()
const db = new Database

router.get('/', (req: Request, res: Response) => {
    console.log('oi')
    let dados = db.list() 

    console.log(dados)
    res.send(dados)

})

router.post('/',  (req: Request, res: Response) => {
    const randomId = randomUUID()
    const create = new Date().toDateString()
    const { title, description } = req.body


    const task: Task = {
        id: randomId,
        title: title,
        description: description,
        completed_at: null,
        created_at: create,
        updated_at: create,

    }


     db.create(task)

    res.status(201).send()
})

router.put('/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    
    res.status(200).send(id)
})

router.delete('/remove/:id',(req:Request, res:Response)=>{
    const id = req.params.id
    db.delete(id)

    res.status(200).json({"message":"deletado com sucesso"})
})

router.delete('/delete/all',(req:Request, res:Response)=>{
  
    db.deleteAll()

    res.status(200).json({"message":"todos dados excluidos"})
})


export default router