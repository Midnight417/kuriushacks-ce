var canvas = document.getElementById("TestArea")
canvas.width = window.innerWidth * 0.95;
canvas.height = window.innerHeight * 0.90;

var ctx = document.getElementById("TestArea").getContext("2d");

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vect) {
    this.x = this.x + vect.x;
    this.y = this.y + vect.y;
  }

  mult(scal) {
    this.x = this.x * scal;
    this.y = this.y * scal;
  }

  div(scal) {
    this.x = this.x / scal;
    this.y = this.y / scal;
  }

  swap() {
    var i = this.x;
    this.x = this.y;
    this.y = i;
  }

  net() {
    return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
  }
}

class VerticalWall {
  constructor (positionx, length, width, mass, velocityx) {
    this.position = new Vector(positionx, canvas.height/2)
    this.length = length;
    this.mass = mass;
    this.velocity = new Vector(velocityx, 0);
    this.width = width;
  }

  updateobject() {
    this.position.add(this.velocity);
    this.position.y = canvas.height/2;
    this.sidecollision();
    this.draw();
  }

  draw() {
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.lineWidth = this.width;
    ctx.beginPath();
    ctx.moveTo(this.position.x, this.position.y - this.length/2);
    ctx.lineTo(this.position.x, this.position.y + this.length/2);
    ctx.stroke();
  }

  sidecollision() {
    if (this.width/2 > canvas.width - this.position.x) {
      this.position.x = canvas.width - this.width/2;
      //this.velocity.x = this.velocity.x * -1;
    }
    if (this.width/2 > this.position.x) {
      this.position.x = this.width/2;
      //this.velocity.x = this.velocity.x * -1;
    }
  }
}

class Circle {
  constructor(positionx, positiony, radius, mass, velocityx, velocityy, bounciness) {
    this.position = new Vector(positionx, canvas.height - positiony);
    this.velocity = new Vector(velocityx, velocityy);
    this.radius = radius;
    this.bounciness = bounciness;
    this.mass = mass;
    this.acceleration = new Vector(0, 0);
    this.wallleft = this.position.x < wall.position.x
  }

