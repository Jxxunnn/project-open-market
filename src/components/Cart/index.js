import OrderList from "./OrderList.js";
import Payment from "./Payment.js";

export default function CartList({ $target, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const $orderList = new OrderList({
      $target,
      initialState: this.state,
    });
    const $Payment = new Payment({
      $target,
      initialState: this.state,
    });
  };
  this.render();
}
