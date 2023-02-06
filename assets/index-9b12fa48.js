(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const E="https://test.api.weniv.co.kr",M=async(r,n={})=>{try{const t=`${E}${r}`,s=await fetch(t,n);if(s.ok)return await s.json();throw new Error("API 통신 실패")}catch(t){alert(t.message)}},O="ROUTE_CHANGE",B=r=>{window.addEventListener(O,()=>{r()})},x=(r,n)=>{history.pushState(null,null,r),window.dispatchEvent(new CustomEvent(O,n))};function A({$target:r,initialState:n}){var s;const t=document.createElement("a");this.state=n,t.className=`relative ${(s=this.state)!=null&&s.stockCount?"cursor-pointer":"cursor-default"}`,t.href="javascript:;",t.dataset.productId=this.state.id,this.setStatae=e=>{this.state=e,this.render()},this.render=()=>{var a;r.appendChild(t);const e=`${E}/${(a=this.state)==null?void 0:a.thumbnailImg}`;t.innerHTML=` 
        <img
          src=${e}
          alt="#"
          class="rounded-2xl aspect-square"
        />
        ${this.state.stockCount?"<div class='absolute inset-0 p-2 px-4 text-white duration-500 bg-black opacity-0 rounded-2xl bg-opacity-40 group-hover:opacity-100'></div>":"<div class='absolute inset-0 flex flex-col justify-center p-2 px-4 text-white duration-500 bg-black rounded-2xl bg-opacity-40 group-hover:opacity-100'><p class='mx-auto text-2xl text-center'>SOLDOUT</p></div>"}
      `},this.render(),t.addEventListener("click",e=>{var c;const{productId:a}=t.dataset;a&&((c=this.state)!=null&&c.stockCount)&&x(`/products/${a}`)})}const g=r=>{if(!localStorage.getItem(r))return;let n=localStorage.getItem(r);return n=JSON.parse(n),n},T=(r,n,t)=>{localStorage.getItem(r)||localStorage.setItem(r,JSON.stringify([]));let s=localStorage.getItem(r);s=JSON.parse(s),s.push(n),s=[...new Set(s)],t===!1&&(s=s.filter(e=>n!==e),localStorage.removeItem(r)),localStorage.setItem(r,JSON.stringify(s))};function _({$target:r,initialState:n}){var a,c;this.state=n;const t=document.createElement("p");t.className="flex justify-between mt-2 font-normal ";const s=document.createElement("a");s.className=`text-sm ${(a=this.state)!=null&&a.stockCount?"cursor-pointer":"cursor-default"}`,s.href="javascript:;",s.dataset.productId=this.state.id,s.textContent=(c=this.state)==null?void 0:c.productName;const e=document.createElement("button");e.type="button",e.className="flex items-start duration-200 empty hover:scale-110 min-w-fit",e.ariaLabel="찜하기 버튼",this.paintWishList=()=>{if(!localStorage.getItem("wished"))return;let i=localStorage.getItem("wished");i=JSON.parse(i),i.includes(this.state.id)&&(e.classList.remove("empty"),e.innerHTML=`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      class="w-6 h-6"
    >
      <path
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
      />
    </svg>`)},this.setState=i=>{this.state=i,this.render()},this.render=()=>{r.appendChild(t),e.insertAdjacentHTML("afterbegin",`<svg
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
  </svg>`),this.paintWishList(),t.appendChild(s),t.appendChild(e)},this.render(),s.addEventListener("click",i=>{const{productId:l}=s.dataset;l&&this.state.stockCount&&x(`/products/${l}`)}),e.addEventListener("click",i=>{e.classList.toggle("empty");const l=()=>{localStorage.getItem("wished")||localStorage.setItem("wished",JSON.stringify([]));let o=localStorage.getItem("wished");o=JSON.parse(o),o.push(this.state.id),o=[...new Set(o)],e.classList.contains("empty")&&(o=o.filter(d=>this.state.id!==d),localStorage.removeItem("wished")),localStorage.setItem("wished",JSON.stringify(o))};e.classList.contains("empty")?e.innerHTML=`<svg
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
    </svg>`:e.innerHTML=`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="red"
    class="w-6 h-6"
  >
    <path
      d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
    />
  </svg>`,l()})}const P=r=>r.toLocaleString("ko-KR",{style:"currency",currency:"KRW"});function D({$target:r,initialState:n}){const t=document.createElement("p");t.className="space-x-2",this.state=n,this.setState=s=>{this.state=s,this.render()},this.render=()=>{var a;r.appendChild(t);const s=P(this.state.price),e=(a=this.state)==null?void 0:a.discountRate;e?t.innerHTML=`<strong class="text-lg font-bold">${P(this.state.price*(100-e)/100 .toFixed())}</strong
      ><span class="text-sm text-gray-500 line-through">${s}</span
      ><span class="text-sm font-bold text-purple-600">${e}%</span>`:t.innerHTML=`<strong class="text-lg font-bold">${s}</strong
      >`},this.render()}function z({$target:r,initialState:n}){this.state=n,this.setState=t=>{this.state=t,this.render()},this.render=()=>{new _({$target:r,initialState:n}),new D({$target:r,initialState:n})},this.render()}function R({$target:r,initialState:n}){const t=document.createElement("li"),s=document.createElement("div");s.className="flex flex-col group w-72 md:w-auto",this.state=n,this.setState=e=>{this.state=e,this.render()},this.render=()=>{r.appendChild(t),t.appendChild(s),this.state&&(new A({$target:s,initialState:this.state}),new z({$target:s,initialState:this.state}))},this.render()}function J({$target:r,initialState:n}){const t=document.createElement("ul");t.className="grid gap-16 p-6 m-3 shadow-2xl lg:grid-cols-3 md:grid-cols-2 rounded-3xl",this.state=n,this.setState=s=>{this.state=s,this.render()},this.render=()=>{r.appendChild(t),this.state.forEach(s=>{new R({$target:t,initialState:s})})},this.render()}function Q({$target:r,href:n}){const t=document.createElement("aside"),s=document.createElement("a");s.className="fixed bottom-0 right-0 flex items-center justify-center p-3 m-2 duration-200 bg-purple-600 rounded-full cursor-pointer w-14 h-14 xl:h-16 xl:w-16 animate-bounce",s.href="javascript:;",this.render=()=>{r.appendChild(t),t.appendChild(s),n==="main"&&(s.innerHTML=`<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-full text-white"
        ari-label="메인 페이지로 이동"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>`),n==="cart"&&(s.innerHTML=`  <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-full text-white"
        aria-label="장바구니로 이동"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>`)},this.render(),s.addEventListener("click",e=>{n==="main"&&x("/"),n==="cart"&&x("cart")})}function q({$target:r}){const n=document.createElement("section");n.className="ProductListPage",n.innerHTML="<h2 class='sr-only'>상품 목록 페이지</h2>";const t=document.createElement("div");n.className="flex items-center justify-center min-h-screen md:p-40 2xl:p-80",n.appendChild(t),this.render=()=>{r.appendChild(n)},this.setState=e=>{this.state=e},(async()=>{const e=await M("/mall");this.setState(e),new J({$target:t,initialState:this.state}),new Q({$target:t,href:"cart"})})()}function U({$target:r,initialState:n}){var i,l,o,d;const t=document.createElement("div");t.className="mt-9",this.state={...n,orderQuantity:1},this.setState=h=>{this.state=h,this.render()},this.render=()=>{var h,f,u,p,m;r.insertAdjacentElement("beforeend",t),t.innerHTML=`
    <strong class="block mb-3">상품 정보</strong>
    <div class="flex flex-col md:flex-row border-y-2">
      <dl class="flex flex-1 border-b-2 md:border-b-0">
        <dt class="w-1/3 py-3 pl-2 bg-gray-100">상품 번호</dt>
        <dd class="py-3 pl-2">${(f=(h=this.state)==null?void 0:h.product)==null?void 0:f.pubDate.split("-").join("")}</dd>
      </dl>
      <dl class="flex flex-1">
        <dt class="w-1/3 py-3 pl-2 bg-gray-100">재고 수량</dt>
        <dd class="py-3 pl-2"><span class="stock">${((p=(u=this.state)==null?void 0:u.product)==null?void 0:p.stockCount)-((m=this.state)==null?void 0:m.orderQuantity)}</span><span>개</span></dd>
      </dl>
    </div>`},this.render();const s=(i=this.state)==null?void 0:i.productId,e=((o=(l=this.state)==null?void 0:l.product)==null?void 0:o.stockCount)-((d=this.state)==null?void 0:d.orderQuantity);var a=new MutationObserver(function(h,f,u=e,p=s){h.forEach(function(m){m&&window.productDetailInfo[p]&&(document.querySelector(".stock").innerHTML=`${u-window.productDetailInfo[p]+1}`)})}),c={attributes:!0,childList:!0,characterData:!0};a.observe(r,c)}function F({$target:r,initialState:n}){var s,e,a,c;const t=document.createElement("div");t.className="flex flex-col gap-5 md:flex-row",this.state={...n,orderQuantity:1},(e=g("wished"))!=null&&e.includes((s=this.state)==null?void 0:s.productId)&&(this.state.wished=!0),(c=g("stored"))!=null&&c.includes((a=this.state)==null?void 0:a.productId)&&(this.state.stored=!0),this.setState=i=>{this.state=i,this.render()},this.render=()=>{var d,h,f,u,p,m,w,v,b,y,L,S,$,k,C,I,j,N,H;r.insertAdjacentElement("afterbegin",t);const i=`${E}/${(h=(d=this.state)==null?void 0:d.product)==null?void 0:h.thumbnailImg}`,l=(u=(f=this.state)==null?void 0:f.product)==null?void 0:u.price,o=(p=this.state.product)==null?void 0:p.discountRate;t.innerHTML="",t.insertAdjacentHTML("beforeend",`<div class="flex-1 mx-0 text-center md:mx-auto">
    <img
      src=${i}
      alt=${(w=(m=this.state)==null?void 0:m.product)==null?void 0:w.productName}
      class="w-40 md:w-auto aspect-square rounded-2xl"
    />
  </div>  <div class="md:flex-[1.2_1_0%] flex flex-col justify-between">
  <div>
    <p class="mb-3 text-xl md:text-2xl">${(b=(v=this.state)==null?void 0:v.product)==null?void 0:b.productName}</p>
    <p class="space-x-1 text-xl md:text-2xl">
      <span class="font-bold">${o?(l*(100-o)/100 .toFixed()).toLocaleString():(L=(y=this.state)==null?void 0:y.product)==null?void 0:L.price.toLocaleString()}</span
      ><span class="text-sm">원</span>
    </p>
  </div>
  <div>
    <div>
      <p class="mb-1 text-gray-500">택배배송 / 무료배송</p>
      <div class="flex items-center justify-start py-2 border-y-2">
        <button
          aria-label="수량 감소 버튼"
          type="button"
          class="delete flex items-center justify-center w-8 h-8 border rounded-l-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.8"
            stroke="currentColor"
            class="delete w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 12H6"
              class="delete"
            />
          </svg></button
        ><span
          class="flex items-center justify-center w-8 h-8 border-y-[1px]"
          >${(S=this.state)==null?void 0:S.orderQuantity}</span
        ><button
          aria-label="수량 증가 버튼"
          type="button"
          class="add flex items-center justify-center w-8 h-8 border rounded-r-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.8"
            stroke="currentColor"
            class="add w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
              class="add"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-between mt-5 md:flex-row"
    >
      <span class="w-full font-bold md:w-auto">총 상품 금액</span
      ><span class="flex items-center w-full md:w-auto"
        ><span class="text-gray-500"
          >총 수량 <strong class="text-red-500">${($=this.state)==null?void 0:$.orderQuantity}</strong>개 | </span
        ><span>
          <strong
            class="block -mt-2 text-2xl font-bold text-red-500 md:text-3xl"
            >${o?(l*(100-o)/100 .toFixed()*((k=this.state)==null?void 0:k.orderQuantity)).toLocaleString():(((I=(C=this.state)==null?void 0:C.product)==null?void 0:I.price)*((j=this.state)==null?void 0:j.orderQuantity)).toLocaleString()}<span class="text-sm">원</span></strong
          ></span
        ></span
      >
    </div>
    <div class="flex gap-2 mt-5">
      <a
        href="javascript:;"
        class="md:flex-[5_1_0%] flex-[3_1_0%] text-center text-white font-bold text-base md:text-xl py-2 md:py-4 bg-purple-600 rounded-lg"
        >장바구니로 이동</a
      ><button
        class="stored flex items-center justify-center flex-1 border-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke=${(N=this.state)!=null&&N.stored?"purple":"#B3B3B3"}
          class="stored w-6 h-6"
          aria-label="장바구니에 담기"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            class="stored"
          />
        </svg></button
      ><button
        class="wished flex items-center justify-center flex-1 border-2 rounded-lg"
      >
       ${(H=this.state)!=null&&H.wished?`<svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="red"
           class="wished w-6 h-6"
         >
           <path
             d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
             class="wished"
           />
         </svg>`:`<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="wished w-6 h-6 opacity-30"
          >
            <path              
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              class="wished"
            />
          </svg>`}
      </button>
    </div>
  </div>
</div>`)},this.render(),t.addEventListener("click",i=>{var l,o,d,h,f,u,p,m,w,v,b,y,L,S,$,k,C;if(i.target.classList.contains("wished")&&(this.setState({...this.state,wished:!((l=this.state)!=null&&l.wished)}),T("wished",(o=this.state)==null?void 0:o.productId,(d=this.state)==null?void 0:d.wished)),i.target.classList.contains("stored")&&(this.setState({...this.state,stored:!((h=this.state)!=null&&h.stored)}),T("stored",(f=this.state)==null?void 0:f.productId,(u=this.state)==null?void 0:u.stored)),i.target.classList.contains("add")){if(((p=this.state)==null?void 0:p.stockCount)-((m=this.state)==null?void 0:m.orderQuantity)<((w=this.state)==null?void 0:w.orderQuantity)&&alert("재고가 없습니다.😥"),((v=this.state)==null?void 0:v.orderQuantity)>4){alert("1인당 최대 5개 상품 주문 가능합니다.🥲");return}productDetailInfo[(b=this.state)==null?void 0:b.productId]=((y=this.state)==null?void 0:y.orderQuantity)+1,this.setState({...this.state,orderQuantity:((L=this.state)==null?void 0:L.orderQuantity)+1})}if(i.target.classList.contains("delete")){if(((S=this.state)==null?void 0:S.orderQuantity)<=1)return;productDetailInfo[($=this.state)==null?void 0:$.productId]=((k=this.state)==null?void 0:k.orderQuantity)-1,this.setState({...this.state,orderQuantity:((C=this.state)==null?void 0:C.orderQuantity)-1})}i.target.closest("a")&&x("/cart")})}function K({$target:r,initialState:n}){const t=document.createElement("div");t.className="cursor-not-allowed",this.state=n,this.setState=s=>{this.state=s,this.render()},this.render=()=>{var e,a;r.appendChild(t);const s=[...(a=(e=this.state)==null?void 0:e.product)==null?void 0:a.detailInfoImage].map(c=>`${E}/${c}`);t.innerHTML=`${s.map(c=>{var i;return`
    <img
    src=${c}
    alt=${(i=this.state)==null?void 0:i.productName}
  />
    `}).join("")}
    `},this.render()}function W({$target:r,initialState:n}){const t=document.createElement("div");t.className="flex flex-col items-center justify-center min-h-screen p-5 mt-7 md:mt-0 md:p-20";const s=document.createElement("div");s.innerHTML='<h3 class="sr-only">상품 상세 정보</h3>',this.setState=e=>{this.state=e,this.render()},this.state=n,this.render=()=>{r.appendChild(t),t.appendChild(s),this.state&&(new F({$target:s,initialState:this.state}),new U({$target:s,initialState:this.state}),new K({$target:t,initialState:this.state}))},this.render()}function V({$target:r,productId:n}){this.state={productId:n,product:null},window.productDetailInfo={};const t=document.createElement("section");t.className="ProductDetailPage",t.innerHTML="<h2 class='sr-only'>상품 정보 페이지</h2>",this.setState=s=>{this.state=s,this.render()},this.render=()=>{this.state.product?(r.innerHTML="",r.appendChild(t)):r.innerHTML="Loading.."},this.fetchProduct=async()=>{const{productId:s}=this.state,e=await M(`/mall/${s}`);this.setState({...this.state,product:e}),new W({$target:t,initialState:this.state})},this.fetchProduct()}function G({$target:r,initialState:n}){var e;const t=document.createElement("ul");t.className="space-y-20",r.appendChild(t),this.state=n;let s=(e=g("stored"))==null?void 0:e.map(a=>this.state[a-1]);n&&(this.state={...n,storedList:[...s]}),this.setState=a=>{this.state=a,this.render()},this.render=()=>{var a;t.innerHTML=`${(a=this.state.storedList)==null?void 0:a.map(c=>`<li>
    <div class="flex flex-col gap-5 md:flex-row">
      <div class="flex-1 mx-0 text-center md:mx-auto">
        <img
          src=${`${E}/${c.thumbnailImg}`}
          alt=${c.productName}
          class="w-40 md:w-auto aspect-square rounded-2xl"
        />
      </div>

      <div class="md:flex-[1.2_1_0%] flex flex-col justify-between">

        <div>
          <p class="mb-3 text-xl md:text-2xl">
          ${c.productName}
          </p>
          <p class="space-x-1 text-xl md:text-2xl">
            <span class="font-bold">${c.price.toLocaleString()}</span
            ><span class="text-sm">원</span>
          </p>
        </div>
        <div>
          <p class="mb-1 text-gray-500">택배배송 / 무료배송</p>
          <div
            class="flex flex-col items-center justify-between mt-5 md:flex-row"
          >
            <span class="w-full font-bold md:w-auto"
              >총 상품 금액</span
            ><span class="flex items-center w-full md:w-auto"
              ><span class="text-gray-500"
                >총 수량 <strong class="text-red-500">${1} </strong>개 | </span
              ><span>
                <strong
                  class="block -mt-2 text-2xl font-bold text-red-500 md:text-3xl"
                  >${c.price.toLocaleString()}<span class="text-sm">원</span></strong
                ></span
              ></span
            >
          </div>
          <div class="flex justify-end gap-2 mt-5">
          <button
              data-id=${c.id}
              class="cancel flex items-center justify-center flex-1 border-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 opacity-30"
                aria-label="주문 취소 버튼"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </li>`).join("")}`},this.render(),t.addEventListener("click",a=>{var c;if(a.target.closest(".cancel")){let i=g("stored");const l=a.target.closest(".cancel").dataset.id;i=i.filter(d=>d!==l),localStorage.setItem("stored",JSON.stringify(i)),console.log(i);const o=(c=g("stored"))==null?void 0:c.map(d=>this.state[d-1]);console.log(o),this.setState({...this.state,storedList:[...o]})}})}function X({$target:r,initialState:n}){const t=document.createElement("section");t.innerHTML=`<h3 class="mb-1 text-base font-bold md:text-xl">주문 상품</h3>
  <hr class="mb-5" />`,this.state=n,this.setState=s=>{this.state=s,this.render()},this.render=()=>{r.appendChild(t),new G({$target:t,initialState:this.state})},this.render()}function Y({$target:r,initialState:n}){var i;const t=document.createElement("section");t.className="mt-7",this.state=n;let s=(i=g("stored"))==null?void 0:i.map(l=>this.state[l-1]);this.state={...n,storedList:[...s]},this.setState=l=>{this.state=l,this.render()};const e=this.state.storedList.reduce((l,o)=>o.discountRate?l+(o.price-o.price*.1):l+o.price,0),a=this.state.storedList.reduce((l,o)=>o.discountRate?l+(o.price-o.price*.1):l,0),c=e-(e-a);this.render=()=>{r.appendChild(t),t.innerHTML=`  <h3 class="mb-1 space-x-5 text-base font-bold md:text-xl">
    <span>결제할 상품</span
    ><span class="font-normal text-gray-500"
      >총 <strong>${this.state.storedList.length}</strong>개</span
    >
  </h3>
  <hr class="mb-5" />
  <div
    class="items-center mb-5 space-y-3 md:space-y-0 md:flex md:flex-row md:justify-between"
  >
    <p class="flex flex-row items-center justify-between md:flex-col">
      <span>상품 금액</span
      ><span class="font-bold md:text-2xl">${e.toLocaleString()}</span>
    </p>
    <p class="flex flex-row items-center justify-between md:flex-col">
      <span>할인 금액 예상</span
      ><span class="font-bold text-red-600 md:text-2xl">-${c.toLocaleString()}</span>
    </p>
    <p class="flex flex-row items-center justify-between md:flex-col">
      <span class="font-bold">결제 금액</span
      ><span class="text-xl font-bold md:text-4xl">${e.toLocaleString()}원</span>
    </p>
  </div>
  <a
    href="javascript:;"
    class="block py-2 text-base font-bold text-center text-white bg-purple-600 rounded-lg md:text-xl md:py-4 md:w-1/3 md:mx-auto"
    >선택 상품 주문하기</a
  >`},this.render(),t.addEventListener("click",l=>{l.target.closest("a")&&(alert("주문이 완료되었습니다😀"),x("/"))})}function Z({$target:r,initialState:n}){this.state=n,this.setState=t=>{this.state=t,this.render()},this.render=()=>{new X({$target:r,initialState:this.state}),new Y({$target:r,initialState:this.state})},this.render()}function tt({$target:r}){const n=document.createElement("section");n.className="CartPage";const t=document.createElement("div");t.className="flex flex-col min-h-screen p-5 md:px-60 md:py-20",t.innerHTML="<h2 class='text-2xl font-bold text-center mb-7 md:mb-14'>장바구니/결제</h2>",n.appendChild(t),this.render=()=>{r.appendChild(n)},this.setState=e=>{this.state=e},(async()=>{const e=await M("/mall");this.setState(e),new Z({$target:t,initialState:this.state}),new Q({$target:t,href:"main"})})()}function et({$target:r}){const n=document.createElement("section");n.className="ErrorPage",n.innerHTML="<h2 class='sr-only'>잘못된 페이지</h2>";const t=document.createElement("div");t.className="flex flex-col items-center justify-center max-h-screen min-h-screen text-center",this.render=()=>{r.appendChild(n),r.appendChild(t),t.innerHTML=`<svg
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
      >`},t.addEventListener("click",s=>{const e=s.target.closest("a");e!=null&&e.classList.contains("home")&&x("/")})}function st({$target:r}){this.route=()=>{const{pathname:n}=location;if(r.innerHTML="",n==="/")new q({$target:r}).render();else if(n.indexOf("/products/")===0){const[,,t]=n.split("/");new V({$target:r,productId:t}).render()}else n==="/cart"?new tt({$target:r}).render():new et({$target:r}).render()},B(this.route),this.route(),window.addEventListener("popstate",this.route)}new st({$target:document.querySelector("#app")});
