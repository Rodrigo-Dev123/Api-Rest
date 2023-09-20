class HomeController {
  async index(req, res) {
    res.json('Index ok!!!');
  }
}

export default new HomeController();
