(()=>{"use strict";let e=[],t=[],n=[];document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("all").addEventListener("click",(async()=>{!async function(){let t=await fetch("quotes.json"),n=await t.json();e.textContent="",n.quotes.sort(((e,t)=>e.author.localeCompare(t.author)));for(let t of n.quotes){let o=document.createElement("li");o.textContent=t.author+" : '"+t.quote+"'",document.getElementById("quoteslist").appendChild(o),e.push(n.quote),e.push(n.author)}}()})),document.getElementById("hossz").addEventListener("click",(async()=>{!async function(){let e=await fetch("quotes.json"),t=await e.json(),o=[];for(let e of t.quotes)n.push(e.quote);const l=n.toString().split(" ");for(let e of l)o.push(l.map((e=>e.length)));let a=[];a.push(o.join(",")),document.getElementById("length").append(a)}()})),document.getElementById("the").addEventListener("click",(async()=>{!async function(){let e=await fetch("quotes.json"),n=await e.json();for(let e of n.quotes){let n=e.quote;n=n.replaceAll("The ","<b>The </b>"),n=n.replaceAll(" the ","<b> the </b>"),t.push(n)}let o=document.getElementById("thelist");for(let e of t){let t=document.createElement("li");t.innerHTML=e,o.appendChild(t)}}()})),document.getElementById("dbutton").addEventListener("click",(async()=>{!async function(e){document.getElementById("authornumber").readOnly=!0;let t=await fetch("quotes.json"),n=(await t.json()).quotes.filter((t=>t.author.toLowerCase()===e.toLowerCase()));document.getElementById("authornumber").value=n.length}(document.getElementById("userauthor").value)}))}))})();