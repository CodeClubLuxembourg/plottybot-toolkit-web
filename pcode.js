// taken from https://stackoverflow.com/a/14155586
var pcode = false ;
function register_pcode_myform_change_event() {
	document.forms['pcode_myform'].elements['pcode_myfile'].onchange = function(evt) {
	if(!window.FileReader) return; // Browser is not compatible
	    var reader = new FileReader();
	    reader.onload = function(evt) {
	        if(evt.target.readyState != 2) return;
	        if(evt.target.error) {
	            alert('Error while reading file');
	            return;
	        }
	        pcode = evt.target.result ;
	        document.getElementById( "tcode" ).value = "Plotter Code has been loaded from file and isn't shown here for performance reasons."
	        draw_turtle_code( pcode, document.getElementById("preview"), 0, 1000000 ) ;
	    };
	    reader.readAsText(evt.target.files[0]);
	};
}