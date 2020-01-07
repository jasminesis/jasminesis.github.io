var i = 0;
var text = 'Hello!';
var speed = 120;

function typing() {
	if (i < text.length) {
		document.getElementById('hello').innerHTML += text.charAt(i);
		i++;
		setTimeout(typing, speed);
	}
}

typing();
