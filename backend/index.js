import express from "express";

const app = express();

app.get('/test', (req, res)=> {
    return res.json('ok');
});

app.listen(8000, ()=> console.log('listening on port 8000'))