var car = document.getElementById('greenCar');
var drawProcess = car.getContext('2d');
// Traçage du premier rectangle constituant le haut de la voiture
drawProcess.beginPath();
drawProcess.moveTo(30,200);
drawProcess.lineTo(380,200);
drawProcess.lineTo(380,130);
drawProcess.lineTo(320,130);
drawProcess.lineTo(320,80);
drawProcess.lineTo(110,80);
drawProcess.lineTo(110,130);
drawProcess.lineTo(30,130);
drawProcess.closePath();
drawProcess.fillStyle = '#00a355';
drawProcess.fill();
// On trace maintenant la première roue
drawProcess.beginPath();
drawProcess.arc(60, 240, 40, 0, Math.PI * 2, true);
drawProcess.fillStyle = '#cdcdcd';
drawProcess.fill();
drawProcess.stroke();
// Puis la seconde
drawProcess.beginPath();
drawProcess.arc(350, 240, 40, 0, Math.PI * 2, true);
drawProcess.fillStyle = '#cdcdcd';
drawProcess.fill();
drawProcess.stroke();
