const { validationResult } = require("express-validator");
const { HotelBook } = require("../models/HotelBook");

exports.createHotelBook = async (req, res, next) => {

  let {
    contact, checkIn, checkOut, guest, hotel, totalAmount, paymentMethod
  } = req.body;

  const id = req.userData.id

  try {
    const newHotel = {
      contact,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      numberOfGuest: +guest,
      hotel,
      user: id,
      price: +totalAmount,
      paymentMethod
    };


    const booking = await HotelBook.create(newHotel)

    if (!booking) {
      return res.json({ message: "Booking can't be done, plase try again lagter!!" })
    }

    res.json({
      success: true, booking
    })


  } catch (err) {
    return res.json({ message: "Internal server error" })
  }
};

exports.getBooks = async (req, res, next) => {
  try {

    const booking = await HotelBook.find().sort({ createdAt: -1 }).populate("hotel user")

    res.json({ success: true, booking })

  } catch (error) {
    return next(new HttpError(error.message, 500))
  }
}

exports.getHotelBookByUser = async (req, res, next) => {
  try {
    const { id } = req.userData
    const book = await HotelBook.find({ user: id }).sort({ createdAt: -1 }).populate("hotel user")

    res.json({ success: true, booking: book })

  } catch (error) {
    return res.json({ message: "Internal Server Error" })
  }
}
