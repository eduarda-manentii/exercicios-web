const a = 5;
const b = 5;
const c = 5;

if((a + b > c) && (a + c > b) && (b + c > a)) {
    if(a == b && b == c) {
       console.log("Triângulo equilátero.")
    } else if((a == b) || (a == c) || (b == c)) {
        console.log("Triângulo Isósceles.")
    } else {
        console.log("Triângulo Escaleno.")
    }
} else {
    console.log("Não é triângulo.")
}