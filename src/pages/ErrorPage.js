import { routeChange } from "./../utils/router.js";

export default function ErrorPage({ $target }) {
  const $page = document.createElement("section");
  $page.className = "ErrorPage";
  $page.innerHTML = "<h2 class='sr-only'>잘못된 페이지</h2>";

  const $container = document.createElement("div");
  $container.className =
    "flex flex-col items-center justify-center max-h-screen min-h-screen text-center";

  this.render = () => {
    $target.appendChild($page);
    $target.appendChild($container);
    $container.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="mb-10 w-14 h-14 opacity-20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
      <strong class="mb-6 text-2xl"
        >페이지를 찾을 수<br />
        없습니다.</strong
      >
      <p class="mb-8 text-sm text-gray-500">
        페이지의 주소가 잘못 입력되었거나,<br />
        변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.<br />
        입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요.
      </p>
      <a href="javascript:;" class="home block py-3 font-bold text-white bg-black cursor-pointer w-36"
        >마켓 홈</a
      >`;
  };

  $container.addEventListener("click", (e) => {
    const $a = e.target.closest("a");
    if ($a?.classList.contains("home")) {
      routeChange("/");
    }
  });
}
