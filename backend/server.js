const express=require('express')
const app=express()
const connectDB=require("./config/db")

const cors=require("cors")

const PORT=process.env.PORT||5000;

app.use(cors())

connectDB()

app.use(express.json({extended:false}))
app.use('/api/users', require('./routes/userApi'))
app.use('/api/products', require('./routes/productsApi'))
app.use('/api/auth', require('./routes/authApi'))



app.get('/',(req,res)=>{
    res.send('My app working')
})

app.listen(PORT, ()=>{
    console.log(`server is listening at port ${PORT}`)
})