import { API_END_POINT } from "../../utils/api.js";

export default function InfoImage({ $target, initialState }) {
  const $infoImage = document.createElement("div");
  $infoImage.className = "cursor-not-allowed";
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.appendChild($infoImage);
    const imgUrls = [...this.state?.product?.detailInfoImage].map(
      (path) => `${API_END_POINT}/${path}`
    );
    $infoImage.innerHTML = `${imgUrls
      .map(
        (url) => `
    <img
    src=${url}
    alt=${this.state?.productName}
  />
    `
      )
      .join("")}
    `;
  };

  this.render();
}
