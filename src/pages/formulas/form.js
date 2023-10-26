 // 1
 function salvar() {
    let nome = document.getElementById("nome").value;
    document.getElementById("result").innerText = nome;
}

// 1
function idade() {
    let idade = document.getElementById("idade").value;

    if (idade < 18) {
        document.getElementById("idad").innerText = "Ele é menor de idade";
    } else if (idade > 65) {
        document.getElementById("idad").innerText = "Ele é um idoso";
    } else {
        document.getElementById("idad").innerText = "Ele é um Adulto";
    }
}

// 2

function comparacao() {
    let numc1 = parseFloat(document.getElementById("num1").value);
    let numc2 = parseFloat(document.getElementById("num2").value);

    if (numc1 < numc2) {
        document.getElementById("comp").innerText =
            numc1 + " é menor que " + numc2;
    } else if (numc1 > numc2) {
        document.getElementById("comp").innerText =
            numc1 + " é maior que " + numc2;
    } else {
        document.getElementById("comp").innerText =
            numc1 + " é " + numc2 + " são iguais";
    }
}

// 3
function divisiveis() {
    let numd1 = parseFloat(document.getElementById("num3").value);
    let numd2 = parseFloat(document.getElementById("num4").value);

    if (numd1 % numd2 == 0) {
        document.getElementById("divi").innerText =
            numd1 + " é divisivel por " + numd2;
    } else {
        document.getElementById("divi").innerText =
            numd1 + " é não é divisivel por " + numd2;
    }
}

// 4
function temperatura() {
    let temp = document.getElementById("temp").value;

    if (temp < 19) {
        document.getElementById("tempr").innerText = "Ta frio pra caramba";
    } else if (temp > 29) {
        document.getElementById("tempr").innerText =
            " Ta morando no nordeste ";
    } else {
        document.getElementById("tempr").innerText = "Clima ta agradavel";
    }
}

// 6

function fatorial() {
    let fat = parseFloat(document.getElementById("fatt").value);
    let resul = fat;
    for (let i = 1; i < fat; i++) {
        resul = resul * i;
    }

    document.getElementById("fatr").innerText = resul;
}

//7
function contagem() {
    let ctgn = parseFloat(document.getElementById("ctg").value);
    let resul = "";
    for (let i = 0; i < ctgn; i++) {
        resul = ctgn - i;
        document.getElementById("ctgr").innerText += resul + "-";
    }
}

function tabuada() {
    let tabn = parseFloat(document.getElementById("tab").value);

    for (let i = 0; i <= 10; i++) {
        let result = tabn * i;
        document.getElementById("tabr").innerText +=
            tabn + "x" + i + "=" + result + "\n";
    }
}

function notas() {
    let mat1 = document.getElementById("1bm").value;
    let mat2 = document.getElementById("2bm").value;
    let mat3 = document.getElementById("3bm").value;
    let prt1 = document.getElementById("1bp").value;
    let prt2 = document.getElementById("2bp").value;
    let prt3 = document.getElementById("3bp").value;
    let fsc1 = document.getElementById("1bf").value;
    let fsc2 = document.getElementById("2bf").value;
    let fsc3 = document.getElementById("3bf").value;
    var soma;
    var resultado = []

    if (
        fsc1 == "" ||
        fsc2 == "" ||
        fsc3 == "" ||
        prt1 == "" ||
        prt2 == "" ||
        prt3 == "" ||
        mat1 == "" ||
        mat2 == "" ||
        mat3 == ""
    ) {
        document.getElementById("big").innerText = ("Uma das notas não foi inserida");
    } else {
        soma = parseFloat(mat1) + parseFloat(mat2) + parseFloat(mat3)
        if (soma < 60) {
            resultado.push(["Reprovado", soma])
        } else {
            resultado.push(["Aprovado", soma])
        }

        soma = parseFloat(prt1) + parseFloat(prt2) + parseFloat(prt3)

        if (soma < 60) {
            resultado.push(["Reprovado", soma])
        } else {
            resultado.push(["Aprovado", soma])
        }

        soma = parseFloat(fsc1) + parseFloat(fsc2) + parseFloat(fsc3)

        if (soma < 60) {
            resultado.push(["Reprovado", soma])
        } else {
            resultado.push(["Aprovado", soma])
        }


        document.getElementById("big").innerText = `
    A nota foi ${resultado[0][1]} em matemática, portanto aluno foi ${resultado[0][0]}.\n
    A nota foi ${resultado[1][1]} em português, portanto aluno foi ${resultado[1][0]}.\n
    A nota foi ${resultado[2][1]} em física, portanto aluno foi ${resultado[2][0]}.\n
    `
    }




}