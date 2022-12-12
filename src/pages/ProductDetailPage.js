export default function ProductDetailPage({ $target, productId }) {
  this.state = {
    productId,
  };
  const $page = document.createElement("section");
  $page.className = "ProductDetailPage";
  $page.innerHTML = "<h2>상품 정보 페이지</h2>";

  this.render = () => {
    $target.appendChild($page);
  };
}
