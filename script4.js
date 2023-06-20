function calculateCost() {
    var idade = document.getElementById("idade").value;
  
    var cost = 0;
    if (idade < 18) {
      cost = 100;
    } else if (idade < 25) {
      cost = 200;
    } else if (idade < 35) {
      cost = 300;
    } else if (idade < 45) {
      cost = 400;
    } else if (idade < 55) {
      cost = 500;
    } else if (idade < 65) {
      cost = 600;
    } else {
      cost = 700;
    }
  
    document.getElementById("cost").innerHTML = "$" + cost;
  }
  
  document.getElementById("form").addEventListener("submit", calculateCost);