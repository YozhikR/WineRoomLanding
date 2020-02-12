$(function () {

	$(document).ready(function() {
		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			disableOn: 700,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	});

	$(function () {
		$("#header").load("header.html");
		$("#footer").load("footer.html");
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	new WOW().init();
	
	// Owl-Carousel;
	// $(".owl-carousel").owlCarousel();

	// MagnificPopup
	// $('a[href*="#callback"]').magnificPopup({
	// 	removalDelay: 500,
	// 	callbacks: {
	// 		beforeOpen: function () {
	// 			this.st.mainClass = this.st.el.attr('data-effect');
	// 		}
	// 	},
	// 	fixedContentPos: true
	// });

	$('#phone-id').mask('+7(999) 999-99-99', { placeholder: "+7 (   )   -  -  " });


	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

// top-line

// $('.top-line__burger').click(function(event) {
// 	$(".top-line__burger,.top-line__menu").toggleClass('burger-active');
// 	$('body').toggleClass('lock');
// });

$(window).scroll(function() {
	if ($(this).scrollTop() > 60) {
		$(".top-line").addClass("top-active");
	} else {
		$(".top-line").removeClass("top-active");
	}
});

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


$(document).ready(function () {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

$(".slider-2").owlCarousel({
	items: 3,
	loop: true,
	margin: 100,
	nav: true,
	navText: [
		'<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>'
	],
	center: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
			// margin: 5,
		},
		1200: {
			items: 3
		}
	}
});


// Brands

$(".brands-slider")
	.on("initialized.owl.carousel changed.owl.carousel", function(e) {
		if (!e.namespace) {
			return;
		}
		var carousel = e.relatedTarget;
		$(".slider-counter").text(
			carousel.relative(carousel.current()) + 1 + "/" + carousel.items().length
		);
	})
	.owlCarousel({
		items: 1,
		loop: true,
		// margin: 100,
		// autoHeight:true,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
		],
		center: true
	});


// Wine Slider

$(".catalog-slider")
	.on("initialized.owl.carousel changed.owl.carousel", function (e) {
		if (!e.namespace) {
			return;
		}
		var carousel = e.relatedTarget;
		$(".slider-counter").text(
			carousel.relative(carousel.current()) + 1 + "/" + carousel.items().length
		);
	})
	.owlCarousel({
		items: 1,
		loop: true,
		// margin: 100,
		// autoHeight:true,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
		],
		center: true
	});



$('.gallery-slider').owlCarousel({
	// items: 3,
	loop: true,
	margin: 40,
	nav: true,
	navText: [
		'<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>'
	],
	center: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
			// margin: 5,
		},
		1200: {
			items: 3
		}
	}
})


// 2GIS MAP должен в самом низу

let map;
let mapContainer = document.querySelector('#map');

if (mapContainer) {
	DG.then(function () {
		map = DG.map('map', {
			center: [43.24816461, 76.94195241],
			zoom: 17,
		});

		DG.marker([43.24816461, 76.94195241]).addTo(map);
	});
}