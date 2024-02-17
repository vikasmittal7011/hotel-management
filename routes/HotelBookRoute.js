const express = require("express");
const userAuth = require("../middleware/userAuth");
const adminAuth = require("../middleware/adminAuth");
const { createHotelBook, getHotelBookByUser, getBooks } = require("../controller/HotelBook");

const router = express.Router();

router
    .get("/", userAuth, getHotelBookByUser)
    .get("/admin", adminAuth, getBooks)
    .post("/", userAuth, createHotelBook)

module.exports = router;
