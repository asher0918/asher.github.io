$(function(){$("body").append("<span class='txt'></span>");Math.seed=5,Math.seededRandom=function(t,a){return t=t||1,a=a||0,Math.seed=(9301*Math.seed+49297)%233280,a+Math.seed/233280*(t-a)},$(document).on("click",function(t){var a=["短腿小鲁班","想要长胖","人丑多读书","把天聊死","颜值即正义","天上掉下个林妹妹","与你无关","大海无量","人怕出名猪怕壮","快乐肥宅","与我无关","傻妞有傻福"],n=a[Math.floor(Math.seededRandom(a.length,0))],o=t.pageX-32+"px",e=t.pageY-18+"px",d="#"+(Math.round(255*Math.random())<<16|Math.round(255*Math.random())<<8|Math.round(255*Math.random())).toString(16),s=$(".txt");s.css({position:"absolute",color:d}),s.text(n),s.css({left:o,top:e}),function(t){t.stop().animate({top:"-=80px",opacity:"1"},500,function(){$(this).animate({opacity:"0"},500)})}(s)})});