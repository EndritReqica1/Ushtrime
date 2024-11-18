// . Shfaq tabelen e shumezimit deri ne 10X10 ne console, si me poshte:
//        1 * 1 = 1
//        1 * 2 = 2
//        1 * 3 = 3
//        1 * 4 = 4
//        1 * 5 = 5
//        1 * 6 = 6
//        1 * 7 = 7
//        1 * 8 = 8
//        1 * 9 = 9
//        1 * 10 = 10


function Tabela() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log(''); 
    }
}


Tabela();
