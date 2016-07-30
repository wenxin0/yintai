//1.全部分类选项卡特效
window.onload=function(){
	var list=$(".list");
	var item=$(".item");
	for(var i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onmouseover=function(){
			item[this.index].style.display="block";
		}
		list[i].onmouseout=function(){
			item[this.index].style.display="none";
		}
	}

	// 微信
	var weixin=$(".weixin");
	var weixin1=$(".weixin1");
	weixin[0].onmouseover=function(){
		weixin1[0].style.display="block";
	}
	weixin[0].onmouseout=function(){
		weixin1[0].style.display="none";
	}
	// 手机银泰
	var shoujiyintai=$(".shoujiyintai");
	var shoujiyintai1=$(".shoujiyintai1");
	shoujiyintai[0].onmouseover=function(){
		shoujiyintai1[0].style.display="block";
	}
	shoujiyintai[0].onmouseout=function(){
		shoujiyintai1[0].style.display="none";
	}
	// 我的银泰
	var shouye4=$(".shouye4");
	var myyintai=$(".myyintai");
	shouye4[0].onmouseover=function(){
		myyintai[0].style.display="block";
	}
	shouye4[0].onmouseout=function(){
		myyintai[0].style.display="none";
	}
	// 购物车
	var gouwudai=$(".gouwudai");
	var gouwu=$(".gouwu");
	gouwudai[0].onmouseover=function(){
		gouwu[0].style.display="block";
	}
	gouwudai[0].onmouseout=function(){
		gouwu[0].style.display="none";
	}

//2.banner轮播图特效
	var win=$(".banner_middle")[0];
	var as=$("a",win);
	var lis=$("li",$(".point")[0]);
	var btnl=$(".btnl")[0];
	var btnr=$(".btnr")[0];
	var num=0;
	as[0].style.zIndex=10;
	var t=setInterval(moveR,2000);
	win.onmouseover=function(){
		clearInterval(t);
		btnl.style.display="block";
		btnr.style.display="block";
	}
	win.onmouseout=function(){
		t=setInterval(moveR,2000);
		btnl.style.display="none";
		btnr.style.display="none";
	}
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			if(num==this.index){
				return;
			}
			for(var j=0;j<as.length;j++){
				animate(as[j],{opacity:0});
				lis[j].className="";		
			}
			lis[this.index].className="hot";
			animate(as[this.index],{opacity:1});
			num=this.index;
		}
	}
	var flag=true;
	btnr.onclick=function(){
		if(flag){
			flag=false;
			moveR();
		}
	}
	btnl.onclick=function(){
		if(flag){
			flag=false;	
			moveL();
		}
	}	
	function moveR(){
		num++;
		if(num==as.length){
			num=0;
		}
		for(var i=0;i<as.length;i++){
			animate(as[i],{opacity:0});
			lis[i].className="";			
		}
		lis[num].className="hot";
		animate(as[num],{opacity:1},function(){
			flag=true;
		});
	}
	function moveL(){
		num--;
		if(num<0){
			num=lis.length-1;
		}
		for(var i=0;i<as.length;i++){
			animate(as[i],{opacity:0});
			lis[i].className="";		
		}
		lis[num].className="hot";
		animate(as[num],{opacity:1},function(){
			flag=true;
		});
	}
//3.超值特卖选项卡
	var chaolefttop1=$(".chaolefttop1");
	var item1=$(".item1");
	for(var i=0;i<chaolefttop1.length;i++){
		if(i==0){
			continue;
		}
	}
	for(var i=0;i<chaolefttop1.length;i++){
		chaolefttop1[i].index=i;
		chaolefttop1[i].onmouseover=function(){
			for(var j=0;j<chaolefttop1.length;j++){
				item1[j].style.display="none";
			}
			item1[this.index].style.display="block";
		}		
	}
