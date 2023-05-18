const express = require("express");
const app = express();
app.get("/",(req,resp)=>{
    resp.send("app is working...")
});

app.listeners(5000);