let ctx = document.getElementById('impactChart');
let impactChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1/1', '2/1', '3/1', '4/1', '5/1', '6/1', '7/1'],
        datasets: [{
            label: 'Visitor',
            data: [350, 360, 370, 220, 250, 500, 400],
            borderColor: [
                '#58BFBF'
            ],
            borderWidth: 2,
            backgroundColor: 'rgba(88, 191, 191, 0.2)',
            fill: true,
        }]
    },
    options: {
        plugins:{
        legend: {
            display: false
        }
    }}
});