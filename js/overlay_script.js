/* 
    Overlay script.
    Used for hide/show the overlay menu.
*/

// when we click hamburger icon
function on() 
{
    document.getElementById("overlay").style.display = "block";
}

function off() 
{
    document.getElementById("overlay").style.display = "none";
}

// var x = document.getElementById("overlay");
// console.log(x);

// x.addEventListener("click", autoCloseOverlay, true);

// function autoCloseOverlay()
// {
//     if($("body.max-width" > 830))
//     {
//         x.style.display = "none";
//     }
// }

