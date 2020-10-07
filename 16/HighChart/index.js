document.addEventListener("DOMContentLoaded", ()=>{
    Highcharts.chart('container',{
        chart:{
            type: "area"
        },
        xAxis:{
            categories:['Apples', 'Bananas', 'Mongoes']
        },
        series:[
            {
                name:'John',
                data:[1, 2, 3]
            },
            {
                name:'Jane',
                data:[2, 4, 8]
            }
        ]
    })
})