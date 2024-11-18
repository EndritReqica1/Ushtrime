function f(numri1, numri2) {
    
    if (numri1 === "") numri1 = "0";
    if (numri2 === "") numri2 = "0";

    
    if (numri1 >= 0 && numri2 >= 0) {
        return numri1.toString() + numri2.toString(); 
    }

   
    const shuma = parseInt(numri1) + parseInt(numri2);
    return shuma; 
}


console.log(f(6,"5"));