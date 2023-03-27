// Variáveis

const randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btntry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 1;

// Eventos

btntry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

// Funções

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `Acertou em ${xAttempts} tentativas.`;

    xAttempts = 0;
  }

  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
