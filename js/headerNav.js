define(["jquery"],function($){
    function headerNav(){
        $.ajax({
            url: "../data/index_nav.json",
            success: function(arr){
                
                for(var i = 0; i < arr.length; i++){
                    var node = $(` 
                    <li><a href="${arr[i].link}">${arr[i].title}</a>
                    <span class="iconfont">${arr[i].hot}</span>
                    </li>
                    
                    `);
                    node.appendTo(".Hair-index-nav-right");
                    
                }

            },
            error: function(msg){
                alert(msg);
            }
        })
    }
    return{
        headerNav:headerNav,
    }
})