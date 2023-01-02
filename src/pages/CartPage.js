import CartList from "../components/Cart/index.js";
import Anchor from "../components/Common/Anchor.js";
import { request } from "../utils/api.js";

export default function CartPage({ $target }) {
  const $page = document.createElement("section");
  $page.className = "CartPage";
  const $container = document.createElement("div");
  $container.className = "flex flex-col min-h-screen p-5 md:px-60 md:py-20";
  $container.innerHTML =
    "<h2 class='text-2xl font-bold text-center mb-7 md:mb-14'>장바구니/결제</h2>";
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
    const cartList = new CartList({
      $target: $container,
      initialState: this.state,
    });
    const anchor = new Anchor({ $target: $container, href: "main" });
  };
  fetchProducts();
}
