// Passing in Farm Information data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var farmInfo = $.get(`/api/${farmId}/farm_information`);
  farmInfo.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `{{#each farmInfo}}
                <div class="row intro_info">

                <div class="col-4 ms-4">
                    <img src="./assets/logo.png" alt="logo">
                </div>

                <div class="col-6 ">
                    <h4 class="card-title text-left farm_info">Farm Information</h4>
                    <h1 class="text-left mt-5 farm_location" style="color:#3DA8A9">{{this.company_name}}</h1>
                </div>

            </div>
            <div class="row mx-4 intro_text">
                <div class="col-4 info-heading-container">
                    <p class="card-text ms-5 info-heading">
                        Name:<br>
                        Address :<br><br>
                        Size :<br>
                        Opened :<br>
                    </p>
                </div>
                <div class="col-6 info-content">
                    <span class="card-text">
                    {{this.farm_name}}<br>
                    {{this.address}}<br>
                    {{this.size}} square<br>
                    {{this.open_date}}
                    </span>
                </div>
            </div>
            {{/each}}
                  `
        );
        $("#farmInfo").html(handlebarCompile({ farmInfo: data }));
      })
      .catch((err) => {
        console.log(err);
        // window.location.reload();
      });
  });
});
