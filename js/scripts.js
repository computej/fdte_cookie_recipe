//we need to wait for the window to load
//or the JS will race with the DOM loading
//(and fail)
window.onload = function() {
  let btn_dark_mode = document.querySelector("#btn-dark-mode");
  btn_dark_mode.onclick = function() {
    //make the background black, text white
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  };
  let btn_light_mode = document.querySelector("#btn-light-mode");
  btn_light_mode.onclick = function() {
    //the opposite of what we did above
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  };
};