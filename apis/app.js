const express = require('express')
const cors = require('cors')
const userModel = require('./schema/user')
const productModel = require('./schema/product')
require('./db')

const app = express()
app.use(express.json())
app.use(cors())

const port = 4000

app.get('/user/:name',(req,res)=>{
    try{
        const {name} = req.params
        userModel.find({name}).then((data)=>{
            res.send(data)
        })
    }
    catch(error){
        res.status(500).json({message:"internal server error",error:error.message()})
    }
})

app.get('/product/:type',(req,res)=>{
    try{
        const {type} = req.params
        productModel.find({type}).then((data)=>{
            res.send(data)
        })
    }
    catch(error){
        res.status(500).json({message:"internal server error",error:error.message()})
    }
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})
