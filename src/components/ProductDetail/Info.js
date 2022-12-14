export default function Info({ $target, initialState }) {
  const $card = document.createElement("div");
  $card.className = "mt-9";

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  console.log(this.state);

  this.render = () => {
    $target.appendChild($card);
    $card.innerHTML = `
    <strong class="block mb-3">상품 정보</strong>
    <div class="flex flex-col md:flex-row border-y-2">
      <dl class="flex flex-1 border-b-2 md:border-b-0">
        <dt class="w-1/3 py-3 pl-2 bg-gray-100">상품 번호</dt>
        <dd class="py-3 pl-2">${this.state?.product.pubDate
          .split("-")
          .join("")}</dd>
      </dl>
      <dl class="flex flex-1">
        <dt class="w-1/3 py-3 pl-2 bg-gray-100">재고 수량</dt>
        <dd class="py-3 pl-2"><span>${
          this.state?.product.stockCount
        }</span><span>개</span></dd>
      </dl>
    </div>`;
  };

  this.render();
}
