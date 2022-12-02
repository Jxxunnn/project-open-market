export default function Product({ $target, initialState }) {
  const $product = document.createElement("li");
  $target.appendChild($product);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;
    $product.innerHTML = `${this.state.id}`;
  };
  this.render();
}

/* 
.template = () => {};

1. 할인이 있는 경우, 없는 경우
2. 하트도 누를 때마다 UI 변경되잖아.
3. 이벤트도 여기서 달아줘야겠네.
4. anchor 컴포넌트도 여기서 불러줘야 함.
*/
