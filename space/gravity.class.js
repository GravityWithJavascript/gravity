var G = 6.67384 * Math.pow(10, -11);
var EarthM = 5.9742 * Math.pow(10 , 24);
var EarthR = 6.37 * Math.pow(10, 6);
var SunM = 1.989 * Math.pow(10,30);
var MoonM = 7.36 * Math.pow(10,22);
var scale = 500000000;
var defaultSize = { // 이미지 사이즈
  "#earth":$("#earth").width()/2,
  "#moon":$("#moon").width()/2
};
var defaultData = {
  "#earth":{
    "LocateXdt":147500000000,
    "LocateYdt":0,
    "distance":2.175625e+22,
    'VX':0,
    "VY":30287,
    "F":0.006101358349899455,
    "AX":-899950356.6101696,
    "AY":0,
    "preset":0
  },
  "#moon":{
    "LocateXdt":405696000,
    "LocateYdt":0,
    "distance":Math.pow(405696000,2),
    "VX":0,
    "VY":-968,
    "F":G*EarthM/Math.pow(405696000,2),
    "AX":G*EarthM/Math.pow(405696000,2)*405696000*-1,
    "AY":0,
    "preset":30
  }
};
var weight = {
  "#sun":1.989 * Math.pow(10,30),
  "#earth":5.9742 * Math.pow(10 , 24),
  "#moon":7.36 * Math.pow(10,22)
};

var Space = class {
  constructor(obj1, obj2){
    this.i = 0;
    this.dt = 1000;
    this.obj1 = obj1;
    this.obj2 = obj2;
    this.LocateXdt= []; this.LocateYdt= []; this.VX= []; this.VY= []; this.AX= []; this.AY= [];
    this.LocateXdt= []; this.LocateYdt= [];
    this.VX= []; this.VY= [];
    this.distance = []; this.F= [];
    this.initInfo = {};
    this.setDefaultValue();
  }

  start(){
    $("#start").hide();

    setInterval(this.Loop, 1, this);

  }

  Loop(name){
    name.Accel();
    name.Velocity();
    name.Move();
    name.Position();
    name.AX.shift();
    name.AY.shift();
    name.F.shift();
    name.distance.shift();
    name.LocateXdt.shift();
    name.LocateYdt.shift();
    name.VX.shift();
    name.VY.shift();
    name.initInfo.top = $(name.obj1).position().top + $(name.obj1).height()/2;
    name.initInfo.left = $(name.obj1).position().left + $(name.obj1).width()/2;
    if(name.obj2 == "#earth") setTimes();
  }

  Accel(){
    this.AX[this.i] = this.F[this.i] * this.LocateXdt[this.i] / Math.sqrt(this.distance[this.i]) * (-1);
    this.AY[this.i] = this.F[this.i] * this.LocateYdt[this.i] / Math.sqrt(this.distance[this.i]) * (-1);
  }

  Velocity(){
    this.VX[this.i+1] = this.VX[this.i] + this.AX[this.i]*this.dt;
    this.VY[this.i+1] = this.VY[this.i] + this.AY[this.i]*this.dt;
  }

  Position(){
    this.LocateXdt[this.i+1] = this.LocateXdt[this.i] + this.VX[this.i]*this.dt;
    this.LocateYdt[this.i+1] = this.LocateYdt[this.i] + this.VY[this.i]*this.dt;
    this.distance[this.i+1] =
      Math.pow(this.LocateYdt[this.i+1],2) + Math.pow(this.LocateXdt[this.i+1],2);
    this.F[this.i+1] = G*weight[this.obj1] / this.distance[this.i+1];
  }

  Move(){

    $(this.obj2).css({
      left: this.initInfo.left + this.LocateXdt[this.i]/scale-defaultSize[this.obj2]+
      (defaultData[this.obj2].preset*this.LocateXdt[this.i]/Math.sqrt(this.distance[this.i])),
      top: this.initInfo.top - this.LocateYdt[this.i]/scale-defaultSize[this.obj2]+
      (defaultData[this.obj2].preset*this.LocateYdt[this.i]/Math.sqrt(this.distance[this.i]))
    });
  }

  Text(){
    $(".ax").html(this.AX[this.i]);
    $(".ay").html(this.AY[this.i]);
    $(".vx").html(this.VX[this.i]);
    $(".vy").html(this.VY[this.i]);
    $(".sx").html(this.LocateXdt[this.i]);
    $(".sy").html(this.LocateYdt[this.i]);
  }

  setDefaultValue(){
    this.LocateXdt[this.i] = defaultData[this.obj2].LocateXdt;
    this.LocateYdt[this.i] = defaultData[this.obj2].LocateYdt;
    this.distance[this.i] = defaultData[this.obj2].distance;
    this.VX[this.i] = defaultData[this.obj2].VX;
    this.VY[this.i] = defaultData[this.obj2].VY;
    this.F[this.i] = defaultData[this.obj2].F;
    this.AY[this.i] = defaultData[this.obj2].AY;
    this.AX[this.i] = defaultData[this.obj2].AX;
  }

};
