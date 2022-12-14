import { API_END_POINT } from "../../utils/api.js";
import { routeChange } from "../../utils/router.js";

export default function Thumbnail({ $target, initialState }) {
  const $thumbnail = document.createElement("a");
  this.state = initialState;
  $thumbnail.className = `relative ${
    this.state?.stockCount ? "cursor-pointer" : "cursor-default"
  }`;
  $thumbnail.href = "javascript:;";
  $thumbnail.dataset.productId = this.state.id;

  this.setStatae = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($thumbnail);
    const imgUrl = `${API_END_POINT}/${this.state?.thumbnailImg}`;
    $thumbnail.innerHTML = ` 
        <img
          src=${imgUrl}
          alt="#"
          class="rounded-2xl aspect-square"
        />
        ${
          this.state.stockCount
            ? "<div class='absolute inset-0 p-2 px-4 text-white duration-500 bg-black opacity-0 rounded-2xl bg-opacity-40 group-hover:opacity-100'></div>"
            : "<div class='absolute inset-0 flex flex-col justify-center p-2 px-4 text-white duration-500 bg-black rounded-2xl bg-opacity-40 group-hover:opacity-100'><p class='mx-auto text-2xl text-center'>SOLDOUT</p></div>"
        }
      `;
  };
  this.render();

  $thumbnail.addEventListener("click", (e) => {
    const { productId } = $thumbnail.dataset;

    if (productId && this.state?.stockCount) {
      routeChange(`/products/${productId}`);
    }
  });
}
