/*
Busca el dígito más a la izquierda que aparece en una cadena dada.

Para inputString = "var_1__Int", la salida debe ser = '1';
Para inputString = "q2q-q", la salida debería ser = '2';
Para inputString = "0ss", la salida debe ser = '0'.
 */


/*
Find the leftmost digit that occurs in a given string.

For inputString = "var_1__Int", the output should be = '1';
For inputString = "q2q-q", the output should be = '2';
For inputString = "0ss", the output should be = '0'.
 */

function firstDigit(inputString) {
    //utilizamos el método 'match(/\d/)[0]' para buscar el primer dígito en la cadena
    return inputString.match(/\d/)[0]
}

//Example
console.log(firstDigit('var_1__Int')) // result = 1 - the first digit

// Probablemente hay más maneras de hacerlo, esta me parece la más sencilla.

// There are probably more ways to do it, but this seems to me to be the simplest one.