window.onload = pageLoad;
var start = false;
function pageLoad(){
	var startb =document.getElementById("start");
	startb.onclick=startGame;
}

function startGame(){
	if(start==false){
		start=true;
		var inputbox =  document.getElementById("numbox").value;
		if(inputbox!=""){
			alert("Ready");
			addBox();
			timeStart();
		}
		else{
			alert("Please Add Box!!");
	
		}

	}
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60;
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);

	function timeCount(){
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		var allbox = document.querySelectorAll("#game-layer div");
		x.innerHTML=second;
		second--;
		if(allbox.length>0&& x.innerHTML=="-1"){
			alert("You Lose!!");
			clearScreen();
			x.innerHTML="";
			start=false;
			clearInterval(timer);
			timer=null;
			document.getElementById("numbox").value="";
		}
		else if(allbox.length==0&& second!=-1){
			alert("You Win!!");
			clearScreen();
			x.innerHTML="";
			start=false;
			clearInterval(timer);
			timer=null;
			document.getElementById("numbox").value="";
		}
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color");
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		var colorbox = document.createElement("color");
		tempbox.className="square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		colorbox.className=colorDrop.value;
		document.getElementById(tempbox.id).appendChild(colorbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		document.getElementById(box.id).remove();
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	//delete all  div
	var allbox = document.querySelectorAll("#game-layer div");

 for(var i=0;i<allbox.length;i++){
	allbox[i].parentNode.removeChild(allbox[i]);
 }

}



