const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    let proba = {title: "Que paa"}
    res.json(proba)
})
router.post('/',(req,res)=>{
    console.log(req.body.title)
    res.json(req.body)
})

module.exports = router