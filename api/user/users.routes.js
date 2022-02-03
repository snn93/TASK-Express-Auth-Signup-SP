const express = require("express");
const router = express.router();

const { signUp } = require("./users.controllers");

router.post("/", signUp);

module.exports = router;
