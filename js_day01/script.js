document.write('<button id="btnLeft">LEFT</button>')
document.write('<button id="btnRight">RIGHT</button>')
document.write('<button id="btnUp">UP</button>')
document.write('<button id="btnDown">DOWN</button>')
document.write('<hr>')
document.write('<div id="box"></div>')

var btnRight = document.getElementById('btnRight')
var btnLeft = document.getElementById('btnLeft')
var btnUp = document.getElementById('btnUp')
var btnDown = document.getElementById('btnDown')
var box = document.getElementById('box')

var x = 100, y = 100;
var a = 0;
//btnRight.onclick = function () {
function move() {
    //console.log(this == btnLeft);
    switch (this) {
        case btnLeft : a = 180; x = x - 50; break;
        case btnRight : a = 0; x = x + 50; break;
        case btnUp : a = 270; y = y - 50; break;
        case btnDown : a = 90; y= y + 50; break;
        default : console.log('해당 없습니다!')
    }
    box.style.transform = 'rotate('+a+'deg)';
    box.style.left = x + 'px';
    box.style.top = y + 'px';
};

btnLeft.onclick = move;
btnRight.onclick = move;
btnUp.onclick = move;
btnDown.onclick = move;