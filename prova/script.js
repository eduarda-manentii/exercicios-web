function adicionarItemTabela() {
    const produto = document.getElementById("nomeProduto");
    const valorUnitarioFloat = document.getElementById("valorUnitario").value;
    const quantidadeInt = document.getElementById("quantidade").value;
       if (produto === "" || valorUnitarioFloat <= 0 || quantidadeInt <= 0) {
        alert("Todos os campos são obrigatórios e devem ser válidos.");
        return;
    }

    const orcamentoDisponivel = parseFloat(document.getElementById('orcamentoDisponivel').value);
    const totalCompraHTML = document.getElementById('totalCompra');
    const valText = totalCompraHTML.textContent;
    var totalCompraNum = parseFloat(valText);

    let valorUnitario = parseFloat(document.getElementById('valorUnitario').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    var totalItem = valorUnitario * quantidade;

    let restanteOrcamento = orcamentoDisponivel - totalCompraNum;
    console.log(totalItem);
    console.log(restanteOrcamento);
    if (totalItem > restanteOrcamento) {
        alert(`Limite máximo do orçamento atingido. Você só pode gastar R$ ${restanteOrcamento.toFixed(2)} a mais.`);
        return; 
    }

    var qtdRows = document.getElementById("tblListaProduto").rows.length;
    var table = document.getElementById("tblListaProduto");
    var newRow = table.insertRow(qtdRows);
    var chave = "composto_" + qtdRows
    newRow.id = chave;

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);

    cel1.innerHTML = produto.value;
    cel2.innerHTML = valorUnitarioFloat;
    cel3.innerHTML = quantidadeInt;
    cel4.innerHTML = "R$" + totalItem.toString();

    atualizarValorTotalDaCompra(totalItem);
    limparCampos();
}

function atualizarValorTotalDaCompra(totalUnitario) {
    const totalCompraHTML = document.getElementById('totalCompra');
    const orcamentoDisponivel = document.getElementById('orcamentoDisponivel').value;
    const valText = totalCompraHTML.textContent;
    var totalCompraNum = parseFloat(valText);
    totalCompraNum += totalUnitario;
    let valorTotal = calculaValorRestanteOrcamento(totalCompraNum);
    let porcentagemFaltante = (valorTotal * parseFloat(orcamentoDisponivel)) / 100;
    if(porcentagemFaltante >= 90 && porcentagemFaltante < 100) {
        const resultado = document.getElementById('totalCompra');
        resultado.classList.add('highlight');
    } else if(porcentagemFaltante > 100) {
        const resultado = document.getElementById('totalCompra');
        resultado.classList.add('highlight-red');
        alert("Limite máximo do orçamento atingido.");
        return;
    } else if(porcentagemFaltante == 100) {
        const resultado = document.getElementById('totalCompra');
        resultado.classList.add('highlight-red');
    }
    totalCompraHTML.textContent = totalCompraNum.toString();
}

function calculaValorRestanteOrcamento(totalCompraNum) {
    const orcamentoDisponivel = parseFloat(document.getElementById('orcamentoDisponivel').value);
    const restanteOrcamentoHTML = document.getElementById('restanteOrcamento');
    const restanteOrcamentoNum = orcamentoDisponivel - totalCompraNum;
    restanteOrcamentoHTML.textContent = restanteOrcamentoNum.toFixed(2);
    return totalCompraNum;
}

function limparCampos() {
    document.getElementById("nomeProduto").value = "";
    document.getElementById("valorUnitario").value = "";
    document.getElementById("quantidade").value = "";
}

function calculaTotal(valorUnitario, quantidade) {
    return valorUnitario * quantidade;

}