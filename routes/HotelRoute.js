const express = require("express");
const { createHotelValiation } = require("../validation/Hotel");
const { createHotel } = require("../controller/Hotel");
const adminAuth = require("../middleware/adminAuth")

const router = express.Router();

router.post("/", adminAuth, createHotelValiation, createHotel);

module.exports = router;
