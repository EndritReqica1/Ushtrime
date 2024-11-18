// 2. Krijoni nje funksion qe llogarit mesataren e numrave ne nje array me numra, p.sh:
//        calcAverage([2, 4, 5, 6, 3, 4]) ->  4

function calcAverage(numbers) {
    if (numbers.length === 0) return 0; 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
    return sum / numbers.length; 
}

// Shembull përdorimi
console.log(calcAverage([2, 4, 5, 6, 3, 4])); 