//4.专柜同款选项卡
	var remenzi=$(".remenzi");
	var remenitem=$(".remenitem");
	for(var k=0;k<remenzi.length;k++){
		if(k==0){
			continue;
		}
	}
	for(var i=0;i<remenzi.length;i++){
		remenzi[i].index=i;
		remenzi[i].onmouseover=function(){
			for(var j=0;j<remenzi.length;j++){
				remenitem[j].style.display="none";
			}
			remenitem[this.index].style.display="block";
		}		
	}
	var banner_right=$(".banner_right");
	for(var i=0;i<banner_right.length;i++){
		banner_right[i].j=i;
		banner_right[i].onmouseover=function(){
		animate(banner_right[this.j],{"marginRight":"7px"},50,Tween.Linear);
		}
		banner_right[i].onmouseout=function(){
		animate(banner_right[this.j],{"marginRight":"0"},50);
		}
	}

//5.名品等中间轮播封装
	var mingpin=$(".mingpin-middle");
	for(var i=0;i<mingpin.length;i++){
		lbt(mingpin[i]);
	}
	function lbt(obj){
	var mingpinas=$("a",obj);
	var lis1=$("li",$(".point1")[0]);
	var mingpinbtnl=$(".mingpin-btnl",obj)[0];
	var mingpinbtnr=$(".mingpin-btnr",obj)[0];
	var mingpinwidths=parseInt(getStyle(mingpinas[0],"width"));
	var mingpinnum=0;
	var mingpinnext=0;

	obj.onmouseover=function(){
		mingpinbtnl.style.display="block";
		mingpinbtnr.style.display="block";
	}
	obj.onmouseout=function(){
		mingpinbtnl.style.display="none";
		mingpinbtnr.style.display="none";
	}

	for(i=0;i<mingpinas.length;i++){
		if(i==0){
			continue;
		}
		mingpinas[i].style.left=mingpinwidths+"px";
	}
	for(var i=0;i<lis1.length;i++){
		lis1[i].dd=i;
		lis1[i].onclick=function(){
			if(mingpinnum==this.dd){return;}
			mingpinas[this.dd].style.left=mingpinwidths+"px";
			lis1[mingpinnum].className="";
			lis1[this.dd].className="hot1";
			animate(mingpinas[mingpinnum],{left:-mingpinwidths});
			animate(mingpinas[this.dd],{left:0});
			mingpinnext=this.dd;
			mingpinnum=this.dd;
		}
	}
	var FLAG=true;
	mingpinbtnr.onclick=function(){
		if(FLAG){
			FLAG=false;
			MOVEL();
		}
	}
	mingpinbtnl.onclick=function(){
		if(FLAG){
			FLAG=false;
			MOVER();
		}
	}
	function MOVEL(){
		mingpinnext++;
		if(mingpinnext==mingpinas.length){
			mingpinnext=0;
		}
		mingpinas[mingpinnext].style.left=mingpinwidths+"px";
		lis1[mingpinnum].className="";
		lis1[mingpinnext].className="hot1";
		animate(mingpinas[mingpinnum],{left:-mingpinwidths},function(){FLAG=true});
		animate(mingpinas[mingpinnext],{left:0},function(){FLAG=true});
		mingpinnum=mingpinnext;
	}
	function MOVER(){
		mingpinnext--;
		if(mingpinnext<0){
			mingpinnext=mingpinas.length-1;
		}
		mingpinas[mingpinnext].style.left=-mingpinwidths+"px";
		lis1[mingpinnum].className="";
		lis1[mingpinnext].className="hot1";
		animate(mingpinas[mingpinnum],{left:mingpinwidths},function(){FLAG=true});
		animate(mingpinas[mingpinnext],{left:0},function(){FLAG=true});
		mingpinnum=mingpinnext;
	}
	}
