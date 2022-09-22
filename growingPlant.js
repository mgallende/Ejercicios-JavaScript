/*

Each day, its height increases by a fixed amount represented by the integer upSpeed.
But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

Since you grew the plant from a seed, it started at height 0 initially.
Given an integer desiredHeight, your task is to find
how many days it'll take for the plant to reach this height.

For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be = 10
 */

/*


Cada día, la altura de una planta aumenta en una cantidad fija representada por el número entero "upSpeed". Debido a la falta de luz solar, la planta disminuye su altura cada noche, en una cantidad representada por "downSpeed".

Dado que la planta creció a partir de una semilla, comenzó con la altura 0 inicialmente, y dado un número entero de altura deseada "desiredHeight ", crear una función que calcule cuántos días tardará la planta en alcanzar la altura deseada.

Para "upSpeed" = 100, "downSpeed" = 10, y "desiredHeight" = 910, la salida debería ser = 1

 */



function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let grow = upSpeed - downSpeed;
    return Math.max(0,Math.ceil((desiredHeight-upSpeed)/grow)) +1;
}

// Example
console.log(growingPlant(100, 10, 910));