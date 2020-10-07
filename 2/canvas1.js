var canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

//Rectangles
c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(300, 300, 100, 100);

//Lines
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 200);
c.strokeStyle = "rgba(255,0,0,1)";
c.stroke();

//arc
c.beginPath()
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();