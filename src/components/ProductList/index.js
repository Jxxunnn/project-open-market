import Product from "./Product.js";

export default function ProductList({ $target, initialState }) {
  const $productList = document.createElement("ul");
  $productList.className =
    "grid gap-16 p-6 m-3 shadow-2xl lg:grid-cols-3 md:grid-cols-2 rounded-3xl";

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($productList);
    this.state.forEach((productData) => {
      const product = new Product({
        $target: $productList,
        initialState: productData,
      });
    });
  };

  this.render();
}
