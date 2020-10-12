let express = require ('express')

let app = new express()

const port = 3000
app.use(express.static('public'))

app.get('/adder',(req,res)=>{
    let num1= req.query.num1
    let num2= req.query.num2
    let result = num1 + num2
    let data={
            result

    }
    res.json(data)
})


function RandomInt(max){
    return Math.floor(Math.random()* floor(max))
}

app.get('/test', (req,res)=>{
    console.log('test end point')
    res.send("TEST hit")
})
app.listen(port, ()=>{
    console.log('server running on', port)
})