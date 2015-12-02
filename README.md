#Photo-Compression.js.js
一个借助canvas压缩图片的js
##使用方法：
compressImage(文件对象或者二进制对象,回调函数（返回base64字符串）,压缩选项（可选参数）);
##示例
<pre>
var imgFile = document.getElementById('imgFile');
imgFile.onchange = function() {
	var file = this.files[0];
	compressImage(file, function(data) {
		alert('压缩完毕');
		console.log(data);
	}, {
		maxWidth: 640, //最大宽度（可选参数，数值）
		maxHeight: 1008, //最大高度（可选参数，数值）
		quality: 0.8, //质量（可选参数，数值，0~1）
		scale: 1, //缩放率（可选参数，数值）
	});
}
</pre>
##关于作者
<p>作者微博：<a href="http://weibo.com/u/1326039884">折腾笔记</a></p>
