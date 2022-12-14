import ProductDetail from "../components/ProductDetail/index.js";
import { request } from "../utils/api.js";

export default function ProductDetailPage({ $target, productId }) {
  this.state = {
    productId,
    product: null,
  };
  window.productDetailInfo = {};
  const $page = document.createElement("section");
  $page.className = "ProductDetailPage";
  $page.innerHTML = "<h2 class='sr-only'>상품 정보 페이지</h2>";

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state.product) {
      $target.innerHTML = "Loading..";
    } else {
      $target.innerHTML = "";
      $target.appendChild($page);
    }
  };

  this.fetchProduct = async () => {
    const { productId } = this.state;
    const product = await request(`/mall/${productId}`);
    this.setState({
      ...this.state,
      product,
    });
    const productDetail = new ProductDetail({
      $target: $page,
      initialState: this.state,
    });
  };
  this.fetchProduct();
}
