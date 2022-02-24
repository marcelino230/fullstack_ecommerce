const db = require("mongoose");

const OrderSchema = new db.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, dafault: "pending" },
},
    {timestamps: true}
);

module.exports = db.model("Order", OrderSchema)
