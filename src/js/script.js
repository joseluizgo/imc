function calcular(){
    event.preventDefault()
    var peso = Number(document.getElementById('weight').value)
    var altura = Number(document.getElementById('height').value)
    var imc = document.getElementById('imc')
    var frase = document.getElementById('frase')
    var resu = peso / (altura * altura)
    var resul = parseFloat(resu).toFixed(1)

    imc.innerHTML = (resul)

    if (resul < 18.5) {
        frase.innerHTML = `Magreza!`
    } else if (resul < 25) {
        frase.innerHTML = `Você está no peso ideal!`
    } else if (resul < 30){
        frase.innerHTML = `Você está sobrepeso I!`
    } else if (resul < 40) {
        frase.innerHTML = `Você está sobrepeso II!`
    } else if (resul > 40) {
        frase.innerHTML = `Você está sobrepeso III!`
    }
    
}