  updateobject() {
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    //this.friction();
    this.position.add(this.velocity);
    this.sidecollision();
    this.wallcollision();
    this.acceleration = new Vector(0, 0)
    this.acceleration.add(universalforce)
    this.acceleration.div(this.mass)
    this.acceleration.add(universalacceleration)
    this.velocity.add(this.acceleration);
    this.draw();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false)
    ctx.stroke();
    ctx.fill();
  }

  sidecollision() {
    if (this.radius > canvas.width - this.position.x) {
      this.position.x = canvas.width - this.radius;
      this.velocity.x = this.velocity.x * -this.bounciness;
    }
    if (this.radius > this.position.x) {
      this.position.x = this.radius;
      this.velocity.x = this.velocity.x * -this.bounciness;
    }
    if (this.radius > canvas.height - this.position.y) {
      this.position.y = canvas.height - this.radius;
      this.velocity.y = this.velocity.y * -this.bounciness;
    }
    if (this.radius > this.position.y) {
      this.position.y = this.radius;
      this.velocity.y = this.velocity.y * -this.bounciness;
    }
  }

  wallcollision() {
    if (this.position.x > wall.position.x && this.wallleft == true) {
      var oldwallvelocity = new Vector(wall.velocity.x,wall.velocity.y);
      wall.velocity.x = (2*this.mass)/(this.mass+wall.mass)*this.velocity.x+(wall.mass-this.mass)/(this.mass+wall.mass)*wall.velocity.x;

      this.position.x = wall.position.x - wall.width/2 - this.radius;
      this.velocity.x = (this.mass-wall.mass)/(this.mass+wall.mass)*this.velocity.x+(2*wall.mass)/(this.mass+wall.mass)*oldwallvelocity.x;
    }

    if (this.position.x < wall.position.x && this.wallleft == false) {
      var oldwallvelocity = new Vector(wall.velocity.x,wall.velocity.y);
      wall.velocity.x = (2*this.mass)/(this.mass+wall.mass)*this.velocity.x+(wall.mass-this.mass)/(this.mass+wall.mass)*wall.velocity.x;

      this.position.x = wall.position.x + wall.width/2 + this.radius;
      this.velocity.x = (this.mass-wall.mass)/(this.mass+wall.mass)*this.velocity.x+(2*wall.mass)/(this.mass+wall.mass)*oldwallvelocity.x;
    }
  }

  friction() {
    if (this.position.y == canvas.height - this.radius || this.position.y == this.radius) {
      if (this.velocity.x > 0) {
        this.velocity.x = this.velocity.x - Math.abs(this.acceleration.y) * this.mass * 0.1 * Math.abs(this.velocity.x);
      } else if (this.velocity.x > 0.25) {
        this.velocity.x = this.velocity.x - Math.abs(this.acceleration.y) * this.mass * 0.1;
      } else if (this.velocity.x < 0) {
        this.velocity.x = this.velocity.x + Math.abs(this.acceleration.y) * this.mass * 0.1 * Math.abs(this.velocity.x);
      } else if (this.velocity.x < -0.25) {
        this.velocity.x = this.velocity.x + Math.abs(this.acceleration.y) * this.mass * 0.1;
      }
    }

    if (this.position.x == canvas.width - this.radius || this.position.x == this.radius) {
      if (this.velocity.y > 0) {
        this.velocity.y = this.velocity.y - Math.abs(this.acceleration.x) * this.mass * 0.1 * Math.abs(this.velocity.y);
      } else if (this.velocity.y > 0.25) {
        this.velocity.y = this.velocity.y - Math.abs(this.acceleration.x) * this.mass * 0.1;
      }else if (this.velocity.y < 0) {
        this.velocity.y = this.velocity.y + Math.abs(this.acceleration.x) * this.mass * 0.1 * Math.abs(this.velocity.y);
      } else if (this.velocity.y < -0.25) {
        this.velocity.y = this.velocity.y + Math.abs(this.acceleration.x) * this.mass * 0.1;
      }
    }
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

    circle = new Circle(mousePos.x, canvas.height - mousePos.y, 2, 1, Math.random() * 20 - 10, Math.random() * 20 - 10, 1);

    //circle = new Circle(mousePos.x, canvas.height - mousePos.y, 2, 1, 5, 0, 1);
  

  //1 circle test
   //circle = new Circle(mousePos.x, canvas.height - mousePos.y, 5, 1, Math.random() * 20 - 10, Math.random() * 20 - 10, 0.8);

  //1 circle test
  /*if (particles.length < 2) {
    particles.push(circle);
  }*/

  if (mouseDown==true) {
  particles.push(circle);
  }

  keleft=[];
  keright=[];

  for (var i = 0; i < particles.length - 1; i++) {
    if (particles.length > 400) {
      particles.shift();
    }
    particles[i].updateobject();
    if (particles[i].wallleft==true){
      keleft.push(particles[i].mass * Math.pow(particles[i].velocity.net(),2) /2)
    } else {
      keright.push(particles[i].mass * Math.pow(particles[i].velocity.net(),2) /2)
    }
  }
  wall.updateobject();

  totalleft = 0;

  for(var i = 0; i < keleft.length; i++) {
    totalleft += keleft[i];
  }
  var avgleft = totalleft / keleft.length;
  avgkeleft.push(avgleft)
  if (avgkeleft.length > 400) {
      avgkeleft.shift();
  }

  totalright = 0;
  for(var i = 0; i < keright.length; i++) {
    totalright += keright[i];
  }
  var avgright = totalright / keright.length;
  avgkeright.push(avgright)
  if (avgkeright.length > 400) {
      avgkeright.shift();
  }

  var total = totalleft + totalright + wall.mass * Math.pow(wall.velocity.net(), 2) / 2

  totalavgleft = 0;
  for(var i = 0; i < avgkeleft.length; i++) {
    totalavgleft += avgkeleft[i];
  }
  var avgavgleft = totalavgleft / avgkeleft.length;

  totalavgright = 0;
  for(var i = 0; i < avgkeright.length; i++) {
    totalavgright += avgkeright[i];
  }
  var avgavgright = totalavgright / avgkeright.length;




  document.getElementById("data").innerHTML = "KE Left: " + avgleft + "<br>KE Right: " + avgright + "<br>Average KE Left: " + avgavgleft + "<br>Average KE Right: " + avgavgright + "<br>Total KE: " + total
}

//detecting mouse position
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

avgkeleft=[];
avgkeright=[];

canvas.addEventListener('mousemove', function (evt) {
  mousePos = getMousePos(canvas, evt);
}, false);

var mouseDown = false;
document.body.onmousedown = function () {
  mouseDown = true;
}
document.body.onmouseup = function () {
  mouseDown = false;
} 

var mousePos = new Vector(canvas.width / 2, canvas.height / 2);
var universalacceleration = new Vector(0, 0);
var universalforce = new Vector(0, 0)
var particles = [];


function calculateaverage(array) {
  for(var i = 0; i < array.length; i++) {
    totalaverage += array[i];
  }
  var average = totalaverage / array.length;
  return average;
}

var wall = new VerticalWall(canvas.width/2,canvas.height,4,10,0)
setInterval(function () { update(); }, 10);