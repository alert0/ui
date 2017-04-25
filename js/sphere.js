// var mapSphere = function mapSphere(myChart) {
function mapSphere() {
    var  opts = 2;
    $.ajax({
        url: '../data/hailianTest01.json',
        async:false,
        success: function (data) {
            var markPointStyle = {
                normal: {
                    color: '#fbf679'
                }
            };
            // Airport: [name（机场名？）, city, country, longitude（经度）, latitude（纬度）]
            //map和forEach都可以对数组进行遍历，区别是map可以返回一个修改后的数组，但不影响原数组
            var airports = data.airports.map(function (item) {
                //返回带有标记样式和经纬度的对象
                return {
                    itemStyle: markPointStyle,
                    geoCoord: [item[3], item[4]]
                }
            });

            // Route: [airlineIndex(航空公司编号), sourceAirportIndex（起点）, destinationAirportIndex（终点）]
            var routesGroupByAirline = {};

            data.routes.forEach(function (route) {//遍历所有航线

                //airlines是所有图例（航空公司），其每个下标就是航空公司编号（route[0]）
                var airline = data.airlines[route[0]];
                var airlineName = airline[0];

                //对象的属性名是变量时需要用中括号来获取值
                if (!routesGroupByAirline[airlineName]) {
                    routesGroupByAirline[airlineName] = [];
                }
                routesGroupByAirline[airlineName].push(route);
            });

            opts = {
                legend: {
                    show: false,
                    //   遍历航空公司名称显示图例
                    data: data.airlines.map(function (item, index, array) {
                        return item[0];
                    }),
                    selected: {
                        others:true
                    },
                    x: 'center',
                    y: "bottom",
                    // orient: 'vertical',
                    textStyle: {
                        color: 'white'
                    }
                },
                tooltip: {
                    formatter: '{b}'
                },
                series: [{
                    type: 'map3d',
                    mapType: 'world',
                    flat: false, /*是否使用平面图*/
                    flatAngle: 0,
                    mapLocation: {
                        x: 0,
                        y: 0,
                        width: '100%',
                        height: '100%'
                    },
                    baseLayer: {
                        backgroundColor: 'rgba(20,143,204,.5)',
                    },
                    itemStyle: {
                        normal: {
                            width: 2,
                            borderWidth: 1,
                            borderColor: '#00ffff',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    markPoint: {
                        symbol:"triangle",
                        // symbol: "circle",
                        effect: {
                            shadowBlur: 0.1
                        },
                        itemStyle:{
                            normal:{
                                color:"#fff"
                            }
                        },
                        large: true,
                        symbolSize: 3,
                        data: airports
                    },
                    roam:{
                        zoom: 1.3,
                        minZoom: 1.3,
                        maxZoom: 1.3,
                        // focus:"Pakistan"
                    }
                    ,

/*
                    roam: {
                        autoRotate: false,//是否自动旋转
                        autoRotateAfterStill: 5,
                        focus: 'China'
                    }
*/
                }]
            };

            //默认选中华北
            opts.legend.data.forEach(function (name) {
                // if (name.indexOf('华北') >= 0) {
                    opts.legend.selected[name] = true;
                // } else {
                //     opts.legend.selected[name] = false;
                // }
            });
            /*
             "青岛":[120.33,36.07],
             "北京":[116.46,39.92],
             */
            data.airlines.forEach(function (item) {
                var airlineName = item[0];
                var routes = routesGroupByAirline[airlineName];
                if (routes) {
                    opts.series.push({
                        type: 'map3d',
                        name: airlineName,
                        markLine: {
                            effect: {
                                show: true,
                                scaleSize: 2,
                                period: 5,
                                color: '#7bb4ff',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    // 线的颜色默认是取 legend 的颜色
                                    // color: null
                                    // 线宽，这里线宽是屏幕的像素大小
                                    width: 5,
                                    // 线的透明度
                                    opacity: 1,
                                    // color:"rgba(50,143,204,1)",
                                    color:"#7bb4ff",
                                    borderWidth:5,
                                    borderColor:"#7bb4ff",
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 5
                                    }
                                }
                            },
                            distance: 0,
                            data: routes.map(function (item) {
                                //geoCoord：通过绝对经纬度指定地区的名称文本位置
                                //route中的起点终点数值是机场的下标！
                                return [{
                                    // 获取起点的经纬度
                                    geoCoord: airports[item[1]].geoCoord
                                }, {
                                    // 获取终点的经纬度
                                    geoCoord: airports[item[2]].geoCoord
                                }]
                            })
                        }
                    });
                }
            });

        }

    });
    return opts;

};