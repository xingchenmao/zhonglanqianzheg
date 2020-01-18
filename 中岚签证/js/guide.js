$(function() {
	$('.article-content table').addClass("table table-bordered table-hover");
});
$(function() {
	
	var sidebar = $('#sidebar');
	var sidebarContent = $('#sidebarContent');
	var sidebarBg = $('#sidebar-bg');

	var navHeight = (window.innerWidth < 768) ? 0 : 82;
	var floor = new Array();


	
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


	var buildAnchor = function() {
		var anchorLi = '';
		
		$('.article-content h3').each(function() {
			floor.push($(this).offset().top);
			anchorLi += '<li><a>' + $(this).text() + '</a></li>';
		});
		
		$('.left-anchor').empty();
		$('.left-anchor').append(anchorLi);
		$('.left-anchor').children(':first').children(':first').addClass('left-active-sub');

		
		$('.left-anchor li').each(function() {
			$(this).click(function() {
				$(window).scrollTop(($('.article-content h3').eq($(this).index()).offset().top) - navHeight);
				
				if (window.innerWidth < 768) {
					$('#sidebar').hide();
					$('#sidebar-bg').hide();
				}
			});
		});
	}

	buildAnchor();

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
		var aIndex = 0;
		var validHeight = $('.main-container-row').offset().top + $('.main-container-row').outerHeight() - $(window).scrollTop() -
			navHeight;
		for (var i = 0; i < floor.length; i++) {
			if (floor[i] < ($(window).scrollTop() + navHeight + 10)) {
				aIndex = aIndex + 1;
			}
		}
		if (aIndex > 0) {
			aIndex = aIndex - 1;
		}
		var actLi = $('.left-anchor li').eq(aIndex);
		actLi.siblings().each(function() {
			$(this).children(':first').removeClass('left-active-sub')
		});
		actLi.children(':first').addClass('left-active-sub');

		if (window.innerWidth >= 768) {
			flowMenu(validHeight);
		}
	});
});
