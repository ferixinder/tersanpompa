$(document).ready(function(){
	if($("input").hasClass("phoneFormat")){
		$('.phoneFormat').mask("0999-999-99-99",{placeholder:"0___-___-__-__"});
	}

	productmenuul = document.getElementById('productmenuul');
	generalpopup = document.getElementById('generalpopup');
	generalmessage = document.getElementById('generalmessage');
	window.onclick = function(event){
		if(event.target==productmenuul){$('.productmenuul').hide();}
		if(event.target==generalpopup){$('.generalpopup').hide();}
		if(event.target==generalmessage){$('.generalmessage').hide();}
	}

	$(".mainmenuli").hover(
	  	function(){
	    	mid = $(this).attr('id');
	    	$('.headersubmenu').addClass('active');
	    	$('.headersubmenuul').removeClass('active');
	    	$('#menu'+mid).addClass('active');
	  	}, function(){
		}
	);
	$(".header-main").hover(
	  	function(){
	  	}, function(){
	    	mid = $(this).attr('id');
	    	$('.headersubmenu').removeClass('active');
	    	$('.headersubmenuul').removeClass('active');
		}
	);

	$(".cbox").colorbox({rel:'cbox', transition:"none", maxWidth:"90%", maxHeight:"90%"});
});

$(document).mouseup(function(e){
	dW = $(window).width();
	if(dW<769){
	    var productmenuul = $(".productmenuul");
	    if(! productmenuul.is(e.target) && productmenuul.has(e.target).length==0){
	        $('.productmenuul').hide();
	    }
    }
});

$(window).scroll(function(){
	topVal = parseInt($(window).scrollTop());
	if(topVal>100){
		$('.header-main').addClass('scroll');
	}else{
		$('.header-main').removeClass('scroll');
	}

	if(topVal>200){
		$('.productcontents-menu').addClass('scroll');
	}else{
		$('.productcontents-menu').removeClass('scroll');
	}

	if(topVal>700){
		$('.products-stickylinks').addClass('sticky');
	}else{
		$('.products-stickylinks').removeClass('sticky');
	}
});

function epagescroll(val){
	$('html, body').animate({scrollTop:$(val).offset().top-100}, 750);
}

$(document).ready(function(){
	$('.projeelements-slider').owlCarousel({
		margin:0,
		nav:true,
		items:1,
		dots:true,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
	})
	$('.productslider').owlCarousel({
		items:1,
		nav:true,
		navText:["",""],
		dots:false,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
	})
});

function etab(tabid){
	$('.taba').removeClass('active');
	$('.tabcontent').removeClass('active');
	$('#taba'+tabid).addClass('active');
	$('#tabcontent'+tabid).addClass('active');
}

function showmmenu(){
    $('.productmenuul').show();
}

function footerTab(tabid, menuname){
    $('.footertaba').removeClass('active');
    $('#a'+tabid).addClass('active');
    $('.footertab').removeClass('active');
    $('#'+tabid).addClass('active');
    $('.footertabmobilemenu span').html(menuname);
    dW = $(window).width();
    if(dW<769){
        $('#footertabmobile').slideToggle();
    }
}

function footerTabMobile(){
    $('#footertabmobile').slideToggle();
}

function aMenu(menuid){
    $('.amenu').removeClass('active');
    $(menuid).addClass('active');
}

function searchopen(){
    $('.searchpopup').addClass('open');
    document.getElementById("searchinput").focus();
}

function searchclose(){
    $('.searchpopup').removeClass('open');
}

/* MOBILE MENU OPEN */
    function mmopen(){
        $('.mmsub').removeClass('active');
        $('.mainmobilemenu').addClass('active');
        setTimeout(function(){
            $('.mainmobilemenu .main').addClass('active');
        }, 50);
    }
/* MOBILE MENU CLOSE */
    function mmclose(){
        $('.mmsub').removeClass('active');
        $('.mainmobilemenu .main').removeClass('active');
        setTimeout(function(){
            $('.mainmobilemenu').removeClass('active');
        }, 200);
    }
/* MOBILE MENU SUB OPEN */
    function mmsubopen(id){
        $('#'+id).addClass('active');
    }
/* MOBILE MENU SUB CLOSE */
    function mmsubclose(){
        $('.mmsub').removeClass('active');
    }
