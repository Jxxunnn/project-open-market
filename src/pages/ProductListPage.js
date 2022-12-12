import ProductList from "../components/ProductList/index.js";
import Anchor from "../components/Common/Anchor.js";
import { request } from "../utils/api.js";

export default function ProductListPage({ $target }) {
  const $page = document.createElement("section");
  $page.className = "ProductListPage";
  $page.innerHTML = "<h2 class='sr-only'>상품 목록 페이지</h2>";
  const $container = document.createElement("div");
  $page.className =
    "flex items-center justify-center min-h-screen md:p-40 2xl:p-80";
  $page.appendChild($container);

  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchProducts = async () => {
    const products = await request("/mall");
    this.setState(products);
    const productList = new ProductList({
      $target: $container,
      initialState: this.state,
    });
    const anchor = new Anchor({ $target: $container, href: "cart" });
  };

  fetchProducts();
}
