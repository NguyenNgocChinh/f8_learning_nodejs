const Product = require("../models/Product");
const { multipleMongooseToObject } = require("../../utils/mongoose");
class HomeController {
  // [GET] // index
  index(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("home/index", {
          products: multipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
}

module.exports = new HomeController();
