import Card from "./Card.js";
import Info from "./Info.js";
import InfoImage from "./InfoImage.js";

export default function ProductDetail({ $target, initialState }) {
  const $productDetail = document.createElement("div");
  $productDetail.className =
    "flex flex-col items-center justify-center min-h-screen p-5 mt-7 md:mt-0 md:p-20";
  const $container = document.createElement("div");
  $container.innerHTML = `<h3 class="sr-only">상품 상세 정보</h3>`;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  /**
   * 1.
   * 상품 선택한 갯수는 로컬스토리지에 저장하고 props drilling
   * 2.
   * 하트 유무는 로컬에서 가져면 되는데.
   * 하트 보여주는 기능 다시 구현해야함
   * 3.
   * 바로구매 누르면 수량정보를 가지고 payment페이지로 이동
   */

  this.render = () => {
    $target.appendChild($productDetail);
    $productDetail.appendChild($container);

    if (!this.state) return;
    const card = new Card({
      $target: $container,
      initialState: this.state,
    });
    const info = new Info({
      $target: $container,
      initialState: this.state,
    });
    const infoImage = new InfoImage({
      $target: $productDetail,
      initialState: this.state,
    });
  };
  this.render();
}
