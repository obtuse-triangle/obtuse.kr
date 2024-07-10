window.addEventListener("scroll", () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  // document.querySelector(".progress-bar").style.height = scrolled + "%";
  document.querySelector(".progress-bar2").style.width = scrolled + "%";
});
