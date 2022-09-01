const Product = require("../models/Product");

class HomeController {
  // [GET] // index
  index(req, res) {
    // res.render("home/index");
    Product.find({}, function (err, products) {
      if (!err) {
        res.json({
          products,
        });
        return;
      }
      res.status(400).json({ error: "ERROR!!!" });
    });
  }
}

module.exports = new HomeController();
