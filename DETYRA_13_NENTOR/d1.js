// 1.Krijoni nje funksion qe e pranon nje vlere, e shumezon ate me 50, e rrit per 6 pastaj e kthen.
// Nese vlera e dhene eshte string duhet te kthehet "Error".
//       problem(1) -> 56
//       problem("26") -> "Error"

function detyr(vlera){
    if(vlera === Number(vlera)){
        return vlera * 50 + 6;       
    }else{
       return `Problem ${vlera} -> Error!`;
    }
}


console.log(detyr("26"));