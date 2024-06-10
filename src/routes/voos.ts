import express from 'express'

const router = express.Router();

router.get('/:from/:to', (req, res)=>{
    const { from, to } = req.params
    // console.log(from, to)
    res.json(
        {
            fligth: {
                from,
                to
            }
        }
    )
})

export default router