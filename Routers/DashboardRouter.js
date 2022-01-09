class DashboardRouter {
  constructor(express) {
    this.express = express;
  }

  router() {
    const router = this.express.Router();
    router.get("/:id", this.get.bind(this));
    return router;
  }

  get(req, res) {
    res.render("dashboard");
  }
}

module.exports = DashboardRouter;
