import express from 'express'
import routerProducts from './produtos'
import routerVoos from './voos'
import { interferir } from '../middlewares/interferir'

const router = express.Router()

// router.use(interferir)

router.use('/produtos', routerProducts)
router.use('/voos', routerVoos)




router.get('/ping', (req: any, res)=>{
    // asdasd()
    res.json({pong: true})
})

router.get('/', (req, res)=>{
    console.log("PARAMS", req.params)
    console.log("QUERY", req.query)
    console.log("BODY", req.body)
    let name: string = 'rafael';
    let age: number = 25;
    res.json({name, age})
})

export default router