function iniciarTimer() {
    let tempo = document.getElementById("tempo").value;
    let segundo = document.getElementById("segundo");
    setInterval(() => {
        segundo.textContent = tempo;
        console.log(tempo)
        console.log(segundo)
        tempo -= 1;
    }, 1000);
      
}


function zerarTimer() {
    const segundo = document.getElementById("segundo");
    segundo.value = "";
}