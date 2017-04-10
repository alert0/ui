(function () {

    function resize() {
        $('#main').height($(window).height() - $('#header').height());
    }

    //这个目前不好用
    $(window).resize(resize);
    resize();

    $(function () {
        boot();
    });

    function boot() {
        require(['start']);
    }

})();

define("start", function (require) {
    var ec = require('echarts');
    require('echarts-x');
    require('echarts/chart/map');
    require('echarts/chart/bar');
    require('echarts-x/chart/map3d');

    var myChart = null;
    var jsCode = $('#code-source').text();

    //runCode传入的参数是一段JS代码
    function runCode(code) {
        var func = new Function('myChart', 'require', code);
        func(myChart, require);
    }

    setTimeout(function () {
        myChart = ec.init(document.getElementById('chart'));
        runCode(jsCode);
    });

});
