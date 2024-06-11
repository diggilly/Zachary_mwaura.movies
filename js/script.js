
  $(document).ready(function(){
    $('.home-services-list,.home-products-list').slick({
        dots: false, // Adds navigation dots
        infinite: true,
        speed: 300,
        slidesToShow: 4, // Default number of items to show
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><i class="fi fi-rr-angle-small-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fi fi-rr-angle-small-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200, // From desktop to laptop
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992, // From laptop to tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // From tablet to mobile
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 600, // From tablet to mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true
                }
            }
        ]
    });
    $('.menu-icon').click(function(){
        $('.hidden-mobile').slideToggle();
        $('.menu-icon i').toggleClass('fa-bars fa-xmark');
    });
    // $("#toggle-menu").click(function(event) {
    //     event.preventDefault();
    //     $(".sub-menu").slideToggle();
    // });
});
$(document).ready(function() {
    $("#toggle-menu").click(function(event) {
        event.preventDefault();
        $(".sub-menu").slideToggle();
    });
});


$(document).ready(function() {
    var video = $('video')[0];

    var options = {
        root: null, // using the viewport as the root
        rootMargin: '0px',
        threshold: 0.7 // 70% of the video must be in view
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, options);

    observer.observe(video);
});