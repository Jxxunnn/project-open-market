import { toKRCurrency } from "../../utils/toKRCurrency.js";

export default function Price({ $target, initialState }) {
  const $price = document.createElement("p");
  $price.className = "space-x-2";

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($price);
    const price = toKRCurrency(this.state.price);
    const discountRate = this.state.discountRate;
    if (discountRate) {
      $price.innerHTML = `<strong class="text-lg font-bold">${(
        (this.state.price * (100 - discountRate)) /
        100
      ).toFixed()}</strong
      ><span class="text-sm text-gray-500 line-through">${price}</span
      ><span class="text-sm font-bold text-purple-600">${discountRate}%</span>`;
    } else {
      $price.innerHTML = `<strong class="text-lg font-bold">${price}</strong
      >`;
    }
  };

  this.render();
}
