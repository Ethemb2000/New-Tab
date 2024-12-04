function focus(object) {
  document.getElementById(object);
  object.focus();
}

searchBar = document.getElementById("search");
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 49) {
    focus("searchBar")
  }
});
