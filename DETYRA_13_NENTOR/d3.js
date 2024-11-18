// 3. Krijoni funksionin qe kthen fjalet mbrapsht, p.sh.:
//        textReverser("Javascript") -> tpircsavaJ
//        textReverser("Node") -> edoN


function textReverser(text) {
    let reversedText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i];
    }
    return reversedText;
}


console.log(textReverser("Javascript")); 
console.log(textReverser("Node")); 
