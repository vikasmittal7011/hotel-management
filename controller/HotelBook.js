const { validationResult } = require("express-validator");
const { HotelBook } = require("../models/HotelBook");

exports.createHotelBook = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return next(new HttpError(errorMessages, 422));
  }

  let {
    contact, checkIn, checkOut, guest, hotel
  } = req.body;

  const id = req.userData.id

  try {
    const newHotel = {
      contact,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      numberOfGuest: +numberOfGuest,
      hotel,
      user: id
    };


    const booking = await HotelBook.create(newHotel)

    if (!booking) {
      return next(new HttpError("Booking can't be done, plase try again lagter!!"))
    }

    res.json({
      success: true, booking
    })


  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.getBooks = async (req, res, next) => {
  try {

    const booking = await HotelBook.find()

    res.json({ success: true, booking })

  } catch (error) {
    return next(new HttpError(error.message, 500))
  }
}

exports.getHotelBookByUser = async (req, res, next) => {
  try {
    const { id } = req.userData
    const book = await HotelBook.findById({ user: id })

    if (!book) {
      return next(new HttpError("Hotel not found", 404))
    }

    res.json({ success: true, book })

  } catch (error) {
    return next(new HttpError(error.message, 500))
  }
}
