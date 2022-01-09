class ApiRouter {
  constructor(express, apiService) {
    this.express = express;
    this.apiService = apiService;
  }

  router() {
    const router = this.express.Router();
    //Farm Info
    router.get("/:id/farm_information", this.getFarmInfo.bind(this));
    // Impact Reach
    router.get(
      "/:id/impact_reach/visitors",
      this.getImpactReachVisitors.bind(this)
    );
    router.get(
      "/:id/impact_reach/social_media",
      this.getImpactReachSocialMedia.bind(this)
    );
    router.get(
      "/:id/impact_reach/food_donated",
      this.getImpactReachFoodDonated.bind(this)
    );

    //Farm Overview (Ready to harvest)
    router.get(
      "/:id/farm_overview/ready_to_harvest",
      this.getReadyToHarvest.bind(this)
    );
    //Farm Overview (Active growing)
    router.get(
      "/:id/farm_overview/active_growing",
      this.getActiveGrowing.bind(this)
    );
    //Farm Overview (Harvest Finished) (Ready to sow)
    router.get(
      "/:id/farm_overview/ready_to_sow",
      this.getHarvestFinished.bind(this)
    );

    //Progress of Crops
    router.get(
      "/:id/progress_of_crops/chili",
      this.getProgressOfCropsChili.bind(this)
    );
    router.get(
      "/:id/progress_of_crops/rosemary",
      this.getProgressOfCropsRosemary.bind(this)
    );
    router.get(
      "/:id/progress_of_crops/chrysanthemum",
      this.getProgressOfCropsChrysanthemum.bind(this)
    );
    router.get(
      "/:id/progress_of_crops/carrot",
      this.getProgressOfCropsCarrot.bind(this)
    );
    router.get(
      "/:id/progress_of_crops/spinach",
      this.getProgressOfCropsSpinach.bind(this)
    );
    router.get(
      "/:id/progress_of_crops/cherry_tomato",
      this.getProgressOfCropsCherryTomato.bind(this)
    );
    router.get(
      "/:id/progress_of_crops/potato",
      this.getProgressOfCropsPotato.bind(this)
    );
    router.get(
      "/:id/progress_of_crops/fig",
      this.getProgressOfCropsFig.bind(this)
    );
    router.get(
      "/:id/progress_of_crops/indian_lettuce",
      this.getProgressOfCropsIndianLettuce.bind(this)
    );

    //Events
    router.get("/:id/events", this.getEvents.bind(this));
    return router;
  }

  getFarmInfo(req, res) {
    let farmId = req.params.id;
    this.apiService.readFarmInfo(farmId).then((data) => {
      res.send(data);
    });
  }

  getImpactReachVisitors(req, res) {
    let farmId = req.params.id;
    this.apiService.readVisitors(farmId).then((data) => {
      res.send(data);
    });
  }

  getImpactReachSocialMedia(req, res) {
    let farmId = req.params.id;
    this.apiService.readSocialMedia(farmId).then((data) => {
      res.send(data);
    });
  }

  getImpactReachFoodDonated(req, res) {
    let farmId = req.params.id;
    this.apiService.readFoodDonated(farmId).then((data) => {
      res.send(data);
    });
  }
  //Farm Overview (Ready to harvest)
  getReadyToHarvest(req, res) {
    let farmId = req.params.id;
    this.apiService.readReadyToHarvest(farmId).then((data) => {
      res.send(data);
    });
  }
  // (Active growing)
  getActiveGrowing(req, res) {
    let farmId = req.params.id;
    this.apiService.readActiveGrowing(farmId).then((data) => {
      res.send(data);
    });
  }
  // (Active growing)(Harvest Finished) (Ready to sow)
  getHarvestFinished(req, res) {
    let farmId = req.params.id;
    this.apiService.readReadyToSow(farmId).then((data) => {
      res.send(data);
    });
  }

  //Progress of Crops
  getProgressOfCropsChili(req, res) {
    let farmId = req.params.id;
    this.apiService.readPlanter(farmId, "Chili").then((data) => {
      res.send(data);
    });
  }
  getProgressOfCropsRosemary(req, res) {
    let farmId = req.params.id;
    this.apiService.readPlanter(farmId, "Rosemary").then((data) => {
      res.send(data);
    });
  }
  getProgressOfCropsChrysanthemum(req, res) {
    let farmId = req.params.id;
    this.apiService.readPlanter(farmId, "Chrysanthemum").then((data) => {
      res.send(data);
    });
  }
  getProgressOfCropsCarrot(req, res) {
    let farmId = req.params.id;
    this.apiService.readPlanter(farmId, "Carrot").then((data) => {
      res.send(data);
    });
  }
  getProgressOfCropsSpinach(req, res) {
    let farmId = req.params.id;
    this.apiService.readPlanter(farmId, "Spinach").then((data) => {
      res.send(data);
    });
  }
  getProgressOfCropsCherryTomato(req, res) {
    let farmId = req.params.id;
    this.apiService.readPlanter(farmId, "Cherry Tomato").then((data) => {
      res.send(data);
    });
  }
  getProgressOfCropsPotato(req, res) {
    let farmId = req.params.id;
    this.apiService.readPlanter(farmId, "Potato").then((data) => {
      res.send(data);
    });
  }
  getProgressOfCropsFig(req, res) {
    let farmId = req.params.id;
    this.apiService.readPlanter(farmId, "Fig").then((data) => {
      res.send(data);
    });
  }
  getProgressOfCropsIndianLettuce(req, res) {
    let farmId = req.params.id;
    this.apiService.readPlanter(farmId, "Indian Lettuce").then((data) => {
      res.send(data);
    });
  }

  getEvents(req, res) {
    let farmId = req.params.id;
    this.apiService.readEvent(farmId).then((data) => {
      res.send(data);
    });
  }
}

module.exports = ApiRouter;
