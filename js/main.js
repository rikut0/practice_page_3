$(function() {
  $('.product__list__container, .header__product__list').hover(function() {
    $('.header__product__list').css('display', 'block');
  }, function() {
    $('.header__product__list').css('display', 'none');
  })

  $('.header__product').hover(function() {
    $(this).css('background-color', '#fee4ac'); 
  }, function() {
    $(this).css('background-color', '#ffffff'); 
  })
})