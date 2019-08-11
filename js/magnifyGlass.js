define(["jquery","range"],function($,range){
    function magnifyGlass(){
        //放大镜
        $(function(){
            $(".product-info-bigPic-top").mouseenter(function(){
                $("#mark,#big").show();
            }).mouseleave(function(){
                $("#mark,#big").hide();
            }).mousemove(function(ev){
                var l = ev.clientX - $(this).offset().left - 75;
                var t = ev.clientY - $(this).offset().top - 75;
                l = range.range(l,0,230);
                t = range.range(t,0,230);
                $("#mark").css({
                    left: l,
                    top: t
                })

                $("#big img").css({
                    left: -2.5 * l,
                    top: -2.5 * t
                })
            })
        })
        
    }
    //阻止默认行为
    function a(){
        /* $("a").click(function(ev){
            //alert(1222);
            return false;
        }) */
    }
    //选项卡
    function tab(){
       
            $(".product-info-smallPic-con ul").on("mouseenter","li",function(){
               
                $(".product-info-bigPic .product-info-bigPic-top").css("display","none")
                .eq($(this).index()).css("display","block");
                //alert($(this).index())
            })
        
    }
    //查看大图
    function seeBigPic(){
       
        $(".product-info-bigPic-bot").on("click","a",function(){
            //alert(1);
            $(".seeBigPic").css("display","block");
             $(".seeBigPic div").click(function(){
            //console.log(1);
                $(".seeBigPic").css("display","none");
            })
        });
       
    }
    return{
        magnifyGlass:magnifyGlass,
        tab:tab,
        a:a,
        sbp:seeBigPic,
    }
})