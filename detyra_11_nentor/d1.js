// Shoket e klases te kane kerkuar qe te kopjosh disa dokumente per ta.
// Ti e di qe jane 'n' shoke klase dhe dokumenti ka 'm' faqe.
// Detyra jote eshte te llogarisesh sa faqe te duhen. Nese n < 0 ose m < 0, kthe 0.
// Shembull:

// n = 5, m = 5 --> 25
// n = -5, m = 5 --> 0


function Llogaritje(n, m){
    if(n < 0 || m < 0){
        return 0;
    }else{
        return n * m;
    }
}

var llog = Llogaritje(0,5);

console.log(`llogaritja eshte: ${llog} `);