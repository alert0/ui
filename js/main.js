/**
 * Created by Administrator on 2017/4/7 0007.
 */

$(function () {

    //切换echarts-x和chearts的显示
    var $main = $("#main");
    var sphere = '<div id="chart" ></div>';
    var iframe = '<iframe id="iframe" scrolling="no" frameborder="0" src="flatMap.html" ></iframe>';
    var $btn = $("#left").find(".btnGroup img").click(function () {
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
    })

})
