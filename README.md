# project-open-market

## Directory Structure

📁public
  ├─📄favicon.ico
  └─📄index.html
📁src
  ├─📁components
  │   ├─📁Cart
  │   │   └─📄index.js
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

> history API를 이용하여 URL만 업데이트하면서 웹 브라우저의 기본적인 페이지 이동 처리를 방지하려 하였으나, pushState를 통해 URL이 변경된 것을 감지하능 기능을 구현해야 하는 문제가 생겼다.

커스텀 이벤트를 사용하여 route가 변경된다면 콜백 함수를 호출하도록 이벤트를 바인딩하여 해결하였다.

### Issue #5

> innerHTML로 생성한 노드는 querySeletor로 선택하지 못하는 문제가 발생하였다.

이벤트 위임을 사용하여 상위 요소에서 하위 요소의 이벤트들을 제어하여 해결하였다.

### Issue #6

> 새로고침하면 브라우저는 html css js 파일을 처음부터 다시 읽기 때문에 찜한 상품에 대한 state 데이터가 리셋되는 문제가 발생하였다.

localStorage에 찜한 상품에 대한 state 데이터를 저장하여 해결하고, setState 함수를 사용하며 동적으로 상태 값을 갱신해주었다.
