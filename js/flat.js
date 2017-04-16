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



];
function getGeoArr(data) {
    var geo = {};
    for (var i = 0; i < data.length; i++) {
        geo[data[i].name] = data[i].litude;
    }
    console.log("geo"+geo);
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
    calculable: false,
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
        // orient: 'vertical',
        x: 'center',
        y: "bottom",
        data: ['美国', '澳洲', '日本', '欧洲', '','俄罗斯' , '非洲', '拉丁美洲', '国内'],
        selectedMode: 'multiple',
        selected: {
            '美国': false,
            '澳洲': false,
            '日本': false,
            '欧洲': true,

            '俄罗斯': true,
            '非洲': false,
            '印度': false,
            '国内': false
        },
        textStyle: {
            color: '#fff'
        }
    },

    series: [
        {
        tooltip:{
          show:false
        },
        name: 'zy_hotpoint',
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
                if (v > 15) {
                    return v / 12;
                } else {
                    return 1;
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
        /*
         markLine: {
         smooth: true,
         symbol: ['none', 'circle'],
         symbolSize: 1,
         itemStyle: {
         normal: {
         color: '#fff',
         borderWidth: 1,
         borderColor: 'rgba(30,144,255,0.5)'
         }
         },
         /!*
         data: [
         [{name: '北京'}, {name: '包头'}],
         [{name: '北京'}, {name: '北海'}],
         [{name: '北京'}, {name: '广州'}],
         [{name: '北京'}, {name: '郑州'}],
         [{name: '北京'}, {name: '长春'}],
         [{name: '北京'}, {name: '长治'}],
         [{name: '北京'}, {name: '重庆'}],
         [{name: '北京'}, {name: '长沙'}],
         [{name: '北京'}, {name: '成都'}],
         [{name: '北京'}, {name: '常州'}],
         [{name: '北京'}, {name: '丹东'}],
         [{name: '北京'}, {name: '大连'}],
         [{name: '北京'}, {name: '东营'}],
         [{name: '北京'}, {name: '延安'}],
         [{name: '北京'}, {name: '福州'}],
         [{name: '北京'}, {name: '海口'}],
         [{name: '北京'}, {name: '呼和浩特'}],
         [{name: '北京'}, {name: '合肥'}],
         [{name: '北京'}, {name: '杭州'}],
         [{name: '北京'}, {name: '哈尔滨'}],
         [{name: '北京'}, {name: '舟山'}],
         [{name: '北京'}, {name: '银川'}],
         [{name: '北京'}, {name: '衢州'}],
         [{name: '北京'}, {name: '南昌'}],
         [{name: '北京'}, {name: '昆明'}],
         [{name: '北京'}, {name: '贵阳'}],
         [{name: '北京'}, {name: '兰州'}],
         [{name: '北京'}, {name: '拉萨'}],
         [{name: '北京'}, {name: '连云港'}],
         [{name: '北京'}, {name: '临沂'}],
         [{name: '北京'}, {name: '柳州'}],
         [{name: '北京'}, {name: '宁波'}],
         [{name: '北京'}, {name: '南京'}],
         [{name: '北京'}, {name: '南宁'}],
         [{name: '北京'}, {name: '南通'}],
         [{name: '北京'}, {name: '上海'}],
         [{name: '北京'}, {name: '沈阳'}],
         [{name: '北京'}, {name: '西安'}],
         [{name: '北京'}, {name: '汕头'}],
         [{name: '北京'}, {name: '深圳'}],
         [{name: '北京'}, {name: '青岛'}],
         [{name: '北京'}, {name: '济南'}],
         [{name: '北京'}, {name: '太原'}],
         [{name: '北京'}, {name: '乌鲁木齐'}],
         [{name: '北京'}, {name: '潍坊'}],
         [{name: '北京'}, {name: '威海'}],
         [{name: '北京'}, {name: '温州'}],
         [{name: '北京'}, {name: '武汉'}],
         [{name: '北京'}, {name: '无锡'}],
         [{name: '北京'}, {name: '厦门'}],
         [{name: '北京'}, {name: '西宁'}],
         [{name: '北京'}, {name: '徐州'}],
         [{name: '北京'}, {name: '烟台'}],
         [{name: '北京'}, {name: '盐城'}],
         [{name: '北京'}, {name: '珠海'}],
         [{name: '上海'}, {name: '包头'}],
         [{name: '上海'}, {name: '北海'}],
         [{name: '上海'}, {name: '广州'}],
         [{name: '上海'}, {name: '郑州'}],
         [{name: '上海'}, {name: '长春'}],
         [{name: '上海'}, {name: '重庆'}],
         [{name: '上海'}, {name: '长沙'}],
         [{name: '上海'}, {name: '成都'}],
         [{name: '上海'}, {name: '丹东'}],
         [{name: '上海'}, {name: '大连'}],
         [{name: '上海'}, {name: '福州'}],
         [{name: '上海'}, {name: '海口'}],
         [{name: '上海'}, {name: '呼和浩特'}],
         [{name: '上海'}, {name: '合肥'}],
         [{name: '上海'}, {name: '哈尔滨'}],
         [{name: '上海'}, {name: '舟山'}],
         [{name: '上海'}, {name: '银川'}],
         [{name: '上海'}, {name: '南昌'}],
         [{name: '上海'}, {name: '昆明'}],
         [{name: '上海'}, {name: '贵阳'}],
         [{name: '上海'}, {name: '兰州'}],
         [{name: '上海'}, {name: '拉萨'}],
         [{name: '上海'}, {name: '连云港'}],
         [{name: '上海'}, {name: '临沂'}],
         [{name: '上海'}, {name: '柳州'}],
         [{name: '上海'}, {name: '宁波'}],
         [{name: '上海'}, {name: '南宁'}],
         [{name: '上海'}, {name: '北京'}],
         [{name: '上海'}, {name: '沈阳'}],
         [{name: '上海'}, {name: '秦皇岛'}],
         [{name: '上海'}, {name: '西安'}],
         [{name: '上海'}, {name: '石家庄'}],
         [{name: '上海'}, {name: '汕头'}],
         [{name: '上海'}, {name: '深圳'}],
         [{name: '上海'}, {name: '青岛'}],
         [{name: '上海'}, {name: '济南'}],
         [{name: '上海'}, {name: '天津'}],
         [{name: '上海'}, {name: '太原'}],
         [{name: '上海'}, {name: '乌鲁木齐'}],
         [{name: '上海'}, {name: '潍坊'}],
         [{name: '上海'}, {name: '威海'}],
         [{name: '上海'}, {name: '温州'}],
         [{name: '上海'}, {name: '武汉'}],
         [{name: '上海'}, {name: '厦门'}],
         [{name: '上海'}, {name: '西宁'}],
         [{name: '上海'}, {name: '徐州'}],
         [{name: '上海'}, {name: '烟台'}],
         [{name: '上海'}, {name: '珠海'}],
         [{name: '广州'}, {name: '北海'}],
         [{name: '广州'}, {name: '郑州'}],
         [{name: '广州'}, {name: '长春'}],
         [{name: '广州'}, {name: '重庆'}],
         [{name: '广州'}, {name: '长沙'}],
         [{name: '广州'}, {name: '成都'}],
         ],
         *!/
         data: []
         },
         */
        /*
         geoCoord: {
         '上海': [121.4648, 31.2891],
         '东莞': [113.8953, 22.901],
         '东营': [118.7073, 37.5513],
         '中山': [113.4229, 22.478],
         '临汾': [111.4783, 36.1615],
         '临沂': [118.3118, 35.2936],
         '丹东': [124.541, 40.4242],
         '丽水': [119.5642, 28.1854],
         '乌鲁木齐': [87.9236, 43.5883],
         '佛山': [112.8955, 23.1097],
         '保定': [115.0488, 39.0948],
         '兰州': [103.5901, 36.3043],
         '包头': [110.3467, 41.4899],
         '北京': [116.4551, 40.2539],
         '北海': [109.314, 21.6211],
         '南京': [118.8062, 31.9208],
         '南宁': [108.479, 23.1152],
         '南昌': [116.0046, 28.6633],
         '南通': [121.1023, 32.1625],
         '厦门': [118.1689, 24.6478],
         '台州': [121.1353, 28.6688],
         '合肥': [117.29, 32.0581],
         '呼和浩特': [111.4124, 40.4901],
         '咸阳': [108.4131, 34.8706],
         '哈尔滨': [127.9688, 45.368],
         '唐山': [118.4766, 39.6826],
         '嘉兴': [120.9155, 30.6354],
         '大同': [113.7854, 39.8035],
         '大连': [122.2229, 39.4409],
         '天津': [117.4219, 39.4189],
         '太原': [112.3352, 37.9413],
         '威海': [121.9482, 37.1393],
         '宁波': [121.5967, 29.6466],
         '宝鸡': [107.1826, 34.3433],
         '宿迁': [118.5535, 33.7775],
         '常州': [119.4543, 31.5582],
         '广州': [113.5107, 23.2196],
         '廊坊': [116.521, 39.0509],
         '延安': [109.1052, 36.4252],
         '张家口': [115.1477, 40.8527],
         '徐州': [117.5208, 34.3268],
         '德州': [116.6858, 37.2107],
         '惠州': [114.6204, 23.1647],
         '成都': [103.9526, 30.7617],
         '扬州': [119.4653, 32.8162],
         '承德': [117.5757, 41.4075],
         '拉萨': [91.1865, 30.1465],
         '无锡': [120.3442, 31.5527],
         '日照': [119.2786, 35.5023],
         '昆明': [102.9199, 25.4663],
         '杭州': [119.5313, 29.8773],
         '枣庄': [117.323, 34.8926],
         '柳州': [109.3799, 24.9774],
         '株洲': [113.5327, 27.0319],
         '武汉': [114.3896, 30.6628],
         '汕头': [117.1692, 23.3405],
         '江门': [112.6318, 22.1484],
         '沈阳': [123.1238, 42.1216],
         '沧州': [116.8286, 38.2104],
         '河源': [114.917, 23.9722],
         '泉州': [118.3228, 25.1147],
         '泰安': [117.0264, 36.0516],
         '泰州': [120.0586, 32.5525],
         '济南': [117.1582, 36.8701],
         '济宁': [116.8286, 35.3375],
         '海口': [110.3893, 19.8516],
         '淄博': [118.0371, 36.6064],
         '淮安': [118.927, 33.4039],
         '深圳': [114.5435, 22.5439],
         '清远': [112.9175, 24.3292],
         '温州': [120.498, 27.8119],
         '渭南': [109.7864, 35.0299],
         '湖州': [119.8608, 30.7782],
         '湘潭': [112.5439, 27.7075],
         '滨州': [117.8174, 37.4963],
         '潍坊': [119.0918, 36.524],
         '烟台': [120.7397, 37.5128],
         '玉溪': [101.9312, 23.8898],
         '珠海': [113.7305, 22.1155],
         '盐城': [120.2234, 33.5577],
         '盘锦': [121.9482, 41.0449],
         '石家庄': [114.4995, 38.1006],
         '福州': [119.4543, 25.9222],
         '秦皇岛': [119.2126, 40.0232],
         '绍兴': [120.564, 29.7565],
         '聊城': [115.9167, 36.4032],
         '肇庆': [112.1265, 23.5822],
         '舟山': [122.2559, 30.2234],
         '苏州': [120.6519, 31.3989],
         '莱芜': [117.6526, 36.2714],
         '菏泽': [115.6201, 35.2057],
         '营口': [122.4316, 40.4297],
         '葫芦岛': [120.1575, 40.578],
         '衡水': [115.8838, 37.7161],
         '衢州': [118.6853, 28.8666],
         '西宁': [101.4038, 36.8207],
         '西安': [109.1162, 34.2004],
         '贵阳': [106.6992, 26.7682],
         '连云港': [119.1248, 34.552],
         '邢台': [114.8071, 37.2821],
         '邯郸': [114.4775, 36.535],
         '郑州': [113.4668, 34.6234],
         '鄂尔多斯': [108.9734, 39.2487],
         '重庆': [107.7539, 30.1904],
         '金华': [120.0037, 29.1028],
         '铜川': [109.0393, 35.1947],
         '银川': [106.3586, 38.1775],
         '镇江': [119.4763, 31.9702],
         '长春': [125.8154, 44.2584],
         '长沙': [113.0823, 28.2568],
         '长治': [112.8625, 36.4746],
         '阳泉': [113.4778, 38.0951],
         '青岛': [120.4651, 36.3373],
         '韶关': [113.7964, 24.7028]
         }
         */
    },
        {
            name: '美国',
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
                    if (v > 15) {
                        return v / 12;
                    } else {
                        return 1;
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
                smooth:false,
                effect : {
                    show: true,
                    scaleSize: 2,
                    period: 3,
                    color: '#ff0',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        color:"rgba(255,255,0,.2)",
                        borderWidth:.5,
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
            /*
             geoCoord: {
             '上海': [121.4648, 31.2891],
             '东莞': [113.8953, 22.901],
             '东营': [118.7073, 37.5513],
             '中山': [113.4229, 22.478],
             '临汾': [111.4783, 36.1615],
             '临沂': [118.3118, 35.2936],
             '丹东': [124.541, 40.4242],
             '丽水': [119.5642, 28.1854],
             '乌鲁木齐': [87.9236, 43.5883],
             '佛山': [112.8955, 23.1097],
             '保定': [115.0488, 39.0948],
             '兰州': [103.5901, 36.3043],
             '包头': [110.3467, 41.4899],
             '北京': [116.4551, 40.2539],
             '北海': [109.314, 21.6211],
             '南京': [118.8062, 31.9208],
             '南宁': [108.479, 23.1152],
             '南昌': [116.0046, 28.6633],
             '南通': [121.1023, 32.1625],
             '厦门': [118.1689, 24.6478],
             '台州': [121.1353, 28.6688],
             '合肥': [117.29, 32.0581],
             '呼和浩特': [111.4124, 40.4901],
             '咸阳': [108.4131, 34.8706],
             '哈尔滨': [127.9688, 45.368],
             '唐山': [118.4766, 39.6826],
             '嘉兴': [120.9155, 30.6354],
             '大同': [113.7854, 39.8035],
             '大连': [122.2229, 39.4409],
             '天津': [117.4219, 39.4189],
             '太原': [112.3352, 37.9413],
             '威海': [121.9482, 37.1393],
             '宁波': [121.5967, 29.6466],
             '宝鸡': [107.1826, 34.3433],
             '宿迁': [118.5535, 33.7775],
             '常州': [119.4543, 31.5582],
             '广州': [113.5107, 23.2196],
             '廊坊': [116.521, 39.0509],
             '延安': [109.1052, 36.4252],
             '张家口': [115.1477, 40.8527],
             '徐州': [117.5208, 34.3268],
             '德州': [116.6858, 37.2107],
             '惠州': [114.6204, 23.1647],
             '成都': [103.9526, 30.7617],
             '扬州': [119.4653, 32.8162],
             '承德': [117.5757, 41.4075],
             '拉萨': [91.1865, 30.1465],
             '无锡': [120.3442, 31.5527],
             '日照': [119.2786, 35.5023],
             '昆明': [102.9199, 25.4663],
             '杭州': [119.5313, 29.8773],
             '枣庄': [117.323, 34.8926],
             '柳州': [109.3799, 24.9774],
             '株洲': [113.5327, 27.0319],
             '武汉': [114.3896, 30.6628],
             '汕头': [117.1692, 23.3405],
             '江门': [112.6318, 22.1484],
             '沈阳': [123.1238, 42.1216],
             '沧州': [116.8286, 38.2104],
             '河源': [114.917, 23.9722],
             '泉州': [118.3228, 25.1147],
             '泰安': [117.0264, 36.0516],
             '泰州': [120.0586, 32.5525],
             '济南': [117.1582, 36.8701],
             '济宁': [116.8286, 35.3375],
             '海口': [110.3893, 19.8516],
             '淄博': [118.0371, 36.6064],
             '淮安': [118.927, 33.4039],
             '深圳': [114.5435, 22.5439],
             '清远': [112.9175, 24.3292],
             '温州': [120.498, 27.8119],
             '渭南': [109.7864, 35.0299],
             '湖州': [119.8608, 30.7782],
             '湘潭': [112.5439, 27.7075],
             '滨州': [117.8174, 37.4963],
             '潍坊': [119.0918, 36.524],
             '烟台': [120.7397, 37.5128],
             '玉溪': [101.9312, 23.8898],
             '珠海': [113.7305, 22.1155],
             '盐城': [120.2234, 33.5577],
             '盘锦': [121.9482, 41.0449],
             '石家庄': [114.4995, 38.1006],
             '福州': [119.4543, 25.9222],
             '秦皇岛': [119.2126, 40.0232],
             '绍兴': [120.564, 29.7565],
             '聊城': [115.9167, 36.4032],
             '肇庆': [112.1265, 23.5822],
             '舟山': [122.2559, 30.2234],
             '苏州': [120.6519, 31.3989],
             '莱芜': [117.6526, 36.2714],
             '菏泽': [115.6201, 35.2057],
             '营口': [122.4316, 40.4297],
             '葫芦岛': [120.1575, 40.578],
             '衡水': [115.8838, 37.7161],
             '衢州': [118.6853, 28.8666],
             '西宁': [101.4038, 36.8207],
             '西安': [109.1162, 34.2004],
             '贵阳': [106.6992, 26.7682],
             '连云港': [119.1248, 34.552],
             '邢台': [114.8071, 37.2821],
             '邯郸': [114.4775, 36.535],
             '郑州': [113.4668, 34.6234],
             '鄂尔多斯': [108.9734, 39.2487],
             '重庆': [107.7539, 30.1904],
             '金华': [120.0037, 29.1028],
             '铜川': [109.0393, 35.1947],
             '银川': [106.3586, 38.1775],
             '镇江': [119.4763, 31.9702],
             '长春': [125.8154, 44.2584],
             '长沙': [113.0823, 28.2568],
             '长治': [112.8625, 36.4746],
             '阳泉': [113.4778, 38.0951],
             '青岛': [120.4651, 36.3373],
             '韶关': [113.7964, 24.7028]
             }
             *///geocoord
        },
        {
            name: '澳洲',
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
                    if (v > 15) {
                        return v / 12;
                    } else {
                        return 1;
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
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
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
            name: '日本',
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
                    if (v > 15) {
                        return v / 12;
                    } else {
                        return 1;
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
                effect: {
                    show: true,
                    scaleSize: 2,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
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
            name: '欧洲',
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
                    if (v > 15) {
                        return v / 12;
                    } else {
                        return 1;
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
                effect: {
                    show: true,
                    scaleSize: 2,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
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
            name: '俄罗斯',
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
                    if (v > 15) {
                        return v / 12;
                    } else {
                        return 1;
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
                effect: {
                    show: true,
                    scaleSize: 2,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
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
            name: '国内',
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
                    if (v > 15) {
                        return v / 12;
                    } else {
                        return 1;
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
                effect: {
                    show: true,
                    scaleSize: 2,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
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
}

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
        '<span style="color:#ffffff;font-size:16px;text-shadow:2px 2px 2px rgba(0,0,0,0.9);">' + title + '</span>' +
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