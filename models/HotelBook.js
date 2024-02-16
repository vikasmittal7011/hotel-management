const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema

const HotelBookSechema = mongoose.Schema(
    {
        checkInDate: { type: String, required: true, },
        checkOutDate: { type: String, required: true, },
        numberOfGuest: { type: Number, required: true, },
        contact: { type: String, required: true, },
        hotel: { type: ObjectId, required: true, },
        user: { type: ObjectId, required: true, },
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

exports.HotelBook = mongoose.model("Hotel", HotelBookSechema);
