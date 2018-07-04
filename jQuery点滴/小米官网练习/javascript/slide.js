$.fn.extend({
    carousel : function(mJson){
        var type = mJson.type || "fade",
            isStop = mJson.isStop || false,
            seamless = mJson.seamless || false,
            item = mJson.slideItem,
            tab = mJson.slideTab,
            dot = mJson.slidePic,
            tabType = mJson.tabType || "click",
            time = mJson.time,
            className = mJson.className;
        var $item = $(this).find(item),
            $dot,
            $tab,
            $list,
            len = $item.length,
            temp  = 0,
            width,
            clickTime = 0,
            tabTime = 0,
            timer1 = null,
            timer2 = null;
        //初始化
        if(type==="fade"){
            $item.eq(temp).stop().fadeIn(1000).siblings().fadeOut(500);
        }
        else if(type==="slide"){
            width = $item.width();
            $list = $item.parent();
            if(seamless){
                $list.prepend($item.last().clone(true,true));
                $list.append($item.first().clone(true,true));
                $list.width((len+6)*width).css("marginLeft",-width).parent().css("overflow","hidden");
                $item = $list.children();
            }
            else{
                $list.width((len+6)*width).parent().css("overflow","hidden");
            }
            $item.css({
                width : width,
                position : "static",
                float : 'left'
            });
        }
        else{
            $item.eq(temp).stop().show().siblings().hide();
        }
        //左右切换按钮tab
        if(tab){
            $tab = $(this).find(tab);
            $(this).hover(function(){
                $(this).toggleClass("mouseenter");
            });
            $tab.click(function(){
                if(new Date() - clickTime >=510){
                    var x = temp;
                    $(this).index()?x++:x--;
                    change(x);
                    clickTime = new Date();

                }
            });
        }
        //点击切换按钮 dot
        if(dot){
            $dot = $(this).find(dot);
            tabTime = tabType=="hover"?30:260;
            $dot.eq(temp).addClass(className);
            $dot[tabType](function(){
                var x = $(this).index();
                if(x !== temp){
                    clearTimeout(timer1);
                    timer1 = setTimeout(function(){change(x)},tabTime);
                }
            })
        }
        //自动轮播
        if(time){
            $(this).hover(function(){
                clearInterval(timer2);
            },autoplay());
            function autoplay(){
                timer2 = setInterval(function(){
                    var x = temp;
                    x++;
                    change(x);
                },time);
                return autoplay;
            }
        }

        function change(x){
            if(isStop){
                if(x>=len-1) x=len-1;
                if(x<=0)x=0;
            }else{
                x %= len;
                if(x<0)x=len-1;
            }
            var lastIndex = seamless?x+1:x;
            type === "fade"&&$item.eq(temp).stop().fadeOut();
            type !== "fade"&&type !== "slide"&&$item.eq(temp).stop().hide();
            $dot.eq(temp).removeClass(className);
            temp = x;
            if(type === "fade"){
                $item.eq(temp).stop().fadeIn();
            }
            else if(type === "slide"){
                $list.stop().animate({"marginLeft":-lastIndex*width},time,function(){
                    if(seamless){
                        if(temp===0||temp===len-1){
                            $(this).css("marginLeft",-(temp+1)*width);
                        }
                    }
                })
            }
            else{
                $item.eq(temp).stop().show();
            }
            $dot.eq(temp).addClass(className);
        }
    },
    similarSlide : function(mJson){
        var item = mJson.slideItem,
            tab = mJson.slideTab,
            time = mJson.time;
        var $item = $(this).find(item),$list, $tab, $fitem_len = $item.length,$item_width, $list_width, $factor_num,
        $ratio_num, clickTime = 0,temp = 0;
        //初始化
            $list = $item.parent();
            $item_width= $item.width()+ parseFloat($item.css("marginRight"));
            $list_width = $list.parent().width();
            $factor_num = Math.floor($list_width/$item.width());
            $ratio_num = $fitem_len%$factor_num;
        //左右切换按钮tab
        if(tab){
            $tab = $(this).find(tab);
            $tab.click(function(){
                if(new Date() - clickTime >=510){
                    var  x = temp;
                    var r = $(this).index()?1:-1;
                    x += ($ratio_num==0)? r *  $factor_num:r*$ratio_num;
                    change(x);
                    clickTime = new Date();
                    if(temp>=$fitem_len - $factor_num) {
                        $(this).addClass("disabled").siblings().removeClass("disabled");
                    }if(temp<=0){
                        $(this).addClass("disabled").siblings().removeClass("disabled");
                    }
                }
            });
        }
        function change(x){
            if(x>=$fitem_len - $factor_num) x=$fitem_len - $factor_num;
            if(x<0)x=0;
            var lastIndex = x;
            temp = x;
            $list.stop().animate({"marginLeft":-lastIndex*$item_width},time);
        }
    }
});

