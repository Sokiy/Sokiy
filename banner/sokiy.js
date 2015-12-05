//获取DOM节点函数

var offset = true;

function $(obj) {
	var doc = document;
	if (obj.charAt(0) === '#') {
		return doc.getElementById(obj.substring(1));
	} else if (obj.charAt(0) === '.') {
		return doc.getElementsByClassName(obj.substring(1));
	} else {
		return doc.getElementsByTagName(obj);
	}
}

//返回对象的属性值，传参时属性值带引号
function getStyle(obj, attr) {

	if (arguments.length != 2) {
		return false;
	} else {
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
	}

}
//对象移动函数 传入四个参数 obj(对象),attr(top,left,right,bottom)向相反的方向移动,dir(每次定时器移动的距离),target(移动的位置与原来的位置比较),

function move(obj, attr, dir, target) {
	dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var speed = parseInt(getStyle(obj, attr)) + dir;
		if (dir > 0 && speed > target || dir < 0 && speed < target) {
			clearInterval(obj.timer);
		} else {
			obj.style[attr] = speed + 'px';
		}
	}, 16);

}
