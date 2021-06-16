$(document).ready(function () {
    // tabs
    $('.rating__triggers-item').click(function (e) {
        e.preventDefault();

        $('.rating__triggers-item').removeClass('rating__triggers-item--active');
        $('.rating__content-item').removeClass('rating__content-item--active');

        $(this).addClass('rating__triggers-item--active');
        $($(this).attr('href')).addClass('rating__content-item--active');
    });

    $('.rating__triggers-item:first').click();

    // table select
    $('.rating').hide();
    $('.t1').show();

    $('.rating-select').on('change', function () {
        $('.rating').hide();
        $('.t' + $(this).val()).show();
        $('.t' + $(this).val() + ' .rating__triggers-item:first').click();
    }).val("1");
});