function filterSleeves() {
  	$('.shortcut_navigable').each(function(){
		var condition = $(this).find('.item_sleeve_condition').text();
		if(condition == 'Generic') {
			$(this).slideUp('slow');
		}
  	});
}

chrome.runtime.onMessage.addListener(
  	function(request, sender, sendResponse) {
    	//console.log(sender.tab ?
        //        "from a content script:" + sender.tab.url :
        //        "from the extension");
    	console.log(request.action);
    	if (request.action == "filterSleeves") {
      		sendResponse({farewell: "goodbye"});
      		filterSleeves();
      	}
});