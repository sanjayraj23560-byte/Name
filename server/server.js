import express from 'express';
const PORT = 2000;
import cors from 'cors';


const app = express();


app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,() => {
    console.log("Server is running...!")

})
