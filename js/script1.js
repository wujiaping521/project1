let dom = document.getElementById("chart-container1");
console.log(dom);
let myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
});
let option;

option = {
    title: {
        text: "NBA2022-2023赛季奢侈税前十球队",
        subtext: "美元",
    },
    tooltip: {
        trigger: "axis",
    },
    legend: {
        data: ["奢侈税前十球队"],
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false,
            },
            magicType: {
                show: true,
                type: ["line", "bar"],
            },
            restore: {
                show: true,
            },
            saveAsImage: {
                show: true,
            },
        },
    },
    calculable: true,
    xAxis: [{
        type: "category",
        data: [
            "金州勇士队",
            "洛杉矶快船队",
            "布鲁克林篮网",
            "密尔沃基雄鹿队",
            "波士顿凯尔特人队",
            "菲尼克斯太阳队",
            "洛杉矶湖人",
            "达拉斯小牛队",
            "丹佛掘金队",
            "费城76人队",
        ],
        axisLabel: {
            interval: 0,
        },
    }, ],
    yAxis: [{
        type: "value",
    }, ],
    series: [{
        name: "排名",
        data: [
            164900000, 144700000, 90600000, 58200000, 45200000, 32600000, 32200000,
            27900000, 17600000, 5200000,
        ],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
        },
    }, ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);