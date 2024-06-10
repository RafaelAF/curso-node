import express from 'express'


const router = express.Router()

router.get('/', (req, res)=>{
    res.json({produtos: []})
})

router.get('/:id', (req, res)=>{
    let id = req.params.id
    res.json({id, name: 'pimba', price: 90})
})

export default router