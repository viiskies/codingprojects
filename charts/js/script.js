var ctx = document.getElementById("myChart").getContext('2d');


var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Red"],
        datasets: [{
            label: '# of Votes',
            data: [3],
            backgroundColor: [

                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [

                'rgba(255, 159, 64, 1)'
            ]
        }]
    },
    options: {

    }
});
clearData(myChart);

document.getElementById("add-new-data").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var salary = document.getElementById("salary").value;

    var dataArray = [age, salary];


    addData(myChart, name, salary);
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
    
    // chart.data.datasets[1].data.push(data[1]);
    
 //    if ((data[1]) > 500) {
 //        chart.data.datasets[1].backgroundColor.push('green');
 //        console.log('more than 500');
 //    } else {
 //     chart.data.datasets[1].backgroundColor.push('red');
 // }

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
