// Copyright (c) 2019 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Style Transfer Image Example using p5.js
This uses a pre-trained model of The Great Wave off Kanagawa and Udnie (Young American Girl, The Dance)
=== */

let inputImg;
let statusMsg;
let transferBtn;
let style1;
let style2;
let b1,b2,b7,b3,b4,b5,b6,b8,b9;
{
    b1 = false
    b2 = false;
    b3 = false;
    b4 = false;
    b5 = false;
    b6 = false;
    b7 = false;
    b8 = false;
    b9 = false;
}
function setup() {
  noCanvas();
  // Status Msg
  statusMsg = select('#statusMsg');

  // Get the input image
  inputImg = select('#inputImg');

  // Transfer Button
  transferBtn = select('#transferBtn');
  transferBtn.mousePressed(transferImages);

  

  // Create two Style methods with different pre-trained models
  style1 = ml5.styleTransfer('models/wave', modelLoaded);
  style2 = ml5.styleTransfer('models/udnie', modelLoaded);
  style3 = ml5.styleTransfer('models/fuchun', modelLoaded);
  style4 = ml5.styleTransfer('models/la_muse', modelLoaded);
  style5 = ml5.styleTransfer('models/mathura', modelLoaded);
  style6 = ml5.styleTransfer('models/rain_princess', modelLoaded);
  style7 = ml5.styleTransfer('models/scream', modelLoaded);
  style8 = ml5.styleTransfer('models/wreck', modelLoaded);
  style9 = ml5.styleTransfer('models/zhangdaqian', modelLoaded);
  btn1 = select('#btn1');
  btn1.mousePressed(b1f);
  btn2 = select('#btn2');
  btn2.mousePressed(b2f);
  btn3 = select('#btn3');
  btn3.mousePressed(b3f);
  btn4 = select('#btn4');
  btn4.mousePressed(b4f);
  btn5 = select('#btn5');
  btn5.mousePressed(b5f);
  btn6 = select('#btn6');
  btn6.mousePressed(b6f);
  btn7 = select('#btn7');
  btn7.mousePressed(b7f);
  btn8 = select('#btn8');
  btn8.mousePressed(b8f);
  btn9 = select('#btn9');
  btn9.mousePressed(b9f);
}
function b9f(){b9 = !b9;}
function b8f(){b8 = !b8;}
function b7f(){b7 = !b7;}
function b6f(){b6 = !b6;}
function b5f(){b5 = !b5;}
function b4f(){b4 = !b4;}
function b3f(){b3 = !b3;}
function b2f(){b2 = !b2;}
function b1f(){b1 = !b1;}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(style1.ready && style2.ready&&style3.ready && style4.ready &&style5.ready && style6.ready &&style7.ready && style8.ready && style9.ready){
    statusMsg.html('Ready!')
  }
}
function preLoad(){
  var image = loadImage('img/frame.png')
}
// Apply the transfer to both images!
function transferImages() {
  statusMsg.html('Applying Style Transfer...!');
  
  if (b1){
    style1.transfer(inputImg, function(err, result) {
     
      var img_1 = createImg(result.src);
      
      img_1.parent('results');

    });
  }
  if (b2){
    style2.transfer(inputImg, function(err, result) {
      createImg(result.src).parent('results');
    });
  }
  
  if (b3){
    style3.transfer(inputImg, function(err, result) {
      createImg(result.src).parent('results');
    });
  }

  if (b4){
    style4.transfer(inputImg, function(err, result) {
      createImg(result.src).parent('results');
    });
  }

  if (b5) {
    style5.transfer(inputImg, function(err, result) {
      createImg(result.src).parent('results');
    });
  }
  
  if (b6) {
    style6.transfer(inputImg, function(err, result) {
      createImg(result.src).parent('results');
    });
  }   

  if (b7) {
    style7.transfer(inputImg, function(err, result) {
      createImg(result.src).parent('results');
    });
  }

  if (b8){
    style8.transfer(inputImg, function(err, result) {
      createImg(result.src).parent('results');
    });
  }

  if (b9){
    style9.transfer(inputImg, function(err, result) {
      createImg(result.src).parent('results');
    });
}
  statusMsg.html('Done!');
}