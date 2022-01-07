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
        name: row.name,
        address: row.address,
        size: row.size,
        open_date: row.open_date,
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
        date: row.date,
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
        date: row.date,
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
        date: row.date,
        food_donated: row.food_donated,
      }));
    });
  }

  readPlanter(farmId) {
    let query = this.knex
      .select()
      .from("planter")
      .where("farm_id", farmId)
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
        sowing_month: row.sowing_month,
        harvest_estimate: row.harvest_estimate,
        harvest_actual: row.harvest_actual,
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
      .orderBy("event.id", "asc");

    return query.then((rows) => {
      return rows.map((row) => ({
        event_id: row.id,
        farm_id: row.farm_id,
        name: row.name,
        type: row.type,
        start: row.start,
        end: row.end,
        publish: row.publish,
      }));
    });
  }
}

module.exports = ApiService;
