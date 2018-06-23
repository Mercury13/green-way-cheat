function isCorrect(id)
{
	// Empty string is always wrong
	if (id == "" || id.charAt(0) != 's')
		return false;
	var aid = id.split('a');
	var qid = aid[0].split('q')[1];
	var ra = window.wrappedJSObject.ra;
	var qa = ((ra[qid]-3)/7)+1-qid;
	return (qa == aid[1]);
}

function markElement(el)
{
	var BOLDNESS = 800;
	el.style.fontWeight = BOLDNESS;
	var allInside = el.getElementsByTagName("label");
	for (var j = 0; j < allInside.length; ++j) {
		var elInside = allInside.item(j);
		elInside.style.fontWeight = BOLDNESS;
	}
}

function cheatHere()
{
	var answers = document.getElementsByTagName("li");
	for (var i = 0; i < answers.length; ++i) {
		var el = answers.item(i);
		// El is our element now. Check whether it is correct, then mark
		if (isCorrect(el.id))
			markElement(el);
	}
}

browser.runtime.onMessage.addListener(cheatHere);
