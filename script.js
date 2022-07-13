function dark(){
  
    if(light == "#000"){
      light = document.body.style.backgroundColor = "#fff";
      document.getElementById("light").innerHTML = "Dark";
      
    }else{
      light = document.body.style.backgroundColor = "#000";
      document.getElementById("light").innerHTML = "Light"; 
        
    }
    
  }