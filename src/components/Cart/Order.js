import { API_END_POINT } from "../../utils/api.js";
import {
  getLocalStorageItemList,
  setLocalStorageItemList,
} from "../../utils/handleLocalStorageItemList.js";

export default function Order({ $target, initialState }) {
  const $order = document.createElement("ul");
  $order.className = "space-y-20";
  $target.appendChild($order);

  this.state = initialState;

  let stored = getLocalStorageItemList("stored")?.map(
    (id) => this.state[id - 1]
  );

  if (initialState) {
    this.state = { ...initialState, storedList: [...stored] };
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $order.innerHTML = `${this.state.storedList
      ?.map(
        (item) => `<li>
    <div class="flex flex-col gap-5 md:flex-row">
      <div class="flex-1 mx-0 text-center md:mx-auto">
        <img
          src=${`${API_END_POINT}/${item.thumbnailImg}`}
          alt=${item.productName}
          class="w-40 md:w-auto aspect-square rounded-2xl"
        />
      </div>

      <div class="md:flex-[1.2_1_0%] flex flex-col justify-between">

        <div>
          <p class="mb-3 text-xl md:text-2xl">
          ${item.productName}
          </p>
          <p class="space-x-1 text-xl md:text-2xl">
            <span class="font-bold">${item.price.toLocaleString()}</span
            ><span class="text-sm">원</span>
          </p>
        </div>
        <div>
          <p class="mb-1 text-gray-500">택배배송 / 무료배송</p>
          <div
            class="flex flex-col items-center justify-between mt-5 md:flex-row"
          >
            <span class="w-full font-bold md:w-auto"
              >총 상품 금액</span
            ><span class="flex items-center w-full md:w-auto"
              ><span class="text-gray-500"
                >총 수량 <strong class="text-red-500">${1} </strong>개 | </span
              ><span>
                <strong
                  class="block -mt-2 text-2xl font-bold text-red-500 md:text-3xl"
                  >${item.price.toLocaleString()}<span class="text-sm">원</span></strong
                ></span
              ></span
            >
          </div>
          <div class="flex justify-end gap-2 mt-5">
          <button
              data-id=${item.id}
              class="cancel flex items-center justify-center flex-1 border-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 opacity-30"
                aria-label="주문 취소 버튼"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>`
      )
      .join("")}`;
  };
  this.render();

  $order.addEventListener("click", (e) => {
    if (e.target.closest(".cancel")) {
      let itemList = getLocalStorageItemList("stored");
      const id = e.target.closest(".cancel").dataset.id;
      itemList = itemList.filter((v) => {
        return v !== id;
      });

      localStorage.setItem("stored", JSON.stringify(itemList));
      console.log(itemList);
      const stored = getLocalStorageItemList("stored")?.map(
        (id) => this.state[id - 1]
      );
      console.log(stored);
      this.setState({
        ...this.state,
        storedList: [...stored],
      });
    }
  });
}
