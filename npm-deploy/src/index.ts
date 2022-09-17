#!/usr/bin/env node
import express from 'express';

const app = express();
app.get('/', (req, res)=>{
    res.send("Starting...")
});

app.listen(3005, () => {

});