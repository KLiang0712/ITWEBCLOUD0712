var myChart = echarts.init(document.getElementById("tagcloud4"));

function createRandomItemStyle() {
  return {
    normal: {
      color:
        "rgb(" +
        [
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
        ].join(",") +
        ")",
    },
  };
}

myChart.setOption({
  title: {
    text: "My Cloud of Engineering Skills",
  },
  tooltip: {
    show: true,
  },
  series: [
    {
      name: "CAREER CRAFT CLOUD",
      type: "wordCloud",
      size: ["98%", "98%"],
      textRotation: [0, 45, 90, -45],
      textPadding: 0,
      autoSize: {
        enable: true,
        minSize: 14,
      },
      data: [
        {
          name: "web development",
          value: 978539,
          itemStyle: {
            normal: {
              color: "black",
            },
          },
        },
        {
          name: "python development",
          value: 907241,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "machine learning",
          value: 768696,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "html5",
          value: 859362,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "css3",
          value: 874624,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "javascript",
          value: 873411,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "data analytics",
          value: 440269,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "charts cdn-js",
          value: 633912,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "r studio",
          value: 376990,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "echarts",
          value: 86436,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "amcharts",
          value: 704738,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "jquery",
          value: 587613,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "highcharts",
          value: 358678,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "data visualizations",
          value: 289711,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "d3js",
          value: 77732,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "text analysis",
          value: 274692,
          itemStyle: createRandomItemStyle(),
        },
        {
          name: "react + redux",
          value: 271713,
          itemStyle: createRandomItemStyle(),
        },
      ],
    },
  ],
});
