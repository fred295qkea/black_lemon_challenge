const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const form = document.querySelector(".buy_form");

minus.addEventListener("click", (e) => {
  e.preventDefault();
  amount(-1);
});
plus.addEventListener("click", (e) => {
  e.preventDefault();
  amount(1);
});

function amount(change) {
  const input = document.querySelector(".buy_amount");
  let currentValue = parseInt(input.value);
  let newValue = currentValue + change;

  if (newValue >= 1 && newValue <= 99) {
    input.value = newValue;
  }
}

function showToast(message) {
  const toast = document.getElementById("cartToast");
  const toastMessage = document.querySelector(".toast-message");

  toastMessage.textContent = message;
  toast.classList.add("show");

  // Auto hide after 3 seconds
  setTimeout(() => {
    hideToast();
  }, 3000);
}

function hideToast() {
  const toast = document.querySelector(".toast");
  toast.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const buyForm = document.querySelector(".buy_form");

  if (buyForm) {
    buyForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const quantityInput = document.querySelector(".buy_amount");
      const quantity = quantityInput ? quantityInput.value : 1;

      showToast(`Added ${quantity} item${quantity > 1 ? "s" : ""} to cart!`);
    });
  }
});
