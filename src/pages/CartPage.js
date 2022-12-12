export default function CartPage({ $target }) {
  const $page = document.createElement("section");
  $page.className = "CartPage";
  $page.innerHTML = "<h2>장바구니 페이지</h2>";
  this.render = () => {
    $target.appendChild($page);
  };
}
