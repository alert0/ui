/**
 * Created by Administrator on 2017/4/15 0015.
 */

var timeId = null;
/*var dataBase = eval('(' + $("input").val() + ')');
 console.log(eval('(' + $("input").val() + ')'))*/
/*
 var dataBase = [
 {
 litude: [121.4648, 31.2891],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '1',
 url: 'http://www.baidu.com/s?wd=1',
 name: '上海',
 value: 95
 },
 {
 litude: [110.3467, 41.4899],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '2',
 url: 'http://www.baidu.com/s?wd=2',
 name: '广州',
 value: 90
 },
 {
 litude: [108.479, 23.1152],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '3',
 url: 'http://www.baidu.com/s?wd=3',
 name: '大连',
 value: 80
 },
 {
 litude: [116.0046, 28.6633],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '4',
 url: 'http://www.baidu.com/s?wd=4',
 name: '南宁',
 value: 70
 },
 {
 litude: [122.2229, 39.4409],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '5',
 url: 'http://www.baidu.com/s?wd=5',
 name: '南昌',
 value: 60
 },
 {
 litude: [119.4543, 31.5582],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '6',
 url: 'http://www.baidu.com/s?wd=6',
 name: '拉萨',
 value: 50
 },
 {
 litude: [113.5107, 23.2196],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '7',
 url: 'http://www.baidu.com/s?wd=7',
 name: '长春',
 value: 40
 },
 {
 litude: [91.1865, 30.1465],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '8',
 url: 'http://www.baidu.com/s?wd=8',
 name: '包头',
 value: 30
 },
 {
 litude: [107.7539, 30.1904],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '9',
 url: 'http://www.baidu.com/s?wd=9',
 name: '重庆',
 value: 20
 },
 {
 litude: [125.8154, 44.2584],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '10',
 url: 'http://www.baidu.com/s?wd=10',
 name: '常州',
 value: 10
 },
 {
 litude: [-73.47, 42.4],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '11',
 url: 'http://www.baidu.com/s?wd=11',
 name: '奥尔巴尼',
 value: 95
 },
 {
 litude: [120.22, 36.04],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '12',
 url: 'http://www.baidu.com/s?wd=12',
 name: '青岛',
 value: 90
 },
 {
 litude: [116.23, 39.55],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '13',
 url: 'http://www.baidu.com/s?wd=13',
 name: '北京',
 value: 80
 },
 {
 litude: [35.3, 33.52],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '14',
 url: 'http://www.baidu.com/s?wd=14',
 name: '贝鲁特',
 value: 70
 },
 {
 litude: [-5.57, 54.36],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '15',
 url: 'http://www.baidu.com/s?wd=15',
 name: '贝尔法斯特',
 value: 60
 },
 {
 litude: [20.28, 44.49],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '16',
 url: 'http://www.baidu.com/s?wd=16',
 name: '贝尔格莱德',
 value: 50
 },
 {
 litude: [-88.46, 17.25],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '17',
 url: 'http://www.baidu.com/s?wd=17',
 name: '贝尔莫潘',
 value: 40
 },
 {
 litude: [13.2, 52.31],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '18',
 url: 'http://www.baidu.com/s?wd=18',
 name: '柏林',
 value: 30
 },
 {
 litude: [7.26, 46.57],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '19',
 url: 'http://www.baidu.com/s?wd=19',
 name: '伯尔尼',
 value: 20
 },
 {
 litude: [35.12, 31.42],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '20',
 url: 'http://www.baidu.com/s?wd=20',
 name: '伯利恒',
 value: 10
 },
 {
 litude: [85.5, 20.15],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '21',
 url: 'http://www.baidu.com/s?wd=21',
 name: '布巴内斯',
 value: 95
 },
 {
 litude: [-108.27, 45.47],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '22',
 url: 'http://www.baidu.com/s?wd=22',
 name: '比林斯',
 value: 90
 },
 {
 litude: [-1.55, 52.3],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '23',
 url: 'http://www.baidu.com/s?wd=23',
 name: '伯明翰',
 value: 80
 },
 {
 litude: [-86.55, 33.3],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '24',
 url: 'http://www.baidu.com/s?wd=24',
 name: '伯翰',
 value: 70
 },
 {
 litude: [74.46, 42.53],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '25',
 url: 'http://www.baidu.com/s?wd=25',
 name: '比什凯克',
 value: 60
 },
 {
 litude: [-100.47, 46.49],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '26',
 url: 'http://www.baidu.com/s?wd=26',
 name: '俾斯麦酒',
 value: 50
 },
 {
 litude: [-15.39, 11.52],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '27',
 url: 'http://www.baidu.com/s?wd=27',
 name: '比绍',
 value: 40
 },
 {
 litude: [-57.08, 51.26],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '28',
 url: 'http://www.baidu.com/s?wd=28',
 name: '勃朗峰萨伯隆',
 value: 30
 },
 {
 litude: [-74.05, 4.38],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '29',
 url: 'http://www.baidu.com/s?wd=29',
 name: '波哥大',
 value: 20
 },
 {
 litude: [-116.13, 43.37],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '30',
 url: 'http://www.baidu.com/s?wd=30',
 name: '博伊西',
 value: 10
 },
 {
 litude: [135.3, 34.4],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '31',
 url: 'http://www.baidu.com/s?wd=31',
 name: '大阪',
 value: 95
 },
 {
 litude: [139.44, 35.41],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '32',
 url: 'http://www.baidu.com/s?wd=32',
 name: '东京',
 value: 90
 },
 {
 litude: [158.39, 53.01],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '33',
 url: 'http://www.baidu.com/s?wd=33',
 name: '堪察加',
 value: 80
 },
 {
 litude: [130.21, 33.39],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '34',
 url: 'http://www.baidu.com/s?wd=34',
 name: '福冈',
 value: 70
 },
 {
 litude: [147.18, -42.54],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '35',
 url: 'http://www.baidu.com/s?wd=35',
 name: '荷伯特',
 value: 60
 },
 {
 litude: [160.12, -9.32],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '36',
 url: 'http://www.baidu.com/s?wd=36',
 name: '霍尼亚拉',
 value: 50
 },
 {
 litude: [151.17, -33.55],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '37',
 url: 'http://www.baidu.com/s?wd=37',
 name: '悉尼',
 value: 40
 },
 {
 litude: [149.08, -35.18],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '38',
 url: 'http://www.baidu.com/s?wd=38',
 name: '堪培拉',
 value: 30
 },
 {
 litude: [-47.57, -15.45],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '39',
 url: 'http://www.baidu.com/s?wd=39',
 name: '巴西利亚',
 value: 20
 },
 {
 litude: [-43.15, -22.54],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '40',
 url: 'http://www.baidu.com/s?wd=40',
 name: '里约热内卢',
 value: 10
 },
 {
 litude: [18.27, -33.55],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '41',
 url: 'http://www.baidu.com/s?wd=41',
 name: '开普敦',
 value: 50
 },
 {
 litude: [49.08, 55.45],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '42',
 url: 'http://www.baidu.com/s?wd=42',
 name: '喀山',
 value: 40
 },
 {
 litude: [-71.05, 42.19],
 dateTime: '2012-12-24  10:12',
 title: '研发中心',
 id: '43',
 url: 'http://www.baidu.com/s?wd=43',
 name: '波士顿',
 value: 30
 }
 ];
 */
