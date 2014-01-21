chrome.tabs.onCreated.addListener(function(tab){
  sendTabs();
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  sendTabs();
});
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo){
  sendTabs();
});

function sendTabs(){
  chrome.windows.getAll({populate: true}, function(windows){
    var receiverIds = new Array();
    var tabs = new Array();

    jQuery.each(windows, function(win_idx, win){
      jQuery.each(win.tabs, function(tab_idx, tab){
	if(tab.url.indexOf("chrome://") != -1){
	  return;
	}
	tabs.push(tab.id);
	localStorage['tabs'] = tabs.toString();
      });
    });
  });
}
