/**
 * Created by Administrator on 2017/4/12.
 */

// 折线图
function getLineEcharts(){

    var option = {
        title: {
            left: 'center',
            text: '',
            textStyle: {
                fontSize:12
            }
        },
        grid:{
            right:0,
            bottom:20,
            left:40,
            top:55
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            show:true,
            top:20
        },
        color:['#4ea3d9','#f6b65f','#6be6c1','#bba1df','#434247','#e66bdf'],
        textStyle:{
            color:'#333',
            fontSize:12
        },
        xAxis: {
            data:[],
            splitLine: {
                show: false
            },
            axisTick:{
                show:true,
                alignWithLabel:true,
                lineStyle:{
                    color:'#cccccc'
                }
            },
            axisLabel: {
                margin:8
            }
        },
        yAxis: {
            axisLabel:{}
        },
        series: []
    };
    return option;

}
// 柱状图 横向
function getBarEcharts(){
    option = {
        title: {
            left: 'center',
            text: '',
            textStyle: {
                color: '#333',
                fontSize:12
            }
        },
        tooltip: {},
        legend: {
            show:false
        },
        textStyle:{
            color:'#333',
            fontSize:12
        },
        grid: {
            right:10,
            bottom:20,
            left:60,
            top:30
        },
        xAxis: {
            type: 'value',
            splitLine:{
                lineStyle:{
                    color:'#d5d5d5'
                }
            }
        },
        yAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
            data: []
        },
        series: [
            {
                type: 'bar',
                barWidth:6,
                itemStyle:{
                    normal:{
                        color:'#4ea3d9'
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                data: []
            }]
    };

    return option;
}
// 饼图
function getPieEcharts() {
    option = {
        title: {
            text: '各国专题占比',
            x: 'left',
            textStyle: {
                color: '#333',
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: []
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['30%', '60%'],
                data: [],
                color: ["rgba(23,144,207,1)", "rgba(23,144,207,0.9)", "rgba(23,144,207,0.8)", "rgba(23,144,207,0.7)", "rgba(23,144,207,0.6)"],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return option;
}
//面积图
function getAreaEcharts(){
    option = {
        title : {
            text: '',
            subtext: ''
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['意向','预购','成交']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'成交',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[10, 12, 21, 54, 260, 830, 710]
            },
            {
                name:'预购',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[30, 182, 434, 791, 390, 30, 10]
            },
            {
                name:'意向',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[1320, 1132, 601, 234, 120, 90, 20]
            }
        ]
    };
    return option;
}
//雷达图
function getRadarEcharts(){
    option = {
        title : {
            text: '罗纳尔多 vs 舍普琴科',
            subtext: '完全实况球员数据'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            x : 'center',
            data:['罗纳尔多','舍普琴科']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        polar : [
            {
                indicator : [
                    {text : '进攻', max  : 100},
                    {text : '防守', max  : 100},
                    {text : '体能', max  : 100},
                    {text : '速度', max  : 100},
                    {text : '力量', max  : 100},
                    {text : '技巧', max  : 100}
                ],
                radius :100
            }
        ],
        series : [
            {
                name: '完全实况球员数据',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data : [
                    {
                        value : [97, 42, 88, 94, 90, 86],
                        name : '舍普琴科'
                    },
                    {
                        value : [97, 32, 74, 95, 88, 92],
                        name : '罗纳尔多'
                    }
                ]
            }
        ]
    };
    return option;
}
//折线图和柱状图
function getLineAndBar(){
    option = {
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:['蒸发量','降水量','平均温度']
        },
        xAxis : [
            {
                type : 'category',
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : '水量',
                axisLabel : {
                    formatter: '{value} ml'
                }
            },
            {
                type : 'value',
                name : '温度',
                axisLabel : {
                    formatter: '{value} °C'
                }
            }
        ],
        series : [

            {
                name:'蒸发量',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'降水量',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'平均温度',
                type:'line',
                yAxisIndex: 1,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };
    return option;
}
//仪表盘
function getGaugeEcharts(){
    option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name:'业务指标',
                type:'gauge',
                detail : {formatter:'{value}%'},
                data:[{value: 50, name: '完成率'}]
            }
        ]
    };
    return option;
}
//多个仪表盘
function getManyGauge(){
    option = {
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name:'速度',
                type:'gauge',
                z: 3,
                min:0,
                max:220,
                splitNumber:11,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width:5
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :10,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 14,
                        fontStyle: 'italic'
                    }
                },
                detail : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data:[{value: 40, name: 'km/h'}]
            },
            {
                name:'转速',
                type:'gauge',
                center : ['25%', '55%'],    // 默认全局居中
                radius : '50%',
                min:0,
                max:7,
                endAngle:45,
                splitNumber:7,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :20,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width:5
                },
                title : {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                },
                detail : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    }
                },
                data:[{value: 1.5, name: 'x1000 r/min'}]
            },
            {
                name:'油表',
                type:'gauge',
                center : ['75%', '50%'],    // 默认全局居中
                radius : '50%',
                min:0,
                max:2,
                startAngle:135,
                endAngle:45,
                splitNumber:2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']],
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    splitNumber:5,
                    length :10,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: {
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'E';
                            case '1' : return 'Gas';
                            case '2' : return 'F';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width:2
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: 0.5, name: 'gas'}]
            },
            {
                name:'水表',
                type:'gauge',
                center : ['75%', '50%'],    // 默认全局居中
                radius : '50%',
                min:0,
                max:2,
                startAngle:315,
                endAngle:225,
                splitNumber:2,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']],
                        width: 8
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false
                },
                axisLabel: {
                    formatter:function(v){
                        switch (v + '') {
                            case '0' : return 'H';
                            case '1' : return 'Water';
                            case '2' : return 'C';
                        }
                    }
                },
                splitLine: {           // 分隔线
                    length :15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width:2
                },
                title : {
                    show: false
                },
                detail : {
                    show: false
                },
                data:[{value: 0.5, name: 'gas'}]
            }
        ]
    };
    //clearInterval(timeTicket);
    //timeTicket = setInterval(function (){
    //    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    //    option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
    //    option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
    //    option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
    //    myChart.setOption(option,true);
    //},2000)
    return option;
}
//圆环图
function getYuanhuan(){
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        toolbox: {
            show :false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'center',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : true
                        },
                        labelLine : {
                            show : true
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '30',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
        ]
    };

    return option;
}