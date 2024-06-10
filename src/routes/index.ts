import express from 'express'
import routerProducts from './produtos'
import routerVoos from './voos'

const router = express.Router()


router.use('/produtos', routerProducts)
router.use('/voos', routerVoos)


router.get('/ping', (req, res)=>{
    // asdasd()
    res.json({pong: true})
})

router.get('/', (req, res)=>{
    let name: string = 'rafael';
    let age: number = 25;
    res.json({name, age})
})

export default router