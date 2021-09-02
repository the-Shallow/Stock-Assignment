const Stock = require("./../Models/stockModel");

exports.getStock = async (req, res, next) => {
  const stocks = await Stock.find({});

  res.status(200).render("stock", {
    title: "Stocks",
    stocks,
  });
};
