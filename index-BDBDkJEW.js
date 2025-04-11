(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}})();lucide.createIcons();const n=document.getElementById("parallax-bg");window.addEventListener("scroll",()=>{const e=window.scrollY;n&&(n.style.transform=`translateY(${e*.5}px)`)});const d=[{icon:"users",title:"Community",desc:"Join a thriving network of tech enthusiasts",color:"#00ff9d"},{icon:"brain",title:"Learning",desc:"Access quality CS education resources",color:"#00ffff"},{icon:"globe",title:"Network",desc:"Connect with industry professionals",color:"#7000ff"},{icon:"rocket",title:"Growth",desc:"Accelerate your tech career",color:"#ff00ff"}],l=document.getElementById("features");l&&(l.innerHTML=d.map(e=>`
    <div class="p-6 rounded-lg bg-gradient-to-b from-gray-900 to-black border border-opacity-20 hover:border-opacity-100 transition-all duration-300" style="border-color: ${e.color}">
      <i data-lucide="${e.icon}" class="w-12 h-12 mb-4" style="color: ${e.color}"></i>
      <h3 class="text-xl font-semibold mb-2" style="color: ${e.color}">${e.title}</h3>
      <p class="text-gray-400">${e.desc}</p>
    </div>
  `).join(""),lucide.createIcons());const u=[{icon:"disc",title:"Discord",desc:"Join our active Discord community",url:"https://discord.com/invite/wXd34sJQ8j",color:"#7000ff"},{icon:"message-circle",title:"WhatsApp",desc:"Connect via WhatsApp group",url:"https://chat.whatsapp.com/EMAtD6mP9YP4L1hlGUIdQ1",color:"#00ff9d"},{icon:"youtube",title:"YouTube",desc:"Watch our educational content",url:"https://www.youtube.com/@csconnectpk",color:"#ff00ff"},{icon:"instagram",title:"Instagram",desc:"Follow us on Instagram",url:"https://www.instagram.com/csconnectpk/#",color:"#00ffff"}],i=document.getElementById("social-links");i&&(i.innerHTML=u.map(e=>`
    <a 
      href="${e.url}" 
      target="_blank"
      rel="noopener noreferrer"
      class="p-6 rounded-lg bg-black border border-[${e.color}]/20 hover:border-[${e.color}] hover:transform hover:scale-105 transition-all duration-300"
    >
      <i data-lucide="${e.icon}" class="w-12 h-12 text-[${e.color}] mx-auto mb-4"></i>
      <h3 class="text-xl font-semibold mb-2">${e.title}</h3>
      <p class="text-gray-400">${e.desc}</p>
    </a>
  `).join(""),lucide.createIcons());
