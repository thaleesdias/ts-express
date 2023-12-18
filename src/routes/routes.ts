import { Router } from 'express'

const router = Router()

router.get('/',(req, res)=>{
    console.log('oi')
    res.send('ok')
})
router.post('/',(req,res)=>{
    const nome = req.body.nome

    console.log(nome)   
        res.send(nome)
})

export default router