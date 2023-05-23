//if we want drums to make sound irrespective of the fact wether they were clicked or a key was pressed

var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
       var button = this.innerHTML;
       playSound(button);
       Animation(button);
    }
    );

    document.querySelectorAll(".drum")[i].addEventListener("keypress",function (e)
    {
        playSound(e.key);
        Animation(e.key);
    }
    );

}

function playSound(key)
{
    switch(key)
    {
        case('w'):  var mysound= new Audio("sounds/tom-1.mp3");
        mysound.play();
        break;

        case('a'):  var mysound= new Audio("sounds/tom-2.mp3");
        mysound.play();
        break;

        case('s'):   var mysound= new Audio("sounds/tom-3.mp3");
        mysound.play();
        break;

        case('d'):   var mysound= new Audio("sounds/tom-4.mp3");
        mysound.play();
        break;

        case('j'):   var mysound= new Audio("sounds/snare.mp3");
        mysound.play();
        break;

        case('k'):   var mysound= new Audio("sounds/kick-bass.mp3");
        mysound.play();
        break;

        case('l'):   var mysound= new Audio("sounds/crash.mp3");
        mysound.play();
        break;

        default: console.log('button');
    }
}

function Animation(keys)
{
    var active= document.querySelector("."+keys);
    active.classList.add("selected");

    setTimeout(function ()
    {
        active.classList.remove("selected");
    }, 500);
}
