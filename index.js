const app = require('express')();
const bodyParser = require('body-parser') 


app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');



app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/',(req,res)=>{
    console.log(req.body.input);
    res.redirect('/')
})


app.listen(3000,()=>{
    console.log("Listening in port 3000");
})