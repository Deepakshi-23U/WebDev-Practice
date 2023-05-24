var moon= document.getElementById('moon')
var star= document.getElementById('stars');
var front= document.getElementById('front');
var behind= document.getElementById('behind');
var btn= document.getElementById('btn');
var text= document.getElementById('text');
var head= document.getElementById('h');

window.addEventListener('scroll', function() {
    var value=window.scrollY;
    star.style.left = value * 0.25 +'px';
    moon.style.top = value * 0.75 +'px';
    behind.style.top = value * 0.5 + 'px';
    front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
});