var onResize = function () {
  $(".newcreate").css("padding-top", "70px");
};

var onReset = function () {
  if ($('.wow').hasClass('animated')) {
    $(this).removeClass('animated');
    $(this).removeAttr('style');
    new WOW().init();
  }
};


$(document).ready(function () {
  onResize();
  $("#newcreate_btn").on("click", function () {
    onResize();
  });

  onReset();
  $("#featured_section_btn").on("click", function () {
    onReset();
  });

});


