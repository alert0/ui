var mapSphere = function mapSphere(myChart) {
    myChart.showLoading();
        $.ajax({
            url: '../data/hailianTest01.json',
            success: function (data) {
                var markPointStyle = {
                    normal: {
                        color: 'red'
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

                var opts = {
                    legend: {
                        show: true,
                        //   遍历航空公司名称显示图例
                        data: data.airlines.map(function (item, index, array) {
                            return item[0];
                        }),
                        selected: {},
                        x: 'center',
                        y:"bottom",
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
                            x: "0%"
                            // y: "top"
                        },
                        baseLayer: {
                            backgroundColor: '',
                            backgroundImage: '../img/earth.jpg'
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: 'yellow',
                                areaStyle: {
                                    color: 'rgba(0, 0, 0, 0)'
                                }
                            }
                        },
                        markPoint: {
                            symbol: "heart",
                            effect: {
                                shadowBlur: 0.2
                            },
                            large: true,
                            symbolSize: 15,
                            data: airports
                        },
                        roam: {
                            autoRotateAfterStill: 30,
                            focus: 'China'
                        }
                    }]
                };

                //默认选中华北
                opts.legend.data.forEach(function (name) {
                    if (name.indexOf('华北') >= 0) {
                        opts.legend.selected[name] = true;
                    } else {
                        opts.legend.selected[name] = false;
                    }
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
                                    show: true
                                },
                                distance: 2,
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

                myChart.setOption(opts);

                myChart.hideLoading();

            }

        });

};