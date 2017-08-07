// Copyright gdb.kr Co. 2017
var SET = {
  "Earth" : new Space("#sun","#earth"),
  "Moon" : new Space("#earth","#moon")
};

function setSize() {
  for (var [key, value] of Object.entries(SET)){
    value.initInfo.left = $(value.obj1).position().left + $(value.obj1).width()/2;
    value.initInfo.top = $(value.obj1).position().top + $(value.obj1).height()/2;
    resizeEvent();
  }

}
setSize();
function resizeEvent(){
  for (var [key, value] of Object.entries(SET)) {
    console.log(key + " : " +(defaultData[value.obj2].preset*value.LocateXdt[value.i]/Math.sqrt(value.distance[value.i])));
    $(value.obj2).css({
      top:value.initInfo.top+value.LocateYdt[value.i]/scale-defaultSize[value.obj2]+
      (defaultData[value.obj2].preset*value.LocateYdt[value.i]/Math.sqrt(value.distance[value.i])),
      left:value.initInfo.left+value.LocateXdt[value.i]/scale-defaultSize[value.obj2]+
      (defaultData[value.obj2].preset*value.LocateXdt[value.i]/Math.sqrt(value.distance[value.i]))
    });
  }
}



function start(){
  for (var [key, value] of Object.entries(SET)) {
    value.start();
  }

}

function initstart(obj) {
  obj.Position();
  obj.Accel();
  obj.Velocity();
  obj.Move();
  obj.i++;
}

// $(window).resize(function(){
//   Earth.initInfo = {
//     'left' : $("#sun").position().left,
//     'top' : $("#sun").position().top + 30
//   };
//   $("#sun2").css("top", Earth.initInfo['top']-30);
//   $("#sun2").css("left", Earth.initInfo['left']);
//   initFunction();
// });
//
// function getsafari(){
//   Earth.initInfo = {
//     'left' : $("#sun").position().left,
//     'top' : $("#sun").position().top + 30
//   };
// }
