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

DONE. Use it where ever you want to start and stop, make sure you handle error case as well 




