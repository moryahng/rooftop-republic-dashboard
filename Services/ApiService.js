class ApiService {
  constructor(knex, axios) {
    this.knex = knex;
    this.axios = axios;
  }

  readFarmInfo(farmId) {
    let query = this.knex
      .select()
      .from("farm")
      .where("id", farmId)
      .orderBy("farm.id", "asc");

    return query.then((rows) => {
      return rows.map((row) => ({
        farm_id: row.id,
        company_name: row.company_name,
        farm_name: row.farm_name,
        name: row.name,
        address: row.address,
        size: new Intl.NumberFormat().format(row.size),
        open_date: row.open_date.toLocaleDateString(),
      }));
    });
  }

  readVisitors(farmId) {
    let query = this.knex
      .select()
      .from("visitor")
      .where("farm_id", farmId)
      .orderBy("visitor.id", "asc");

    return query.then((rows) => {
      return rows.map((row) => ({
        visitor_id: row.id,
        farm_id: row.farm_id,
        date: row.date.toLocaleDateString(),
        visit: row.visit,
      }));
    });
  }

  readSocialMedia(farmId) {
    let query = this.knex
      .select()
      .from("social_media")
      .where("farm_id", farmId)
      .orderBy("social_media.id", "asc");

    return query.then((rows) => {
      return rows.map((row) => ({
        social_media_id: row.id,
        farm_id: row.farm_id,
        date: row.date.toLocaleDateString(),
        visit: row.visit,
      }));
    });
  }

  readFoodDonated(farmId) {
    let query = this.knex
      .select()
      .from("food_donated")
      .where("farm_id", farmId)
      .orderBy("food_donated.id", "asc");

    return query.then((rows) => {
      return rows.map((row) => ({
        food_donated_id: row.id,
        farm_id: row.farm_id,
        date: row.date.toLocaleDateString(),
        food_donated: row.food_donated,
      }));
    });
  }

  readReadyToHarvest(farmId) {
    let query = this.knex
      .select()
      .from("planter")
      .where("farm_id", farmId)
      .where("status", "Ready to harvest")
      .orderBy("planter.id", "asc");
    return query.then((rows) => {
      return rows.map((row) => ({
        planter_id: row.id,
        farm_id: row.farm_id,
        zone: row.zone,
        crop: row.crop,
        type: row.type,
        yield: row.yield,
        status: row.status,
        sowing_month: row.sowing_month, //.toLocaleDateString()
        harvest_estimate: row.harvest_estimate, //.toLocaleDateString()
        harvest_actual: row.harvest_actual, //.toLocaleDateString()
        contribution_type: row.contribution_type,
        contribution_details: row.contribution_details,
      }));
    });
  }

  readActiveGrowing(farmId) {
    let query = this.knex
      .select()
      .from("planter")
      .where("farm_id", farmId)
      .where("status", "Active growing")
      .orderBy("planter.id", "asc");
    return query.then((rows) => {
      return rows.map((row) => ({
        planter_id: row.id,
        farm_id: row.farm_id,
        zone: row.zone,
        crop: row.crop,
        type: row.type,
        yield: row.yield,
        status: row.status,
        sowing_month: row.sowing_month, //.toLocaleDateString()
        harvest_estimate: row.harvest_estimate, //.toLocaleDateString()
        harvest_actual: row.harvest_actual, //.toLocaleDateString()
        contribution_type: row.contribution_type,
        contribution_details: row.contribution_details,
      }));
    });
  }

  readReadyToSow(farmId) {
    let query = this.knex
      .select()
      .from("planter")
      .where("farm_id", farmId)
      .where("status", "Harvest Finished")
      .orderBy("planter.harvest_actual", "asc");
    return query.then((rows) => {
      return rows.map((row) => ({
        planter_id: row.id,
        farm_id: row.farm_id,
        zone: row.zone,
        crop: row.crop,
        type: row.type,
        yield: row.yield,
        status: row.status,
        sowing_month: row.sowing_month, //.toLocaleDateString()
        harvest_estimate: row.harvest_estimate, //.toLocaleDateString()
        harvest_actual: row.harvest_actual.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        }), //.toLocaleDateString()
        contribution_type: row.contribution_type,
        contribution_details: row.contribution_details,
      }));
    });
  }

  readPlanter(farmId, crop) {
    let query = this.knex
      .select()
      .from("planter")
      .where("farm_id", farmId)
      .andWhere("crop", crop)
      .andWhere(function () {
        this.where("status", "Active growing").orWhere(
          "status",
          "Ready to harvest"
        );
      })
      .orderBy("planter.id", "asc");
    return query.then((rows) => {
      return rows.map((row) => ({
        planter_id: row.id,
        farm_id: row.farm_id,
        zone: row.zone,
        crop: row.crop,
        type: row.type,
        yield: row.yield,
        status: row.status,
        sowing_month: row.sowing_month.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
        }), //.toLocaleDateString()
        harvest_estimate: row.harvest_estimate.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
        }), //.toLocaleDateString()
        harvest_actual: row.harvest_actual, //.toLocaleDateString()
        contribution_type: row.contribution_type,
        contribution_details: row.contribution_details,
      }));
    });
  }

  readEvent(farmId) {
    let query = this.knex
      .select()
      .from("event")
      .where("farm_id", farmId)
      .orderBy("event.start", "asc");

    return query.then((rows) => {
      return rows.map((row) => ({
        event_id: row.id,
        farm_id: row.farm_id,
        name: row.name,
        type: row.type,
        start_date: row.start.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        start_time: row.start.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        end_date: row.end.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        end_time: row.end.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        publish: row.publish,
      }));
    });
  }
}

module.exports = ApiService;
