alert(' Tilni tanlang \n Choose language \n Выберите язык');
		function l() {
			var lang = document.getElementsByTagName('input');
			if(lang[0].checked == true) {
				document.getElementById('h').innerHTML = "Sovg\'ani toping!";
				var getRandomNumber = function (size) {
					return Math.floor(Math.random()*size);
				};
				var getDistance = function (event, target) {
					var diffX = event.offsetX - target.x;
					var diffY = event.offsetY - target.y;
					return Math.sqrt((diffX * diffX) + (diffY * diffY));
				}
				var getDistanceHint = function (distance) {
					if(distance < 10){
						return "Qaynoq!";
					} else if (distance < 20) {
						return "Juda issiq!";
					} else if (distance < 40) {
						return "Issiq!";
					} else if (distance < 80) {
						return "Sovuq!";
					} else if (distance < 160) {
						return "Juda sovuq!";
					} else {
						return "Muzdek!";
					}
				};
				var width = 600;
				var height = 400;
				var clicks = 0;
				var target = {
					x: getRandomNumber(width),
					y: getRandomNumber(height)
				}
				$("#map").click(function (event){
					clicks++;
					var distance = getDistance(event, target);
					var distanceHint = getDistanceHint(distance);
					$("#distance").text(distanceHint);
					if(distance < 8) {
						alert("Sovg'alar topildi. Bosishlar soni: " + clicks);
					}
				});	
			}
			if(lang[1].checked == true) {
				document.getElementById('h').innerHTML = "Find gifts!";
				var getRandomNumber = function (size) {
					return Math.floor(Math.random()*size);
				};
				var getDistance = function (event, target) {
					var diffX = event.offsetX - target.x;
					var diffY = event.offsetY - target.y;
					return Math.sqrt((diffX * diffX) + (diffY * diffY));
				}
				var getDistanceHint = function (distance) {
					if(distance < 10){
						return "Boiling!";
					} else if (distance < 20) {
						return "Very hot!";
					} else if (distance < 40) {
						return "Hot!";
					} else if (distance < 80) {
						return "Cold!";
					} else if (distance < 160) {
						return "Very cold!";
					} else {
						return "Froze!";
					}
				};
				var width = 600;
				var height = 400;
				var clicks = 0;
				var target = {
					x: getRandomNumber(width),
					y: getRandomNumber(height)
				}
				$("#map").click(function (event){
					clicks++;
					var distance = getDistance(event, target);
					var distanceHint = getDistanceHint(distance);
					$("#distance").text(distanceHint);
					if(distance < 8) {
						alert("Gifts found. Number of clicks: " + clicks);
					}
				});
			}
			if(lang[2].checked == true) {
				document.getElementById('h').innerHTML = "Найди подарки!";
				var getRandomNumber = function (size) {
					return Math.floor(Math.random()*size);
				};
				var getDistance = function (event, target) {
					var diffX = event.offsetX - target.x;
					var diffY = event.offsetY - target.y;
					return Math.sqrt((diffX * diffX) + (diffY * diffY));
				}
				var getDistanceHint = function (distance) {
					if(distance < 10){
						return "Обожжешься!";
					} else if (distance < 20) {
						return "Очен горячо!";
					} else if (distance < 40) {
						return "Горячо!";
					} else if (distance < 80) {
						return "Холодно!";
					} else if (distance < 160) {
						return "Очен холодно!";
					} else {
						return "Замерзнешь!";
					}
				};
				var width = 600;
				var height = 400;
				var clicks = 0;
				var target = {
					x: getRandomNumber(width),
					y: getRandomNumber(height)
				}
				$("#map").click(function (event){
					clicks++;
					var distance = getDistance(event, target);
					var distanceHint = getDistanceHint(distance);
					$("#distance").text(distanceHint);
					if(distance < 8) {
						alert("Подарки найдены! Сделано кликов: " + clicks);
					}
				});
			}
		}// JavaScript Document