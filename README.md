# 오픈 마켓
<img width="827" alt="스크린샷 2023-01-05 오전 1 40 20" src="https://user-images.githubusercontent.com/86228307/211706496-91e0c486-73ee-4114-a5a0-02a48bbfcdbb.png">


## 소개 및 개요

마켓에 등록되어 있는 상품을 구매하고자 하다면 상품의 세부사항을 확인한 뒤, 장바구니에 넣어, 상품을 구매할 수 있습니다.

- 프로젝트 기간 : 2022.11.24. ~ 2022.12.15.
- 배포 URL : [🔗 오픈마켓](https://chic-melba-c1859b.netlify.app/)

### [🛠Vanilla JavaScript로 SPA 구현하기]

바닐라 자바스크립트로 UI 컴포넌트를 만들고 별도의 라이브러리 없이 SPA로 구현한 프로젝트입니다. 
* React를 사용할 때는 DOM을 직접 조작할 일이 드물었는데 이번 프로젝트를 진행하면서 DOM 구조 및 관련 함수를 이해할 수 있었습니다.
* 페이지 리로드 없이 라우팅 변경, root 태그만 있는 구조에서 컴포넌트를 렌더링하는 방법 등 SPA를 직접 구현하면서 SPA가 동작하는 방식을 로우 레벨에서 이해할 수 있었습니다.

<br/>

## 구현 방식

state를 기준으로 DOM이 렌더링 될 수 있도록 state-setState-render 규칙을 지켜가며 컴포넌트를 설계하였습니다. URL 라우팅 처리는 location.pathname을 이용해 URL 별로 분기를 태우고, History API를 이용해 URL만 업데이트하면서 웹 브라우저의 기본적인 페이지 이동 처리를 방지하였습니다.

URL의 변경을 클라이언트가 감지하고 페이지를 새로 그리도록 처리하기 위해 커스텀 이벤트를 사용했습니다. 장바구니에 담은 상품 데이터를 localStorage에 저장하여 클라이언트 내에서 기록되고 동작되게 하였습니다.

## 구현 사항
### 상품 목록 페이지
  - [x] 목록에서 상품을 클릭하면 상품 상세 페이지로 이동합니다.
  - [x] 상품에는 상품 판매자, 상품명, 가격이 보여집니다.
  - [x] 상품 좋아요 기능이 클라이언트내에서 기록되고 동작합니다.

  
### 상품 상세 페이지
  - [x] productId에 해당하는 상품을 불러오고, 해당 상품 정보를 보여줍니다.
  - [x] + 버튼과 - 버튼을 사용해야만 수량 변경이 가능합니다. 
  - [x] 수량을 변경할 때 현재 상품의 재고 수량또한 변합니다.
  - [x] 선택된 옵션에 맞춰서 가격을 계산하고, 총 가격이 나타납니다.
  - [x] 이미 선택된 상품을 다시 선택하였을 때, 상품은 추가되지 않습니다.
  - [x] 바로 구매 버튼을 눌렀을 시, 결제 페이지로 넘어갑니다.
  - [x] 장바구니 버튼을 눌렀을 시, 장바구니 페이지로 이동합니다.
  - [x] 상품 상세 페이지에서 장바구니 추가 기능이 클리이언트내에서 기록되고 동작합니다.

### 장바구니 / 주문 결제 페이지
  - [x] 선택된 정보만 총 상품금액과 할인이 적용되어 총 결제할 가격이 나타납니다.
  - [x] 선택된 정보만 총 상품금액과 할인이 적용되어 총 결제할 가격이 나타납니다.
  - [x] 상품의 `x` 버튼을 클릭할 시 상품이 삭제됩니다.
  
### 페이지 하단 네비게이션 위
  - [x] 장바구니 버튼을 누르면 장바구니 페이지로 이동합니다.
  - [x] 홈 버튼을 누르면 장바구니 페이지로 이동합니다.
 

 
<br/>

## 최종 구현 화면 gif

![Animation2](https://user-images.githubusercontent.com/86228307/211716882-a605f4ca-f80d-499a-90b2-a2f592cceec1.gif)

<br/>

## Directory Structure

```
📁public
  ├─📄favicon.ico
  └─📄index.html
📁src
  ├─📁components
  │   ├─📁Cart
  │   │   └─📄index.js
  │   │   └─📄Order.js
  │   │   └─📄OrderList.js
  │   │   └─📄Payment.js
  │   ├─📁Common
  │   │   ├─📄Anchor.js
  │   │   └─📄Header.js
  │   ├─📁ProductDetail
  │   │   ├─📄Card.js
  │   │   ├─📄index.js
  │   │   ├─📄Info.js
  │   │   └─📄InfoImage.js
  │   └─📁ProductList
  │       ├─📄Content.js
  │       ├─📄Contents.js
  │       ├─📄index.js
  │       ├─📄Price.js
  │       ├─📄Product.js
  │       └─📄Thumbnail.js
  ├─📁pages
  │   ├─📄CartPage.js
  │   ├─📄ErrorPage.js
  │   ├─📄ProductDetailPage.js
  │   └─📄ProductListPage.js
  ├─📁utils
  │   ├─📄api.js
  │   ├─📄handleLocalStorage.js
  │   ├─📄router.js
  │   └─📄toKRCurrency.js
  └─📄App.js
📄index.html
📄index.js
📄input.css
📄package-lock.json
📄package.json
📄README.md
📄tailwind.config.js
```
<br/>

## Route

```js
import ProductListPage from "./pages/ProductListPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
import CartPage from "./pages/CartPage.js";
import ErrorPage from "./pages/ErrorPage.js";
import { init } from "./utils/router.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = "";

    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      new ProductDetailPage({
        $target,
        productId,
      }).render();
    } else if (pathname === "/cart") {
      new CartPage({ $target }).render();
    } else {
      new ErrorPage({ $target }).render();
    }
  };
  init(this.route);
  this.route();
  window.addEventListener("popstate", this.route);
}
```
<br/>

## Issues

### Issue #1

> Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.

type=module로 ./index.js를 스크립트하고. import를 사용했을 때 경로와 확장자를 정확하게 적지 않아서 생긴 오류

index.html에 상대경로인 ./을 지정했기 때문이었다.

```html
<script src="/index.js" type="module"></script>
```

### Issue #2-1

> DOM tree안에 원하는 node들을 추가할 때 createElement와 appendChild 등은 비용이 많이 드는 작업이기에 대안이 필요하다. innerHTML은 XXS(크로스 사이트 스크립팅) 공격에 취약하고, style 프레임워크로 tailwind를 사용하고 있기에 파싱이 느리다.

#### 속도

- insertAdjacentHTML

새롭게 삽입될 요소만을 파싱하여 innerHTML보다 효율적이고 빠르지만 마찬가지로 XSS에 취약하다. 페이지 내에서 동적으로 바뀌는 요소가 거의 없다고 판단하여 사용하지 않음.

#### 보안

- DOMPurify 라이브러리
  문자열을 한번 필터링해주는 Sanitize 기능으로 XSS 공격에 위험이 될만한 요소를 제거해준다.

이 프로젝트는 순수 자바스크립트로 SPA를 구현해보며 웹 컴포넌트와 SPA를 이해하고자 하는 목적을 가지고 있기에 사용하지 않음.

#### 대안

- 돔 생성 Factory 함수

리액트의 React.createElement(component, props, ...children)에서 착안하였음. 하지만 데이터 바인딩을 고려하여 함수를 작성하게 된다면 비용이 많이 드는 작업이 될 것이라 예상 되기에 추후 리팩토링 과정에서 고려해볼 것.

#### 결론

프로젝트의 규모가 크지 않고, 서비스 제공이 아닌, SPA 구현이 목적이기에 파싱 속도와 보안은 고려하지 않는다.

### Issue #2-2

> style 프레임워크로 tailwind를 사용하고 있기에 innerHTML을 사용하면 동적으로 데이터를 바인딩해야하는 상황에서 유지보수가 어려워지는 문제가 발생하였다.

컴포넌트 단위를 더욱 작게 쪼개어 최하위 컴포넌트에서 innerHTML를 사용하고, appendChild로 요소를 상위 컴포넌트에 전달한다. 초기 설계 단계에서 재사용성을 고려하지 못했고 바닐라 JS의 성능상 복잡도가 상승하여 아토믹 패턴은 고려하지 않는다.

### Issue #3

> 초기 단계에서 재사용성을 고려하여 공통 컴포넌트를 분리하지 않아 페이지 별로 컴포넌트를 따로 제작해야 하는 문제가 생겼다.

테일윈드의 layer기능으로 class를 묶고 공통 요소를 shared 컴포넌트로 제작한 후 동적으로 요소를 반환하였다면 가독성과 생산성이 훨씬 좋아졌을 것으로 예상 된다. 이 문제는 리팩토링 시 고려할 예정이다.

### Issue #4

> history API를 이용하여 URL만 업데이트하면서 웹 브라우저의 기본적인 페이지 이동 처리를 방지하려 하였으나, pushState를 통해 URL이 변경된 것을 감지하는 기능을 구현해야 하는 문제가 생겼다.

커스텀 이벤트를 사용하여 route가 변경된다면 콜백 함수를 호출하도록 이벤트를 바인딩하여 해결하였다.

```js
const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

export const init = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

export const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};
```

### Issue #5

> innerHTML로 생성한 노드는 querySeletor로 선택하지 못하는 문제가 발생하였다.

이벤트 위임을 사용하여 상위 요소에서 하위 요소의 이벤트들을 제어하여 해결하였다.

### Issue #6

> 새로고침하면 브라우저는 html css js 파일을 처음부터 다시 읽기 때문에 찜한 상품에 대한 state 데이터가 리셋되는 문제가 발생하였다.

localStorage에 찜한 상품에 대한 state 데이터를 저장하여 해결하고, setState 함수를 사용하며 동적으로 상태 값을 갱신해주었다.

### Issue #7

> setState 함수가 실행되어 컴포넌트를 재렌더링할 시 형제 컴포넌트가 그 앞의 위치로 이동하는 문제가 발생하였다.

insetAdjacentHTML() 메서드의 position 인자를 사용하여 순서가 유지되도록 조정하였다.

### Issue #8

> 주문 수량의 상태를 개별 컴포넌트에 전달해주어야 하는 문제가 생겼다.

공유할 상태 값을 함수 밖 영역의 스코프에 전역 변수로 설정한 후 MutationObserver로 타겟한 DOM 변경을 감시하여 다른 컴포넌트의 상태가 변경되었을 때 재렌더링하며 상태를 공유받는 방법으로 해결하였다.

```js
  // 옵저버 인스턴스 생성
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (!!mutation) {
        console.log(Info.state.orderQuantity);
      }
    });
  });

  // 옵션 설정
  const config = {
    attributes: true,
    childList: true,
    characterData: true,
  };

  // 실행
  observer.observe($target, config);
}
```
<br/>

### Issue #9

> SPA를 구현하면서 하나의 파일에서 연결하고 있는 무수히 많은 파일들이생겼다. 여러번의 네트워크 통신을 감소시켜 성능 개선과 최적화가 필요하여 모듈 번들러를 사용했다.

"vite": "^4.1.0"

![image](https://user-images.githubusercontent.com/86228307/216877077-c68e6c63-0531-42e5-8978-99b50580b6d4.png)