var dataBase = [
    {
        litude: [120.4651, 36.3373],
        dateTime: '2012-12-24  10:12',
        title: '青岛',
        id: '1',
        url: 'http://www.baidu.com/s?wd=1',
        name: '青岛',
        value: 95
    },
    {
        litude: [139.44, 35.41],
        dateTime: '2012-12-24  10:12',
        title: '东京研发中心',
        id: '32',
        url: 'http://www.baidu.com/s?wd=32',
        name: '东京',
        value: 90
    },
    {
        litude: [132.48,34.37],
        dateTime: '2012-12-24  10:12',
        title: '广岛研发中心',
        id: '32',
        url: 'http://www.baidu.com/s?wd=32',
        name: '广岛',
        value: 90
    },
    {
        litude: [107.1826, 34.3433],
        dateTime: '2012-12-24  10:12',
        title: '宝鸡研发中心',
        id: '2',
        url: 'http://www.baidu.com/s?wd=1',
        name: '宝鸡',
        value: 95
    },
    {
        litude: [109.1052, 36.4252],
        dateTime: '2012-12-24  10:12',
        title: '延安研发中心',
        id: '3',
        url: 'http://www.baidu.com/s?wd=1',
        name: '延安',
        value: 95
    },
    {
        litude: [149.08, -35.18],
        dateTime: '2012-12-24  10:12',
        title: '堪培拉研发中心',
        id: '38',
        url: 'http://www.baidu.com/s?wd=38',
        name: '堪培拉',
        value: 30
    },
    {
        litude: [151.17, -33.55],
        dateTime: '2012-12-24  10:12',
        title: '悉尼研发中心',
        id: '37',
        url: 'http://www.baidu.com/s?wd=37',
        name: '悉尼',
        value: 40
    },
    {
        litude: [113.5107, 23.2196],
        dateTime: '2012-12-24  10:12',
        title: '广州研发中心',
        id: '5',
        url: 'http://www.baidu.com/s?wd=1',
        name: '广州',
        value: 95
    },
    {
        litude: [110.3893, 19.8516],
        dateTime: '2012-12-24  10:12',
        title: '海口研发中心',
        id: '5',
        url: 'http://www.baidu.com/s?wd=1',
        name: '海口',
        value: 95
    },
    {
        litude: [0, 51.5],
        dateTime: '2012-12-24  10:12',
        title: '伦敦研发中心',
        id: '5',
        url: 'http://www.baidu.com/s?wd=1',
        name: '伦敦',
        value: 95
    },
    {
        litude: [13.2, 52.31],
        dateTime: '2012-12-24  10:12',
        title: '柏林研发中心',
        id: '18',
        url: 'http://www.baidu.com/s?wd=18',
        name: '柏林',
        value: 30
    },
    {
        litude: [-71.05, 42.19],
        dateTime: '2012-12-24  10:12',
        title: '波士顿研发中心',
        id: '43',
        url: 'http://www.baidu.com/s?wd=43',
        name: '波士顿',
        value: 30
    },
    {
        litude: [-122.30,47.63],
        dateTime: '2012-12-24  10:12',
        title: '西雅图研发中心',
        id: '43',
        url: 'http://www.baidu.com/s?wd=43',
        name: '西雅图',
        value: 30
    },
    {
        litude: [37.53,55.62],
        dateTime: '2012-12-24  10:12',
        title: '莫斯科研发中心',
        id: '43',
        url: 'http://www.baidu.com/s?wd=43',
        name: '莫斯科',
        value: 30
    },
    {
        litude: [109.28,55.67],
        dateTime: '2012-12-24  10:12',
        title: '贝加尔湖研发中心',
        id: '43',
        url: 'http://www.baidu.com/s?wd=43',
        name: '贝加尔湖',
        value: 30
    },
    {
        litude: [31.13,29.97],
        dateTime: '2012-12-24  10:12',
        title: '开罗发中心',
        id: '43',
        url: 'http://www.baidu.com/s?wd=43',
        name: '开罗',
        value: 30
    },
    {
        litude: [25.54,-34.03],
        dateTime: '2012-12-24  10:12',
        title: '伊丽莎白港研发中心',
        id: '43',
        url: 'http://www.baidu.com/s?wd=43',
        name: '伊丽莎白港',
        value: 30
    },
    {
        litude: [-75.54,-74.03],
        dateTime: '2012-12-24  10:12',
        title: '秘鲁研发中心',
        id: '43',
        url: 'http://www.baidu.com/s?wd=43',
        name: '伊丽莎白港',
        value: 30
    },



];
function getGeoArr(data) {
    var geo = {};
    for (var i = 0; i < data.length; i++) {
        geo[data[i].name] = data[i].litude;
    }
    // console.log("geo"+geo);
    return geo;
}
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('mapFlat'));


