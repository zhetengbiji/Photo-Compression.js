/*
 * Photo-Compression.0.0.1.js
 * 作者微博：折腾笔记
 * */

function compressImage(file, fn, option1) {
	var option = {
		quality: 0.8,
		scale: 1,
	}
	if (option1) {
		option = {
			quality: option1.quality || 0.8,
			maxWidth: option1.maxWidth,
			maxHeight: option1.maxHeight,
			scale: option1.scale || 1,
		}
	}
	if (typeof file === 'object') {
		var imgUrl = window.URL.createObjectURL(file);
		canvasTo(imgUrl);
	} else if (typeof file === 'string') {
		canvasTo(file);
	}

	function canvasTo(imgUrl) {
		var img = new Image;
		img.onload = function() {
			var imgWidth, imgHeight;
			imgWidth = img.width * option.scale;
			imgHeight = img.height * option.scale;
			if (option.maxWidth) {
				imgHeight = imgHeight * (option.maxWidth / imgWidth);
				imgWidth = option.maxWidth;
			}
			if (option.maxHeight) {
				imgWidth = imgWidth * (option.maxHeight / imgHeight);
				imgHeight = option.maxHeight;
			}
			var canvas = document.createElement('canvas');
			var canvas2d = canvas.getContext("2d");
			canvas.width = imgWidth;
			canvas.height = imgHeight;
			canvas2d.drawImage(img, 0, 0, imgWidth, imgHeight);
			var base64 = canvas.toDataURL("image/jpeg", option.quality);
			if (typeof fn === 'function') fn(base64);
		}
		img.src = imgUrl;
	}
}
