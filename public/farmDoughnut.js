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
          hoverOffset: 4,
          weight: 70,
          clamp: false,
        }]
      },
    options: {
        radius: '80%',
        plugins:{
            legend: {
                display: false
            },              
            tooltip: {
              enabled: true,
              callbacks: {
                footer: (ttItem) => {
                  let sum = 0;
                  let dataArr = ttItem[0].dataset.data;
                  dataArr.map(data => {
                    sum += Number(data);
                  });
      
                  let percentage = (ttItem[0].parsed * 100 / sum).toFixed(2) + '%';
                  return `${percentage}`;
                }
              }
            },
            datalabels: {
              formatter: (value, dnct1) => {
                let sum = 0;
                let dataArr = dnct1.chart.data.datasets[0].data;
                dataArr.map(data => {
                  sum += Number(data);
                });
      
                let percentage = (value * 100 / sum).toFixed(0) + '%';
                return percentage;
              },
              color: [
                '#F96C00',
                '#558F03',
                '#339369'
              ],
              anchor: 'end',
            }
            
        }
    },
    plugins: [ChartDataLabels]
});
