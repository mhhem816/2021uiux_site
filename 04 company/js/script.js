$(document).ready(function(){
  $(".slider").bxSlider({
  auto:true,
  controls:false,
  pager:false
  });
$(".modal").colorbox({rel:"modal"});
$(".youtube").colorbox({
  iframe:true,
      innerWidth:700,
      innerHeight:393.75
});

});