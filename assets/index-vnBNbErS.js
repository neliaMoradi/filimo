(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();let c=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(menu-left-start)).map(e=>`
            <div class="menu__left__start"><a href="${e.link}">${e.name}</a></div>
           
       
        `),document.querySelector(".menu .menu__left").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},_=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(menu-left-join)).map(e=>`
            
           <div class="menu__left__join"><a href="${e.link}">${e.icon}${e.name}</a></div> 
       
        `),document.querySelector(".menu .menu__left").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},d=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(menu-right)).map(e=>`
    <div class="menu__right__item">
    <a href="${e.link}">
    ${e.icon}
    <p>${e.name}</p>
    </a>
   </div>`),document.querySelector(".menu .menu__right nav").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},h=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(menu-right-item-1)).map(e=>`
      <div class="menu__right__item__1"><a href="${e.link}">
  ${e.icon}
</a></div>
   `),document.querySelector(".menu .menu__right").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},m=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(vary)).map(e=>`
            
               <h2>
               ${e.title}
            </h2>
            <p>
            ${e.description}
            </p>
            <a href="${e.link1}">${e.name1}</a>
            <a href="${e.link2}">${e.name2}</a> 
       
        `),document.querySelector(".vary .vary__left .vary__left__center").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},u=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(online)).map(e=>`
             <h2>
      ${e.name1}</h2>
        <div class="online__items">
          <h2><span>
                  ${e.icon1}
                  </span>
                  ${e.name2}
                  
          </h2>
          <h2><span>
               ${e.icon2}
             </span>
      ${e.name3}
          </h2>
          <h2><span>
                 ${e.icon3}
             </span>
      ${e.name4}
          </h2>
        </div>
        <div class="online__card">
          <div class="online__card__1">
          <a href="${e.link1}"><img src="${e.link2}" ></a></div>
          <div class="online__card__2">
            <div class="online__card__title"><a href="${e.link3}">${e.name5}</a></div>
            <h2>${e.name6}</h2>
            <div class="online__card__items"><h2>${e.name7}</h2><h2>${e.name8}</h2></div>
            <a href="${e.link3}">${e.name9}</a>
          </div>
          <div class="online__card__3">
            <h2>
              <img src="${e.link4}" >
              ${e.name10}</h2>
          </div>
        </div>
       
        `),document.querySelector(".online").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},f=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(last-section)).map(e=>`
           <div class="last__section__image"><img src="${e.link1}" ></div>
            <div class="last__section__items">
              <h2><span>
              ${e.icon1}
              </span> 
                ${e.name1} 
              </h2>
                 <h2><span>
              ${e.icon1}
              </span> 
                ${e.name2} 
              </h2>
                 <h2><span>
              ${e.icon1}
              </span> 
                ${e.name3} 
              </h2>
            </div>
            <div class="last__section__link">
              <a href="${e.link2}">
${e.icon2}
                ${e.name4}
              </a>
            </div>
       
        `),document.querySelector(".last__section").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},g=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(vary-image)).map(e=>`
            
                    <img src="${e.link}" />
       
        `),document.querySelector(".vary .vary__right").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},y=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(all)).map(e=>`
           <div class="all__right"><img src="${e.link1}" ></div>
          <div class="all__left">
            <div class="all__left__title">
              <h2>
                ${e.name1}
              </h2>
              <h3>
                ${e.name2}
              </h3>
            </div>
            <div class="all__left__items">
              <div class="all__left__item">
                <h2><img src="${e.link2}" >
                  ${e.name3}
                </h2>
                  <h3> ${e.name4}</h3>
              </div>
              <div class="all__left__item">
                <h2><img src="${e.link3}"  class="img__2">
                  ${e.name5}
                </h2>
                  <h3>
                    ${e.name6}</h3>
              </div>
              <div class="all__left__item">
                <h2><img src="${e.link4}" >
                  ${e.name7}
                </h2>
                  <h3>
                    ${e.name8}
                  </h3>
              </div>
            </div>
            <div class="all__left__link"><a href="${e.link5}">
           ${e.icon1}
              ${e.name9}</a></div>
          </div>
       
        `),document.querySelector(".all").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},p=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(tv)).map(e=>`
         <div class="tv__right">
          <div class="tv__right__title">
            <h2>
          ${e.name1}
              
            </h2>
            <p>
               ${e.name2}
            </p>
          </div>
          <div class="tv__right__items">
            <div class="tv__right__item">
              <h2>
                <img src=" ${e.link1}" />
                 ${e.name3}
              </h2>
              <h3>
                 ${e.name4}
              </h3>
            </div>
            <div class="tv__right__item">
              <h2>
                <img src="  ${e.link2}" />

                  ${e.name5}
              </h2>
              <h3>
                  ${e.name6}
              </h3>
            </div>
          </div>
          <div class="tv__right__link">
            <a href="  ${e.link3}">
                ${e.name7}
                ${e.icon1}

            </a>
          </div>
        </div>
        <div class="tv__left"><img src="  ${e.link4}"   /></div>
       
        `),document.querySelector(".tv").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},v=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(last-menu-right)).map(e=>e.dropdown.length>0?`
       
        <div class="last__menu__right__items">
          <a href="${e.link}">
           ${e.icon}

            ${e.name}
          </a>
           <div class="last__menu__sub__menu">
            <nav>
            ${e.dropdown.map(r=>`
              <div><a href="${r.link}">${r.name}</a></div>`).join("")}
              
            </nav>
          </div>
        </div>
      
  
   
    `:`
       <div class="last__menu__right__items">
          <a href="${e.link}">
           ${e.icon}

            ${e.name}
          </a></div>
      `),document.querySelector(".last__menu .last__menu__right nav").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},$=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(last-menu-left)).map(e=>`
        <div>
            <a href=" ${e.link}">
            ${e.icon}
               ${e.name}
            </a>
             <div class="last__menu__sub__menu__2">
            <nav>
            ${e.dropdown.map(r=>`
              <div><a href="${r.link}">${r.icon}${r.name}</a></div>
              `).join("")}
              
            </nav>
          </div>
           
          </div>
          
      
       
        `),document.querySelector(".last__menu .last__menu__left ").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},j=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(free-slider)).map(e=>`
         <div class="free__slider__slides__slide">
              <a href="${e.link}"
                ><img src="${e.img}" />
                <div class="free__slider__slide__card">
                  ${e.icon}
                  ${e.card}
                </div>
                <h3>${e.name}</h3>
              </a>
            </div>
        `),document.querySelector(".free > .free__slider > .free__slider__slides").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},b=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(free-title)).map(e=>`
       ${e.name}
        `),document.querySelector(".free > h2").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},q=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(menu-mobile-right)).map(e=>`
<a href="${e.link}"> ${e.icon}</a>
    `),document.querySelector(".menu__mobile .menu__mobile__right ").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},w=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(menu-mobile-left-icon)).map(e=>`
<a href="${e.link}"> ${e.icon}</a>
    `),document.querySelector(".menu__mobile .menu__mobile__left ").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},S=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(menu-mobile-left-join)).map(e=>`
<a href="${e.link}"> ${e.icon} ${e.name}</a>

    `),document.querySelector(".menu__mobile .menu__mobile__left .menu__mobile__left__join ").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},k=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(menu-mobile-left-start)).map(e=>`
<a href="${e.link}">  ${e.name}</a>

    `),document.querySelector(".menu__mobile .menu__mobile__left .menu__mobile__left__start ").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},L=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(menu-right-item-3)).map(e=>`
    <div class="menu__right__item menu__right__item__3">
    <a >
    ${e.icon}
    <p>${e.name}</p>
    </a>
   </div>`),document.querySelector(".menu .menu__right nav").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},A=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(first-title)).map(e=>`
   <h3>${e.name1}</h3>
  <h2>${e.name2}</h2>
       
        `),document.querySelector(".first").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},M=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(first-items)).map(e=>`
     <h2><span>
      ${e.icon}
      </span> 
${e.name}     
       </h2>
       
        `),document.querySelector(".first .first__items").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},H=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(first-link)).map(e=>`
        <a href="${e.link}">
    ${e.icon}
    ${e.name}
  </a>
       
        `),document.querySelector(".first .first__link").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},T=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(first-last)).map(e=>`
    ${e.icon}       
    ${e.name}       
        `),document.querySelector(".first .first__last").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},x=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(comment-title)).map(e=>`
       ${e.name}
        `),document.querySelector(".comment > h2").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},E=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(comment-slider)).map(e=>`
         <div class="comment__slider__slides__slide">
              <div class="comment__slider__slides__slide__top">
                <div class="comment__slider__slides__slide__top__right">
                  <img src="${e.img}" ><h2>${e.name}</h2>
                </div>
                <div class="comment__slider__slides__slide__top__left">
                  <img src="${e.icon}" >
                </div>
              </div>
              <p> ${e.description} </p>
            </div>
        `),document.querySelector(".comment > .comment__slider > .comment__slider__slides").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},F=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(question-title)).map(e=>`
    <h2>${e.title}</h2>
          <h3>${e.name}</h3>
       
        `),document.querySelector(".question > .question__title").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},O=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(question-item-1)).map(e=>`
   <div class="question__item__1">
            <div class="question__item__1__top">
              <h2>${e.name}</h2>
          ${e.icon}
            </div>
            <p>
             ${e.description}
            </p>
          </div>
       
        `),document.querySelector(".question > .question__items").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},X=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(question-item-2)).map(e=>`
   <div class="question__item__2">
            <div class="question__item__2__top">
              <h2>${e.name}</h2>
          ${e.icon}
            </div>
            <p>
             ${e.description}
            </p>
          </div>
       
        `),document.querySelector(".question > .question__items").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},Q=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(question-item-3)).map(e=>`
   <div class="question__item__3">
            <div class="question__item__3__top">
              <h2>${e.name}</h2>
          ${e.icon}
            </div>
            <p>
             ${e.description}
            </p>
          </div>
       
        `),document.querySelector(".question > .question__items").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},P=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(question-item-4)).map(e=>`
   <div class="question__item__4">
            <div class="question__item__4__top">
              <h2>${e.name}</h2>
          ${e.icon}
            </div>
            <p>
             ${e.description}
            </p>
          </div>
       
        `),document.querySelector(".question > .question__items").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},C=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(second-top)).map(e=>`
 <h2> ${e.name}    </h2>
          <div class="second__top__hover">
            <a href="${e.link} ">
              <h3>
              ${e.title1}    
              </h3>
              <h4>${e.title2}</h4>
              <div class="second__top__hover__absolute"></div>
            </a>
          </div>
       
        `),document.querySelector(".second .second__top").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},D=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(second-bottom-item)).map(e=>`
  <div class="second__bottom__item"><a href="${e.link}"><img src="${e.img}" >
            <div class="second__bottom__item__absolute">${e.icon} </div></a></div>
       
        `),document.querySelector(".second .second__bottom").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},N=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(third-top)).map(e=>`
  <div class="third__top__right">
            <h2><a href="${e.link}">
${e.name1}
            </a></h2>
            <h3>
${e.name2}
            </h3>
            <div class="third__top__right__items">
              <div class="third__top__right__item__1">${e.title1}</div>
              <div class="third__top__right__item__2">${e.title2}</div>
            </div>
          <p>
${e.description}
          </p>
          </div>
          <div class="third__top__left">
            <img src="${e.img}" >
          </div>
       
        `),document.querySelector(".third .third__top").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}},Y=async()=>{let t="";try{t=(await(await fetch("https://neliamoradi.github.io/filimoApi/db.json")).json(third-bottom)).map(e=>`
  
       <div class="third__slider__slides__slide"><a href="${e.link}">
                <img src="${e.img}" >
                <h3>${e.name}</h3>
                <div class="third__slider__slide__card"><img src="${e.icon}" ></div>

              </a></div>
        `),document.querySelector(".third > .third__bottom > .third__slider > .third__slider__slides").insertAdjacentHTML("afterbegin",t.join(""))}catch(a){console.log(a.message)}};async function I(){await h(),await L().then(()=>{let t=document.querySelector(".search"),a=document.querySelector("#SearchClose");document.querySelector(".menu > .menu__right > nav > .menu__right__item__3 ").addEventListener("click",()=>{t.style.display="block",document.body.style.overflowY="hidden"}),a.addEventListener("click",()=>{t.style.display="none",document.body.style.overflowY="scroll"})}),await d(),await _(),await c(),await q(),await w().then(()=>{let t=document.querySelector(".search");document.querySelector(".menu__mobile > .menu__mobile__left > a ").addEventListener("click",()=>{t.style.display="block",document.body.style.overflowY="hidden"})}),await S(),await k(),await A(),await M(),await H(),await T(),await C(),await D().then(()=>{document.querySelectorAll(".second__bottom__item").forEach((a,n)=>{a.style.transform=`translateX(${n*-125}%)`})}),await N(),await y(),await p(),await b(),await g(),await m(),await u(),await x(),await F(),await P().then(()=>{let t=document.querySelector(".question__item__4 > p"),a=document.querySelector(".question__item__4__top > h2"),n=document.querySelector(".question__item__4__top > svg"),e=document.querySelector(".question__item__4 "),r=t.offsetHeight;t.style.height="0px",t.style.margin="0px",e.addEventListener("click",()=>{a.hasAttribute("style")?(t.style.height="0px",t.style.margin="0px",a.removeAttribute("style"),n.removeAttribute("style")):(t.style.height=`${r}px`,t.style.margin="10px",a.style.color="rgb(244, 132, 63)",n.style.transform="rotate(0deg)")})}),await Q().then(()=>{let t=document.querySelector(".question__item__3 > p"),a=document.querySelector(".question__item__3__top > h2"),n=document.querySelector(".question__item__3__top > svg"),e=document.querySelector(".question__item__3 "),r=t.offsetHeight;t.style.height="0px",t.style.margin="0px",e.addEventListener("click",()=>{a.hasAttribute("style")?(t.style.height="0px",t.style.margin="0px",a.removeAttribute("style"),n.removeAttribute("style")):(t.style.height=`${r}px`,t.style.margin="10px",a.style.color="rgb(244, 132, 63)",n.style.transform="rotate(0deg)")})}),await X().then(()=>{let t=document.querySelector(".question__item__2 > p"),a=document.querySelector(".question__item__2__top > h2"),n=document.querySelector(".question__item__2__top > svg"),e=document.querySelector(".question__item__2 "),r=t.offsetHeight;t.style.height="0px",t.style.margin="0px",e.addEventListener("click",()=>{a.hasAttribute("style")?(t.style.height="0px",t.style.margin="0px",a.removeAttribute("style"),n.removeAttribute("style")):(t.style.height=`${r}px`,t.style.margin="10px",a.style.color="rgb(244, 132, 63)",n.style.transform="rotate(0deg)")})}),await O().then(()=>{let t=document.querySelector(".question__item__1 > p"),a=document.querySelector(".question__item__1__top > h2"),n=document.querySelector(".question__item__1__top > svg"),e=document.querySelector(".question__item__1 "),r=t.offsetHeight;t.style.height="0px",t.style.margin="0px",e.addEventListener("click",()=>{a.hasAttribute("style")?(t.style.height="0px",t.style.margin="0px",a.removeAttribute("style"),n.removeAttribute("style")):(t.style.height=`${r}px`,t.style.margin="10px",a.style.color="rgb(244, 132, 63)",n.style.transform="rotate(0deg)")})}),await f(),await v(),$()}I();Y().then(()=>{let t=document.querySelectorAll(".third__slider__slides__slide");t.forEach((s,i)=>{s.style.transform=`translateX(${i*-110}%)`});let a=document.querySelector(".third__slider > .next"),n=document.querySelector(".third__slider > .prev"),e=0;function r(s){t.forEach((i,o)=>{i.style.transform=`translateX(${(o-s)*-110}%)`})}r(e),a.addEventListener("click",function(){e===t.length-4?e=t.length-4:e++,l(),r(e)}),n.addEventListener("click",function(){e===0?e=0:e--,l(),r(e)});const l=()=>{e===0?(a.disabled=!1,n.disabled=!0):e===t.length-4?(a.disabled=!0,n.disabled=!1):(a.disabled=!1,n.disabled=!1)}});j().then(()=>{let t=document.querySelectorAll(".free__slider__slides__slide");t.forEach((s,i)=>{s.style.transform=`translateX(${i*-125}%)`});let a=document.querySelector(".free__slider > .next"),n=document.querySelector(".free__slider > .prev"),e=0;function r(s){t.forEach((i,o)=>{i.style.transform=`translateX(${(o-s)*-125}%)`})}r(e),a.addEventListener("click",function(){e===t.length-6?e=t.length-6:e++,l(),r(e)}),n.addEventListener("click",function(){e===0?e=0:e--,l(),r(e)});const l=()=>{e===0?(a.disabled=!1,n.disabled=!0):e===t.length-6?(a.disabled=!0,n.disabled=!1):(a.disabled=!1,n.disabled=!1)}});E().then(()=>{let t=document.querySelectorAll(".comment__slider__slides__slide");t.forEach((l,s)=>{l.style.transform=`translateX(${s*-103}%)`});let a=document.querySelector(".comment__slider > .next"),n=document.querySelector(".comment__slider > .prev"),e=0;function r(l){t.forEach((s,i)=>{s.style.transform=`translateX(${(i-l)*-103}%)`})}r(e),a.addEventListener("click",function(){e===t.length-3?e=0:e++,r(e)}),n.addEventListener("click",function(){e===0?e=t.length-3:e--,r(e)}),setInterval(()=>{e===t.length-3?e=0:e++,r(e)},5e3)});
