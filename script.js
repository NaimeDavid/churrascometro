// carne: 400g/pessoa.... +6h: 650
//cerva: 1200ml/pessoa .... =6h: 2000ml
// refri e agua: 1000ml/pessoa.... +6horas: 1500ml/pessoa
// criança vale por 0,5

let inputAdult = document.getElementById("adulto");
let inputKids = document.getElementById("crianca");
let inputHours = document.getElementById("duracao");

// console.log(inputAdult.value, inputHours.value, inputKids.value);

let result = document.getElementById("resultado");

function calc() {

    let ad = inputAdult.value;
    let cr = inputAdult.value;
    let h = inputHours.value;

    let qntTotalCarne = (carnePP(h) * ad) + (carnePP(h)/2 *cr);

    let qntTotalCerveja = cervejaPP(h) * ad;
    let qntTotalRefri = (refriPP(h) * ad) + (refriPP(h)/2 *cr);

    result.innerHTML = `<p>${qntTotalCarne/1000} kg de carne</p>`
    result.innerHTML += `<p>${Math.ceil(qntTotalCerveja/355)} latas de cerveja</p>`
    result.innerHTML += `<p>${qntTotalRefri/1000} litros de suco/água/refrigerante</p>`

}


function carnePP(horas) {
    if (horas >= 6) {
        return 650;
    } else
        return 400;
}

function cervejaPP(horas) {
    if (horas >= 6) {
        return 2000;
    } else
        return 1200;
}

function refriPP(horas) {
    if (horas >= 6) {
        return 1500;
    } else
        return 1000;
}