

var act=false;
var scalefactorX=0;
var oldscalefactorX=0;
var scaleX = 1;
var a=document.getElementById('rect1');
var b=document.getElementById('drag');
var svg1=document.getElementById('svg1'),
	box = a.getBBox(),
	length = box.width,
	initialPositionX = box.x + box.width,
	pX = box.x,
	pY = box.y + box.height/2,
	dxc = 0,
	dyc = 0;

b.addEventListener('mousedown',dragfn);


function dragfn(e){
	currentXc = e.clientX;
	currentYc = e.clientY;
	svg1.addEventListener('mousemove',updatePosition);
	svg1.addEventListener('mouseup',stopmove);
	 
	
}

function updatePosition(e){
		dxc += e.clientX-currentXc ;
		dyc += e.clientY-currentYc ;

		b.setAttributeNS(null, 'transform','translate('+dxc+','+dyc+')');
		presentX = e.clientX;
		deltaX = presentX - initialPositionX;
		newscaleX = (deltaX/length)+scaleX;
		a.setAttributeNS(null, 'transform','translate('+pX+','+pY+') scale('+newscaleX+',1) translate('+ -pX +','+-pY+')');

		currentXc = e.clientX;
		currentYc = e.clientY;
}

function stopmove(e){

	svg1.removeEventListener('mousemove',updatePosition);
	svg1.removeEventListener('mouseup',stopmove);
	

}
function() neWfn{
var a= 4+5;
}

function() neWfn2222222222222{
var a= 4+5;
}


