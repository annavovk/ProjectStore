$(function() {

	// Submit Testimonial

	$("#testimonial-popup .btn").click( function() {
		$('#testimonial-popup .success-message').show(0).delay(2000).hide(0);
	});


	// Testimonial Edit

	$(".edit-btn").click( function() {
		$(this).closest('.testimonial-item').find(".testimonial-item-desc").each(function(){
			$(this).addClass("editing");
			this.contentEditable = true;
		});
		$(this).closest('.testimonial-item').find(".testimonial-item-bottom").each(function(){
			$(this).addClass("editing");
		});
	});

	
	$(".btns-small.edit").click( function() {
		$(this).closest('.testimonial-item').find(".testimonial-item-desc").each(function(){
			$(this).removeClass("editing");
			this.contentEditable = false;
		});
		$(this).closest('.testimonial-item').find(".testimonial-item-bottom").each(function(){
			$(this).removeClass("editing");
		});
	});

	// Checked radio

	$(".checkout-sect #radio1").click( function() {
		$(".input-group.fizlico").show();
		$(".input-group.jurlico").hide();
	});

	$(".checkout-sect #radio2").click( function() {
		$(".input-group.jurlico").show();
		$(".input-group.fizlico").hide();
	});

	// sort
	$(".sort-items").on('click','.sort-item', function(){
		$(this).toggleClass('active').siblings().removeClass('active');
	})

	$('.sort-item.grid').click( function() {
		$(".products-sect").removeClass("list").removeClass("list-grid").addClass("grid");
	});
	$('.sort-item.list-grid').click( function() {
		$(".products-sect").removeClass("list").removeClass("grid").addClass("list-grid");
	});
	$('.sort-item.list').click( function() {
		$(".products-sect").removeClass("grid").removeClass("list-grid").addClass("list");
	});

	// Quntity Input

	$('.btn-number').click(function(e){
		e.preventDefault();
		
		fieldName = $(this).attr('data-field');
		type      = $(this).attr('data-type');
		var input = $("input[name='"+fieldName+"']");
		var currentVal = parseInt(input.val());
		if (!isNaN(currentVal)) {
			if(type == 'minus') {
				
				if(currentVal > input.attr('min')) {
					input.val(currentVal - 1).change();
				} 
				if(parseInt(input.val()) == input.attr('min')) {
					$(this).attr('disabled', true);
				}

			} else if(type == 'plus') {

				if(currentVal < input.attr('max')) {
					input.val(currentVal + 1).change();
				}
				if(parseInt(input.val()) == input.attr('max')) {
					$(this).attr('disabled', true);
				}

			}
		} else {
			input.val(0);
		}
	});
	$('.input-number').focusin(function(){
		$(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(function() {
		
		minValue =  parseInt($(this).attr('min'));
		maxValue =  parseInt($(this).attr('max'));
		valueCurrent = parseInt($(this).val());
		
		name = $(this).attr('name');
		if(valueCurrent >= minValue) {
			$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
		} else {
			alert('Sorry, the minimum value was reached');
			$(this).val($(this).data('oldValue'));
		}
		if(valueCurrent <= maxValue) {
			$(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
		} else {
			alert('Sorry, the maximum value was reached');
			$(this).val($(this).data('oldValue'));
		}
		
		
	});
	$(".input-number").keydown(function (e) {
				// Allow: backspace, delete, tab, escape, enter and .
				if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
						 // Allow: Ctrl+A
						 (e.keyCode == 65 && e.ctrlKey === true) || 
						 // Allow: home, end, left, right
						 (e.keyCode >= 35 && e.keyCode <= 39)) {
								 // let it happen, don't do anything
								return;
							}
				// Ensure that it is a number and stop the keypress
				if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
					e.preventDefault();
				}
			});

	// Range Input

	$("#slider").slider({
		range: true,
		min: 0,
		max: 100000,
		step: 10,
		values: [20000, 80000],
		animate: 300,
		slide: function(event, ui) {
			for (var i = 0; i < ui.values.length; ++i) {
				$("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
			}
		}
	});

	$("input.sliderValue").change(function() {
		var $this = $(this);
		$("#slider").slider("values", $this.data("index"), $this.val());
	});

	// Range 2

	$("#slider1").slider({
		range: true,
		min: 10,
		max: 100,
		step: 5,
		values: [20, 90],
		animate: 300,
		slide: function(event, ui) {
			for (var i = 0; i < ui.values.length; ++i) {
				$("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
			}
		}
	});

	$("input.sliderValue").change(function() {
		var $this = $(this);
		$("#slider1").slider("values", $this.data("index"), $this.val());
	});

	//Top menu
	$('.main-menu .sf-menu').superfish({
		delay: 500,
		speed: 'fast',
	});

	$(window).on('resize', function () {
		$('.main-menu .sf-menu').toggleClass('sf-vertical', $(window).width() < 1024);
	});

	$('.main-menu .sf-menu').toggleClass('sf-vertical', $(window).width() < 1024);

	$(".sm-menu-header").click(function(){
		$(".main-menu .sf-vertical").slideToggle();
	});

	$(document).mouseup(function (e) {
		var container = $(".main-menu .sf-vertical");
		var menu = $(".sm-menu-header");
		if (!menu.is(e.target) && menu.has(e.target).length === 0) {
			container.slideUp();
		}
	});

	// Mobile menu 320px

	$('.sf-menu').children().clone().appendTo('#MobileMenu');

	$('.main-menu .lines').click(function(){
		$('#MobileMenu').slideToggle();
	});

	$(document).mouseup(function (e) {
		var container = $("#MobileMenu");
		var menu = $(".main-menu");
		if (!menu.is(e.target) && menu.has(e.target).length === 0) {
			container.slideUp();
		}
	});

	// Mobile Catalog 320px

	$('.catalog-list').children().clone().appendTo('.catalog-list-xs');
	$('.catalog-list-xs .product-item').remove();

	$('.catalog-list-xs').superfish({
		delay: 500,
		speed: 'fast'
	});

	$(document).mouseup(function (e) {
		var container = $(".catalog-list-xs");
		var catalog = $(".catalog-xs");
		if (!catalog.is(e.target) && catalog.has(e.target).length === 0) {
			container.slideUp();
		}
	});

	$('.catalog-xs').click(function(){
		$('.catalog-list-xs').slideToggle();
	});

	// Inner Page Catalog

	$(document).mouseup(function (e) {
		var container = $(".inner-page .catalog-list");
		var catalog = $(".inner-page .catalog-header");
		if (!catalog.is(e.target) && catalog.has(e.target).length === 0) {
			container.slideUp();
		}
	});

	$('.inner-page .catalog-header, .inner-page .widget.catalog .lines').click(function(){
		$('.catalog-list').slideToggle();
	});

	//Banner 320px

	$('.widget.banner').children().clone().appendTo('.widget.banner.banner-sm');

	//Catalog Mega Menu
	$('.catalog-list').superfish({
		delay: 500,
		speed: 'fast'
	});

	// Main Slider
	$(".main-slider").owlCarousel({
		autoplay: true,
		items: 1,
		nav: false,
		itemClass: "slide"
	});

	// Reccomend Products Carousel
	$(".reccomend-products .products").owlCarousel({
		loop: true,
		items: 4,
		margin: 12,
		itemClass: "product-item",
		nav: true,
		navText: ["<i class='arrow-slide-left'></i>","<i class='arrow-slide-right'></i>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			768:{
				items:4
			}
		}
	});

	// Product Carousel
	$(".prod-carousel .products").owlCarousel({
		loop: true,
		items: 3,
		margin: 12,
		itemClass: "product-item",
		nav: true,
		navText: ["<i class='arrow-slide-left'></i>","<i class='arrow-slide-right'></i>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			768:{
				items:3
			}
		}
	});



	// Related Prod carousel
	$(".related-products .related-products-items").owlCarousel({
		loop: true,
		items: 3,
		margin: 15,
		itemClass: "related-products-item",
		nav: true,
		navText: ["<i class='arrow-slide-left'></i>","<i class='arrow-slide-right'></i>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			768:{
				items:3
			},
			1024:{
				items:4
			}
		}
	});

	// Tooltip Info

	$(document).mouseup(function (e) {
		var container = $(".tooltip-block #Tooltip1");
		var catalog = $(".tooltip-block .tooltip-1");
		if (!catalog.is(e.target) && catalog.has(e.target).length === 0) {
			container.slideUp();
		}
	});

	$(document).mouseup(function (e) {
		var container = $(".tooltip-block #Tooltip2");
		var catalog = $(".tooltip-block .tooltip-2");
		if (!catalog.is(e.target) && catalog.has(e.target).length === 0) {
			container.slideUp();
		}
	});

	$('.tooltip-block .tooltip-1').hover(function() {
		$('#Tooltip1').slideDown();
	});

	$('.tooltip-block .tooltip-2').hover(function() {
		$('#Tooltip2').slideDown();
	});



	// Sert Popup

	$('.sert-popup').magnificPopup({
		type: 'image'
	});

	$('.testimonial-item.jur .img-wrap a').magnificPopup({
		type: 'image'
	});

	// Product Image Popup

	$('.product-img .main-img').magnificPopup({
		delegate: 'a',
		type: 'image'
	});

	// Product Images

	$('.img-thumb-list li img').hover(function() {
		var link = $(this).attr('src');
		$('.main-img img').attr('src', link);
		$('.main-img a').attr('href', link);
		return false;
	});

	// Equal Height Blocks
	$(".product .name").equalHeights();

	// Tabs
	$('#ArtTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$('#LeadProd a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$('#ProductDescTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
	
	$('.testimonial-tab-menu a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	
	// Popup callback
	$('.callback').magnificPopup({
		type:'inline',
	});

	$('.testimonial-popup').magnificPopup({
		type:'inline',
	});

	$('#StickyCall').magnificPopup({
		type:'inline',
	});

	$('.montage').magnificPopup({
		type:'inline',
	});

	$('a[href="#cart-popup"]').magnificPopup({
		type:'inline',
	});

	$('.close-popup').click(function(){
		$.magnificPopup.close();
	});

	// Sticky header

	var options = {
		offset: 600
	}
	var header = new Headhesive('.sticky-top-line', options);

	// Back to top
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 1200,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700,
	//grab the "back to top" link
	$back_to_top = $('.to-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		}, scroll_top_duration
		);
	});



});
