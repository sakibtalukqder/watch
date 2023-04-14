function Error(){
  window.alert('Working on it, Try again letter. \nThank you.. :)');
}



//Sidebar Open & Close

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}



//--Dark-Theme


function display() {
  
  let mode = document.getElementById("mode");
  
  document.body.classList.toggle("dark-thme");
  if(document.body.classList.contains("dark-thme")){
    mode.innerHTML='Lite';
  }
  else{
    mode.innerHTML='dark';
  }
  
}