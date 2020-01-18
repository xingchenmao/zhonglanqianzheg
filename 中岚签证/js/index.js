// 轮播图
$("#banner").carousel({
	interval: 2000
})

// 数字
var apply = document.getElementById("sum-apply");
var rate = document.getElementById("sum-rate");
var urgent = document.getElementById("sum-urgent");
var urgent_rate = document.getElementById("urgent-rate");
timer = 0;
var time = setInterval(function() {
	timer += 111
	apply.innerHTML = timer.toLocaleString()
	if (timer >= 18937) {
		Num = 18937
		apply.innerHTML = Num.toLocaleString()
		clearInterval(time)
	}
}, 6)

timesr = 0;
var timse = setInterval(function() {
	timesr += 1.1
	rate.innerHTML = parseFloat(timesr).toFixed(1)
	if (timesr >= 98.8) {
		num = 98.8
		rate.innerHTML = parseFloat(num).toFixed(1)
		clearInterval(timse)
	}
}, 12)
timers = 0;
var timee = setInterval(function() {
	timers += 11
	urgent.innerHTML = timers.toLocaleString()
	if (timers >= 3273) {
		Nums = 3271
		urgent.innerHTML = Nums.toLocaleString()
		clearInterval(timee)
	}
}, 4)
timerss = 0;
var timeee = setInterval(function() {
	timerss += 2
	urgent_rate.innerHTML = timerss
	if (timerss >= 100) {
		Numss = 100
		urgent_rate.innerHTML = Numss
		clearInterval(timeee)
	}
}, 20)

// 服务
var server = document.getElementById("server");
var oDivs = document.getElementsByClassName('sum-apply');
for (var i = 0; i < oDivs.length; i++) {
	oDivs[i].index = i; //自定义索引
	oDivs[i].onmousemove = function() {
		for (var j = 0; j < oDivs.length; j++) {
			oDivs[j].className = "card-item col-lg-3 col-sm-6 col-xs-12 our-data-item sum-apply";
		}
		this.className = "card-item col-lg-3 col-sm-6 col-xs-12 our-data-item sum-apply active1"
	}
}
var tim = setInterval(function() {
	popups.style.display = "block"
}, 60000)
// 缩小左栏
var num2 = 1;
$('#right').click(function() {
	if (num2 == 1) {
		rights.style.height = 35 + "px";
		small.style.display = "none";
		rights.style.left = 2 + "px"
		rights.style.marginLeft = 0 + "px"
		rights.style.bottom = 2 + "px"
		rights.style.marginBottom = 0 + "px"
		right.className = "glyphicon glyphicon-unchecked";
		num2 = 2
		clearInterval(tim)
		tim = setInterval(function() {
			popups.style.display = "block"
		}, 60000)
	} else if (num2 == 2) {
		small.style.display = "block";
		rights.style.height = "auto";
		right.className = "glyphicon glyphicon-minus";
		num2 = 1
	}

})



// 置顶
$(window).scroll(function() {
	var oScrollTop = $(window).scrollTop();
	if (oScrollTop >= 200) {
		$("#gotops").fadeIn()
	} else {
		$("#gotops").fadeOut()
	}
})

$("#gotops").click(function() {
	$("body,html").animate({
		'scrollTop': 0
	}, 600)
})


// 缩小版
$(window).scroll(function() {
	var oScrollTop = $(window).scrollTop();
	if (oScrollTop >= 200) {
		$("#above").fadeIn()
	} else {
		$("#above").fadeOut()
	}
})

$("#above").click(function() {
	$("body,html").animate({
		'scrollTop': 0
	}, 600)
})

// 弹窗
var popups = document.getElementById("popups");
var cha = document.getElementById("cha");
var Later = document.getElementById("Later");
var present = document.getElementById("present");



cha.onclick = function() {
	popups.style.display = "none"
}
Later.onclick = function() {
	popups.style.display = "none"
}

var tims = setInterval(function() {
	popups.style.display = "none"
}, 120000)

present.onclick = function() {
	// alert("aaa")
	small.style.display = "block";
	rights.style.height = "auto";
	rights.style.left = 50 + "%"
	rights.style.marginLeft = -120 + "px"
	rights.style.bottom = 50 + "%"
	rights.style.marginBottom = -205 + "px"
	right.className = "glyphicon glyphicon-minus";
	popups.style.display = "none"
	clearInterval(tim)
}

function PhoneNo(tel) {
	var pattern = /^1[34578]\d{9}$/;
	return pattern.test(tel);
}

$("#submits").click(function() {
	
	if($("#text").val() == ""&&$('#tel').val().length == 0){
		 $('#text').focus();
		 $("#tishi").css("display", "block")
		 $("#text").css("borderColor", "red")
	}else if($("#text").val() != ""&&$('#tel').val().length == 0){
		 $("#tishi").css("display", "none")
		 $("#text").css("borderColor", "#d5d5d5");
		 $("#tishi2").html("电话不能为空!")
		 $("#tels").css("borderColor", "red")
		 $('#tel').focus();
	}else if(PhoneNo($('#tel').val()) == false){
		$("#tels").css("borderColor", "red")
		$("#tel").css("color", "red")
		$("#tishi2").html("请输入正确的电话号码!")
		$('#tel').focus();
	}else{
		$("#tishi").css("display", "none");
		$("#tishi2").html("");
		$("#text").val("")
		$("#tel").val("")
		$("#text").css("borderColor", "#d5d5d5");
		$("#tels").css("borderColor", "#d5d5d5")
		$("#verify").css("display","none")
		$("#return").css("display","block")
	}
})
$("#btns").click(function(){
	$("#verify").css("display","block")
	$("#return").css("display","none")
	rights.style.height = 35 + "px";
	small.style.display = "none";
	rights.style.left = 2 + "px"
	rights.style.marginLeft = 0 + "px"
	rights.style.bottom = 2 + "px"
	rights.style.marginBottom = 0 + "px"
	right.className = "glyphicon glyphicon-unchecked";
	num2 = 2
	clearInterval(tim)
	tim = setInterval(function() {
		popups.style.display = "block"
	}, 60000)
	
	
})
