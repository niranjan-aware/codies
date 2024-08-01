const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.status(200).send('working');
});

app.listen(5000,()=>{
    console.log("App is Running on 5000");
})