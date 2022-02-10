function healthCheck(){
    var n = document.getElementById("input1").value;
    var a = document.getElementById("input2").value;
    var w = document.getElementById("input3").value;
      if(a>=5 && a<=7){
          if(w<15){
            document.getElementById("result1").innerHTML = "Hello "+ n +"!!! your weight is less than recommended value of 21 kg at the age of " + a +"." ;
          }
          if(w>20){
            document.getElementById("result1").innerHTML = "Hello "+ n +"!!! your weight is greater than recommended value of 21 kg at the age of " + a+ "." ;
      }
    document.getElementById("result2").innerHTML = "Parameter is "+ 2*(x+y) +" "+ "sq. mtr "  ;
    document.getElementById("result1").innerHTML = "Area is "+ l*b +" "+ "sq. mtr "  ;
}