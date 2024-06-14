import express from 'express'


const router = express.Router()

router.get('/', (req, res)=>{
    console.log("PARAMS", req.params)
    console.log("QUERY", req.query)
    console.log("BODY", req.body)
    res.json({produtos: []})
})

router.post('/', (req, res)=>{
    console.log("PARAMS", req.params)
    console.log("QUERY", req.query)
    console.log("BODY", req.body)
    res.json({produtos: []})
})

router.get('/:id', (req, res)=>{
    console.log("PARAMS", req.params)
    console.log("QUERY", req.query)
    console.log("BODY", req.body)
    let id = req.params.id
    res.json({id, name: 'pimba', price: 90})
})

export default router