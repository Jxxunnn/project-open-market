export default function ProductDetailPage({ $target, productId }) {
  this.state = {
    productId,
    product: null,
  };
  const $page = document.createElement("section");
  $page.className = "ProductDetailPage";
  $page.innerHTML = "<h2>상품 정보 페이지</h2>";

  this.setState = () => {};

  this.render = () => {
    if (!this.state.product) {
      $target.innerHTML = "Loading..";
    } else {
      $target.innerHTML = "";
      $target.appendChild($page);
    }
  };
}