var option = {
    // backgroundColor: "rgba(255,0,0,0)",
    color: ['gold', 'aqua', 'lime'],
    title: {
        show:false,
        text: '模拟迁徙',
        subtext: '数据纯属虚构',
        x: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    calculable: true,
    tooltip: {
        show: true,
        showContent: true,
        enterable: true,
        trigger: 'item',
//				        showDelay:100,
        hideDelay: 300,
        position: function (p) {
//                return [p[0] - 130, p[1] - 90];
            return [p[0] + 100, p[1] + 100];
        },
        padding: [0, 0, 0, 0],
//            width: 207,
//            height: 110,
//            backgroundColor: 'rgba(13,43,67,0.7)',
//            borderColor: 'rgba(31,120,214,1)',
        // params : 数组内容同模板变量，
        formatter: function (param) {
            //在这里是第一步
            console.log("param:" , param)
            $elList = [];
            //提示框的内容清空
            $echartTips.empty();
            //初始化轮播，就是将轮播定时器停止
            stopNewsShown();
            //调用轮播方法，参数主要是弹出点坐标
            var $el = addNewsElem(param.data);
            return '';
        },
    },
    legend: {
        show:false,
        // x: '50%',
        y: "bottom",
        data: ['研发类实验室', '中心实验室', '模块商实验室', '工厂实验室', '',
            '冰冷' , '洗涤', '家空', '商空', '热水器', '厨电', '电视'],
        selectedMode: 'multiple',
        selected: {
            '研发类实验室': true,
            '中心实验室': true,
            '模块商实验室': true,
            '工厂实验室': true,

            '冰冷': true,
            '洗涤': true,
            '家空': true,
            '商空': true,
            '热水器': true,
            '厨电': true,
            '电视': true
        },
        textStyle: {
            color: '#fff'
        }
    },
    // '冰冷' , '洗涤', '家空', '商空', '热水器', '厨电', '电视'
    // visualMap: {
    //     min: 20,
    //     max: 95,
    //     text:['High','Low'],
    //     realtime: false,
    //     calculable: true,
    //     inRange: {
    //         color: ['lightskyblue','yellow', 'orangered']
    //     }
    // },
    series: [
        {
        tooltip:{
          show:false
        },
        name: 'worldMap',
        type: 'map',
        roam: false,
        hoverable: false,
        mapType: 'world',
        mapLocation:{
            x:'right',
        },
            // baseLayer: {
            //     backgroundColor: 'rgba(20,143,204,.5)',
            // },

            itemStyle: {
            normal: {
                borderColor: '#8DF0FF',
                borderWidth: 0.2,
                areaStyle: {
                       color: 'rgba(20,143,204,0.6)'
                }
            }
        },
        data: [],
        markPoint: {
            symbol: 'emptyCircle',
            symbolSize: function (v) {
                return 3;;
                if (v > 15) {
                    return v / 52;
                } else {
                    return 3;;
                }
            },
            effect: {
                show: true,
                type: 'scale',//圈圈
                loop: true,
                shadowBlur: 0
            },
            itemStyle: {
                normal: {label: {show: false}},
                emphasis: {label: {show: false}}
            },
            data: dataBase
        },
        geoCoord: getGeoArr(dataBase)
    },
        {
            name: '研发类实验室',
            type: 'map',
            hoverable: false,
            mapType: 'world',
/*
            itemStyle: {
                normal: {
                    borderColor: 'rgba(100,149,237,1)',
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#1b1b1b'
                    }
                }
            },
*/
            data: [],
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 3;;
                    if (v > 15) {
                        return v / 12;
                    } else {
                        return 3;;
                    }
                },
                effect: {
                    show: true,
                    type: 'scale',//圈圈
                    loop: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {label: {show: false}},
                    emphasis: {label: {show: false}}
                },
                data: dataBase
            },
            markLine: {
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 5,
                    color: '#ff0',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        color:"rgba(20,143,204,.7)",
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 0
                        }
                    }
                },
                data: [
                    [{name: '青岛'}, {name: '西雅图', value: 95}],
                    [{name: '青岛'}, {name: '波士顿', value: 95}],
                    [{name: '西雅图'}, {name: '青岛', value: 95}],
                    [{name: '波士顿'}, {name: '青岛', value: 95}],
                ]
            },
        },
        {
            name: '中心实验室',
            type: 'map',
            roam: false,
            hoverable: false,
            mapType: 'world',
            mapLocation: {
                x: "0",
                // y: "top"
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(100,149,237,1)',
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#1b1b1b'
                    }
                }
            },
            data: [],
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 3;;
                    if (v > 15) {
                    return v / 52;
                } else {
                    return 3;;
                }
                },
                effect: {
                    show: true,
                    type: 'scale',//圈圈
                    loop: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {label: {show: false}},
                    emphasis: {label: {show: false}}
                },
                data: dataBase
            },
            markLine: {
                smooth: true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 5,
                    color: '#ff0',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        color:"rgba(20,143,204,.7)",
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 0
                        }
                    }
                },
                data: [
                    [{name: '青岛'}, {name: '悉尼', value: 95}],
                    [{name: '青岛'}, {name: '堪培拉', value: 95}],
                ]
            },
        },
        {
            name: '模块商实验室',
            type: 'map',
            roam: false,
            hoverable: false,
            mapType: 'world',
            mapLocation: {
                x: "0",
                // y: "top"
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(100,149,237,1)',
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#1b1b1b'
                    }
                }
            },
            data: [],
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 3;;
                    if (v > 15) {
                        return v / 52;
                    } else {
                        return 3;;
                    }
                },
                effect: {
                    show: true,
                    type: 'scale',//圈圈
                    loop: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {label: {show: false}},
                    emphasis: {label: {show: false}}
                },
                data: dataBase
            },
            markLine: {
                smooth: true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 5,
                    color: '#ff0',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        color:"rgba(20,143,204,.7)",
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 0
                        }
                    }
                },
                data: [
                    [{name: '青岛'}, {name: '东京', value: 95}],
                    [{name: '青岛'}, {name: '广岛', value: 95}]
                ]
            },
        },
        {
            name: '工厂实验室',
            type: 'map',
            roam: false,
            hoverable: false,
            mapType: 'world',
            mapLocation: {
                x: "0",
                // y: "top"
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(100,149,237,1)',
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#1b1b1b'
                    }
                }
            },
            data: [],
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 3;;
                    if (v > 15) {
                        return v / 12;
                    } else {
                        return 3;;
                    }
                },
                effect: {
                    show: true,
                    type: 'scale',//圈圈
                    loop: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {label: {show: false}},
                    emphasis: {label: {show: false}}
                },
                data: dataBase
            },
            markLine: {
                smooth: true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 5,
                    color: '#ff0',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        color:"rgba(20,143,204,.7)",
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 0
                        }
                    }
                },
                data: [
                    [{name: '青岛'}, {name: '伦敦', value: 95}],
                    [{name: '青岛'}, {name: '柏林', value: 95}]
                ]
            },
        },
        {
            name: '冰冷',
            type: 'map',
            roam: false,
            hoverable: false,
            mapType: 'world',
            mapLocation: {
                x: "0",
                // y: "top"
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(100,149,237,1)',
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#1b1b1b'
                    }
                }
            },
            data: [],
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 3;;
                    if (v > 15) {
                        return v / 12;
                    } else {
                        return 3;;
                    }
                },
                effect: {
                    show: true,
                    type: 'scale',//圈圈
                    loop: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {label: {show: false}},
                    emphasis: {label: {show: false}}
                },
                data: dataBase
            },
            markLine: {
                smooth: true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 5,
                    color: '#ff0',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        color:"rgba(20,143,204,.7)",
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 0
                        }
                    }
                },
                data: [
                    [{name: '青岛'}, {name: '莫斯科', value: 95}],
                    [{name: '青岛'}, {name: '贝加尔湖', value: 95}]
                ]
            },
        },
        {
            name: '洗涤',
            type: 'map',
            roam: false,
            hoverable: false,
            mapType: 'world',
            mapLocation:{
                // height:"80%",
                // x:'right'
            },

            data: [],
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 3;;
                    if (v > 15) {
                        return v / 12;
                    } else {
                        return 3;;
                    }
                },
                effect: {
                    show: true,
                    type: 'scale',//圈圈
                    loop: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {label: {show: false}},
                    emphasis: {label: {show: false}}
                },
                data: []
            },
            markLine: {
                smooth: true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 5,
                    color: '#ff0',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        color:"rgba(20,143,204,.7)",
                        borderWidth:1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 0
                        }
                    }
                },
                data: [
                    [{name: '青岛'}, {name: '广州', value: 95}],
                    [{name: '青岛'}, {name: '海口', value: 95}]
                ]
            },
        },
    ]
};

