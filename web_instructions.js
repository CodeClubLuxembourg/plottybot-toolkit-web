function web_instructions_connect() {
	ajax_call( "command.php", ["command", "acquire_instructions_from_web("+document.getElementById('web_instructions_url').value+")"], null ) ;
}

function web_instructions_disconnect() {
	ajax_call( "command.php", ["command", "stop_acquire_instructions_from_web"], null ) ;
}