const db = require("mongoose");

const CartSchema = new db.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: String },
      quantity: { type: Number, default: 1 },
    },
  ],
},
    {timestamps: true}
);

module.exports = db.model("Cart", CartSchema)
