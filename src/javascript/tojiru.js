window.onload = function() {
  chrome.tabs.getSelected(window.id, function (tab) {
    var url = document.createTextNode(tab.url);
    document.getElementById('url').appendChild(url); 
  });
};
