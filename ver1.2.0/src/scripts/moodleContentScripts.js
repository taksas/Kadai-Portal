document.documentElement.style.setProperty('--color_primary',  localStorage.getItem('mainColorbyKadaiPortal'));
chrome.runtime.sendMessage({greeting: "messageFromContentScripts!!"}, function(response) {
  document.documentElement.style.setProperty('--color_primary',  response.color);
  localStorage.setItem('mainColorbyKadaiPortal',response.color)
  console.log(response.color);
});