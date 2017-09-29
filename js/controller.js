var app=angular.module('app',['ui.router']);

app.controller('wrap',function($scope,server){
	$scope.msg=false
	$scope.data=server[0];
	var switchs = document.querySelector("#switchs");
	var next=document.querySelector('#next-music');
	var audio = document.querySelector('audio');

	$scope.audio=function(){
		if(!$scope.msg){
			audio.play();
			$scope.msg=true
			switchs.innerHTML="&#xe615;"
		}else{
			audio.pause();
			$scope.msg=false
			switchs.innerHTML="&#xf0088;"
		}
	}
	var i=0;
	$scope.next=function(){
		if(i>=server.length-1){
			return false;
		}
		i++;
		$scope.data=server[i];
		audio.autoplay=true;
		$scope.msg=true
		switchs.innerHTML="&#xe615;"
	}
})
app.service('server',function(){
	return [
			{
				name:'写不完的温柔',
				singer:'G.E.M.邓紫棋',
				url:'./musicList/G.E.M.邓紫棋 - 写不完的温柔.mp3',
				mirror:'images/1_03.jpg',
				time:'00:03:59'

			},{
				name:'春雨里洗过的太阳',
				singer:'鹿晗',
				url:'./musicList/鹿晗 - 春雨里洗过的太阳.mp3',
				mirror:'images/1_03.jpg',
				time:'00:02:25'
			},{
				name:'路太弯',
				singer:'潘玮柏',
				url:'./musicList/潘玮柏 - 路太弯.mp3',
				mirror:'images/1_03.jpg',
				time:'00:03:40'
			},{
				name:'你是对的人',
				singer:'戚薇、俊昊',
				url:'./musicList/戚薇、俊昊 - 你是对的人.mp3',
				mirror:'images/1_03.jpg',
				time:'00:03:22'
			},{
				name:'你是对的人',
				singer:'戚薇、俊昊',
				url:'./musicList/孙子涵 - 连借口都没有.mp3',
				mirror:'images/1_03.jpg',
				time:'00:03:22'
			},{
				name:'傻傻等',
				singer:'孙子涵',
				url:'./musicList/孙子涵 - 傻傻等.mp3',
				mirror:'images/1_03.jpg',
				time:'00:03:22'
			},{
				name:'童话镇',
				singer:'萧忆情ALEX',
				url:'./musicList/萧忆情ALEX - 童话镇.mp3',
				mirror:'images/1_03.jpg',
				time:'00:03:22'
			}]
})
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('index')
	$urlRouterProvider.when('/index','/index/recom-one')
	$urlRouterProvider.when('/index3','/index3/per-one')

	$stateProvider.state('index',{
				url:'/index',
				templateUrl:'./html/index.html'
			})
			.state('index2',{
				url:'/index2',
				templateUrl:'./html/index2.html'
			})
			.state('index3',{
				url:'/index3',
				templateUrl:'./html/index3.html'
			})




			 .state('index.recom-one',{
			 	url:'/recom-one',
			 	views:{
			 		"recom-one":{
			 			templateUrl:'./html/recom-one.html',
			 			controller:function(){
					 		new Swiper('.recom-container',{
					 			 pagination: '.swiper-pagination'
					 		})
					 	}
			 		}
			 	}
			 	
			 })
			 .state('index.recom-two',{
			 	url:'/recom-two',
			 	views:{
			 		"recom-one":{
			 			templateUrl:'./html/recom-two.html'
			 		}
			 	}
			 })
			 .state('index.recom-three',{
			 	url:'/recom-three',
			 	views:{
			 		"recom-one":{
			 			templateUrl:'./html/recom-three.html',
			 			controller:function(){
			 				new Swiper('.anchor-container',{
					 			 pagination: '.swiper-pagination'
					 		})
			 			}
			 		}
			 	}
			 })
			 .state('index.recom-four',{
			 	url:'/recom-four',
			 	views:{
			 		"recom-one":{
			 			templateUrl:'./html/recom-four.html'
			 		}
			 	}
			 })












			  .state('index3.per-one',{
			 	url:'/per-one',
			 	views:{
			 		"per-view":{
			 			templateUrl:'./html/per-one.html'
			 		}
			 	}
			 	
			 })
			 .state('index3.per-two',{
			 	url:'/per-two',
			 	views:{
			 		"per-view":{
			 			templateUrl:'./html/per-two.html'
			 		}
			 	}
			 })
			 .state('index3.per-three',{
			 	url:'/per-three',
			 	views:{
			 		"per-view":{
			 			templateUrl:'./html/per-three.html'
			 		}
			 	}
			 })
})