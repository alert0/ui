/**
 * Created by Administrator on 2017/4/7 0007.
 */
var $left = $("#l");

//进入时的视频淡出效果
function videoFadeOut() {
    var $video = $('video');
    $video.click(function(){
        $(this)[0].play()
    });
    $video[0].addEventListener('ended',function(){
        $(this).animate({
            opacity:0
        },3000,function () {
            $(this).parent().hide();
        })
    });
}
//切换地图显示区域
function switchMapArea(charts) {
    var iframe = '<iframe id="iframe" scrolling="no" frameborder="0" src="flatMap.html" ></iframe>';
    $left.find(".btnGroup img").click(function () {
        var src = $(this).attr("src");
        if (src.indexOf("off") >= 0) {
            src = src.replace("off", "on");
            $(this).attr("src", src)
                .siblings().attr("src", $(this).siblings().attr("src").replace("on", "off"))
            // var $chart = $("#chart");
            if ($left.find(".switch.sphere").is(":hidden")) {
                $left.find(".switch.sphere").css("display","flex").siblings().hide()
            } else {
                $left.find(".flat .mapArea iframe").remove();
                $left.find(".switch.flat").css("display","flex").find(".mapArea").append(iframe).parent().parent()
                    .siblings().hide();

                for(var i = 0; i < charts.length;i++){
                    charts[i].resize();
                }

            }
        }
    });
}
//切换生产线和实验室的列表显示
function navLabLine() {
    //切换平面地图下面导航栏内实验室和生产线
    $left.find(".legend .navSwitch").click(function () {
        var bgImg = $(this).css("background-image");
        if(bgImg.indexOf("off")>0){
            var text = $(this).text();
            bgImg = bgImg.replace("off", "on");
            $(this).css({
                color:"#00e673",
                backgroundImage:bgImg
            }).siblings(".navSwitch").css({
                color:"#6cf",
                backgroundImage:bgImg.replace("on", "off")
            });
            if (text.indexOf("产线") >= 0) {
                $(".legend ul.line").show().siblings().hide();
            }else{
                $(".legend ul.lab").show().siblings().hide();
            }
        }

    });
}
//让元素的背景图标点亮
function bgImgOn(e) {
    var bgImg = e.find("span").css("background-image");
    e.find("span").css("background-image",bgImg.replace("off", "on"));
    return e;
}
//让元素的背景图标熄灭
function bgImgOff(e) {
    var bgImg = e.find("span").css("background-image");
    e.find("span").css("background-image",bgImg.replace("on", "off"));
    return e;
}
//导航栏中的全选
function navSelectAll() {
    $left.find(".legend .selectAll label").click(function () {
        var bgImg = $(this).find("span").css("background-image");
        var $actLi = $left.find(".legend .labLine ul").not(":hidden").find("li");
        if ($(this).next("input[type=checkbox]").is(":checked")){
            $(this).css("color","#999");
            bgImgOff($(this));
            $actLi.removeClass("active").each(function () {
                bgImgOff($(this))
            })
        }else {
            $(this).css("color","#6cf");
            bgImgOn($(this));
            $actLi.addClass("active").each(function () {
                bgImgOn($(this))
            })
        }
        selectActLi();
    })
}
//选取被激活li元素下面的值
function selectActLi() {
    var $actLi = $(".legend .labLine").find("ul li.active");
    var content = "";
    $actLi.each(function () {
        content+=$(this).text()+","
    });
    console.log(content)
}
//点击a元素时
function navSelectA() {//这里会触发地图中要加载的数据
    $left.find(".legend ul li a").click(function () {
        var bgImg = $(this).find("span").css("background-image");
        var $selectLi = $(this).parent();
        $selectLi.addClass("active");
        bgImgOn($selectLi);
        $selectLi.siblings().removeClass("active").each(function () {
            bgImgOff($(this))
        });

        if($(this).parents(".labLine").length>0){//如果是生产线和实验室
            selectActLi();
        }
        return false;
    })
}

$(function () {

    //进入时的视频淡出效果
    // videoFadeOut();
    //切换地图显示区域
    switchMapArea(myCharts);
    //切换生产线和实验室的列表显示
    navLabLine();
    //导航栏中的全选
    navSelectAll();
    //点击a元素时
    navSelectA();
});
