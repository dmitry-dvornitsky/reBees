//Слайдеры

$('.list-testimonials').slick({
    centerMode: true,
    slidesToShow: 5,
    focusOnSelect: true,
    draggable: false,
    centerPadding: '20px',
    prevArrow: '<div class="slick-prev ellipse"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next ellipse"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });