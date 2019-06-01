var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("keydown", animate, false);

var x = 100;
var y = 100;
var size_x = 30;
var size_y = 30;
function animate(key){
	if(key.keyCode == '39'){
//		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		ctx.fillRect(x+= 5, y, size_x, size_y);
	}else if(key.keyCode == '37'){
//		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		ctx.fillRect(x-=5, y, size_x, size_y);
	}else if (key.keyCode == '40'){
//		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		ctx.fillRect(x, y+=5, size_x, size_y);

	}else if(key.keyCode == '38'){
//		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		ctx.fillRect(x, y-=5, size_x, size_y);
	}
}
ctx.fillRect(x, y, 30, 30);
//function clear(p){
//	var x = p.clientX;
//	var y = p.clientY;
//	ctx.clearRect(x, y, 30, 30);
//}
