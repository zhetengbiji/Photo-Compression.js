# Photo-Compression.js
一个借助canvas有损压缩图片的js,支持webkit内核浏览器，也支持安卓微信内使用（支持x5内核）；暂时只支持jpg文件格式输出（其他格式压了并没什么卵用），后期支持其他格式
## 使用方法：
compressImage(文件对象或者二进制对象,回调函数（返回base64字符串）,压缩选项（可选参数）);
## 示例
```js
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
```
## 关于作者
<p>作者微博：<a href="http://weibo.com/u/1326039884">折腾笔记</a></p>
