/* Teniendo una cadena de texto, encontrar el número de caracteres diferentes que hay en ella.

Por ejemplo:
para una cadena = 'cabca'  la salida que obtendremos sera = 3
en la cadena hay 3 caracterres diferentes: a, b y c.

 */

/*

Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be = 3.

There are 3 different characters a, b and c.

 */

function differentSymbolsNaive(s) {

    return s.split('').filter((el, i, self) => i === self.indexOf(el)).length
}


console.log(differentSymbolsNaive('cabcdcabad'))

// Probablemente hay más maneras de hacerlo, esta me parece la más sencilla y rápida.

// There are probably more ways to do it, but this seems to me to be the simplest one.