/**
 * Created by Administrator on 2017/4/7 0007.
 */

$(function () {

    //进入时的首页效果
    $("#mask").click(function () {
        $(this).animate({"opacity":0},1000,function () {
            $(this).hide();
        })
    });

    var $left = $("#l");
    var iframe = '<iframe id="iframe" scrolling="no" frameborder="0" src="flatMap.html" ></iframe>';

    //切换echarts-x和chearts的显示
/*
    var sphere = '<div id="chart" ></div>';
    $left.find(".btnGroup img").click(function () {
        var src = $(this).attr("src");
        if (src.indexOf("off") >= 0) {
            src = src.replace("off", "on");
            $(this).attr("src", src)
                .siblings().attr("src", $(this).siblings().attr("src").replace("on", "off"))
            var $chart = $("#chart");
            if ($chart.length > 0) {
                $chart.remove();
                $main.append(iframe)
            } else {
                $("#iframe").remove();
                $main.append(sphere);
                require(['start'], function (start) {
                    setTimeout(function () {
                        start.runCode()
                    });

                });
            }
        }
    });
*/

    //切换echarts-x和chearts的显示(单页面内嵌div)
    $left.find(".btnGroup img").click(function () {
        var src = $(this).attr("src");
        if (src.indexOf("off") >= 0) {
            src = src.replace("off", "on");
            $(this).attr("src", src)
                .siblings().attr("src", $(this).siblings().attr("src").replace("on", "off"))
            var $chart = $("#chart");
            if ($left.find(".switch.sphere").is(":hidden")) {
                $left.find(".switch.sphere").css("display","flex").siblings().hide()
            } else {
                $left.find(".flat .mapArea iframe").remove();
                $left.find(".switch.flat").css("display","flex").find(".mapArea").append(iframe).parent()
                    .siblings().hide()
            }
        }
    });
    require(['echarts-all'],function () {
        //平面地图右上角图表——专业能力

        // console.log("echarts-all",echarts)
        var chartFlatRT = echarts.init(document.getElementById("#myChart"));
        // var optRT = getLineEcharts();

        chartFlatRT.setOption(getLineEcharts());
        chartFlatRT.setOption({
            title:"111111"
        })
    })

})
