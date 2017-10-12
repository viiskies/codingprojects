var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    datasets: [{
        yAxisID: 'first-y-axis',
        label: 'Amzius',
        data: [10, 20, 30, 40],
        backgroundColor: [ 'rgba(255, 99, 132, 0.2)']
    }, 
    {
        yAxisID: 'second-y-axis',
        label: 'Alga',
        data: [50, 50, 50, 50],
        backgroundColor: [],

          // Changes this dataset to become a line
          type: 'bar'
      }],
      labels: ['January', 'February', 'March', 'April']
  },
  options: {

      scales: {
        yAxes: [{
            id: 'first-y-axis',
            type: 'linear',
            ticks: {
                    beginAtZero:true
                }
        }, {
            id: 'second-y-axis',
            type: 'linear',
            ticks: {
                    beginAtZero:true
                }
        }]
    }
}

});
clearData(myChart);

document.getElementById("add-new-data").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var salary = document.getElementById("salary").value;

    var dataArray = [age, salary];


    addData(myChart, name, dataArray);
    // console.log(dataArray[1]);

})


document.getElementById("remove-data").addEventListener("click", function() {
    removeData(myChart);

})

document.getElementById("clear-data").addEventListener("click", function() {
    clearData(myChart);

})



function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data[0]);
    chart.data.datasets[0].backgroundColor.push('rgba(255, 99, 132, 0.2)');
    
    chart.data.datasets[1].data.push(data[1]);
    
    if ((data[1]) > 500) {
        chart.data.datasets[1].backgroundColor.push('green');
        console.log('more than 500');
    } else {
       chart.data.datasets[1].backgroundColor.push('red');
    }

    chart.update();

}

// function addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }


function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function clearData(chart) {
    chart.data.labels = [];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [];
    });
    chart.update();
}
