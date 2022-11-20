const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        product: {
          type: String,
          ref: "Product",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
