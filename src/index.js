//function to verify if the input is a valid decimal
function isDecimal(decimal){
  let regex = /^[0-9]+$/;
  return regex.test(decimal);
}

//function to convert from decimal to binary
function dec2bin(decimal) {
  let binary = [];
  while (decimal > 0) {
    let remainder = decimal % 2;
    binary.unshift(remainder);
    decimal = Math.floor(decimal/2);
  }

  //convert the array to string
  let binaryString = binary.join("");

  return binaryString;
}

//access to HTML elements
let boton = document.getElementById("botoncito");
let result = document.getElementById("resultadito");

//print when you press the button
boton.addEventListener(
  "click",
  function() {
    let decimal = document.getElementById("decimalito").value;
    if (isDecimal(decimal)){
      result.textContent = dec2bin(decimal);
    } else {
      result.textContent = "Ingrese un decimal válido";
    }
  }
)
