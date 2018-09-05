/*;(function(){*/
	window.onload=function(){
		$.ajax({
		type:"get",
		url:"js/list.json",
		async:true,
		success:function(data){
			lists=data.list;
			response();	
			bei();
		}
	});
	}
	var lists;
	var index=0;
	var music=document.getElementById("music");
	var pro=document.getElementById("progress");
	var sli=document.getElementsByClassName("slide")[0];
	var p=document.getElementsByClassName("pic");
	var flag=false;
	
	//获取数据
	function response(){
		var liststr="";
			for (var i=0;i<lists.length;i++) {
				liststr+="<div id=\"list_"+i+"\" onclick=\"qiehuan(this.id)\">"+
				"<div class=\"yangshi\"></div>"+
				"<div class=\"list_pos\"></div>"+
				"<img class=\"pic\" id=\"pic_"+i+"\" src=\"img/下首_03.png\"/>"+
				"<span class=\"music_name\">"+lists[i].name+"</span>"+"</br>"+
				"<span class=\"music_player\">"+lists[i].actor+"</span>"+
				"<div class=\"list_border\"></div>"+
				"</div>"
			};
				document.getElementById("list").innerHTML=liststr;
		
				
			/*document.getElementById("music").src=lists[0].src;*/
			}
	//播放
		function bofang(){
			music.src=lists[index].src;
			document.getElementById("name").innerHTML=lists[index].name;
			document.getElementById("writer").innerHTML=lists[index].actor;
			tixing();
			zanting();
			shijian();
			jindu();
			
			/*xuan();*/
		}
		function qiehuan(id){
			p[index].src="img/下首_03.png";
			document.getElementsByClassName("yangshi")[index].style.display="none";
			/*if (id=="list_0") {
				index=0;
			} else if(id=="list_1"){
				index=1;
			}*/
		switch (id){
			case "list_0":
			index=0
				break;
				case "list_1":
			index=1
				break;
				case "list_2":
			index=2
				break;
				case "list_3":
			index=3
				break;
				case "list_4":
			index=4
				break;
				case "list_5":
			index=5
				break;
				case "list_6":
			index=6
				break;
				case "list_7":
			index=7
				break;
			default:
			index=0
				break;
		}
			/*console.log(index);*/
			music.src=lists[index].src;
			bofang();
			/*var off=true;
			if(off){
				p[index].src="img/暂停_03.png";
			}*/
			
			jianting();
		}
		
		function jianting(){
			if(flag==false){
				p[index].src="img/暂停_03.png";
				document.getElementsByClassName("control_2")[0].src="img/暂停_03.png";
				music.play();
				flag=true;
			}else{
				p[index].src="img/下首_03.png";
				document.getElementsByClassName("control_2")[0].src="img/t_03.gif";
				music.pause();
				flag=false;
			}
			
			/*
			 * music.addEventListener("ended",function(){
				p[index].src="下首_03.png";
			},false)*/
	
		}
		//下首
		function xia(){
				index++;
				if(index>lists.length-1){
					index=0;
				}
				document.getElementsByClassName("yangshi")[index-1].style.display="none";
				bofang();
				
			}
		//上首
		function shang(){
			index--;
			if(index<0){
					index=lists.length-1;
				}
			document.getElementsByClassName("yangshi")[index+1].style.display="none";
				bofang();
		}
		//时间显示
		function shijian(){
			var time=document.getElementById("music_time");
			music.oncanplay=function(){
			timer=setInterval(function(){
					var m,s,p,y;
					var minute=parseInt(music.currentTime/60);
				    var second=parseInt(music.currentTime%60);
				    var Minute=parseInt(music.duration/60);
				    var Second=parseInt(music.duration%60);
				    if(minute<10){
				    	m="0";
				    }else{
				    	m="";
				    }
				     if(second<10){
				    	s=0;
				    }else{
				    	s="";
				    }
				     if(Minute<10){
				    	p=0;
				    }else{
				    	p="";
				    }
				     if(Second<10){
				    	y=0;
				    }else{
				    	y="";
				    }
				   
				time.innerHTML=m+minute+":"+s+second+"/"+p+Minute+":"+y+Second;
			},900);
				
			}
		}
		//添加播放样式
		function tixing(){
			var arr=document.getElementsByClassName("yangshi")	;
			arr[index].style.display="block";
			
		}
		//进度条  监听进度 可滑动
		function jindu(){
			jindutian=setInterval(function(){
				pro.style.width=""+300*(music.currentTime/music.duration)+"px";
			})
			sli.addEventListener("mousedown",function adjust(e){
				var bar=e.target;
				var x=e.offsetX;
				pro.style.width=x+"px";
				music.currentTime=""+(x*music.duration/300);
			},true)
		}
		//图片旋转
		function xuan(){
			   var i=0;
				var img=document.getElementById("music_image");
			time=setInterval(function(){
				i++;
				if(i>360){
					i=0;
				}
				img.style.transform="rotate("+i+"deg)";
			},50)
		}
		//播放暂停切换
		var pan=true;
		function zanting(){
			if(pan){
				document.getElementsByClassName("control_2")[0].src="img/暂停_03.png";
				music.play();
				pan=false;
			}else{
				document.getElementsByClassName("control_2")[0].src="img/t_03.gif";
				music.pause();
				pan=true;
			}
		}
			
		//背景颜色
		function bei(){
			for(var s=1;s<lists.length;s++){
				if(s%2==0){
					document.getElementById("list_"+s+"").style.background="#f0f0f0";
					document.getElementById("list_"+s+"").style.height="80px";
					document.getElementById("list_"+s+"").style.width="400px";
					document.getElementById("list_"+s+"").style.borderBottom="1px solid #ffffff";
				}else{
					document.getElementById("list_"+s+"").style.background="#e7e7e7 ";
					document.getElementById("list_"+s+"").style.height="80px";
					document.getElementById("list_"+s+"").style.width="400px";
					document.getElementById("list_"+s+"").style.borderBottom="1px solid #ffffff";
				}
				
			}
		}
		//点击切换歌曲
		
/*/*}    
)(window)*/
	
	
