class HomeController {
  // [GET] // index
  index(req, res) {
    res.render("home/index");
  }
}

module.exports = new HomeController();
