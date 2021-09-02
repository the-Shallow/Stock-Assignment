const fetch = require("node-fetch");
const Stock = require("../Models/stockModel");

exports.createStock = async (req, res, next) => {
    const stock_data = await fetch('https://api.wazirx.com/api/v2/tickers');
    const data = await stock_data.json();
    // console.log(data);
    const stocks = Object.values(data).forEach(async val=> await Stock.create(val));
    // const stocks = await Stock.create(data);
    // console.log(stocks);
  res.status(200).json({
    status: "success",
    data: {
      stocks,
    },
  });
};
