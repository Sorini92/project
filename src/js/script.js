$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slide/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slide/right.svg"></button>',
        responsive: [
            {
                breakpoint: 980,
                    settings: {
                        dots: true,
                        arrows: false
                }
            }
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

       function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
       };

       toggleSlide('.catalog-item__link');
       toggleSlide('.catalog-item__back');

       //modal

       $('[data-modal=consultation]').on('click', function() {
           $('.overlay, #consultation').fadeIn('slow');
       });
       $('.modal__close').on('click', function() {
            $('.overlay, #consultation, #thanks, #order').fadeOut();
       });

       $('.button_mini').each(function(i){
           $(this).on('click', function(){
               $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
               $('.overlay, #order').fadeIn('slow');
           })
       });

       function validateForms(form){ 
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required:true,
                    email: true
                }
            },
            messages: {
                 name: "Пожалуйста, введите свое имя",
                 phone: "Пожалуйста, введите свой номер телефон",
                 email: {
                     required: "Пожалуйста, введите свою почту",
                     email: "неправильно введен адрес почты"
             }
           }
        });
       };

       validateForms('#consultation-form');
       validateForms('#consultation form');
       validateForms('#order form');

       $('input[name=phone]').mask("+7 (999) 999-99-99");

       //smooth scroll
       $(window).scroll(function() {
            if ($(this).scrollTop() > 1000) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
       });

       $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
        });

        new WOW().init();
  });