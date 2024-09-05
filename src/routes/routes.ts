import { Router, Request, Response } from 'express'
import { Database } from '../database/db'
import { randomUUID } from 'crypto'
import Task from '../interface/task'

const router = Router()
const db = new Database

router.get('/', (req: Request, res: Response) => {
    res.send(db.list())

})

router.post('/', (req: Request, res: Response) => {
    const randomId = randomUUID()
    const create = new Date()
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

    res.status(201).send({ "msg": "task criada!","id":task.id })
})

router.put('/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    const { title, description, completed_at } = req.body

    const existingTask: Task | undefined = db.getTaskById(id)

    if (existingTask === undefined) {
        return res.status(404).send({ message: 'nao encontrado' })
    }

    const updateTask: Task = {
        id: id,
        title: title,
        description: description,
        completed_at: completed_at,
        created_at: existingTask.created_at,
        updated_at: new Date()

    }

    db.update(id, updateTask)

    res.status(200).send({ "message": "ok" })
})

router.delete('/remove/:id', (req: Request, res: Response) => {
    const id = req.params.id

    db.delete(id)

    res.status(200).json({ "message": "deletado com sucesso" })
})

router.delete('/delete/all', (req: Request, res: Response) => {

    db.deleteAll()

    res.status(200).json({ "message": "todos dados excluidos" })
})


export default router