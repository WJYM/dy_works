//title自定义
var title =$(".topnav>.nav-pills>li.active>a").html().replace("<div></div>","").replace("<br>","")
var title2 = $("#leftnav>.nav-pills>li.active>a").html().replace("<img>","").replace("<br>","")
$("title").append("统优-" + title + "-" +title2)

//绑定事件-横向nav
var lt = $("#left");
var rt = $("#right");
var navmove = $(".topnav > .nav");
var i = parseInt(navmove.css("right"));

lt.mouseover(function(){
    lt.attr("src","../../../img/leftblue.png");
}).mouseout(function(){
    lt.attr("src","../../../img/left.png");
}).click(function(){
    if(parseInt(navmove.css("right")) < 1020){
        rt.attr("style","visibility:visable;");
        i += 170;
        navmove.attr("style","right:" + i + "px;");
    }
    else{
        lt.attr("style","visibility:hidden;");
    }
})

rt.mouseover(function(){
    rt.attr("src","../../../img/rightblue.png");
}).mouseout(function(){
    rt.attr("src","../../../img/right.png");
}).click(function(){
    if(parseInt(navmove.css("right")) > 0){
        lt.attr("style","visibility:visable;");
        i -= 170;
        navmove.attr("style","right:" + i + "px;");
    }
    else{
        rt.attr("style","visibility:hidden;");
    }
})
//绑定事件-totop
var totop =  $(".totop");
var totopimg = $(".totop > img")
totop.mousemove(function(){
    totop.attr("style","background-color: #C4C4C4")
    totopimg.attr("src","../../../img/totop.png")
}).mouseout(function(){
    totop.attr("style","background-color: #D6D6D6")
    totopimg.attr("src","../../../img/whitetotop.png")
}).click(function(){
    totop.attr("style","visibility:hidden;");
    totopimg.attr("style","visibility:hidden;");
})
//滚动到某一高度固定
var sTop = 0;
$("body").scroll(function(){
    sTop = $(this).scrollTop();//当前滚动高度
    if(sTop >= 200){//当滚动高度要大于固定div高度时
        $(".topnavbox").css({"position":"fixed","top":"70","left":"calc(50% - 641px)"});
        totop.attr("style","visibility:visable;");
        totopimg.attr("style","visibility:visable;");
    }else{
        $(".topnavbox").css({"position":"relative","left":"0"});
        totop.attr("style","visibility:hidden;");
        totopimg.attr("style","visibility:hidden;");
    }
});