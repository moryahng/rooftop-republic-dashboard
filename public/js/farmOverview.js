// Passing in Farm Overview(Ready to Harvest) data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/farm_overview/ready_to_harvest`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
            <a href="#">
            <h2 class="overview_title">Ready to harvest</h2>
            <h3 class="overview_data">{{count}}</h3>
            <h3 class="overview_freq">Planters</h3></a>
          `
        );
        let count = data.length;
        $("#readyToHarvest").html(
          handlebarCompile({ count: new Intl.NumberFormat().format(count) })
        );
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Passing in Farm Overview(Active growing) data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/farm_overview/active_growing`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
            <a href="#">
            <h2 class="overview_title">Active growing</h2>
            <h3 class="overview_data">{{count}}</h3>
            <h3 class="overview_freq">Planters</h3></a>
          `
        );
        let count = data.length;
        $("#activeGrowing").html(
          handlebarCompile({ count: new Intl.NumberFormat().format(count) })
        );
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Passing in Farm Overview(Ready to sow) data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/farm_overview/ready_to_sow`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
            <a href="#">
            <h2 class="overview_title">Ready to sow</h2>
            <h3 class="overview_data">{{count}}</h3>
            <h3 class="overview_freq">Planters</h3></a>
            `
        );
        let count = data.length;
        $("#readyToSow").html(
          handlebarCompile({ count: new Intl.NumberFormat().format(count) })
        );
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});

// Passing in Farm Overview(Productivity) data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/farm_overview/ready_to_sow`);
  visitors.done(function (data) {
    let product = [];
    for (let i = 0; i < 6; i++) {
      product.push(data[i]);
    }
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
          <tr>
            <th>Crop</th>
            <th>Yield</th>
            <th>Date of Harvest</th>
            <th>Contribution</th>
          </tr>
            {{#each plant}}
                <tr>
                    <td>{{this.crop}}</td>
                    <td>{{this.yield}} kg</td>
                    <td>{{this.harvest_actual}}</td>
                    <td>{{this.contribution_type}}</td>
                </tr>
            {{/each}}
            `
        );
        $("#productivity").html(handlebarCompile({ plant: product }));
      })
      .catch((err) => {
        console.log(err);
        // window.location.reload();
      });
  });
});
