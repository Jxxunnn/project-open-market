import { API_END_POINT } from "../../utils/api.js";
import Info from "./Info.js";
export default function Card({ $target, initialState }) {
  const $card = document.createElement("div");
  $card.className = "flex flex-col gap-5 md:flex-row";

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  console.log(this.state);

  this.render = () => {
    $target.appendChild($card);
    const imgUrl = `${API_END_POINT}/${this.state?.product?.thumbnailImg}`;
    $card.innerHTML = `<div class="flex-1 mx-0 text-center md:mx-auto">
    <img
      src=${imgUrl}
      alt=${this.state?.product?.productName}
      class="w-40 md:w-auto aspect-square rounded-2xl"
    />
  </div>  <div class="md:flex-[1.2_1_0%] flex flex-col justify-between">
  <!-- content-top -->
  <div>
    <p class="mb-3 text-xl md:text-2xl">${this.state?.product?.productName}</p>
    <p class="space-x-1 text-xl md:text-2xl">
      <span class="font-bold">13,500</span
      ><span class="text-sm">원</span>
    </p>
  </div>
  <!-- content-bottom -->
  <div>
    <div>
      <p class="mb-1 text-gray-500">택배배송 / 무료배송</p>
      <div class="flex items-center justify-start py-2 border-y-2">
        <button
          aria-label="수량 감소 버튼"
          type="button"
          class="flex items-center justify-center w-8 h-8 border rounded-l-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.8"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 12H6"
            />
          </svg></button
        ><span
          class="flex items-center justify-center w-8 h-8 border-y-[1px]"
          >1</span
        ><button
          aria-label="수량 증가 버튼"
          type="button"
          class="flex items-center justify-center w-8 h-8 border rounded-r-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.8"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-between mt-5 md:flex-row"
    >
      <span class="w-full font-bold md:w-auto">총 상품 금액</span
      ><span class="flex items-center w-full md:w-auto"
        ><span class="text-gray-500"
          >총 수량 <strong class="text-red-500">1</strong>개 | </span
        ><span>
          <strong
            class="block -mt-2 text-2xl font-bold text-red-500 md:text-3xl"
            >13,500<span class="text-sm">원</span></strong
          ></span
        ></span
      >
    </div>
    <div class="flex gap-2 mt-5">
      <a
        href="javascript:;"
        class="md:flex-[5_1_0%] flex-[3_1_0%] text-center text-white font-bold text-base md:text-xl py-2 md:py-4 bg-purple-600 rounded-lg"
        >바로 구매</a
      ><button
        class="flex items-center justify-center flex-1 border-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="purple"
          class="w-6 h-6"
          aria-label="장바구니로 이동"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg></button
      ><button
        class="flex items-center justify-center flex-1 border-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 opacity-30"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
    </div>
  </div>
</div>`;
  };

  this.render();
}