app.prepare().then(()=>{
const server = express();

server.use(express.json())

server.post('/',(req,res) => {
    const {username,password} = req.body
    console.log( res.json({
        username,
        password,
        sucess:true
    }))
    res.json({
        username,
        password,
        sucess:true
    })
})

server.get("*",(req,res) => {
    return handle(req,res)
})

server.listen(port, err=>{
    if(err) throw err;
  
})

})
