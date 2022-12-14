import { routeChange } from "../../utils/router.js";
import {
  getLocalStorageItemList,
  setLocalStorageItemList,
} from "../../utils/handleLocalStorageItemList.js";

export default function Content({ $target, initialState }) {
  this.state = initialState;

  const $content = document.createElement("p");
  $content.className = "flex justify-between mt-2 font-normal ";

  const $title = document.createElement("a");
  $title.className = `text-sm ${
    this.state.stockCount ? "cursor-pointer" : "cursor-default"
  }`;
  $title.href = "javascript:;";
  $title.dataset.productId = this.state.id;
  $title.textContent = this.state.productName;

  const $btn = document.createElement("button");
  $btn.type = "button";
  $btn.className =
    "flex items-start duration-200 empty hover:scale-110 min-w-fit";
  $btn.ariaLabel = "찜하기 버튼";

  this.paintWishList = () => {
    if (!localStorage.getItem("wished")) return;

    let wishList = localStorage.getItem("wished");
    wishList = JSON.parse(wishList);
    if (wishList.includes(this.state.id)) {
      $btn.classList.remove("empty");
      $btn.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      class="w-6 h-6"
    >
      <path
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
      />
    </svg>`;
    }
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($content);

    $btn.insertAdjacentHTML(
      "afterbegin",
      `<svg
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
  </svg>`
    );
    this.paintWishList();

    $content.appendChild($title);
    $content.appendChild($btn);
  };

  this.render();

  $title.addEventListener("click", (e) => {
    const { productId } = $title.dataset;

    if (productId && this.state.stockCount) {
      routeChange(`/products/${productId}`);
    }
  });

  $btn.addEventListener("click", (e) => {
    $btn.classList.toggle("empty");
    const handleWishList = () => {
      if (!localStorage.getItem("wished")) {
        localStorage.setItem("wished", JSON.stringify([]));
      }
      let wishList = localStorage.getItem("wished");
      wishList = JSON.parse(wishList);
      wishList.push(this.state.id);
      wishList = [...new Set(wishList)];

      if ($btn.classList.contains("empty")) {
        wishList = wishList.filter((id) => {
          return this.state.id !== id;
        });
        localStorage.removeItem("wished");
      }
      localStorage.setItem("wished", JSON.stringify(wishList));
    };

    if (!$btn.classList.contains("empty")) {
      $btn.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="red"
    class="w-6 h-6"
  >
    <path
      d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
    />
  </svg>`;
    } else {
      $btn.innerHTML = `<svg
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
    </svg>`;
    }
    handleWishList();
  });
}
