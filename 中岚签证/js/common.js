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
		rights.style.height = 410 + "px";
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
	rights.style.height = 410 + "px";
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


$(function() {
	var sidebar = $('#sidebar');
	var sidebarContent = $('#sidebarContent');
	var sidebarBg = $('#sidebar-bg');

	var navHeight = (window.innerWidth < 768) ? 0 : 82;

	$('#slider-menu').click(function(event) {
		if (sidebar.is(':hidden')) {
			sidebar.show();
			sidebarBg.css({
				"position": "fixed",
				"top": 0,
				"left": 0,
				"display": "block",
				"width": "100%",
				"height": "100%",
				"z-index": 1090,
				"background-color": "rgba(0,0,0,0.5)"
			});
		} else {
			sidebar.hide();
			sidebarBg.hide();
		}
	});
	sidebarBg.click(function() {
		sidebar.hide();
		sidebarBg.hide();
	});
	var flowMenu = function(validHeight) {
		if ($('.main-container-row').offset().top < $(window).scrollTop() + navHeight) {
			
			sidebar.css({
				"position": "fixed",
				"width": sidebar.parent().width(),
				"height": validHeight,
				
				"top": navHeight
			});
		} else {
			sidebar.css({
				"position": "relative",
				"width": sidebar.parent().width(),
				"height": validHeight,
				"top": ""
			});
		}
	}

	$(window).resize(function() {
		navHeight = (window.innerWidth < 768) ? 0 : 82;
		sidebar.css({
			"width": sidebar.parent().width()
		});
		if (window.innerWidth >= 768) {
			sidebar.show();
			sidebarBg.hide();
			var validHeight = $('.main-container-row').offset().top + $('.main-container-row').outerHeight() - $(window).scrollTop() -
				navHeight;
			flowMenu(validHeight);
		} else {
			sidebar.hide();
			sidebarBg.hide();
		}
	});
	
	$(window).scroll(function() {
		var validHeight = $('.main-container-row').offset().top + $('.main-container-row').outerHeight() - $(window).scrollTop() -
			navHeight;
		if (window.innerWidth >= 768) {
			flowMenu(validHeight);
		}
	});
});
