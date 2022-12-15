export default function Info({ $target, initialState }) {
  const $card = document.createElement("div");

  $card.className = "mt-9";

  this.state = { ...initialState, orderQuantity: 1 };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    $target.insertAdjacentElement("beforeend", $card);
    $card.innerHTML = `
    <strong class="block mb-3">상품 정보</strong>
    <div class="flex flex-col md:flex-row border-y-2">
      <dl class="flex flex-1 border-b-2 md:border-b-0">
        <dt class="w-1/3 py-3 pl-2 bg-gray-100">상품 번호</dt>
        <dd class="py-3 pl-2">${this.state?.product?.pubDate
          .split("-")
          .join("")}</dd>
      </dl>
      <dl class="flex flex-1">
        <dt class="w-1/3 py-3 pl-2 bg-gray-100">재고 수량</dt>
        <dd class="py-3 pl-2"><span class="stock">${
          this.state?.product?.stockCount - this.state?.orderQuantity
        }</span><span>개</span></dd>
      </dl>
    </div>`;
  };

  this.render();

  const productId = this.state.productId;
  const stockQuantity =
    this.state?.product.stockCount - this.state.orderQuantity;

  var observer = new MutationObserver(function (
    mutations,
    _,
    stock = stockQuantity,
    id = productId
  ) {
    mutations.forEach(function (mutation) {
      if (mutation) {
        if (window.productDetailInfo[id]) {
          document.querySelector(".stock").innerHTML = `${
            stock - window.productDetailInfo[id] + 1
          }`;
        }
      }
    });
  });
  var config = {
    attributes: true,
    childList: true,
    characterData: true,
  };

  observer.observe($target, config);
}
