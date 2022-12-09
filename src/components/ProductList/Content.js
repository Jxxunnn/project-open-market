export default function Content({ $target, initialState }) {
  const $content = document.createElement("p");
  $content.className = "flex justify-between mt-2 font-normal ";

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($content);
    const title = `<a href="/products/${this.state.id}" class="text-sm cursor-pointer"
    >${this.state.productName}</a>`;
    const btn = `<button
    type="button"
    class="duration-200 hover:scale-110 min-w-fit flex items-start"
    aria-label="찜하기 버튼"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 opacity-30"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>`;
    $content.innerHTML = title + btn;
  };

  this.render();
}
