let piket = 91

if (piket < 0 || piket > 100) {
    console.log("Piket janë të pavlefshme, provimi duhet të kontrollohet edhe një herë.");
} else if (piket < 50) {
    console.log("Nota: 5");
} else if (piket < 60) {
    console.log("Nota: 6");
} else if (piket < 70) {
    console.log("Nota: 7");
} else if (piket < 80) {
    console.log("Nota: 8");
} else if (piket < 90) {
    console.log("Nota: 9");
} else if(piket < 100) {
    console.log("Nota: 10");
}else {
    console.log("Studenti nuk ka paraqitur provimin!");
}