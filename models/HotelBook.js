const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema

const HotelBookSechema = mongoose.Schema(
    {
        checkInDate: { type: String, required: true, },
        checkOutDate: { type: String, required: true, },
        numberOfGuest: { type: Number, required: true, },
        contact: { type: Number, required: true, },
        price: { type: Number, required: true, },
        hotel: { type: ObjectId, required: true, ref: "Hotel", },
        user: { type: ObjectId, required: true, ref: "User", },
        paymentMethod: { type: String, required: true }
    },
    { timestamps: true }
);

HotelBookSechema.virtual("id").get(function () {
    return this._id.toHexString();
});

HotelBookSechema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

exports.HotelBook = mongoose.model("Booking", HotelBookSechema);
