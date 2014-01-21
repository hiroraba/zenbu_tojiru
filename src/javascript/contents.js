window.onload = function() {
  $("#close").click(function(){
    chrome.tabs.getSelected(null , function(tab){
      var tabs = localStorage["tabs"].split(",");
      for(var i = 0; i < tabs.length; i++) {
	if (tab.id != parseInt(tabs[i])) {
	  chrome.tabs.remove(parseInt(tabs[i]), function(){});
	}
      }
    });
  });
}
