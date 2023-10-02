const express  = require('express')
const { db } = require('./db')
const { books } = require('./book')
const app = express()
app.use(express.json())

app.get('/',async(req,res)=>{
    res.send('welcome to the book store')
})


// get
app.get('/books/book/:id',async(req,res)=>{
    const {id} = req.params
    
    const data = await books.find({id : id})
    res.send(data)
})

// delete
app.delete('/book/delete/:id',async(req,res)=>{

})

// post
app.post('/books/addbooks',async(req,res)=>{
    // const {id} = req.params
    const data = await books.create(req.body)
    res.send(data)
})

app.listen(8090,()=>{
    console.log('port running on 8090');
    db()
})