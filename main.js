/*================================================
[  Table of contents  ] Dev
================================================

    1. jQuery MeanMenu
    2. wow js active
    3. jQuery Nivo Slider (home-2)
    4. Slick Carousel 
        4.1 Active Slider - 1 (home-1)
        4.2 Active By Brand
        4.3 Active Featured Product
        4.4 Active Blog
        4.5 Active Blog 2
        4.6 Active Related Product
		4.7 Active Team Member
    5. Countdown
    6. ScrollUp
    7. Tooltip 
    8. Treeview active
    9. Price Slider
    10. Fancybox active
    11. Elevate Zoom active dd
    12. single-product-zoom-image carousel
    13. Cart Plus Minus Button
    14. bootstrap accordion one open at a time
    15. Cart tab menu active
    16. Blog page manu dropdown 
    17. Background Toutube Video 
    18. STICKY sticky-header

======================================
[ End table content ]
======================================*/
//Category function
function setContainerScroll($container) {
	var $this = $container,
		scrollLeft = $this.scrollLeft(),
		maxScrollWidth = $this.innerWidth(),
		maxScrollAmt = $this.find("ul").prop("scrollWidth") - maxScrollWidth;
	if (scrollLeft >= maxScrollAmt) {
		$this.closest(".category-tabs-wrap").addClass("scrolled-right");
	} else {
		$this.closest(".category-tabs-wrap").removeClass("scrolled-right");
	}
	if (scrollLeft > 0) {
		$this.closest(".category-tabs-wrap").addClass("scrolled-left");
	} else {
		$this.closest(".category-tabs-wrap").removeClass("scrolled-left");
	}
}

$(function () {
	$(".category-tabs").each(function () {
		$(this).wrap("<div class='category-tabs-wrap'></div>");
		setContainerScroll($(this));
	});
	$(window).on("resize", function () {
		$(".category-tabs").each(function () {
			setContainerScroll($(this));
		});
	});
	$(".category-tabs").on("scroll", function () {
		setContainerScroll($(this));
	});
	$(".cart-toggler").append("<span class='in-cart-ticker'>10</span>");
	$(".navbar-toggle").prepend("<span class='cart-insertion'></span>");

	$(".cart-insertion").click(function (e) {
		e.preventDefault();
		e.stopPropagation();
	});

	$(".cart-insertion").append("<span class='in-cart-ticker'>10</span>");

	$(document).on("click", ".nav-link.active", function () {
		console.log("click");
		var href = $(this).attr("href").substring(1);
		$(this).removeClass("active");
		$(".category-container#tablist .tab-pane[id=" + href + "]").removeClass(
			"active"
		);
		console.log("link");
	});

	$(document).on("mouseover click", "[data-toggle='tab']", function (e) {
		e.preventDefault();
		console.log("entering target");
		$(".category-container#tablist .tab-pane").removeClass("active");
		tabContentSelector = $(this).data("target");
		$(this).tab("show");
		$(tabContentSelector).addClass("active");
		$(tabContentSelector).on("mouseenter", function (e) {
			$(tabContentSelector).addClass("active");
			$(".category-tabs > li").removeClass("active");
		});
		$(tabContentSelector).on("mouseleave blur", function (e) {
			$(tabContentSelector).removeClass("active");
			$(".category-tabs > li").removeClass("active");
		});
	});

	/* ********************************************
		6. ScrollUp
	******************************************** */

	/* ********************************************
		8. Treeview active
	******************************************** */

	/* ********************************************
		DO NOT REMOVE. Used to insert span before hamburger toggler, prevent propagation and then go to checkout. 
	******************************************** */

	/* ********************************************
		13. Cart Plus Minus Button
	******************************************** */
	$(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
	$(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});

	/* ********************************************
		14. bootstrap accordion one open at a time
	******************************************** */
	$(".payment-title a").on("click", function (e) {
		if ($(this).parents(".panel").children(".panel-collapse").hasClass("in")) {
			e.stopPropagation();
		}
		// You can also add preventDefault to remove the anchor behavior that makes
		// the page jump
		e.preventDefault();
	});

	/* ********************************************
		15. Cart tab menu active
	******************************************** */
	$(".cart-tab li a").on("click", function () {
		$(this).addClass("active");
		$(this).parent("li").prevAll("li").find("a").addClass("active");
		$(this).parent("li").nextAll("li").find("a").removeClass("active");
	});

	/* ********************************************
    18. STICKY sticky-header
******************************************** */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$("#sticky-header").addClass("sticky");
		} else {
			$("#sticky-header").removeClass("sticky");
		}
	});
	/* ********************************************************* */
	function closeModal() {
		$("iframe").attr("src", $("iframe").attr("src"));
	}

	$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 600) {
			$(".fixed-CTA").fadeIn();
		} else {
			$(".fixed-CTA").fadeOut();
		}
	});

	$(".cart-toggler").click(function (e) {
		e.preventDefault();
	});
	$(".cart-toggler").click(function (e) {
		e.stopPropagation();
	});
	$(".cart-insertion").click(function () {
		$("#cart-dropdown").addClass("show-cart").fadeIn(5000);
	});

	$(".cart-toggler").click(function () {
		$("#cart-dropdown").addClass("show-cart").fadeIn(5000);
	});

	$(".close-icon").click(function () {
		$("#cart-dropdown").removeClass("show-cart").fadeIn(5000);
	});

	$(".navbar-nav [role='banner']").append(
		"<span class='navbar-donation-wrapper' data-toggle='tooltip' data-placement='bottom' title='Your Loyalty Points'>999<span class='navbar-donation-icon'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='24' viewBox='0 0 24 24' fill='#DAA520' stroke='#DAA520' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' class='feather feather-star'><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon></svg></span></span>"
	);

	$(".cart-insertion").prepend(
		"<span class='navbar-donation-wrapper__mobile' data-toggle='tooltip' data-placement='bottom' title='Your Loyalty Points'>999<span class='navbar-donation-icon__mobile'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='24' viewBox='0 0 24 24' fill='#DAA520' stroke='#DAA520' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' class='feather feather-star'><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon></svg></span></span>"
	);
});

document.addEventListener("DOMContentLoaded", function () {
	var lazyloadImages;
	if ("IntersectionObserver" in window) {
		lazyloadImages = document.querySelectorAll(".lazy");
		var imageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					var image = entry.target;
					image.classList.remove("lazy");
					imageObserver.unobserve(image);
				}
			});
		});

		lazyloadImages.forEach(function (image) {
			imageObserver.observe(image);
		});
	} else {
		var lazyloadThrottleTimeout;
		lazyloadImages = document.querySelectorAll(".lazy");

		function lazyload() {
			if (lazyloadThrottleTimeout) {
				clearTimeout(lazyloadThrottleTimeout);
			}

			lazyloadThrottleTimeout = setTimeout(function () {
				var scrollTop = window.pageYOffset;
				lazyloadImages.forEach(function (img) {
					if (img.offsetTop < window.innerHeight + scrollTop) {
						img.src = img.dataset.src;
						img.classList.remove("lazy");
					}
				});
				if (lazyloadImages.length === 0) {
					document.removeEventListener("scroll", lazyload);
					window.removeEventListener("resize", lazyload);
					window.removeEventListener("orientationChange", lazyload);
				}
			}, 20);
		}

		document.addEventListener("scroll", lazyload);
		window.addEventListener("resize", lazyload);
		window.addEventListener("orientationChange", lazyload);
	}
});
