import Order from "./Order.js";

export default function OrderList({ $target, initialState }) {
  const $orderList = document.createElement("section");
  $orderList.innerHTML = `<h3 class="mb-1 text-base font-bold md:text-xl">주문 상품</h3>
  <hr class="mb-5" />`;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($orderList);
    const order = new Order({
      $target: $orderList,
      initialState: this.state,
    });
  };
  this.render();
}
