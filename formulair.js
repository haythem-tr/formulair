function validname (){
   
    var myInput = document.getElementById("psw");
    var n= document.getElementById("Nname").value;
    var l=document.getElementById("Nnamee").value;
   var A =document.getElementById("add").value;
   if(A==""){
     alert("address invalid")
     return false;
   }
    
    if(l==""){
      alert ('Error : Last name invalid') ;
      return false;
    }
    if(n==""){
      alert ("Error : Name invalid");
      return false;
    }

        
    myInput.onfocus = function() {
        document.getElementById("message").style.display = "block";
    }
    myInput.onblur = function() {
        document.getElementById("message").style.display = "none";
    }
    
    
}
