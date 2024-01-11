import express from 'express';



const app = express();

app.listen(5001,() => console.log('Api is running on port 5001'))


app.get("/",(res,req) => res.json("My api is running") )