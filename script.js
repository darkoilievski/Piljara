let allTotal = 0;

function addToCart(element) {
  let mainEl = element.closest(".single-item");

  let price = mainEl.querySelector(".price").innerText;

  let name = mainEl.querySelector("h3").innerText;

  let quantity = mainEl.querySelector("input").value;

  let cartItems = document.querySelector(".cart-items");

  if (parseInt(quantity) > 0) {
    price = price.slice(1);

    price = Number(price);

    let total = price * Number(quantity);
    allTotal += total;

    cartItems.innerHTML += `<div class="cart-single-item">
    <h3>${name}</h3>
    <p>$${price} x ${quantity} = $<span>${total}</span></p>
    <button class="remove-item" onClick="removeFromCart(this)" >Избриши</button>
    </div>`;
    document.querySelector(".total").innerHTML = `Вкупно: $${allTotal} `;
    element.innerText = "";
    element.setAttribute("disabled", "true");
  } else {
    alert("Внесете количина");
  }
}

function removeFromCart(element) {
  let mainBtn = element.closest(".cart-single-item");
  let decrease = mainBtn.querySelector("p span").innerText;
  let name = mainBtn.querySelector("h3").innerText;
  let vegetables = document.querySelectorAll(".single-item");

  decrease = Number(decrease);
  allTotal -= decrease;
  mainBtn.remove();
  let totalMsg = (document.querySelector(
    ".total"
  ).innerHTML = `Вкупно: $${allTotal} `);

  vegetables.forEach((veg) => {
    let itemName = veg.querySelector(".si-content h3").innerText;
    if (itemName === name) {
      vegetables.querySelector(".actions input").value = 0;
      vegetables.querySelector(".actions button").removeAttribute("disabled");
      vegetables.querySelector(".actions button").innerHTML = `Додади`;
    }
    console.log(veg);
  });
}
