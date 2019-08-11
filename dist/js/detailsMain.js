console.log("越越加载成功了");
require.config({
    paths: {
		"jquery": "jquery-1.11.3",
        "range":"range",
        "magnifyGlass":"magnifyGlass"
	},
});
require(["magnifyGlass"],function(magnifyGlass){
    magnifyGlass.magnifyGlass();
    magnifyGlass.tab();
    magnifyGlass.a();
    magnifyGlass.sbp();

})