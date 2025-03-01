const express = require("express");
const router =express.Router();

const chatgpt = require("./server_chatgpt");

router.post("/apihit",chatgpt.getcompletation);

module.exports = router;