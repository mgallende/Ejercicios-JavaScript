function solution(prices, notes, x) {
    let totPrice = 0

    for (let i = 0 ; i < prices.length ; i++) {
        const percent = Percentage(notes[i]);
        const diff = (prices[i] - (prices[i] / percent));
        totPrice = totPrice + diff;

        const testPercentage = 100 - (100 / Percentage('Same as in-store'));
        console.log("i : "+i+" | percent : "+percent+" | difference : "+diff+" | tot : "+totPrice);
    }

    return totPrice.toFixed(5) <= x
}

function Percentage(notes) {
    if (notes[0] === 'S')
        return 1
    else {
        const split = notes.split('%')
        if (split[1][1] === 'h')
            return (1 + (split[0] / 100))
        else
            return (1 - (split[0] / 100))
    }
}


console.log(solution([110, 95, 70], ["10.0% higher than in-store",
    "5.0% lower than in-store",
    "Same as in-store"], 5))

    