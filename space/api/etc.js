$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  // setSize();
});
$('.info').tooltip({html: true});
//
//
// this.LocateXdt[0] = 147500000000;
// this.LocateYdt[0] = 0;
// this.distance[0] = Math.pow(this.LocateYdt[0],2) + Math.pow(this.LocateXdt[0],2);
// this.VX[0] = 0;
// this.VY[0] = 30287;
// this.F[0] = G*SunM / this.distance[0];
// this.AY[0] = this.F[0] * this.LocateYdt[0] * -1;
// this.AX[0] = this.F[0] * this.LocateXdt[0] * -1;
var d = new Date(0, 0, 0, 0);

function setTimes() {
  d.setSeconds(d.getSeconds() + 1000);
  $("#year").html(d.getFullYear());
  $("#month").html(d.getMonth()+1);
  $("#day").html(d.getDate());
  $("#hour").html(d.getHours());
}
