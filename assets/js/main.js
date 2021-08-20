jQuery(function ($) {

  const section = $('.section'),
    nav = $('.menu'),
    navHeight = nav.outerHeight() + 25; // получение высоту навигации 

  // поворот экрана 
  window.addEventListener('orientationchange', function () {
    navHeight = nav.outerHeight();
  }, false);

  $(window).on('scroll', function () {
    const position = $(this).scrollTop();

    section.each(function () {
      const top = $(this).offset().top - navHeight - 5,
        bottom = top + $(this).outerHeight();

      if (position >= top && position <= bottom) {
        nav.find('a').removeClass('active_link');
        section.removeClass('active_link');

        $(this).addClass('active'); // Задание стиля для активного блока
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active_link');
      }
    });
  });

  nav.find('a').on('click', function () {
    const id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - navHeight
    }, 487);

    return false;
  });

});
