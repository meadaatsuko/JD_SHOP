window.onload = function(){
		var banner = document.getElementById('banner');
		var button = document.getElementById('button');
		function animate() {
			// body...
			var opacity_new = parseInt(banner.style.opacity);
			banner.style.opacity = opacity_new +1;
		}
		button.onclick = function(){
			animate();
		}
	}