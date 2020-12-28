print = console.log;
canvas = document.getElementById("test");
var c = canvas.getContext("2d");
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = 0.9 * width;
canvas.height = 0.9 * height;
var mu = 1.1;
var cl = [];
var visc = 1000;

var startmouse = { x: 0, y: 0 };
endmouse = { x: 0, y: 0 };
mouseisdown = false;

function getMousePos(c, evt) {
  var rect = c.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vect) {
    return (new Vector2D(this.x + vect.x, this.y + vect.y));
  }

  sub(vect) {
    return (new Vector2D(this.x - vect.x, this.y - vect.y));
  }
  mult(a) {
    return (new Vector2D(this.x * a, this.y * a));
  }

  dot(vect) {
    return this.x * vect.x + this.y * vect.y;
  }

  cross(vect) {
    return this.x * vect.y - this.y * vect.x;
  }

  mag() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }

  normalize() {
    this.mag = Math.sqrt((this.x * this.x) + (this.y * this.y));
    return (new Vector2D((this.x / this.mag), (this.y / this.mag)))
  }

  findAngle(vect, type = "deg") {
    this.dot = this.x * vect.x + this.y * vect.y;
    this.mag1 = ((this.x ** 2) + (this.y ** 2)) ** 0.5;
    this.mag2 = ((vect.x ** 2) + (vect.y ** 2)) ** 0.5;
    if (type == "deg") {
      return Math.acos(this.dot / this.mag1 / this.mag2) * 180 / Math.PI;
    } else if (type == "rad") {
      return Math.acos(this.dot / this.mag1 / this.mag2);
    }
  }
}

var gravity = new Vector2D(0, 0.5);
var wind = new Vector2D(0, 0);

class circle {
  constructor(list, pos, vel, mass, radius, bouncyness, color) {
    this.list = list;
    this.list.push(this);
    this.pos = pos;
    this.vel = vel;
    this.mass = mass;
    this.radius = radius;
    this.bouncyness = bouncyness;
    this.color = color;
    this.prevpos = this.pos;
    this.force = new Vector2D(0, 0);
    this.c = canvas.getContext("2d");
  }

  velocity(v) {
    this.pos = this.pos.add(v);
  }

  accelerate(a) {
    this.vel = this.vel.add(a);
  }


  edgeDetect() {
    if (this.pos.x >= canvas.width - this.radius) {
      this.pos.x = canvas.width - this.radius;
      this.vel.x *= -1 * Math.sqrt(this.bouncyness);
      this.vel.y *= 0.95;


    } if (this.pos.x <= this.radius) {
      this.pos.x = this.radius;
      this.vel.x *= -1 * Math.sqrt(this.bouncyness);
      this.vel.y *= 0.95;

    } if (this.pos.y >= canvas.height - this.radius) {
      this.pos.y = canvas.height - this.radius;
      this.vel.y *= -1 * Math.sqrt(this.bouncyness);
      this.vel.x *= 0.95;

    } if (this.pos.y <= this.radius) {
      this.pos.y = this.radius;
      this.vel.y *= -1 * Math.sqrt(this.bouncyness);
      this.vel.x *= 0.95;
    }

  }

  collide() {
    for (var circ of this.list) {
      if (circ != this) {
        this.posdiff1 = this.pos.sub(circ.pos);
        if (this.posdiff1.mag() < (this.radius + circ.radius)) {
          this.direction1 = (circ.prevpos.sub(this.pos)).normalize();
          this.direction2 = (this.prevpos.sub(circ.pos)).normalize();
          this.overlap = this.radius + circ.radius - this.posdiff1.mag();
          this.pos = this.pos.sub(this.direction1.mult(this.overlap));
          circ.pos = circ.pos.sub(this.direction2.mult(this.overlap));

          this.posdiff1 = this.pos.sub(circ.pos);
          this.posdiffmag = this.posdiff1.mag();

          this.massconst1 = 2 * circ.mass / (this.mass + circ.mass);
          this.vdiff1 = this.vel.sub(circ.vel);
          this.dot1 = (this.vdiff1.dot(this.posdiff1)) / (this.posdiffmag ** 2);

          this.massconst2 = 2 * this.mass / (this.mass + circ.mass);
          this.vdiff2 = circ.vel.sub(this.vel);
          this.posdiff2 = circ.pos.sub(this.pos);
          this.dot2 = (this.vdiff2.dot(this.posdiff2)) / (this.posdiffmag ** 2);

          this.vel = (this.vel.sub(this.posdiff1.mult(this.dot1 * this.massconst1))).mult(Math.sqrt(this.bouncyness));
          circ.vel = (circ.vel.sub(this.posdiff2.mult(this.dot2 * this.massconst2))).mult(Math.sqrt(this.bouncyness));

        }
      }
    }
  }

  updateCircle() {

    this.edgeDetect();
    this.acceleration = new Vector2D(0, 0);
    this.force = new Vector2D(0, 0);
    this.acceleration = this.acceleration.add(this.force.mult(1 / this.mass));
    this.acceleration = this.acceleration.add(gravity);
    this.accelerate(this.acceleration);
    this.velocity(this.vel);
    this.collide();
    this.prevpos = this.pos;

  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
    this.c.strokeStyle = this.color;
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.stroke();
  }

}

function clear() {
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}

//constructor(list, pos, vel, mass, radius, bouncyness, color)

setInterval(() => {
  c2 = new circle(cl, new Vector2D(Math.random() * canvas.width, 0), new Vector2D(0, 0), 50, 10, 0.8, "green");
}, 1000)

count = 0;
setInterval(function () {
  clear();
  //collide();
  if (canvas.mousedown == true) {
    mousePos = mousemove;
    canvas.onmousedown = mousedown;
    canvas.onmouseup = mouseup;
  }
  if (mouseisdown == true) {
    c.beginPath();
    c.arc(startmouse.x, startmouse.y, 20, 0, Math.PI * 2, false);
    c.strokeStyle = "black";
    c.fillStyle = "black";
    c.fill();
    c.stroke();
    c.beginPath();
    c.moveTo(startmouse.x, startmouse.y);
    c.lineTo(endmouse.x, endmouse.y);
    c.stroke();
  }
  for (circ of cl) {
    circ.updateCircle();
    circ.draw();
  }

}, 10);
