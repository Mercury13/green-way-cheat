function getActiveTab()
{
	return browser.tabs.query({active: true, currentWindow: true});
}

function cheatMain()
{
	getActiveTab().then((tabs) => {
		browser.tabs.sendMessage(tabs[0].id, { command: "cheat" } );
	});
}

browser.browserAction.onClicked.addListener(cheatMain); 