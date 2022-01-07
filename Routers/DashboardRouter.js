class DashboardRouter {
    constructor(express, dashboardService) {
      this.express = express;
      this.historyService = dashboardService;
    }
  
    router() {
      const router = this.express.Router();
      router.get("/", this.get.bind(this));
      return router;
    }
  
    get(req, res) {
      res.render("dashboard");
    }
    
  }
  
  module.exports = DashboardRouter;