import Thumbnail from "./Thumbnail.js";
import Contents from "./Contents.js";

export default function Product({ $target, initialState }) {
  const $product = document.createElement("li");
  const $container = document.createElement("div");
  $container.className = "flex flex-col group w-72 md:w-auto";

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($product);
    $product.appendChild($container);

    if (!this.state) return;
    const thumbnail = new Thumbnail({
      $target: $container,
      initialState: this.state,
    });
    const contents = new Contents({
      $target: $container,
      initialState: this.state,
    });
  };
  this.render();
}
