function countWords() {
 
    var text = document
        .getElementById("inputField").value;

   
    var numWords = 0;

    
    for (var i = 0; i < text.length; i++) {
        var currentCharacter = text[i];

        if (currentCharacter == " ") {
            numWords += 1;

        }


    }

    if (numWords == 0){
        document.getElementById("show")
        .innerText = 'ERROR! You need to enter a valid text.';
        
    }else {
        numWords += 1;
        document.getElementById("show")
        .innerHTML = numWords;
    }
}