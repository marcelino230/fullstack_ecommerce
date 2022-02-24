const express = require("express");
const app = express();
const db = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

//config
const { database } = require("./config/index");

// DATABASE CONNECTION
const connectToDatabase = () => {

  db.connect(`${ database }`)
      .then(() => console.log("\tDatabase connected"))
      .catch((err) => console.log(`\tOcurred an error connecting the datebase:\n${err}`));

}
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/cart", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running.");
});
