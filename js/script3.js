let dom3 = document.getElementById("chart-container3");
let myChart3 = echarts.init(dom3, null, {
    renderer: "canvas",
    useDirtyRect: false,
});
let option3;

option3 = {
    title: {
        text: "当赛季得分前十的球员薪资",
        subtext: "美元",
        left: "center",
    },
    tooltip: {
        trigger: "item",
    },
    legend: {
        orient: "vertical",
        left: "left",
    },
    series: [{
        name: "球员薪资",
        type: "pie",
        radius: "50%",
        data: [{
                value: 37090000,
                name: "卢卡-东契奇",
            },
            {
                value: 33610000,
                name: "乔尔-恩比德",
            },
            {
                value: 42490000,
                name: "扬尼斯-阿德托昆博",
            },
            {
                value: 30350000,
                name: "杰森-塔图姆",
            },
            {
                value: 48070000,
                name: "吉尔杰斯-亚历山大",
            },
            {
                value: 30910000,
                name: "斯蒂芬-库里",
            },
            {
                value: 42970000,
                name: "凯文-杜兰特",
            },
            {
                value: 44470000,
                name: "勒布朗-詹姆斯",
            },
            {
                value: 30350000,
                name: "多诺万-米切尔",
            },
            {
                value: 37980000,
                name: "安东尼-戴维斯",
            },
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
            },
        },
    }, ],
};

if (option3 && typeof option3 === "object") {
    myChart3.setOption(option3);
}

window.addEventListener("resize", myChart3.resize);