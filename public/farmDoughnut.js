console.log("farm overview")

let doughnut = document.getElementById('farmDoughnut').getContext('2d');
let farmDoughnut = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: [
          'Ready to harvest',
          'Active growing',
          'Ready to sow'
        ],
        datasets: [{
          label: 'Farm Overview',
          data: [48, 138, 114],
          backgroundColor: [
            '#FDCE40',
            '#C4D878',
            '#B3DBCD'
          ],
          hoverOffset: 4
        }]
      },
    options: {
        plugins:{
            legend: {
                display: false
            }
        }
    }
});
