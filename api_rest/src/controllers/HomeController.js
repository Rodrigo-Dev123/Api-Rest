class HomeController {
  async index(req, res) {
    res.json({ "status": "api is running!" });
  }
}

export default new HomeController();
