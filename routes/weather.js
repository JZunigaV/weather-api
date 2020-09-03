const express = require('express');
const router = express.Router();
const request = require("request");
const { response } = require("express");

router.get("/", (request, res, next) => {
    res.send("Hello world from weather api");
});

module.exports = router;