let dom4 = document.getElementById("chart-container4");
let myChart4 = echarts.init(dom4, null, {
    renderer: "canvas",
    useDirtyRect: false,
});

let option4;

option4 = {
    title: {
        text: "当赛季薪资排名前十的球员",
        subtext: "美元",
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "cross",
            label: {
                backgroundColor: "#6a7985",
            },
        },
    },
    legend: {
        data: ["薪资"],
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        data: [
            "克莱汤普森",
            "保罗乔治",
            "达米安利拉德",
            "扬尼斯·阿德托昆博",
            "勒布朗詹姆斯",
            "凯文杜兰特",
            "拉塞尔威斯布鲁克",
            "约翰沃尔",
            "詹姆斯哈登",
            "斯蒂芬库里",
        ],
        axisLabel: {
            interval: 0,
        },
    }, ],
    yAxis: [{
        type: "value",
    }, ],
    series: [{
        name: "美元",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
            focus: "series",
        },
        data: [
            37980000, 39340000, 39340000, 39340000, 41180000, 42010000, 44210000,
            44310000, 44310000, 45780000,
        ],
    }, ],
};

if (option4 && typeof option4 === "object") {
    myChart4.setOption(option4);
}

window.addEventListener("resize", myChart4.resize);