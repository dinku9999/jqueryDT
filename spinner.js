step -1  // html

<div id="spinner" class="spinner" style="display: none;">
 <img id="img-spinner" src="images/default.gif" alt="Loading"/>
<div style="display: inline-block;background:none;white-space: nowrap;"><span id="spinnerText"></span></div>
</div> 
// use the above code for html ------------------

step -2 // images file
in the images download the image you want to spin and rename it as default.gif and place in your images

step-3 //script
Spinner js
$("#spinner").css( "display", "block" );   ——— when you want to show.
$("#spinner").css( "display", "none" );——  when you want it to hide.
// use above commands for toggling on and off the spinner


step-4 // Include this in css
.spinner {
    position: fixed;
    top: 50%;
    left: 45%;
    margin-left: -50px; /* half width of the spinner gif */
    margin-top: -50px; /* half height of the spinner gif */
    text-align:center;
    z-index:1234;
    overflow: auto;
    width: 100px; /* width of the spinner gif */
    height: 102px; /*hight of the spinner gif +2px to fix IE8 issue */
    overflow: visible;
}

DONE. Use it where ever you want to start and stop, make sure you handle error case as well 




