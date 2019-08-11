define(["jquery"],function($){
    function index(){
        //下载商品列表的数据
        $.ajax({
            url: "../data/goodsCategory.json",
            success: function(arr){
                
                for(var i = 0; i < arr.length; i++){
                    var node1 = $(` 
                        <li><a href=""><span>${arr[i].title}</span><span>></span></a></li>
                    
                    `);

                    node1.appendTo(".Hair-index-nav-left-con ul");
                    
               
                    var childLeft = arr[i].leftChild;

                    var childRight = arr[i].rightChild;

                    this.node2 = $(` <div class="goodsList">
                        <div class="goodsListLeft">
                            <ol></ol>
                        </div>
                        <div class="goodsListRight">
                        
                        </div>
                    </div>`);
                        
                    if(childLeft !=null){
                       for(var j = 0 ;j<childLeft.length;j++){
                            var node2l = $(`<li><a href=""><img src="${childLeft[j].img}" alt="">${childLeft[j].title}</a></li>`);
                            node2l.appendTo($(this.node2).find(".goodsListLeft ol"));
                           
                        }
                      
                    }
                   if(childRight != null){
                       
                       for(var k = 0; k<childRight.length;k++){
                            var node2r = $(` <dl>
                                <dt><img src="${childRight[k].img}" alt=""></dt>
                                <dd><span>${childRight[k].desc}</span><span>${childRight[k].pirce}</span></dd>
                                <span class="iconfont">限时优惠</span>
                            </dl>`);
                            node2r.appendTo($(this.node2).find(".goodsListRight"));
                            //alert(i,j,k);
                            
                       }
                   }  

                   this.node2.appendTo(".Hair-index-nav-left-con");
                  
                }

            },
            error: function(msg){
                alert(msg);
            }
        });
    }

    function slide(){
        $(function(){
            $(".Hair-index-nav-left-con ul").on("mouseenter","li",function(){
                $(".goodsList").css("display","none")
                .eq($(this).index()).css("display","block");
                if( $(".goodsList").eq($(this).index()).css("display","block")){
                    $(".goodsList").eq($(this).index()).mouseenter(function(){
                        $(this).css("display","block");
                    }).mouseleave(function(){
                        $(this).css("display","none");
                    })
                }else{
                    $(".goodsList").eq($(this).index()).css("display","none")
                }
            });
            $(".Hair-index-nav-left-con ul").on("mouseleave","li",function(){
                $(".goodsList").eq($(this).index()).css("display","none");
            })

        })
    }

    return {
        index:index,
        slide:slide
    }
});