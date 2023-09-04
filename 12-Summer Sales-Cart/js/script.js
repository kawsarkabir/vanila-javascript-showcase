let total = 0;
function handleClick(target) {
  const cardName = target.childNodes[3].childNodes[3].innerText;
  const calculateContainer = document.getElementById("show-items-name");
  const li = document.createElement("li");
  li.classList.add("text-xl", "my-2");
  li.style.listStyleType = "decimal";
  li.innerText = cardName;
  calculateContainer.appendChild(li);

  // get price element
  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(price);

  // total price calculate
  const sumOfTotal = parseFloat(total.toFixed(2));
  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.innerText = sumOfTotal.toFixed(2);

  // total calculation
  const totalElement = document.getElementById("total");
  totalElement.innerText = sumOfTotal.toFixed(2);

  // make purchase and coupon button disable enable here
  const makePurchase = document.getElementById("make-purchase");
  const couponBtn = document.getElementById("coupon-btn");
  if (sumOfTotal > 0) {
    makePurchase.removeAttribute("disabled");
  } else {
    makePurchase.setAttribute("disabled", true);
  }
  if (sumOfTotal >= 200) {
    couponBtn.removeAttribute("disabled");
  } else {
    couponBtn.setAttribute("disabled", true);
  }

  // discount price calculation
  couponBtn.addEventListener("click", applyCouponCode);
  function applyCouponCode() {
    const couponCode = "SELL200";

    if (couponCode === "SELL200") {
      // Calculate the discounted price
      const discountPercentage = 20; // 20% discount
      const discountAmount = (discountPercentage / 100) * sumOfTotal;
      const discountPriceElement = document.getElementById("discount-price");
      discountPriceElement.innerText = discountAmount.toFixed(2);
      const discountedTotal = sumOfTotal - discountAmount;

      // Update the displayed total with the discounted amount
      const totalPriceElement = document.getElementById("total");
      totalPriceElement.innerText = discountedTotal.toFixed(2);
    } else {
      alert("Invalid coupon code.");
    }
  }

  // modal click btn then refresh the page
  const makePurchaseButton = document.getElementById("make-purchase");
  const homeButton = document.querySelector("#my_modal_1 button");

  makePurchaseButton.addEventListener("click", function() {
    my_modal_1.showModal();
  });

  homeButton.addEventListener("click", function() {
    location.reload();
  });
}
