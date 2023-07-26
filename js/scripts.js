//we need to wait for the window to load
//or the JS will race with the DOM loading
//(and fail)
window.onload = function() {

  //light and dark

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

  //big and small

  let btn_big_font = document.querySelector("#btn-big-font");
  btn_big_font.onclick = function() {
    //bigger and thicker
    document.body.style.fontSize = "1.10em";
    document.body.style.fontWeight = "600";
  };
  let btn_small_font = document.querySelector("#btn-small-font");
  btn_small_font.onclick = function() {
    //the opposite
    document.body.style.fontSize = "1em";
    document.body.style.fontWeight = "400";
  }

};