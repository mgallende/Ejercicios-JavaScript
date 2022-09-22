/*
You found two items. The first item weighs weight1 and is worth value1,
and the second item weighs weight2 and is worth value2.
What is the total maximum value of the items you can take with you,
assuming that your max weight capacity is "maxW" and you can't come back for the items later?

Note that there are only two items, and you can't bring more
than one item of each type, i.e. you can't take two first items or two second items.

Example

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be = 10.
You can only carry the first item.

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be = 16
You're strong enough to take both of the items with you.

For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be = 7.
You can't take both items, but you can take any of them.

 */


/*

Has encontrado dos objetos. El primer objeto pesa 1 y tiene un valor de 1, y el segundo pesa 2 y tiene un valor de 2.
¿Cuál es el valor máximo total de los objetos que puedes llevar contigo,
suponiendo que tu capacidad máxima de peso es "maxW" y que no puedes volver a por los objetos más tarde?

Ten en cuenta que solo hay dos artículos y que no puedes llevar más de un artículo de cada tipo,
es decir, no puedes llevar dos primeros artículos ni dos segundos.

Ejemplo

Para valor1 = 10, peso1 = 5, valor2 = 6, peso2 = 4, y maxW = 8, la salida debe ser = 10.
Puedes llevar el primer elemento.

Para valor1 = 10, peso1 = 5, valor2 = 6, peso2 = 4, y maxW = 9, la salida debería ser = 16
Puedes con los dos objetos.

Para valor1 = 5, peso1 = 3, valor2 = 7, peso2 = 4, y maxW = 6, la salida debería ser = 7.
No puedes con los dos, pero sí con cualquiera de ellos

 */


function solution ( value1 , weight1 , value2 , weight2 , maxW ) {

    if (weight1 + weight2 <= maxW) {
        return value1 + value2; // you can with both items. Puedes con los dos objetos.
    }
    else if (weight1 <= maxW && weight2 > maxW) {
        return value1; // you can with item1 but not item2. Puedes con el objeto 1 pero no con el 2.
    }
    else if (weight2 <= maxW && weight1 > maxW) {
        return value2; // you can with item2 but not item1. Puedes con el objeto 2, pero no con el 1.
    }
    else if (weight1 > maxW && weight2 > maxW) {
        return 0; // Both are too heavy, and you can't handle either. Ambos son demasiados pesado y no puedes con ninguno de los dos.
    } else {
    }
    return value2 > value1 ? value2 : value1;

}


console.log(solution(5, 3, 7, 4, 6))
