// Krijoni nje funksion qe pranon si parameter nje string, i cili nese eshte numer na kthen true, ose te kthej false nese nuk eshte.
// Shembull:
// "20" - true
// "3.14" - true
// "asd" - false
// "twenty" - false

function kontrollo(s){

    s = Number(s);

    if(isNaN(s)){
        return console.log(`FALSE - Nuk eshte numer! + ${s}`);
    }else{
        return console.log(`TRUE - Eshte numer ${s}`);
    }

}

kontrollo(9.5);