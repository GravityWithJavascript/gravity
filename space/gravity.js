// Copyright gdb.kr Co. 2017
// version 2.0 class
var SET = {
  "Mercurius" : new Space("#sun","#merc"),
  "Venus" : new Space("#sun","#venus"),
  "Earth" : new Space("#sun","#earth"),
  "Moon" : new Space("#earth","#moon")
};

function setSize() {
  for (var [key, value] of Object.entries(SET)){
    console.log(key);
    value.initInfo.left = $(value.obj1).position().left + $(value.obj1).width()/2;
    value.initInfo.top = $(value.obj1).position().top + $(value.obj1).height()/2;
  }
  resizeEvent();
}
setSize();
function resizeEvent(){
  for (var [key, value] of Object.entries(SET)) {
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
    if(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)){
      initstart(value);      initstart(value);
    }
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
