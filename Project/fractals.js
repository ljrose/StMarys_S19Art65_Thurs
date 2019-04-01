function create_canvas() {
  var myCanvas = document.getElementById("frac1");

  var width = document.getElementById("frac1").width;
  var height = document.getElementById("frac1").height;


  myCanvas.width = 3000;
  myCanvas.height = 1600;

  // myCanvas.width = width;
  // myCanvas.height = height;
  // var ctx = myCanvas.getContext("2d");
  var ctx = myCanvas.getContext("2d").scale(2,2);
  // canvas.style.width = "500px";
  // canvas.style.height = "750px";
  // myCanvas.width=800;
  // myCanvas.height=800;
  // ctx.fillStyle = "#FF0000";
  // ctx.fillRect(0,0,150,75);
}

function change_color(input){
  ctx.fillRect(0,0,150,150);

}

function get_diff(){
  var d = new Date();
  var n = d.getTime();
  // var my_diff = "0";

  var a = new Date();
  var test = a.getTime();

  var my_diff = test-n;

  while (my_diff<"175"){
    var a = new Date();
    var test = a.getTime();
    var my_diff = test-n;
    // alert(my_diff);
  }

}


function main(){
  create_canvas();

  var myCanvas = document.getElementById("frac1");
  var ctx = myCanvas.getContext("2d");

  ctx.fillStyle = "#563D7B";
  ctx.fillRect(0,0,150,75);



  ctx.fillStyle = "#5cb85c";
  ctx.fillRect(150,0,150,75);

  ctx.fillStyle = "#343A40";
  ctx.fillRect(0,75,150,75);

  ctx.fillStyle = "#F8F9FA";
  ctx.fillRect(150,75,150,75);

  var colors = ["#563D7B","#5cb85c","#343A40","#F8F9FA"];


}

// main();

function checkIfBelongsToMandelbrotSet(x, y, data) {
  var realComponentOfResult = x;
  var imaginaryComponentOfResult = y;
  var maxIterations = data[3];
  // var maxIterations = 50;

  for(var i = 0; i < maxIterations; i++) {
       // Calculate the real and imaginary components of the result
       // separately
       var tempRealComponent = realComponentOfResult * realComponentOfResult
                               - imaginaryComponentOfResult * imaginaryComponentOfResult
                               + x;

       var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
                               + y;

       realComponentOfResult = tempRealComponent;
       imaginaryComponentOfResult = tempImaginaryComponent;

       if (realComponentOfResult * imaginaryComponentOfResult > data[4]){
         return (i/maxIterations * 100);
       }
       // if (realComponentOfResult * imaginaryComponentOfResult > 185){
       //   return (i/maxIterations * 100);
       // }
  }


      // return true; // In the Mandelbrot set

  // return false; // Not in the set
  return 0;



}

function get_mandel(){
  var mag_factor = $("[name=mag_factor]").val();
  var pan_x = $("[name=pan_x]").val();
  var pan_y = $("[name=pan_y]").val();
  var max_iterations = $("[name=max_it]").val();
  var reach = $("[name=reach]").val();
  var hsl = $("[name=hsl]").val();

  var data = [mag_factor, pan_x, pan_y, max_iterations, reach,  hsl];

  return data;
}


function create_mandel(data){

  create_canvas();

  var myCanvas = document.getElementById("frac1");
  var ctx = myCanvas.getContext("2d");



  // var magnificationFactor = 400;
  var magnificationFactor = data[0];
  // var panX = 2;
  // var panY = 1;
  var panX = data[1];
  var panY = data[2];
  for(var x=0; x < myCanvas.width; x++) {
     for(var y=0; y < myCanvas.height; y++) {
         var belongsToSet = checkIfBelongsToMandelbrotSet(x/magnificationFactor - panX, y/magnificationFactor - panY, data);
         // if(belongsToSet) {
         //      ctx.fillRect(x,y, 1,1); // Draw a black pixel
          if(belongsToSet == 0) {
              ctx.fillStyle = '#000';
              ctx.fillRect(x,y, 1,1); // Draw a black pixel
          } else {
              // alert(belongsToSet);
              // ctx.fillStyle = 'hsl(0, 100%, ' + belongsToSet + '%)';
              ctx.fillStyle = 'hsl(' + data[5] + ', 100%, ' + belongsToSet + '%)';
              ctx.fillRect(x,y, 1,1); // Draw a colorful pixel

         }
     }
  }
}

function submit() {
  input = get_mandel();
  create_mandel(input);

  // Get the type of fractal
  // var fractal_type = $("[name=cars]").val();
  //
  // if (fractal_type == "Mandelbrot"){
  //   var input;
  //   input = get_mandel();
  //   create_mandel(input);
  // } else {
  //   alert("other :)");
  // }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep() {
  // console.log('Taking a break...');
  // alert('Taking a break...');
  await sleep(200);
  // console.log('Two seconds later');
  // alert('Two seconds later');
}

// demo();
