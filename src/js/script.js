const form = document.querySelector("form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const imcSpan = document.getElementById("imc");
const fraseSpan = document.getElementById("frase");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!weight || !height || height <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = weight / (height * height);
    const imcFixed = imc.toFixed(2);

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    imcSpan.textContent = imcFixed;
    fraseSpan.textContent = classificacao;

    imcSpan.classList.remove("hidden");
    fraseSpan.classList.remove("hidden");
});