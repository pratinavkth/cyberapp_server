const express = require("express");
const app =express();
const openai = require("./opeanai/server_route");
app.use(express.json());

app.use("/openaiapi",openai);
const PORT = 5000

app.listen(PORT,()=>{
    console.log(`erver is running on the port http://localhost:${PORT}`)
});