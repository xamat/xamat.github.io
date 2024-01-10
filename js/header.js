function header(){
	document.write('<img src="ucb.png" border="0" usemap="#UCBMap" /><map name="UCBMap" id="UCBMap"><area shape="rect" coords="11,3,298,27" href="http://www.colorado.edu/" alt="University of Colorado at Boulder" target="_blank" /><area shape="rect" coords="794,7,828,25" href="http://www.colorado.edu/" alt="CU Home" target="_blank" /><area shape="rect" coords="835,7,873,25" href="http://www.colorado.edu/search/" alt="CU Search" target="_blank"  /><area shape="rect" coords="880,7,916,25" href="http://www.colorado.edu/atoz/" alt="CU A to Z" target="_blank"  /><area shape="rect" coords="925,7,949,25" href="http://www.colorado.edu/campusmap/" alt="Campus Map" target="_blank" /></map>');
}

function footer(){
	document.write('<a target="_blank" href="http://www.colorado.edu"><img src="wordmark.png" alt="University of Colorado at Boulder" /></a>');	
}

document.getElementById('closeChatbot').addEventListener('click', function() {
    var chatbot = document.getElementById('chatbot');
    if (chatbot.style.display === 'none') {
        chatbot.style.display = 'block';
        this.textContent = 'Close';
    } else {
        chatbot.style.display = 'none';
        this.textContent = 'Open Chatbot';
    }
});
