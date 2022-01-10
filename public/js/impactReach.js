// Passing in Impact Reach (Visitors) data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));

  var visitors = $.get(`/api/${farmId}/impact_reach/visitors`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
            <img src="./assets/icons/Visitors icon.png" alt="visitor" class="impact_icon m-3">
            <div class="impact_info">
                <a href="#">
                <h2 class="impact_title">Visitors</h2>
                <h3 class="impact_data">{{visitors}}</h3>
                <h3 class="impact_freq">Weekly</h3></a>
            </div>
        `
        );
        let visits = 0;
        for (let i = 0; i < 8; i++) {
          visits += data[i].visit;
        }
        $("#visitors").html(
          handlebarCompile({ visitors: new Intl.NumberFormat().format(visits) })
        );
      })
      .catch((err) => {
        console.log(err);
        // window.location.reload();
      });
  });
});

// Passing in Impact Reach (Social Media) data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/impact_reach/social_media`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
            <img src="./assets/icons/Social Media.png" alt="social media" class="impact_icon m-3">
            <div class="impact_info">
                <a href="#">
                <h2 class="impact_title">Social Media</h2>
                <h3 class="impact_data">{{visitors}}</h3>
                <h3 class="impact_freq">Weekly</h3></a>
            </div>
        `
        );
        let visits = 0;
        for (let i = 0; i < 8; i++) {
          visits += data[i].visit;
        }
        $("#socialMedia").html(
          handlebarCompile({ visitors: new Intl.NumberFormat().format(visits) })
        );
      })
      .catch((err) => {
        console.log(err);
        // window.location.reload();
      });
  });
});

// Passing in Impact Reach (Food Donated) data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/impact_reach/food_donated`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
            <img src="./assets/icons/food donated icon.png" alt="food donated" class="impact_icon m-3">
            <div class="impact_info">
                <a href="#">
                <h2 class="impact_title">Food Donated</h2>
                <h3 class="impact_data">{{weight}}kg</h3>
                <h3 class="impact_freq">Monthly</h3></a>
            </div>
          `
        );
        let weight = 0;
        for (let i = 0; i < data.length; i++) {
          weight += parseFloat(data[i].food_donated);
        }
        $("#foodDonated").html(
          handlebarCompile({ weight: new Intl.NumberFormat().format(weight) })
        );
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});
