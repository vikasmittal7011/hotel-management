const express = require("express");
const cors = require("cors");
// const fs = require("fs");
const path = require("path");
require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const cloundinary = require("cloudinary");
const cookieparser = require("cookie-parser");


const connection = require("./utils/database");
const app = express();

const Auth = require("./routes/AuthRoute");
const User = require("./routes/UserRoute");
const Hotel = require("./routes/HotelRoute");
const HotelBookRoute = require("./routes/HotelBookRoute");

const PORT = process.env.PORT || 8080;

connection()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// app.post(
//   "/api/webhook",
//   express.raw({ type: "application/json" }),
//   async (request, response) => {
//     const sig = request.headers["stripe-signature"];

//     let event;

//     try {
//       event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//     } catch (err) {
//       response.status(400).send(`Webhook Error: ${err.message}`);
//       return;
//     }

//     // Handle the event
//     switch (event.type) {
//       case "payment_intent.succeeded":
//         const paymentIntentSucceeded = event.data.object;
//         const id = paymentIntentSucceeded.metadata.orderId;

//         const order = await OrderModal.findById({ _id: id });
//         order.paymentStatus = "Receive";
//         await order.save();

//         // Then define and call a function to handle the event payment_intent.succeeded
//         break;
//       // ... handle other event types
//       default:
//         console.log(`Unhandled event type ${event.type}`);
//     }

//     // Return a 200 response to acknowledge receipt of the event
//     response.send();
//   }
// );

app.use(express.json({ limit: "50mb" }));
app.use(cookieparser());
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
    // origin: "https://hotelmanagement-sq75.onrender.com", credentials: true
    origin: "http://localhost:3000", credentials: true
  })
);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "build")));
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  next();
});

cloundinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_PUBLIC,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api/auth", Auth);
app.use("/api/user", User);
app.use("/api/hotel", Hotel);
app.use("/api/booking", HotelBookRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve("build", "index.html"));
});

// app.post("/api/create-payment-intent", async (req, res) => {
//   const { items, orderId } = req.body;

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: items * 100,
//       currency: "inr",
//       automatic_payment_methods: {
//         enabled: true,
//       },
//       metadata: { orderId },
//     });
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

app.use((req, res, next) => {
  next(new HttpError("Not route found", 404));
});

app.use((error, req, res, next) => {
  if (res.heardersSent) {
    return next(error);
  }
  res
    .status(error.errorCode || 500)
    .json({ message: error.message || "Unknow error accour" || error.message });
});

app.listen(PORT);