var showTopicIndex = 0;
/**
 * echartTips内的提示元素
 * @type {Array}
 */
var $elList = [];

/**
 * echart容器
 * @type {*|jQuery|HTMLElement}
 */
var $echart = $('#mapFlat');

/**
 * echart弹出新闻提示的容器
 * @type {*|jQuery|HTMLElement}
 */
var $echartTips = $('#echartTips');

/**
 * 提示渐隐时间
 * @type {number}
 */
var TIP_SETTIMEOUT_TIME = 3000;

function addNewsElem(news) {
    var $el = getTopicHtml(news);

    var divideLeft = $echart.width() / 2,
        divideTop = $echart.height() / 2;

    var left, top;
    // console.log("地点经纬度:" + news.litude);
    //getPosByGeo()：经纬度转成像素坐标
    var xypoint = myChart.chart.map.getPosByGeo("world", news.litude); //坐标
    // console.log("像素坐标————" + xypoint);
    left = xypoint[0];
    top = xypoint[1];


    $echartTips.append($el);

    $el.css({left: left, top: top});

    //分屏区域添加样式
    if (left > divideLeft) {
        $el.addClass('left');
    } else {
        $el.addClass('right');
    }

    if (top > divideTop) {
        $el.addClass('top');
    } else {
        $el.addClass('bottom');
    }

    //获取css中对应屏幕区域的相对偏移样式
    var $content = $el.children('.echart_content'),
        contentOffset = $content.offset();

    var offset = {
        left: contentOffset.left,
        top: contentOffset.top,
        height: $content.outerHeight(),
        width: $content.outerWidth()
    };

    if (false) {
        $el.remove();
    } else {
        $el.data('offset', offset);

        $elList.push($el);
        fadeOutElList();
        startNewsShown();
        $el.hover(function () {
            fadeInElList([$el]);
            stopNewsShown();
        }, function () {
            fadeOutElList();
            startNewsShown();
        });
        return $el;
    }
    return null;
}

