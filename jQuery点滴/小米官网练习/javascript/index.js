/**
 * Created by Administrator on 2018/6/30.
 */
$(document).ready(function(){
    //购物车
    var $nav_shop = $(".site-topbar .topbar-shop");
    var $nav_shop_cart = $nav_shop.find("#shopbox");
    $nav_shop.hover(function(){
        $(this).addClass("topbar-shop-active");
        $nav_shop_cart.css("display","block");},function(){
        $(this).removeClass("topbar-shop-active");
        $nav_shop_cart.css("display","none");
    });
    //搜索框
    var $header_search = $(".header-search");
    var $search_form = $header_search.find("form");
    var $search_input = $header_search.find("#search");
    var $search_hotwords = $header_search.find(".search-hotspot a");
    var search_data = eval("("+$search_input.attr("data-search-config")+")");
    var $search_keywords = $("#search_keywords");
    var $search_keywords_html = $('<ul class="search_keywords_list"></ul>');
    var li = "";
    for(var x = 0; x<search_data.defaultWords.length;x++){
        li += '<li class="search_keywords_item"><a href="" class="clearfix"><span class="search_keywords_tit fl">'+search_data.defaultWords[x].Key+'</span><span class="search_keywords_num fr">约有'+search_data.defaultWords[x].Rst+'件</span></a></li>';
    }
    $search_keywords_html.html(li);
    $search_keywords.append($search_keywords_html);

    $search_input.focus(function(){
        $search_form.addClass("search-form-active");
        $search_keywords.css("display","block");
        $search_hotwords.css("display","none");
    });
    $search_input.blur(function(){
        $search_form.removeClass("search-form-active");
        $search_keywords.css("display","none");
        $search_hotwords.css("display",$(this).val()?"none":"inline-block");
    });
    $search_input.keyup(function(){
        $search_form.addClass("search-form-active");
        if($(this).val()){
            $search_keywords.css("display","none");
            $search_hotwords.css("display","none");
        }
    });
    var $nav_list = $(".header-nav .nav-list");
    var $nav_list_menu = $nav_list.find(".header-nav-submenu");
    $nav_list.hover(function(){
        $(this).toggleClass("nav-list-active").siblings().removeClass("nav-list-active");
    });
    //大轮播图
    $("#home-slide").carousel({
        "type" : "",//动画类型
        "isStop": false,
        "seamless" : true,//是否无缝轮播
        "time" : "5000",
        "tabType" : "click",//默认点击类型
        "slideItem" : ".carousel-img li",//轮播大盒子
        "slideTab" : ".img-control .direction a",//左右按钮盒子
        "slidePic" : ".pager .pager-item a",//下方的编码页码盒子
        "className":"active"
    });
    //内容
    for(var key in bricksData.content){
        var $key = $("#content").find("#"+key);
        $key.carousel({
            "type" : "slide",//动画类型
            "isStop": "true",
            "seamless" : false,//是否无缝轮播
            "time" : "",
            "tabType" : "click",//默认点击类型
            "slideItem" : ".substance-center ul li",//轮播大盒子
            "slideTab" : ".control  a",//左右按钮盒子
            "slidePic" : ".xm-pagers-list .xm-pagers li",//下方的编码页码盒子
            "className":"active"
        });
    }
    for(var k in bricksData){
        if(bricksData.hasOwnProperty(k)) {
            if (k=="phone"||k == "homeelec"||k == "smart"||k == "match"||k == "accessories" ||k == "around") {
                var $parent = $("#"+k);
                $parent.carousel({
                    "type" : "show",//动画类型
                    "isStop": "true",
                    "seamless" : false,//是否无缝轮播
                    "time" : "",
                    "tabType" : "hover",//默认点击类型
                    "slideItem" : ".floor-desc-right .floor-list-wrap .floor-list",//轮播大盒子
                    "slideTab" : "",//左右按钮盒子
                    "slidePic" : ".more .main-floor-nav li",//下方的编码页码盒子
                    "className":"nav-active"
                });
                var $arr_child_liTem = $parent.find(".xm-layer-body .floor-list-item");
                $arr_child_liTem.hover(function(){
                    $(this).toggleClass("floor-list-item-active").siblings().removeClass("floor-list-item-active");

                });
            }
        }
    }
    //全部商品分类
    var $category_ctn = $("#add-nav-classify");
    var $category_ctn_listA = $category_ctn.find(".site-classify-list");
    $category_ctn_listA.hover(function () {
        $(this).toggleClass("site-classify-list-active");
    });
    //获取当前时间
    var TimeStamp = function(){
        this.date = new Date();
        this.todayTime = this.date.getTime();
        this.year =  this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day =   this.date.getDate();
        this.hour =   this.date.getHours();
        this.minute = this.date.getMinutes();
        this.seconds = this.date.getSeconds();

    };
    TimeStamp.prototype = {
        setTime : function(year,month,day,hour,minute,seconds,m1,m2){
            var preDate = new Date(year,month,day,hour,minute,seconds);
            var y = preDate.getFullYear();
            var m = this.formatTime(preDate.getMonth()+1);
            var dd = this.formatTime(preDate.getDate());
            var hh = this.formatTime(preDate.getHours());
            var mm = this.formatTime(preDate.getMinutes());
            var ss = this.formatTime(preDate.getSeconds());
            return y+m1+m+m1+dd+"  "+ hh+m2+mm+m2+ss;
        },
        differenceTime : function(year,month,day,hour,minute,seconds){
            var setDate = new Date(year,month,day,hour,minute,seconds).getTime();
            var difTime = this.todayTime - setDate;
            return {
                "d" : this.formatTime(this.plusMinus(difTime/(1000*60*60*24))),
                "h" : this.formatTime(this.plusMinus(difTime/(1000*60*60))%24) ,
                "m" : this.formatTime(this.plusMinus(difTime/(1000*60)%60)),
                "s" : this.formatTime(this.plusMinus(difTime/1000%60))
            };
        },
        formatTime : function(t){
            return t= Math.abs(t)<10?'0'+Math.abs(t):Math.abs(t);
        },
        plusMinus : function(t){
            return t=t>0?Math.floor(t):Math.ceil(t);
        }
    };
    //小米闪购
    var $flash_box = $(".flash-sales-box");
    var $deadlineArr = ["10:00","12:00","18:00","20:00","22:00","00:00"];
    var $timeSlot = $flash_box.find(".count-down-deadline");
    var $surplus_tips = $flash_box.find(".count-down-tips");
    var $surplus_time = $flash_box.find(".count-down-desc .time-block");
    var arr = [];
    var indexArr=[];
    for(var i = 0,len=$deadlineArr.length;i<len;i++){
        arr.push($deadlineArr[i].substr(0,2));
        /*if(i==len-1){
            arr[i] = 24;
        }*/
    }
    function achieveTime(){
        var currentTime = new TimeStamp();
        var y = currentTime.year ;
        var m = currentTime.month;
        var d = currentTime.day ;
        var hh = currentTime.hour ;
        var mm = currentTime.minute ;
        var today = currentTime.todayTime;
        for(var i = 0,len=$deadlineArr.length;i<len;i++){
            if(i>=1){
                if(hh<=arr[i]&&hh>arr[i-1]){
                    indexArr.push(i);
                    var newDate = new Date(y,m,d,arr[indexArr[0]],0,0).getTime()-today;
                    $timeSlot.html($deadlineArr[indexArr[0]]+"场");
                    $surplus_tips.html("距离开始还有");
                }
                if(hh==arr[i]&&mm<27){
                    $surplus_tips.html("距离结束还有");
                    if(hh=0){
                        newDate = new Date(y,m,d,arr[indexArr[0]],27,0).getTime()-today;
                        $timeSlot.html($deadlineArr[indexArr[0]]+"场");
                    }else{
                        newDate = new Date(y,m,d,arr[len-1],27,0).getTime()-today;
                        $timeSlot.html($deadlineArr[len-1]+"场");
                    }
                }
                if(hh==arr[i]&&mm>=27){
                    console.log(indexArr,arr[indexArr[0]+1]);
                    newDate = new Date(y,m,d,arr[indexArr[0]+1],0,0).getTime()-today;
                    $timeSlot.html($deadlineArr[indexArr[0]+1]+"场");
                    $surplus_tips.html("距离开始还有");
                }
            }
            indexArr.shift();
        }
        var time =[
            currentTime.formatTime(currentTime.plusMinus(newDate/(1000*60*60))%24),
            currentTime.formatTime(currentTime.plusMinus(newDate/(1000*60)%60)),
            currentTime.formatTime(currentTime.plusMinus(newDate/1000%60))
        ];
        $.each($surplus_time,function(index){
            $(this).html(time[index]);
        });
    }

    achieveTime();
    setInterval(achieveTime,1000);
    //闪购
    $flash_box.similarSlide({
        "slideItem":".sales-goods-box ul li",
        "slideTab":".more .home-controls a",
        "time" : "200"
    });
    //为你推荐
    var $recommend = $("#recommend");
    $recommend.similarSlide({
        "slideItem":".home-recommend .xm-recommend-wrap .xm-recommend-list li",
        "slideTab":".more .home-controls a",
        "time" : "200"
    });
    //回顶部
    var $right_toTop = $(".right-to-top");
    if($(this).scrollTop()<1000)$right_toTop.fadeOut();
    $(window).scroll(function(){
        if($(this).scrollTop()>1000){
            $right_toTop.fadeIn();
        }else{
            $right_toTop.fadeOut();
        }
    });

    $right_toTop.click(function(){
        $("html,body").animate({scrollTop:0},500);
    })

});