//6.名品等左轮播封装
	var mingpin1=$(".mingpin-left-bot");
	for(var j=0;j<mingpin1.length;j++){
		zlbt(mingpin1[j]);
	}
	function zlbt(obj){
	var mingleft=$(".mingleft",obj);
	var mingbtnl=$(".ming-btnl",obj)[0];
	var mingbtnr=$(".ming-btnr",obj)[0];
	var mingwidths=parseInt(getStyle(mingleft[0],"width"));
	var mingnum=0;
	var mingnext=0;
	for(i=0;i<mingleft.length;i++){
		if(i==0){
			continue;
		}
		mingleft[i].style.left=mingwidths+"px";
	}
	var FLAG1=true;
	mingbtnr.onclick=function(){
		if(FLAG1){
			FLAG1=false;
			MOVEL1();
		}
	}
	mingbtnl.onclick=function(){
		if(FLAG1){
			FLAG1=false;
			MOVER1();
		}
	}
	function MOVEL1(){
		mingnext++;
		if(mingnext==mingleft.length){
			mingnext=0;
		}
		mingleft[mingnext].style.left=mingwidths+"px";
		animate(mingleft[mingnum],{left:-mingwidths},function(){FLAG1=true});
		animate(mingleft[mingnext],{left:0},function(){FLAG1=true});
		mingnum=mingnext;
	}
	function MOVER1(){
		mingnext--;
		if(mingnext<0){
			mingnext=mingleft.length-1;
		}
		mingleft[mingnext].style.left=-mingwidths+"px";
		animate(mingleft[mingnum],{left:mingwidths},function(){FLAG1=true});
		animate(mingleft[mingnext],{left:0},function(){FLAG1=true});
		mingnum=mingnext;
	}
  }

//7.按需加载和楼层跳转
	var floor=$(".floor");
	var ARR=[];
	for(var I=0;I<floor.length;I++){
		ARR.push(floor[I].offsetTop);
	}
	var HEIGHTS=document.documentElement.clientHeight;
	var fflag=true;
	var LIS=$("li",$(".jump")[0]);
	for(var I=0;I<LIS.length;I++){
		LIS[I].ff=I;
		LIS[I].onclick=function(){
		fflag=false;
		for(var j=0;j<LIS.length;j++){
			LIS[j].style.background="#ccc";
		}
		LIS[this.ff].style.background="#E5004F";
		animate(document.body,{scrollTop:ARR[this.ff]},function(){fflag=true;});
		animate(document.documentElement,{scrollTop:ARR[this.ff]},function(){fflag=true;});

		}
	}
	var sflag=true;
	window.onscroll=function(){
	var OBJ=document.body.scrollTop?document.body:document.documentElement;
	var scrolltop=OBJ.scrollTop;
	for(var i=0;i<floor.length;i++){
		if(scrolltop+HEIGHTS>=ARR[i]+200){
			var imgs=$("img",floor[i]);
			for(var j=0;j<imgs.length;j++){
				imgs[j].src=imgs[j].getAttribute("imgpath");
			}
		}
	}

//侧边框
	var jump=$(".jump")[0];
	if(scrolltop>=ARR[0]){
		if(sflag){
		sflag=false;
		animate(jump,{right:22});
		}
	}else{
		if(!sflag){
		sflag=true;
		animate(jump,{right:-72});
		}
	}

	//按钮
	if(!fflag){
		return;
	}
	for (var i = 0; i < floor.length; i++) {
		if (scrolltop+HEIGHTS>=ARR[i]+200) {
			for(var j=0;j<LIS.length;j++){
			LIS[j].style.background="#ccc";
			}
			LIS[i].style.background="#E5004F";
		}
	 }
   }
//8.线的封装
var xian=$(".xian");
	for(var i=0;i<xian.length;i++){
		wx(xian[i]);
	}
	function wx(obj){
	var widths=obj.offsetWidth;
	var heights=obj.offsetHeight;

	var lefts=$((".left"),obj)[0];
	var rights=$(".right",obj)[0];
	var tops=$(".top",obj)[0];
	var bottoms=$(".bottom",obj)[0];

	obj.onmouseover=function(){
		animate(lefts,{height:heights});
		animate(rights,{height:heights});
		animate(tops,{width:widths});
		animate(bottoms,{width:widths});
	  }
	obj.onmouseout=function(){
		animate(lefts,{height:0});
		animate(rights,{height:0});
		animate(tops,{width:0});
		animate(bottoms,{width:0});
	  }
    }




















}















