addEventListener("DOMContentLoaded",(function(){!function(){window.scrollTo(0,0);var t=document.querySelectorAll(".nav-tab"),e=document.querySelectorAll(".tab-contents");if(location.hash){var a=document.querySelector(location.hash),c=document.querySelector('[href="'+location.hash+'"]'),n=document.querySelector(".nav-tab.act_"),o=document.querySelector(".tab-contents.act_");a&&c&&n&&o&&(n.classList.remove("act_"),o.classList.remove("act_"),a.classList.add("act_"),c.classList.add("act_"))}for(var s=function(a){t[a].addEventListener("click",(function(c){c.preventDefault();var n=c.target.getAttribute("href");history.replaceState(null,null,n),t[a].classList.contains("act_")||(document.querySelector(".nav-tab.act_").classList.remove("act_"),t[a].classList.add("act_"),document.querySelector(".tab-contents.act_").classList.remove("act_"),e[a].classList.add("act_"))}))},r=0;r<t.length;r++)s(r)}()}));