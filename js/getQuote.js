$.get("jhilimiliQuotes.txt", function(data) {    
	let lines = data.split("\n");
	let quote = lines[Math.floor(Math.random() * lines.length)]
	console.log(quote);
	
	$('#output').append('<div id="quote" class="blockquote"><h1>' + quote + '</h1></div>');
});