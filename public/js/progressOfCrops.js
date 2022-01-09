// Chili data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/progress_of_crops/chili`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
          <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">Chili</h5>

                      <div class="row my-5 mx-4">
                          <div class="col-6">
                              <p class="card-text">
                                  Status: <br>
                                  Type: <br>
                                  Planting Zone: <br>
                                  Sowing Month: <br>
                                  Excepted Harvest Month:
                              </p>
                          </div>
                          <div class="col-5">
                              <span class="card-text">
                                  {{details.status}} <br>
                                  {{details.type}} <br>
                                  Zone {{details.zone}} <br>
                                  {{details.sowing_month}} <br>
                                  {{details.harvest_estimate}}
                              </span>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                  <img src="./assets/crops/Progress of Crops Card_Chili.jpeg"
                      class="img-fluid rounded-start" alt="chili">
                  <span class="crops_date">05/01/2021</span>
              </div>
          </div>
      </div>
          `
        );
        $("#Chili").html(handlebarCompile({ details: data[0] }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Rosemary data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/progress_of_crops/rosemary`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
                <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">Rosemary</h5>
                            <div class="row my-5 mx-4">
                                <div class="col-6">
                                    <p class="card-text">
                                        Status: <br>
                                        Type: <br>
                                        Planting Zone: <br>
                                        Sowing Month: <br>
                                        Excepted Harvest Month:
                                    </p>
                                </div>
                                <div class="col-5">
                                    <span class="card-text">
                                        {{details.status}} <br>
                                        {{details.type}} <br>
                                        Zone {{details.zone}} <br>
                                        {{details.sowing_month}} <br>
                                        {{details.harvest_estimate}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                        <img src="./assets/crops/Progress of Crops Card_Rosemary.jpeg"
                            class="img-fluid rounded-start" alt="Rosemary">
                        <span class="crops_date">05/01/2021</span>
                    </div>
                </div>
            </div>
            `
        );
        $("#Rosemary").html(handlebarCompile({ details: data[0] }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Chrysanthemum data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/progress_of_crops/chrysanthemum`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
          <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">Chrysanthemum</h5>
                      <div class="row my-5 mx-4">
                          <div class="col-6">
                              <p class="card-text">
                                  Status: <br>
                                  Type: <br>
                                  Planting Zone: <br>
                                  Sowing Month: <br>
                                  Excepted Harvest Month:
                              </p>
                          </div>
                          <div class="col-5">
                              <span class="card-text">
                              {{details.status}} <br>
                              {{details.type}} <br>
                              Zone {{details.zone}} <br>
                              {{details.sowing_month}} <br>
                              {{details.harvest_estimate}}
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                  <img src="./assets/crops/Progress of Crops Card_Chrysanthemum.png"
                      class="img-fluid rounded-start" alt="Chrysanthemum">
                  <span class="crops_date">05/01/2021</span>
              </div>
          </div>
      </div>
              `
        );
        $("#Chrysanthemum").html(handlebarCompile({ details: data[0] }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Carrot data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/progress_of_crops/carrot`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
          <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">Carrot</h5>
                      <div class="row my-5 mx-4">
                          <div class="col-6">
                              <p class="card-text">
                                  Status: <br>
                                  Type: <br>
                                  Planting Zone: <br>
                                  Sowing Month: <br>
                                  Excepted Harvest Month:
                              </p>
                          </div>
                          <div class="col-5">
                          <span class="card-text">
                          {{details.status}} <br>
                          {{details.type}} <br>
                          Zone {{details.zone}} <br>
                          {{details.sowing_month}} <br>
                          {{details.harvest_estimate}}
                          </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                  <img src="./assets/crops/Progress of Crops Card_Carrot.jpeg"
                      class="img-fluid rounded-start" alt="Carrot">
                  <span class="crops_date">05/01/2021</span>
              </div>
          </div>
      </div>
                `
        );
        $("#Carrot").html(handlebarCompile({ details: data[0] }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Spinach data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/progress_of_crops/spinach`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
          <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">Spinach</h5>
                      <div class="row my-5 mx-4">
                          <div class="col-6">
                              <p class="card-text">
                                  Status: <br>
                                  Type: <br>
                                  Planting Zone: <br>
                                  Sowing Month: <br>
                                  Excepted Harvest Month:
                              </p>
                          </div>
                          <div class="col-5">
                              <span class="card-text">
                              {{details.status}} <br>
                              {{details.type}} <br>
                              Zone {{details.zone}} <br>
                              {{details.sowing_month}} <br>
                              {{details.harvest_estimate}}
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                  <img src="./assets/crops/Progress of Crops Card_Spinach.jpeg"
                      class="img-fluid rounded-start" alt="Spinach">
                  <span class="crops_date">05/01/2021</span>
              </div>
          </div>
      </div>
                  `
        );
        $("#Spinach").html(handlebarCompile({ details: data[0] }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Cherry Tomato data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/progress_of_crops/cherry_tomato`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
          <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">Cherry Tomato</h5>
                      <div class="row my-5 mx-4">
                          <div class="col-6">
                              <p class="card-text">
                                  Status: <br>
                                  Type: <br>
                                  Planting Zone: <br>
                                  Sowing Month: <br>
                                  Excepted Harvest Month:
                              </p>
                          </div>
                          <div class="col-5">
                              <span class="card-text">
                              {{details.status}} <br>
                              {{details.type}} <br>
                              Zone {{details.zone}} <br>
                              {{details.sowing_month}} <br>
                              {{details.harvest_estimate}}
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                  <img src="./assets/crops/Progress of Crops Card_Cherry Tomato.jpeg"
                      class="img-fluid rounded-start" alt="Cherry Tomato">
                  <span class="crops_date">05/01/2021</span>
              </div>
          </div>
      </div>
                    `
        );
        $("#CherryTomato").html(handlebarCompile({ details: data[0] }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Potato data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/progress_of_crops/potato`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
          <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">Potato</h5>
                      <div class="row my-5 mx-4">
                          <div class="col-6">
                              <p class="card-text">
                                  Status: <br>
                                  Type: <br>
                                  Planting Zone: <br>
                                  Sowing Month: <br>
                                  Excepted Harvest Month:
                              </p>
                          </div>
                          <div class="col-5">
                              <span class="card-text">
                              {{details.status}} <br>
                              {{details.type}} <br>
                              Zone {{details.zone}} <br>
                              {{details.sowing_month}} <br>
                              {{details.harvest_estimate}}
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                  <img src="./assets/crops/Progress of Crops Card_Potato.jpeg"
                      class="img-fluid rounded-start" alt="Potato">
                  <span class="crops_date">05/01/2021</span>
              </div>
          </div>
      </div>
                      `
        );
        $("#Potato").html(handlebarCompile({ details: data[0] }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Cherry Tomato data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/progress_of_crops/cherry_tomato`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">Cherry Tomato</h5>
                        <div class="row my-5 mx-4">
                            <div class="col-6">
                                <p class="card-text">
                                    Status: <br>
                                    Type: <br>
                                    Planting Zone: <br>
                                    Sowing Month: <br>
                                    Excepted Harvest Month:
                                </p>
                            </div>
                            <div class="col-5">
                                <span class="card-text">
                                {{details.status}} <br>
                                {{details.type}} <br>
                                Zone {{details.zone}} <br>
                                {{details.sowing_month}} <br>
                                {{details.harvest_estimate}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                    <img src="./assets/crops/Progress of Crops Card_Cherry Tomato.jpeg"
                        class="img-fluid rounded-start" alt="Cherry Tomato">
                    <span class="crops_date">05/01/2021</span>
                </div>
            </div>
        </div>
                      `
        );
        $("#CherryTomato").html(handlebarCompile({ details: data[0] }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Fig data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/progress_of_crops/fig`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
          <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">Fig</h5>
                      <div class="row my-5 mx-4">
                          <div class="col-6">
                              <p class="card-text">
                                  Status: <br>
                                  Type: <br>
                                  Planting Zone: <br>
                                  Sowing Month: <br>
                                  Excepted Harvest Month:
                              </p>
                          </div>
                          <div class="col-5">
                              <span class="card-text">
                              {{details.status}} <br>
                              {{details.type}} <br>
                              Zone {{details.zone}} <br>
                              {{details.sowing_month}} <br>
                              {{details.harvest_estimate}}
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                  <img src="./assets/crops/Progress of Crops Card_Fig.jpeg"
                      class="img-fluid rounded-start" alt="Fig">
                  <span class="crops_date">05/01/2021</span>
              </div>
          </div>
      </div>
                        `
        );
        $("#Fig").html(handlebarCompile({ details: data[0] }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Indian Lettuce data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/progress_of_crops/indian_lettuce`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
          <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">Indian Lettuce</h5>
                      <div class="row my-5 mx-4">
                          <div class="col-6">
                              <p class="card-text">
                                  Status: <br>
                                  Type: <br>
                                  Planting Zone: <br>
                                  Sowing Month: <br>
                                  Excepted Harvest Month:
                              </p>
                          </div>
                          <div class="col-5">
                              <span class="card-text">
                              {{details.status}} <br>
                              {{details.type}} <br>
                              Zone {{details.zone}} <br>
                              {{details.sowing_month}} <br>
                              {{details.harvest_estimate}}
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-sm-12 d-flex justify-content-end crops_img">
                  <img src="./assets/crops/Progress of Crops Card_Indian Lettuce.jpeg"
                      class="img-fluid rounded-start" alt="Indian Lettuce">
                  <span class="crops_date">05/01/2021</span>
              </div>
          </div>
      </div>
                          `
        );
        $("#IndianLettuce").html(handlebarCompile({ details: data[0] }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});
