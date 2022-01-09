console.log("farm overview");

var pathname = window.location.pathname;
var farmId = parseInt(pathname.replace("/", ""));

async function a() {
  try {
    let countReadyToHarvest = 0;
    let countActiveGrowing = 0;
    let countReadyToSow = 0;
    await $.get(`/api/${farmId}/farm_overview/ready_to_harvest`).done(function (
      data
    ) {
      countReadyToHarvest += data.length;
    });

    await $.get(`/api/${farmId}/farm_overview/active_growing`).done(function (
      data
    ) {
      countActiveGrowing += data.length;
    });

    await $.get(`/api/${farmId}/farm_overview/ready_to_sow`).done(function (
      data
    ) {
      countReadyToSow += data.length;
    });

    let doughnut = document.getElementById("farmDoughnut").getContext("2d");
    let farmDoughnut = new Chart(doughnut, {
      type: "doughnut",
      data: {
        labels: ["Ready to harvest", "Active growing", "Ready to sow"],
        datasets: [
          {
            label: "Farm Overview",
            data: [countReadyToHarvest, countActiveGrowing, countReadyToSow],
            backgroundColor: ["#FDCE40", "#C4D878", "#B3DBCD"],
            hoverOffset: 4,
            weight: 70,
            clamp: false,
          },
        ],
      },
      options: {
        radius: "80%",
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            callbacks: {
              footer: (ttItem) => {
                let sum = 0;
                let dataArr = ttItem[0].dataset.data;
                dataArr.map((data) => {
                  sum += Number(data);
                });

                let percentage =
                  ((ttItem[0].parsed * 100) / sum).toFixed(2) + "%";
                return `${percentage}`;
              },
            },
          },
          datalabels: {
            formatter: (value, dnct1) => {
              let sum = 0;
              let dataArr = dnct1.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += Number(data);
              });

              let percentage = ((value * 100) / sum).toFixed(0) + "%";
              return percentage;
            },
            color: ["#F96C00", "#558F03", "#339369"],
            anchor: "end",
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  } catch (error) {
    return "error!";
  }
}
a();
