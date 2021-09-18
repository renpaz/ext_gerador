let create_array = (total, size) =>
  Array.from(Array(total), () => number_random(size));
let number_random = (number) => Math.round(Math.random() * number);
let mod = (dividend, divisor) =>
  Math.round(dividend - Math.floor(dividend / divisor) * divisor);

document.addEventListener("DOMContentLoaded", function () {
  var generateButton = document.getElementById("generateButton");
  var generateAndCopyButton = document.getElementById("generateAndCopyButton");

  generateButton.addEventListener("click", function () {
    generate();
  });

  generateAndCopyButton.addEventListener("click", function () {
    generateAndCopy();
  });

  function generate() {
    var isMasked = document.getElementById("mask").checked;
    var resultInput = document.getElementById("resultInput");
    resultInput.classList.remove("error");
    switch (getInputType()) {
      case "cpf":
        resultInput.value = generateCpf(isMasked);
        break;
      case "cnpj":
        resultInput.value = generateCnpj(isMasked);
        break;
      case "phone":
        resultInput.value = generatePhone(isMasked);
        break;
      case "credit_card":
        resultInput.value = generateCreditCard(isMasked);
        break;
      default:
        resultInput.value = "Erro!";
        resultInput.classList.add("error");
    }
  }

  function generateAndCopy() {
    generate();
    var resultInput = document.getElementById("resultInput");
    navigator.clipboard.writeText(resultInput.value).then(
      function () {
        /* clipboard successfully set */
      },
      function () {
        /* clipboard write failed */
      }
    );
  }

  function getInputType() {
    var inputType = document.getElementById("inputType");
    return inputType.value;
  }

  function generateCpf(masked = false) {
    let total_array = 9;
    let n = 9;
    let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = create_array(total_array, n);
    let d1 =
      n9 * 2 +
      n8 * 3 +
      n7 * 4 +
      n6 * 5 +
      n5 * 6 +
      n4 * 7 +
      n3 * 8 +
      n2 * 9 +
      n1 * 10;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;
    let d2 =
      d1 * 2 +
      n9 * 3 +
      n8 * 4 +
      n7 * 5 +
      n6 * 6 +
      n5 * 7 +
      n4 * 8 +
      n3 * 9 +
      n2 * 10 +
      n1 * 11;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;

    if (masked) {
      return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
    }
    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
  }

  function generateCnpj(masked = false) {
    let total_array = 8;
    let n = 9;
    let [n1, n2, n3, n4, n5, n6, n7, n8] = create_array(total_array, n);
    let n9 = 0;
    let n10 = 0;
    let n11 = 0;
    let n12 = 1;

    let d1 =
      n12 * 2 +
      n11 * 3 +
      n10 * 4 +
      n9 * 5 +
      n8 * 6 +
      n7 * 7 +
      n6 * 8 +
      n5 * 9 +
      n4 * 2 +
      n3 * 3 +
      n2 * 4 +
      n1 * 5;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;

    let d2 =
      d1 * 2 +
      n12 * 3 +
      n11 * 4 +
      n10 * 5 +
      n9 * 6 +
      n8 * 7 +
      n7 * 8 +
      n6 * 9 +
      n5 * 2 +
      n4 * 3 +
      n3 * 4 +
      n2 * 5 +
      n1 * 6;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;

    if (masked) {
      return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`;
    }
    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
  }

  function generatePhone() {
    return "telefone gerado";
  }

  function generateCreditCard() {
    return "cartão gerado";
  }
});
