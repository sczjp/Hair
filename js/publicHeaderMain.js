console.log("小越越 成功了啊");

require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"headerNav":"headerNav",
    },
});
require(["headerNav"],function(headerNav){
	headerNav.headerNav();
});