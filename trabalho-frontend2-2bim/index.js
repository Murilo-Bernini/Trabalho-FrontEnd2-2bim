function exibirMaiorData() {
    var dataInput1 = new Date(document.getElementById("data1").value);
    var dataInput2 = new Date(document.getElementById("data2").value);
    var maior = maiorData(dataInput1, dataInput2);
    document.getElementById("resultado").innerText = "A maior data é: " + maior.toDateString();
}

function calcularIntervalo() {
    var dataInput1 = new Date(document.getElementById("data1").value);
    var dataInput2 = new Date(document.getElementById("data2").value);

    if (dataInput1 > dataInput2) {
        var intervalo = calcularIntervaloDias(dataInput1, dataInput2);
        document.getElementById("resultado").innerText = "O intervalo entre as datas é de " + intervalo + " dias.";
    } else {
        document.getElementById("resultado").innerText = "A primeira data deve ser mais antiga que a segunda.";
    }
}

function exibirDataAtual() {
    var dataAtualFormatada = dataAtual();
    document.getElementById("resultado").innerText = "Data atual: " + dataAtualFormatada;
}

function maiorData(data1, data2) {
    return data1 > data2 ? data1 : data2;
}

function calcularIntervaloDias(dataAntiga, dataNova) {
    var umDia = 24 * 60 * 60 * 1000; 
    var intervaloMs = Math.abs(dataNova - dataAntiga);
    var intervaloDias = Math.floor(intervaloMs / umDia);
    return intervaloDias;
}

function dataAtual() {
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var dia = data.getDate();
    var mes = data.getMonth() + 1; 
    var ano = data.getFullYear();

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;

    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;

    return hora + ":" + minuto + " - " + dia + "/" + mes + "/" + ano;
}