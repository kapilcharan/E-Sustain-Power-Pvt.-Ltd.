const express=require("express");
const hbs=require("hbs");
const r=require("./r/main")
const { sendmail }=require("./r/nodemailer")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const app=express();


app.use(bodyParser.urlencoded({extended:true}))
app.use('',r);
// /static/css/style.css
app.use('/public',express.static("public"))


// (template engine)
app.set('view engine','hbs')
app.set("views","views")




app.listen(2000,()=>{
    console.log("server connected");
})



