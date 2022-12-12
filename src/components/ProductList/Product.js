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

/* 
.template = () => {};

- Thumbnail
재고가 없다면 soldout UI를 보여준다.

- Contents
1. 할인 중이라면 dicount UI를 보여준다.
2. 하트를 누르면 버튼의 UI가 변경된다. 하트의 상태를 로컬스토리지에 보관한다.
3. anchor 컴포넌트를 포함한다.
*/
