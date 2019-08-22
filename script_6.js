var life = prompt("Veuillez entrer une suite de lettres", "UCU");

function pairElement(str) {
  
  var singleArr = str.split("");
  var doubleArr = []; //blank array to house 2D end result
  var element = "";   //element and match will be used in our switch statement
  var match = "";
  
//loop through singleArr and pair element with it's match
//push element and match onto 2D array
  for (var i = 0; i < singleArr.length; i++){   
    element = singleArr[i];
    
    switch (element){
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
        console.log("Sérine");
        break;
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
        console.log("Proline");
        break;
      case "UUA":
      case "UUG":
        console.log("Leucine");
        break;
      case "UUU":
      case "UUC":
        console.log("Phénylalanine");
        break;
      case "CGU":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":  
        console.log("Arginine");
        break;
      case "UAU":
      case "UAC":     
        console.log("Tyrosine");
        break;

      default:
        console.log("Cette entrée n'est pas reconnue");
        break;
    }
    doubleArr.push([element, match]);  
  }
  return doubleArr;
}