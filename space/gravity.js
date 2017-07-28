// Copyright gdb.kr Co. 2017
// gravity constant
var G = 6.67384 * Math.pow(10, -11);

var EarthM = 5.9742 * Math.pow(10 , 24);
var EarthR = 6.37 * Math.pow(10, 6);

var SunM = 1.989 * Math.pow(10,30);

var LocateXdt= [], LocateYdt= [], VX= [], VY= [], AX= [], AY= [];
LocateXdt[0] = 147500000000;
LocateYdt[0] = 0;

VX[0] = 0;
VY[0] = 30287;


var distance = [], F = [];

distance[0] = Math.pow(LocateYdt[0],2) + Math.pow(LocateXdt[0],2);
F[0] = G*SunM / distance[0];
AY[0] = F[0] * LocateYdt[0] * -1;
AX[0] = F[0] * LocateXdt[0] * -1;

var initInfo = {
  'left' : parseInt($("#sun").css("left").replace(/[^-\d\.]/g, '')),
  'top' : parseInt($("#sun").css("top").replace(/[^-\d\.]/g, '')) + 30
};


// Default values
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  initFunction();
});

// 처음 실행하는 함수들

var left, top;
left = initInfo['left']+(LocateXdt[0]/500000000);
tops = initInfo['top']+(LocateYdt[0]/500000000);

function initFunction(){
  $("#earth").css('left', initInfo['left']+(LocateXdt[0]/500000000));
  $("#earth").css('top', initInfo['top']+(LocateYdt[0]/500000000));
}


var Space = class {
  constructor(){
    this.i = 0;
    this.dt = 1000;
    // for(this.i = 0; this.i<= 300; this.i++){
    //   this.Accel();
    //   this.Velocity();
    //   this.Position();
    //   console.log((Math.pow(AX[this.i],2) + Math.pow(AY[this.i],2)) / Math.pow(F[this.i],2));
    // } // 디버깅용 함수
  }

  Accel(){
    AX[this.i] = F[this.i] * LocateXdt[this.i] / Math.sqrt(distance[this.i]) * (-1);
    AY[this.i] = F[this.i] * LocateYdt[this.i] / Math.sqrt(distance[this.i]) * (-1);
  }

  Velocity(){
    VX[this.i+1] = VX[this.i] + AX[this.i]*this.dt;
    VY[this.i+1] = VY[this.i] + AY[this.i]*this.dt;
  }

  Position(){
    // if(LocateXdt[this.i] - )
    LocateXdt[this.i+1] = LocateXdt[this.i] + VX[this.i]*this.dt;
    LocateYdt[this.i+1] = LocateYdt[this.i] + VY[this.i]*this.dt;
    distance[this.i+1] = Math.pow(LocateYdt[this.i+1],2) + Math.pow(LocateXdt[this.i+1],2);
    F[this.i+1] = G*SunM / distance[this.i+1];
    // console.log((tops + LocateYdt[this.i]/500000000))
  }

  Move(){
    $("#earth").css('left', initInfo['left'] + LocateXdt[this.i]/400000000);
    $("#earth").css('top', initInfo['top'] - LocateYdt[this.i]/400000000);
  }

  Text(){
    $(".ax").html(AX[this.i]);
    $(".ay").html(AY[this.i]);
    $(".vx").html(VX[this.i]);
    $(".vy").html(VY[this.i]);
    $(".sx").html(LocateXdt[this.i]);
    $(".sy").html(LocateYdt[this.i]);
  }

};

$('.info').tooltip({html: true});
var Space = new Space();
function start(){
  SunM = parseInt($("#m1").val());
  EarthM = parseInt($("#m2").val());
  LocateXdt[0] = parseInt($("#sx").val());
  LocateYdt[0] = parseInt($("#sy").val());
  VX[0] = parseInt($("#vx").val());
  VY[0] = parseInt($("#vy").val());
  Space.dt = parseInt($("#time").val());
  distance[0] = Math.pow(LocateYdt[0],2) + Math.pow(LocateXdt[0],2);
  F[0] = G*SunM / distance[0];
  AY[0] = F[0] * LocateYdt[0] * -1;
  AX[0] = F[0] * LocateXdt[0] * -1;

  $("#set").hide();

  setInterval(function(){
    Space.Accel();
    Space.Velocity();
    Space.Position();
    Space.Move();
    Space.Text();
    Space.i=0;
    AX.shift();
    AY.shift();
    F.shift();
    distance.shift();
    LocateXdt.shift();
    LocateYdt.shift();
    VX.shift();
    VY.shift();
  },1);

}

$(window).resize(function(){
  var initInfo = {
    'left' : parseInt($("#sun").css("left").replace(/[^-\d\.]/g, '')),
    'top' : parseInt($("#sun").css("top").replace(/[^-\d\.]/g, '')) + 30
  };
  initFunction();
});
