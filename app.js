require('dotenv').config()
const express=require('express')
const validation=require('./controllers/validator')
const {validationResult}=require('express-validator')

const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/register',validation,(req,res)=>
{
    console.log(req.body)
    const errors=validationResult(req)
    if(!errors.isEmpty())
    {
        const errorMessages=errors.errors.map((ele)=>ele.msg)
        return res.status(400).json(errorMessages)
    }
    else
    {
        //you can include database functionality here
        return res.status(200).json({message:`registration succesful`})
    }
})


const PORT=process.env.PORT || 1212
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))