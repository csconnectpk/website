// Initialize Lucide icons
lucide.createIcons();

// Parallax effect
let lastScrollY = window.scrollY;
const parallaxBg = document.getElementById('parallax-bg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrollY * 0.5}px)`;
  }
  lastScrollY = scrollY;
});

// Features section
const features = [
  { icon: 'users', title: "Community", desc: "Join a thriving network of tech enthusiasts", color: "#00ff9d" },
  { icon: 'brain', title: "Learning", desc: "Access quality CS education resources", color: "#00ffff" },
  { icon: 'globe', title: "Network", desc: "Connect with industry professionals", color: "#7000ff" },
  { icon: 'rocket', title: "Growth", desc: "Accelerate your tech career", color: "#ff00ff" }
];

const featuresContainer = document.getElementById('features');
if (featuresContainer) {
  featuresContainer.innerHTML = features.map(item => `
    <div class="p-6 rounded-lg bg-gradient-to-b from-gray-900 to-black border border-opacity-20 hover:border-opacity-100 transition-all duration-300" style="border-color: ${item.color}">
      <i data-lucide="${item.icon}" class="w-12 h-12 mb-4" style="color: ${item.color}"></i>
      <h3 class="text-xl font-semibold mb-2" style="color: ${item.color}">${item.title}</h3>
      <p class="text-gray-400">${item.desc}</p>
    </div>
  `).join('');
  lucide.createIcons();
}

// Social links section
const socialLinks = [
  {
    icon: 'disc',
    title: 'Discord',
    desc: 'Join our active Discord community',
    url: 'https://discord.com/invite/wXd34sJQ8j',
    color: '#7000ff'
  },
  {
    icon: 'message-circle',
    title: 'WhatsApp',
    desc: 'Connect via WhatsApp group',
    url: 'https://chat.whatsapp.com/EMAtD6mP9YP4L1hlGUIdQ1',
    color: '#00ff9d'
  },
  {
    icon: 'youtube',
    title: 'YouTube',
    desc: 'Watch our educational content',
    url: 'https://www.youtube.com/@csconnectpk',
    color: '#ff00ff'
  },
  {
    icon: 'instagram',
    title: 'Instagram',
    desc: 'Follow us on Instagram',
    url: 'https://www.instagram.com/csconnectpk/#',
    color: '#00ffff'
  }
];

const socialLinksContainer = document.getElementById('social-links');
if (socialLinksContainer) {
  socialLinksContainer.innerHTML = socialLinks.map(item => `
    <a 
      href="${item.url}" 
      target="_blank"
      rel="noopener noreferrer"
      class="p-6 rounded-lg bg-black border border-[${item.color}]/20 hover:border-[${item.color}] hover:transform hover:scale-105 transition-all duration-300"
    >
      <i data-lucide="${item.icon}" class="w-12 h-12 text-[${item.color}] mx-auto mb-4"></i>
      <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
      <p class="text-gray-400">${item.desc}</p>
    </a>
  `).join('');
  lucide.createIcons();
}