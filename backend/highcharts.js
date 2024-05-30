Highcharts.chart("tagcloud3", {
    chart: {
        type: "wordcloud",
    },
    title: {
        text: "My Word Cloud Engineering",
    },

    series: [
        {
            data: [
                ["python", 6],
                ["r-studio", 6],
                ["highcharts", 6],
                ["echarts", 6],
                ["amcharts4", 6],
                ["javascript", 10],
                ["html5", 10],
                ["css3", 10],
                ["highcharts", 10],
                ["jquery", 10],
            ],
        },
    ],
});
