const cloudinary = require("cloudinary");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const { Hotel } = require("../models/Hotel");

exports.createHotel = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return next(new HttpError(errorMessages, 422));
  }

  let {
    images,
    title,
    discription,
    extraInfo,
    price,
    maxGuests,
    checkIn,
    checkOut,
    street,
    city,
    state,
    pin,
    country,
    perk
  } = req.body;

  try {

    let uploadPromises = images.map(async (image) => {
      const cloudinaryResponse = await cloudinary.uploader.upload(image);
      return cloudinaryResponse.secure_url;
    });

    const uploadedImages = await Promise.all(uploadPromises);

    if (uploadedImages.length === images.length) {
      const newHotel = {
        title,
        discription,
        extraInfo,
        price: +price,
        maxGuests: +maxGuests,
        checkIn,
        checkOut,
        street,
        city,
        state,
        pin: +pin,
        country,
        photos: uploadedImages,
        perks: perk
      };


      const hotel = await Hotel.create(newHotel)

      if (!hotel) {
        return next(new HttpError("Hotel can't be add, plase try again lagter!!"))
      }

      res.json({
        success: true, hotel
      })
    }

  } catch (err) {
    console.log(err)
    return next(new HttpError("Internal server error", 500));
  }
};
