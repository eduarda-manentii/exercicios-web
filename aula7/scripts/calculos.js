function calcularResultado() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const comboBox = document.getElementById('operadores');
    const opcaoSelecionada = comboBox.value;
    const soma = calcular(numero1, opcaoSelecionada, numero2);
    if (soma) {
        document.getElementById('resultado').innerText = "A soma é: " + soma;
        const button = document.getElementById('calcular');
        button.addEventListener('dblclick',function() {
            alterarCorResultado();
        });
    } else {
        document.getElementById('resultado').innerText = "Preencha os campos.";
    }
}

function alterarCorResultado() {
    const resultado = document.querySelector('.resultado')
    resultado.classList.add('highlight');
}

function capturaTeclaNumero1(event) {
    if(event.key == "Enter") {
        document.getElementById('numero2').focus();
    }
}

function capturaTeclaNumero2(event) {
    if(event.key == "Enter") {
        calcularResultado();
    }
}

function calcular(numero1, opcaoSelecionada, numero2) {
    switch(opcaoSelecionada) {
        case "*": {
            return multiplicarNumeros(numero1, numero2);
        }
        case "-": {
            return diminuirNumeros(numero1, numero2);
        }
        case "+": {
            return somarNumeros(numero1, numero2);
        }
        case "/": {
            return dividirNumeros(numero1, numero2);
        }
    }
}

function somarNumeros(a, b) {
    return a + b;
}

function multiplicarNumeros(a, b) {
    return a * b;
}

function dividirNumeros(a, b) {
    return a / b;
}

function diminuirNumeros(a, b) {
    return a - b;
}

function alterarConteudo() {
    const titulo = document.getElementById("titulo");
    const paragrafo = document.getElementById("paragrafo");

    titulo.textContent = "Novo título!";
    paragrafo.innerHTML = "Texto atualizado com <strong>innerHTML!</strong>"
}

function alterarAtributos() {
    const campoTexto = document.getElementById("campoTexto");
    campoTexto.removeAttribute("disable");
    campoTexto.value = "novo texto";
}

function alterarClasse() {
    const paragrafo = document.getElementById("paragrafo");
    paragrafo.classList.toggle("destaque");
}

function limparInput() {
    const campoTexto = document.getElementById("campoTexto");
    campoTexto.removeAttribute("disabled");
    campoTexto.value = "";
}

function adicionarItem() {
    const lista = document.getElementById("lista");
    const input = document.getElementById("novoItem");
    if(input.value.trim() === "") {
        return;
    }
    const novoLi = document.createElement("li");
    const textoLi = document.createTextNode(input.value);
    const botaoRemover = document.createElement("button");
    botaoRemover.innerHTML = "Remover";
    botaoRemover.addEventListener("click", function() {
        novoLi.remove();
    });
    novoLi.appendChild(textoLi);
    novoLi.appendChild(botaoRemover);
    lista.appendChild(novoLi);
    input.value = "";
}