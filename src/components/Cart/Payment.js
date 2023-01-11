import { routeChange } from "../../utils/router.js";
import { API_END_POINT } from "../../utils/api.js";
import {
  getLocalStorageItemList,
  setLocalStorageItemList,
} from "../../utils/handleLocalStorageItemList.js";

export default function Payment({ $target, initialState }) {
  const $payment = document.createElement("section");
  $payment.className = "mt-7";

  this.state = initialState;

  let stored = getLocalStorageItemList("stored")?.map(
    (id) => this.state[id - 1]
  );
  this.state = { ...initialState, storedList: [...stored] };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const totalPrice = this.state.storedList.reduce((total, item) => {
    if (item.discountRate) return total + (item.price - item.price * 0.1);
    else {
      return total + item.price;
    }
  }, 0);

  const discountedPrice = this.state.storedList.reduce((total, item) => {
    if (item.discountRate) return total + (item.price - item.price * 0.1);
    else {
      return total;
    }
  }, 0);

  const payment = totalPrice - (totalPrice - discountedPrice);
  console.log(totalPrice, discountedPrice);

  this.render = () => {
    $target.appendChild($payment);
    $payment.innerHTML = `  <h3 class="mb-1 space-x-5 text-base font-bold md:text-xl">
    <span>결제할 상품</span
    ><span class="font-normal text-gray-500"
      >총 <strong>${this.state.storedList.length}</strong>개</span
    >
  </h3>
  <hr class="mb-5" />
  <div
    class="items-center mb-5 space-y-3 md:space-y-0 md:flex md:flex-row md:justify-between"
  >
    <p class="flex flex-row items-center justify-between md:flex-col">
      <span>상품 금액</span
      ><span class="font-bold md:text-2xl">${totalPrice.toLocaleString()}</span>
    </p>
    <p class="flex flex-row items-center justify-between md:flex-col">
      <span>할인 금액 예상</span
      ><span class="font-bold text-red-600 md:text-2xl">-${payment.toLocaleString()}</span>
    </p>
    <p class="flex flex-row items-center justify-between md:flex-col">
      <span class="font-bold">결제 금액</span
      ><span class="text-xl font-bold md:text-4xl">${totalPrice.toLocaleString()}원</span>
    </p>
  </div>
  <a
    href="javascript:;"
    class="block py-2 text-base font-bold text-center text-white bg-purple-600 rounded-lg md:text-xl md:py-4 md:w-1/3 md:mx-auto"
    >선택 상품 주문하기</a
  >`;
  };
  this.render();
  $payment.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      alert("주문이 완료되었습니다😀");
      routeChange("/");
    }
  });
}
