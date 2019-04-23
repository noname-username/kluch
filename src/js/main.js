//анимированная прокрутка страницы
function scrollToAnchor(aid){
  let aTag = $('#' + aid);
  $('html,body').animate({scrollTop: aTag.offset().top},'ease');
}

$(function () {

  //якоря
  $('[data-anchor]').click(function () {

    let aid = $(this).attr('data-anchor');

    if ($('.toggleMenu').hasClass('active')) {
      $('.toggleMenu').toggleClass('active');
      $('.header__menu').toggleClass('active');
      $('body').toggleClass('noScroll');

      setTimeout(scrollToAnchor, 500, aid);

    }
    else {
      scrollToAnchor(aid);
    }

  });

  //тогл меню
  $('.toggleMenu').click(function () {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('body').toggleClass('noScroll');
  });


  $('#infographicsSection').waypoint(function (direction) {
    $('#infographicsSection').addClass('active')
  });

  //слайдер видео на главной
  $('#sliderSection .casesSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: '<div class="casesSlider__arrow casesSlider__arrow_prev"></div>',
    nextArrow: '<div class="casesSlider__arrow casesSlider__arrow_next"></div>'
  });

  //маски на инпуты телефонов
  //$('input[name="phone"]').inputmask('+7999999-999-999');

  $('[data-popup]').click(function () {
    $('.popupBox').addClass('active');
    $('.popup').removeClass('active');
    $('.' + $(this).data('popup')).addClass('active');
  });

  //попап
  $('.popupBtn, .popup > .close, .overlay').click(function () {
    $('.popupBox').toggleClass('active');
    $('.fixedHeader').toggleClass('active');

    $('[data-wrap-form]').removeClass('hidden');
    $('[data-wrap-sent]').addClass('hidden');

  });

  $('.popup form').submit(function (e) {
    e.preventDefault();
    let popup = $(this).data('form-popup');
    $('[data-wrap-form="' + popup + '"]').toggleClass('hidden');
    $('[data-wrap-sent="' + popup + '"]').toggleClass('hidden');
  });


  //синхронизация виджета навигации со слайдером
  $('.answerSlider .answerSlider__videoSlider').on('afterChange', function (e, slick, currentSlide) {
    $('.answerSlider .answerSlider__navSlider .navSlider__item').removeClass('navSlider__item_active');
    $('.answerSlider .answerSlider__navSlider .navSlider__item[data-slide-num=' + currentSlide + ']').addClass('navSlider__item_active');
  });

  //навигация слайдера видео на главной
  $('.answerSlider .answerSlider__navSlider .navSlider__item').click(function (e) {
    $('.answerSlider .answerSlider__videoSlider').slick('slickGoTo', $(this).attr('data-slide-num'));
  });

})
