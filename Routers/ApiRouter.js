class ApiRouter {
  constructor(express, apiService) {
    this.express = express;
    this.apiService = apiService;
  }

  router() {
    const router = this.express.Router();
    //Farm Info
    router.get("/farm_information", this.getFarmInfo.bind(this));
    // Impact Reach
    router.get(
      "/impact_reach/visitors",
      this.getImpactReachVisitors.bind(this)
    );
    router.get(
      "/impact_reach/social_media",
      this.getImpactReachSocialMedia.bind(this)
    );
    router.get(
      "/impact_reach/food_donated",
      this.getImpactReachFoodDonated.bind(this)
    );
    //Farm Overview
    router.get("/farm_overview", this.getFarmOverview.bind(this));
    //Progress of Crops
    router.get("/progress_of_crops", this.getProgressOfCrops.bind(this));
    //Events
    router.get("/events", this.getEvents.bind(this));
    return router;
  }

  getFarmInfo(req, res) {
    const farmId = 1;
    this.apiService.readFarmInfo(farmId).then((data) => {
      res.send(data);
    });
  }

  getImpactReachVisitors(req, res) {
    const farmId = 1;
    this.apiService.readVisitors(farmId).then((data) => {
      res.send(data);
    });
  }

  getImpactReachSocialMedia(req, res) {
    const farmId = 1;
    this.apiService.readSocialMedia(farmId).then((data) => {
      res.send(data);
    });
  }

  getImpactReachFoodDonated(req, res) {
    const farmId = 1;
    this.apiService.readFoodDonated(farmId).then((data) => {
      res.send(data);
    });
  }

  getFarmOverview(req, res) {
    const farmId = 1;
    this.apiService.readPlanter(farmId).then((data) => {
      res.send(data);
    });
  }

  getProgressOfCrops(req, res) {
    const farmId = 1;
    this.apiService.readPlanter(farmId).then((data) => {
      res.send(data);
    });
  }

  getEvents(req, res) {
    const farmId = 1;
    this.apiService.readEvent(farmId).then((data) => {
      res.send(data);
    });
  }
}

module.exports = ApiRouter;
