function funcao1() {
    const now = new Date();
    alert(now.toLocaleDateString());
}

const funcaoAnonima1 = function() {
    alert("você clicou em uma função anônima 1");
}

const funcaoAnonima2 = function() {
    alert("você clicou em uma função anônima 2");
}

function escolheFnc() {
    const radio = document.getElementsByName('fnc');
    if(radio[0].checked) {
        document.getElementById('btn2').onclick = funcaoAnonima1;
    } else {
        document.getElementById('btn2').onclick = funcaoAnonima2;
    }
}

