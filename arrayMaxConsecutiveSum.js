/* Teniendo un array de números enteros, diseñar una función que de como resultado, la mayor suma posible entre el número de elementos declarado en el parámetro 'k'

Así, para un array = [2, 3, 5, 1, 6] y un k = 2, la salida debe de ser = 8

Todas las posibles sumas entre cada dos números consecutivos del array son:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.

por lo tanto la suma mayor es (3 + 5), con lo que la respuesta correcta es = 8


 */


/*

Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be = 8

All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.

Thus, the answer is 8.

 */


function arrayMaxConsecutiveSum(inputArray, k) {

    let maxsum = inputArray.slice(0, k).reduce( function ( a, b ) {
        return a + b;
    });

    let sum = maxsum;
    for(let i = k; i < inputArray.length; i++) {
        sum = sum + inputArray[i] - inputArray[i-k];
        if(sum > maxsum)
            maxsum = sum
    }
    return maxsum
}

// Ejemplo

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))


// Probablemente haya otras formas de lograrlo, esta me parece correcta.

