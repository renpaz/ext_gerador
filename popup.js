let create_array = (total, number) =>
  Array.from(Array(total), () => number_random(number));

document.addEventListener("DOMContentLoaded", function () {
  var generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", function () {
    generate();
  });

  function generate() {
    var resultInput = document.getElementById("resultInput");
    resultInput.classList.remove("error");
    switch (getInputType()) {
      case "cpf":
        resultInput.value = generateCpf();
        break;
      case "cnpj":
        resultInput.value = generateCnpj();
        break;
      case "phone":
        resultInput.value = generatePhone();
        break;
      case "credit_card":
        resultInput.value = generateCreditCard();
        break;
      default:
        resultInput.value = "Erro!";
        resultInput.classList.add("error");
    }
  }

  function getInputType() {
    var inputType = document.getElementById("inputType");
    return inputType.value;
  }

  function generateCpf() {}

  function generateCnpj() {
    return "cnpj gerado";
  }

  function generatePhone() {
    return "telefone gerado";
  }

  function generateCreditCard() {
    return "cartão gerado";
  }
});
