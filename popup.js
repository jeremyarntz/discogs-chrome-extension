function sendMessageFilter(filterAction){

  var message = {action: filterAction};

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
      console.log(response.farewell);
    });
  });
}

$(document).ready(function(){
  $('#filterSleeves').click(function(){
    sendMessageFilter('filterSleeves');
  });
});