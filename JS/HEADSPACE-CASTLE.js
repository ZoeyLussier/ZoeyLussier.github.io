
function TEXT1() {
  document.getElementById("text1").style.visibility = "hidden";
}

function TEXT2() {
  document.getElementById("text2").style.visibility = "hidden";
  document.getElementById("text3").style.visibility = "hidden";
}

//init object globally
            var objImage = null;
            function init() {
                objImage = document.getElementById("sweetheart");
                objImage.style.position = "relative";
                objImage.style.left = "0px";
                objImage.style.top = "0px";
            }
            function getKeyAndMove(e) {
                var key_code = e.which || e.keyCode;
                switch (key_code) {
                    case 37: //left arrow key
                        moveLeft();
                        break;
                    case 38: //Up arrow key
                        moveUp();
                        break;
                    case 39: //right arrow key
                        moveRight();
                        break;
                    case 40: //down arrow key
                        moveDown();
                        break;
                }
            }
            function moveLeft() {
                objImage.style.left = parseInt(objImage.style.left) - 3 + "px";
            }
            function moveUp() {
                objImage.style.top = parseInt(objImage.style.top) - 3 + "px";
            }
            function moveRight() {
                objImage.style.left = parseInt(objImage.style.left) + 3 + "px";
            }
            function moveDown() {
                objImage.style.top = parseInt(objImage.style.top) + 3 + "px";
            }
            window.onload = init;