/* Dado un array de números enteros,
obtener un nuevo array en el que se haya eliminado
cada uno de los números que ocupen el lugar del valor
del parámetro K en el anterior array.

Crear la función que lo haga posible

Ejemplo

Para un Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Un valor de k = 3,
la salida debería ser [1, 2, 4, 5, 7, 8, 10].

 */

//Esta es la solución más rápida y con menos código, evidentemente se puede hacer de distintas maneras, todo es cuestión de investigar

function extractEachKth(inputArray, k) {

    return inputArray.filter((element, index) => {

        return (index + 1) % k !== 0;

    });
}


//llamamos a la función extractEachKth

extractEachKth([1, 2, 3, 4 ,5, 6, 7, 8, 9 ,10], 3)

