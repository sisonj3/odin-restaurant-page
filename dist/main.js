(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&!t;)t=i[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"b08bf90f3563aa5effd3.jpg",n=document.createElement("div");let i=document.createElement("img"),a=document.createElement("h1"),d=document.createElement("p");i.src=t,i.alt="Restaurant Image",a.textContent="Restaurant is Great!",d.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";const o=e=>{for(console.log("Loading home page");e.firstChild;)e.removeChild(e.lastChild);n.appendChild(i),n.appendChild(a),n.appendChild(d),e.appendChild(n)},c=e.p+"6d666cd8d94c37b1310f.jpg",l=e.p+"3db179a3a4bdb77a7140.jpg",r=(e,t,n,i,a)=>{const d=document.createElement("div"),o=document.createElement("p"),c=document.createElement("p"),l=document.createElement("p"),r=document.createElement("img");return o.textContent=e,c.textContent=t,l.textContent=`$${n}`,r.src=i,r.alt=a,d.appendChild(o),d.appendChild(c),d.appendChild(l),d.appendChild(r),{div:d}},m=document.createElement("div"),p=document.createElement("h1");p.textContent="Menu";let u=((e,...t)=>{const n=document.createElement("div"),i=document.createElement("h2");return i.textContent=e,n.appendChild(i),t.forEach((e=>n.appendChild(e.div))),{div:n}})("Section 1",r("Food 1","Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Eget nunc lobortis mattis aliquam faucibus purus in.",2,c,"food1.jpg"),r("Food 2","Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Aliquet nibh praesent tristique magna sit amet.",5,l,"food2.jpg"));const s=((e,t,n,i,a,d)=>{const o=document.createElement("div"),c=document.createElement("img"),l=document.createElement("p"),r=document.createElement("p"),m=document.createElement("p"),p=document.createElement("p");return l.textContent="Cat McCatface",r.textContent="Owner",m.textContent="555-555-5555",p.textContent="cat@catmail.com",c.src=a,c.alt="Cat picture",o.appendChild(c),o.appendChild(l),o.appendChild(r),o.appendChild(m),o.appendChild(p),{div:o}})(0,0,0,0,e.p+"2fca60ed53f563271d21.jpg"),C=document.createElement("div"),h=document.createElement("h1");h.textContent="Contact Us";const g=(()=>{const e=document.createElement("ul"),t=document.createElement("li"),n=document.createElement("li"),i=document.createElement("li"),a=document.createElement("div");return t.textContent="Home",n.textContent="Menu",i.textContent="Contact",t.addEventListener("click",(()=>o(a))),n.addEventListener("click",(()=>(e=>{for(console.log("Loading menu page");e.firstChild;)e.removeChild(e.lastChild);m.appendChild(p),m.appendChild(u.div),e.appendChild(m)})(a))),i.addEventListener("click",(()=>(e=>{for(console.log("Loading contact page");e.firstChild;)e.removeChild(e.lastChild);C.appendChild(h),C.appendChild(s.div),e.appendChild(C)})(a))),e.appendChild(t),e.appendChild(n),e.appendChild(i),document.body.appendChild(e),document.body.appendChild(a),{tabList:e,homeTab:t,menuTab:n,contactTab:i,contentDiv:a}})();o(g.contentDiv)})();