/**
 * 每格一定时间显示的资讯及新闻
 */
function showNews() {
    if (document.hidden) {
        return;
    }
    $elList = [];
    //循环显示器
    showTopicIndex = addEl(dataBase, showTopicIndex);
    fadeOutElList();
    function addEl(list, index) {
        if (list.length === 0) {
            return;
        }
        for (var num = 0; num < 1; num++) {
            var $el = addNewsElem(list[index]);
            //console.log(index,num);
            if ($el) {
                if ((++index) >= list.length) {
                    return 0;
                }
            } else {
                return index;
            }
        }
        return index;
    }
}
function startNewsShown() {

    if (timeId === null) {
        console.log("---start---")
        timeId = setInterval(showNews, 3000);
    }
}
function listenAnimationEnd($el, fn) {
    //transitionend是css3完成过渡后触发的事件
    $el.on('transitionend', function () {
        $el.off('transitionend');
        fn.call();
    })
}
/**
 * 初始化资讯及新闻轮循
 */
function stopNewsShown() {
    clearInterval(timeId);
    timeId = null;
}

function getTopicHtml(currentPoint) {
    var city = currentPoint.name;
    var value = currentPoint.value;
    var time = currentPoint.dateTime;
    var title = currentPoint.title;
    var id = currentPoint.id;
    var url = "/YIJIAN/article?artid=";
    return $('<div class="echart_tip">' +
        '<div class="dialog_title echart_content">' +
        '<a title="' + title + '"  href="' + url + id + '" target="_blank" >' +
        '<span style="color:#ffz;font-size:16px;text-shadow:2px 2px 2px rgba(0,0,0,0.9);">' + title + '</span>' +
        '</a>' + city + '&nbsp;&nbsp' + time +
        '</div>' +
        '<div class="echart_tip_arrow">' +
        '<div class="echart_tip_line"></div>' +
        '<div class="echart_tip_head"></div>' +
        '</div>' +
        '</div>');
}
/**
 * 渐隐 elList的每一项
 */
function fadeOutElList() {
    $.each($elList, function (i, $el) {
        $el.removeClass('fade_in').addClass('fade_out');
        listenAnimationEnd($el, function () {
            $el.remove();
        });
    });

    $elList = [];
}
/**
 * 渐入 elList
 */
function fadeInElList($list) {
    $.each($list, function (i, $el) {
        $el.off('transitionend');
        $el.removeClass('fade_out').addClass('fade_in');
    });
    $elList = $list;
}
startNewsShown();
myChart.setOption(option);
$(window).resize(function () {
    myChart.resize();
});