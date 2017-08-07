// $(document).ready(function(){
//   $("#earth").draggable({ scroll: true });
//   $("#sun").draggable({ scroll: true });
//   $("#sun2").css("top",  ['top']-30);
//   $("#sun2").css("left", Earth.initInfo['left']);
//   if(localStorage.reopen === "false"){
//     $("#help").hide();
//   }
// });
//
// var isdrag = false
// $("#sun").on({
//   mousedown: function(event) {
//     isdrag = true;
//     $("#sun2").show();
//     $("#sun2").css("top", Earth.initInfo['top']-30);
//     $("#sun2").css("left", Earth.initInfo['left']);
//   },
//   //mouse down event
//   mouseup: function(event) {
//     isdrag = false;
//     Earth.initInfo = {
//       'left' : $("#sun").position().left,
//       'top' : $("#sun").position().top + 30
//     };
//     $("#sun2").hide();
//     initFunction();
//   }
//   //mouse up event
//   //mouse event added, JUL 28 2017
// });
//
function closePopup() {
  if($( "input[name$='reopen']" ).prop('checked')){
    localStorage.setItem("reopen", "false");
  }

  $("#help").animate({
    opacity:0
  }, 300, function(){
    $("#help").hide();
  });
}
//
// function checksize(x,y) {
//   wx = $(document).width();
//   wy = $(document).height();
//   if(x > 0 && y > 0){
//     $("#wrap").css('height',wy);
//     $("#wrap").css('width',wx);
//     return 0;
//   }else if(y < 0){
//     $("#wrap").css('height',wy - y);
//   }
//   if(x < 0){
//     $("#wrap").css('width',wx - x);
//   }
// }
