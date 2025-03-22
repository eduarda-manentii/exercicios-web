function validateInput(input) {
    const regex = /^[A-Za-z]$/;
    if (!regex.test(input.value)) {
      input.setCustomValidity("Por favor, insira apenas letras.");
    } else {
      input.setCustomValidity("");
    }
  }

function capturaTeclaNumero1(event) {
    if(event.key == "Enter") {
        document.getElementById('allowedLetter1').focus();
    }
}

function capturaTeclaNumero2(event) {
    if(event.key == "Enter") {
        document.getElementById('allowedLetter2').focus();
    }
}

function capturaTeclaNumero3(event) {
    if(event.key == "Enter") {
        document.getElementById('allowedLetter3').focus();
    }
}

function capturaTeclaNumero4(event) {
    if(event.key == "Enter") {
        document.getElementById('allowedLetter4').focus();
    }
}

function capturaTeclaNumero5(event) {
    if(event.key == "Enter") {
        document.getElementById('allowedLetter5').focus();
    }
}

function capturaTeclaNumero6(event) {
    if(event.key == "Enter") {
        document.getElementById('allowedLetter6').focus();
    }
}

function capturaTeclaNumero7(event) {
    if(event.key == "Enter") {
        document.getElementById('searchButton').focus();
    }
}