;(function(){
	var span2=document.getElementById('span2');
var span1=document.getElementById('span1');
var span3=document.getElementById('span3');
var mu=document.getElementById('music');
var ofn=true;
span2.onclick=function(){
	bofang();
}
 function bofang(){
	jidutiao();
	shijian();
	mu.play();
	Name.innerHTML=song[num].name;
	Mname.innerHTML=song[num].writer;
	if (ofn) {
		span2.src="img/t_03.gif";
		mu.play();
		ofn=false;
	} else{
		mu.pause();
		span2.src="img/下首_03.png";
		
		ofn=true;
	};
	
	
}

	var song=[{name:"把命都给了你",writer:"黄海波",url:"mp3/黄海波 - 把命都给你了.mp3"},
	{name:"樱花草",writer:"林依婷",url:"mp3/林依婷 - 樱花草.mp3"},
	{name:"可惜我是水瓶座",writer:"杨千嬅",url:"mp3/杨千嬅 - 可惜我是水瓶座 (铃声).mp3"},
	{name:"Counting Stars",writer:"OneRepublic",url:"mp3/Runaman - Counting Stars - 副本.mp3"},
	{name:"袖手旁观",writer:"齐秦",url:"mp3/齐秦 - 袖手旁观.mp3"},
	{name:"嘚啵嘚啵嘚",writer:"河狸村的小伙伴",url:"mp3/河狸村的小伙伴们 - 嘚啵嘚啵嘚.mp3"},
	{name:"月亮惹得祸",writer:"张宇",url:"mp3/周定纬 _ 张宇 - 月亮惹的祸 (Live).mp3"},
	{name:"伤心的人别听慢歌",writer:"五月天",url:"mp3/伤心的人别听慢歌（贯彻快乐） (伴奏) - 五月天.tkm"}];
	
	var Name=document.getElementById('m-name');
	var Mname=document.getElementById('mu-name');
	var l=song.length;
	var num=0;
span1.onclick=function shang(){
	
	num--;
	if(num<0){
		num=l-1;
	};
	Name.innerHTML=song[num].name;
	Mname.innerHTML=song[num].writer;
	mu.src=song[num].url;
	mu.play();
	mu.loop;
	jidutiao();
	shijian();
	
}
span3.onclick=function xia(){
	num++;
	if(num>l-1){
		num=0;
	};
	Name.innerHTML=song[num].name;
	Mname.innerHTML=song[num].writer;
	mu.src=song[num].url;
	mu.play();
	jidutiao();
	shijian();
	
}

	/*进度条*/
	function jidutiao(){
	var sli=document.getElementById('slide');
	var pro=document.getElementById("progress");
	var mu=document.getElementById('music');

	timer=setInterval(function(){
		var len=mu.duration;
		var cur=mu.currentTime;
		pro.style.width=""+parseFloat(cur/len)*300+"px";
	},980);
	sli.addEventListener('mousedown', function adjust(e){
                    var bar=e.target;
                    var x=e.offsetX;
                    pro.style.width=x+"px";
                    mu.currentTime=""+parseInt(x*len/300)+"";
                    
                    var s=true;
                    if(s){
                    	span2.src="img/t_03.gif";
                    	mu.play();
                    }
              });
}
	function shijian(){
	
	
	mu.oncanplay=function(){
		var mu=document.getElementById('music');
	var len=mu.duration;
	var minu=parseInt(len/60);
	var seco=parseInt(len%60);
	var dura=minu+":"+seco;
		time=setInterval(function(){
		var cur=mu.currentTime;
		var minuc=parseInt(cur/60);
		var secoc=parseInt(cur%60);
		var s;
		
		document.getElementById('m-time').innerHTML=minuc+":"+secoc+"/"+dura;
	},980);
	}
	
	}
	var a=document.getElementById('image');
	a.onclick=function(){
		bofang();
		if (a.getAttribute("src",2)=="img/下首_03.png") {
			a.src="img/暂停_03.png"
		} else{
			a.src="img/下首_03.png"
		};
	}
})(window)

/*
var arr = [{name:"qqq", writer:"aaa", url:"xxx.mp3"}];
var index = 0;
var len = arr.length;

*/
/*var str = "";
for (var i = 0; i < len; i++) {
	str += "";
	str += "";
	str += "";
	str += "";
	str += "";
	str += "";
				<div id="one">
					<h4>把命都给了你</h4>
					<p>黄海波</p>
					<div class="play">
						<img id="image" src="img/下首_03.png"/>
					</div>
				</div>
}

document.getElementById("list").innerHTML = str;*/