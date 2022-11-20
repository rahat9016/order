const Order = require("../Models/Order");

exports.createOrder = async (req, res) => {
  let { orderItems, phone } = req.body;
  const newOrder = await new Order({ orderItems, phone });
  newOrder.save((error, order) => {
    if (error) res.status(400).json({ error });
    if (order)
      res.status(201).json({ message: "Your order save in data base", order });
  });
  try {
  } catch (error) {}
};
exports.getOrder = async (req, res) => {
  const order = await Order.find({});
  res.status(200).json({ order });
};
