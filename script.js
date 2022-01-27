let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado")
function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = BebidasPP(duracao) * adultos + (BebidasPP(duracao)/2 * criancas);
resultado.innerHTML = `<p>${qdtTotalCarne / 1000}kg de Carne</p>`
resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latinhas de Cerveja</p>`
resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas /2000)} Litro de Refrigerante!
</p>`
}
function carnePP(duracao){
    if (duracao >=6){
        return 800;
    }else {
        return 400;
    }
}
function cervejaPP(duracao){
    if (duracao >=6){
        return 4000;
    }else {
        return 2000;
    }
}
function BebidasPP(duracao){
    if (duracao >=6){
        return 1500;
    }else {
        return 1000;
    }
}




