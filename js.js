
function loadingBar() {

    var loadingBar = document.getElementById("loadingbar"); 
    var data = document.getElementById("loading_data");  
    var width = 1;

    var id = setInterval(inc, 10);
    function inc() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        data.textContent = width + '%';
        loadingBar.style.width = width + '%'; 
      }
    }
  }