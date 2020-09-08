const express = require('express')
const app = express()
const bodyParser = require('body-parser') 



// app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({extended:true}));

// app.set('view engine','ejs');



app.get('/',(req,res)=>{
    res.redirect('./index.html')
})

app.post('/',(req,res)=>{
    console.log(req.body.input);
    res.redirect('./index.html')
})


// app.listen(3000,()=>{
//     console.log("Listening in port 3000");
// })
