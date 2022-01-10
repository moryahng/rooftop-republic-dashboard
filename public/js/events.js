// Passing in Event data
$(() => {
  var pathname = window.location.pathname;
  var farmId = parseInt(pathname.replace("/", ""));
  var visitors = $.get(`/api/${farmId}/events`);
  visitors.done(function (data) {
    axios
      .get(`/${farmId}`)
      .then(() => {
        let handlebarCompile = Handlebars.compile(
          `
            <div class="row">
            <div class="col">
                <h1 class="pt-5">Events</h1>
            </div>
            <div class="col d-flex justify-content-end py-3">
                <button class="m-4" style="background: #42C1C6; color: white;">Upcoming</button>
                <button class="m-4">Past</button>
            </div>
        </div>
        <div class="row">
            <div class="col create_event m-2">
                <div class="card" style="width: 18rem; height: 410px;">
                    <div class="text-center">
                        <img src="./assets/icons/Add Event Default.png" alt="add event" class="add_event_icon">
                        <h2 class="">Create New Event</h2>
                        <div class="event_button">
                        </div>
                    </div>
                </div>
            </div>

            {{#each event}}
                    <div class="summer_drink col m-2">
                    <div class="card" style="width: 18rem; ">
                        <div class="card_top">
                            <img src="./assets/Event_{{this.name}}.jpeg" class="card-img-top"
                                alt="workshop">
                            <h3 class="event_type" id="{{this.type}}">{{this.type}}</h3>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title text-center p-2">{{this.name}}</h2>
                            <div class="p-1">
                                <i class="far fa-calendar-alt"> </i>
                                <span class="card-text text-start py-1">Date <span class="span_bold text-start p-3">{{this.start_date}}</span>
                            </div>
                            <div class="p-1">
                                <i class="far fa-clock"></i>
                                <span class="card-text text-start py-1">Time <span
                                        class="span_bold text-start p-3">{{this.start_time}} - {{this.end_time}}</span></span>
                            </div>
                            <div class="text-center">
                                {{#if publish}}
                                <p class=" span_bold pt-1" style="color:#42C1C6;">
                                    <i class="far fa-check-circle text-center" style="color:#42C1C6;"></i>Published
                                </p>
                                {{else}}
                                <p class=" span_bold pt-1" style="color:#212529;">
                                    <i class="far fa-edit text-center" style="color:grey"></i><span style="color:grey">Draft</span>
                                </p>
                                {{/if}}
                                <a href="#" class="btn btn-primary">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            {{/each}}
        `
        );
        $("#events").html(handlebarCompile({ event: data }));
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  });
});
