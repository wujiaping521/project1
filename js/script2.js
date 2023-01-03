let dom2 = document.getElementById("chart-container2");
let myChart2 = echarts.init(dom2, null, {
    renderer: "canvas",
    useDirtyRect: false,
});
let option2;

option2 = {
    title: {
        text: "NBA2022-2023赛季战绩前十球队总薪资",
        subtext: "美元",
    },
    xAxis: {
        type: "category",
        data: [
            "凯尔特人",
            "篮网",
            "雄鹿",
            "骑士",
            "76人",
            "掘金",
            "鹈鹕",
            "灰熊",
            "独行侠",
            "国王",
        ],
    },
    yAxis: {
        type: "value",
    },
    series: [{
        data: [
            170000000, 177500000, 173700000, 157460000, 153600000, 164860000,
            153600000, 124430000, 166690000, 137470000,
        ],
        type: "line",
    }, ],
};

if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2);
}

window.addEventListener("resize", myChart2.resize);