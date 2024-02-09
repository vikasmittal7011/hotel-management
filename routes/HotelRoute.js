const express = require("express");
const { createHotelValiation } = require("../validation/Hotel");
const { createHotel, getHotels, getHotel } = require("../controller/Hotel");
const adminAuth = require("../middleware/adminAuth")

const router = express.Router();

router.get("/", getHotels).get("/:id", getHotel).post("/", adminAuth, createHotelValiation, createHotel);

module.exports = router;
