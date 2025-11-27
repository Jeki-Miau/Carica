const API_KEY = '6e71376925c64e319a864346252611';

const translations = {
  en: {
    home: "Home",
    about: "About",
    support: "Support",
    loadingTitle: "CariCa\nFind the Weather",
    appTitle: "🌤️ Weather Masterpiece",
    appSubtitle: "Powered by WeatherAPI.com — fast & reliable!",
    searchPlaceholder: "Jakarta, Tokyo, London...",
    searchBtn: "Search",
    geoBtn: "Use My Location",
    hintDefault: "Enter a city name, then press <strong>Search</strong>.",
    wind: "Wind",
    humidity: "Humidity",
    pressure: "Pressure",
    feelsLike: "Feels like",
    aboutTitle: "ℹ️ About This Web",
    aboutP1: "This is a weather web application created exclusively for my <strong>Final Project</strong> in web development class.",
    aboutP2: "Built with <strong>WeatherAPI.com</strong> for real-time data, <strong>Tailwind CSS</strong> for responsive design, and <strong>Anime.js</strong> for smooth animations.",
    developedBy: "🛠️ Developed by: <strong>JekiJek</strong> (Just an Artist)",
    howToTitle: "❓ How to Use",
    howTo1: "Enter a city name (e.g., <code class=\"bg-black/30 px-1 rounded\">Jakarta</code>) and click <strong>Search</strong>.",
    howTo2: "Click <strong>\"Use My Location\"</strong> for automatic detection (allow location access).",
    howTo3: "Weather data will appear instantly — including temperature, humidity, and weather icon.",
    howTo4: "The background features animated meteors and stars that move continuously!",
    supportTitle: "💖 Support Me",
    supportDesc: "If you enjoy this project, you can support me by:",
    donateBtn: "Donate via Saweria",
    donateDesc: "Help me buy coffee & internet 😊",
    followBtn: "Follow on Instagram",
    followDesc: "See more of my projects!",
    starBtn: "Star on GitHub",
    starDesc: "View the source code!",
    connectBtn: "Connect on Behance",
    connectDesc: "Professional portfolio!",
    thankYou: "Thank you for your support! ❤️",
    fetching: "Fetching weather data...",
    cityNotFound: "City not found",
    loadFailed: "Failed to load weather. Please try again.",
    enterCity: "Please enter a city name.",
    geoNotSupported: "Geolocation is not supported in this browser.",
    geoFailed: "Failed to get location",
    geoHint: "Please allow location access and try again."
  },
  id: {
    home: "Home",
    about: "Tentang",
    support: "Dukung",
    loadingTitle: "CariCa\nCari Cuaca",
    appTitle: "🌤️ Weather Masterpiece",
    appSubtitle: "Ditenagai WeatherAPI.com — cepat & andal!",
    searchPlaceholder: "Jakarta, Tokyo, London...",
    searchBtn: "Cari",
    geoBtn: "Gunakan Lokasi Saya",
    hintDefault: "Masukkan nama kota, lalu tekan <strong>Cari</strong>.",
    wind: "Angin",
    humidity: "Kelembapan",
    pressure: "Tekanan",
    feelsLike: "Rasanya",
    aboutTitle: "ℹ️ Tentang Web Ini",
    aboutP1: "Ini adalah aplikasi cuaca berbasis web yang dibuat khusus untuk <strong>Final Project</strong> mata pelajaran pengembangan web.",
    aboutP2: "Menggunakan <strong>WeatherAPI.com</strong> untuk data real-time, <strong>Tailwind CSS</strong> untuk desain responsif, dan <strong>Anime.js</strong> untuk animasi interaktif.",
    developedBy: "🛠️ Dibuat oleh: <strong>JekiJek</strong> (Artist Biasa)",
    howToTitle: "❓ Cara Pakai",
    howTo1: "Masukkan nama kota (misal: <code class=\"bg-black/30 px-1 rounded\">Jakarta</code>) lalu klik <strong>Cari</strong>.",
    howTo2: "Klik <strong>\"Gunakan Lokasi Saya\"</strong> untuk deteksi otomatis (izinkan akses lokasi).",
    howTo3: "Data cuaca akan muncul dalam hitungan detik — termasuk suhu, kelembapan, dan ikon cuaca.",
    howTo4: "Latar belakang menampilkan meteor & bintang yang bergerak terus-menerus!",
    supportTitle: "💖 Dukung Saya",
    supportDesc: "Jika kamu suka web ini, kamu bisa dukung saya dengan cara:",
    donateBtn: "Donasi via Saweria",
    donateDesc: "Bantu saya beli makan 😊",
    followBtn: "Follow Instagram",
    followDesc: "Lihat proyek lainnya!",
    starBtn: "Star di GitHub",
    starDesc: "Lihat kode sumbernya!",
    connectBtn: "Connect di Behance",
    connectDesc: "Jaringan profesional!",
    thankYou: "Terima kasih atas dukunganmu! ❤️",
    fetching: "Mengambil data cuaca...",
    cityNotFound: "Kota tidak ditemukan",
    loadFailed: "Gagal memuat cuaca. Coba lagi.",
    enterCity: "Silakan masukkan nama kota.",
    geoNotSupported: "Geolokasi tidak didukung di browser ini.",
    geoFailed: "Gagal mengakses lokasi",
    geoHint: "Izinkan akses lokasi dan coba lagi."
  }
};

let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('id') ? 'id' : 'en');

function getT(key) {
  return translations[currentLang][key] || key;
}

const canvas = document.getElementById('cosmic-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let stars = [];
let meteors = [];

function initCosmic() {
  stars = [];
  const starCount = Math.floor(window.innerWidth / 10);
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.05 + 0.01
    });
  }
  meteors = [];
  for (let i = 0; i < 6; i++) {
    meteors.push({
      x: Math.random() * canvas.width,
      y: -20,
      length: Math.random() * 40 + 20,
      speed: Math.random() * 2 + 1,
      trail: []
    });
  }
}

function drawCosmic() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, '#14142a');
  grad.addColorStop(1, '#0f0c29');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
    ctx.fill();
    s.opacity += s.speed;
    if (s.opacity > 1 || s.opacity < 0.3) s.speed *= -1;
  });

  meteors.forEach(m => {
    m.y += m.speed;
    m.trail.push({x: m.x, y: m.y});
    if (m.trail.length > 8) m.trail.shift();
    ctx.beginPath();
    ctx.moveTo(m.trail[0].x, m.trail[0].y);
    for (let i = 1; i < m.trail.length; i++) {
      ctx.lineTo(m.trail[i].x, m.trail[i].y);
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();
    if (m.y > canvas.height + 20) {
      m.x = Math.random() * canvas.width;
      m.y = -20;
      m.trail = [];
    }
  });

  requestAnimationFrame(drawCosmic);
}

// === DOM ELEMENTS ===
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const geoBtn = document.getElementById('geoBtn');
const hintEl = document.getElementById('hint');
const card = document.getElementById('card');
const locationEl = document.getElementById('location');
const descEl = document.getElementById('desc');
const tempEl = document.getElementById('temp');
const weatherIcon = document.getElementById('weatherIcon');
const windEl = document.getElementById('wind');
const humEl = document.getElementById('hum');
const pressEl = document.getElementById('press');
const feelsEl = document.getElementById('feels');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');

function updateLanguage(lang) {
  const t = translations[lang];
  
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks[0]) navLinks[0].textContent = t.home;
  if (navLinks[1]) navLinks[1].textContent = t.about;
  if (navLinks[2]) navLinks[2].textContent = t.support;
  
  const loadingTitle = document.querySelector('#loading-screen h1 span');
  if (loadingTitle) loadingTitle.innerHTML = t.loadingTitle.replace('\n', '<br>');
  
  const appTitle = document.querySelector('h1.text-2xl');
  const appSubtitle = document.querySelector('p.text-sm.mb-4');
  if (appTitle) appTitle.innerHTML = t.appTitle;
  if (appSubtitle) appSubtitle.textContent = t.appSubtitle;
  if (cityInput) cityInput.placeholder = t.searchPlaceholder;
  if (searchBtn) searchBtn.textContent = t.searchBtn;
  if (geoBtn) geoBtn.textContent = t.geoBtn;
  if (hintEl) hintEl.innerHTML = t.hintDefault;
  
  const updateLabel = (selector, newText) => {
    const el = document.querySelector(selector);
    if (el && el.childNodes[0]) {
      el.childNodes[0].textContent = newText + ': ';
    }
  };
  updateLabel('div[data-label="wind"]', t.wind);
  updateLabel('div[data-label="humidity"]', t.humidity);
  updateLabel('div[data-label="pressure"]', t.pressure);
  updateLabel('div[data-label="feelsLike"]', t.feelsLike);
  
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const aboutTitle = aboutSection.querySelector('h2');
    const aboutPs = aboutSection.querySelectorAll('p');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    if (aboutPs[0]) aboutPs[0].innerHTML = t.aboutP1;
    if (aboutPs[1]) aboutPs[1].innerHTML = t.aboutP2;
    const devBy = aboutSection.querySelector('.text-sm');
    if (devBy) devBy.innerHTML = t.developedBy;
  }
  
  const howToSection = document.getElementById('how-to');
  if (howToSection) {
    const howToTitle = howToSection.querySelector('h2');
    const howToList = howToSection.querySelectorAll('li');
    if (howToTitle) howToTitle.textContent = t.howToTitle;
    if (howToList[0]) howToList[0].innerHTML = t.howTo1;
    if (howToList[1]) howToList[1].innerHTML = t.howTo2;
    if (howToList[2]) howToList[2].innerHTML = t.howTo3;
    if (howToList[3]) howToList[3].innerHTML = t.howTo4;
  }
  
  const supportSection = document.getElementById('support');
  if (supportSection) {
    const supportTitle = supportSection.querySelector('h2');
    const supportDesc = supportSection.querySelector('p.text-slate-300.mb-4');
    const supportCards = supportSection.querySelectorAll('a.block');
    const thankYou = supportSection.querySelector('.text-center p');
    
    if (supportTitle) supportTitle.textContent = t.supportTitle;
    if (supportDesc) supportDesc.textContent = t.supportDesc;
    if (supportCards[0]) {
      supportCards[0].querySelector('p').textContent = t.donateBtn;
      supportCards[0].querySelector('small').textContent = t.donateDesc;
    }
    if (supportCards[1]) {
      supportCards[1].querySelector('p').textContent = t.followBtn;
      supportCards[1].querySelector('small').textContent = t.followDesc;
    }
    if (supportCards[2]) {
      supportCards[2].querySelector('p').textContent = t.starBtn;
      supportCards[2].querySelector('small').textContent = t.starDesc;
    }
    if (supportCards[3]) {
      supportCards[3].querySelector('p').textContent = t.connectBtn;
      supportCards[3].querySelector('small').textContent = t.connectDesc;
    }
    if (thankYou) thankYou.textContent = t.thankYou;
  }
  
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) langToggle.textContent = lang === 'en' ? 'ID' : 'EN';
  
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

async function fetchWeather(q) {
  loadingEl?.classList.remove('hidden');
  errorEl?.classList.add('hidden');
  hintEl.textContent = getT('fetching');

  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(q)}&aqi=no`);
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const msg = errData.error?.message || getT('cityNotFound');
      throw new Error(msg);
    }
    const data = await res.json();
    renderWeather(data);
    return data;
  } catch (e) {
    errorEl.textContent = e.message;
    errorEl?.classList.remove('hidden');
    loadingEl?.classList.add('hidden');
    hintEl.textContent = getT('loadFailed');
    throw e;
  }
}

function renderWeather(data) {
  const loc = data.location;
  const curr = data.current;

  locationEl.textContent = `${loc.name}, ${loc.country}`;
  descEl.textContent = curr.condition.text;
  tempEl.textContent = `${curr.temp_c}°`;
  feelsEl.textContent = `${curr.feelslike_c}°`;
  windEl.textContent = `${curr.wind_kph} km/h`;
  humEl.textContent = `${curr.humidity}%`;
  pressEl.textContent = `${curr.pressure_mb} hPa`;
  
  weatherIcon.src = curr.condition.icon;
  weatherIcon.alt = curr.condition.text;
  weatherIcon.onerror = () => {
    weatherIcon.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjggMzBDMTAgMzAgNCAyNSA0IDE4QzQgMTEgMTAgNiAxOCA2QzIwIDIgMjYgMCAzMiAyQzM4IDQgNDIgOCA0NCAxNEM1MiAxMiA2MCAxNiA2MCAyNEM2MCAzMiA1MiAzOCA0NCAzOEgxOFYzMFoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';
  };

  loadingEl?.classList.add('hidden');
  anime({
    targets: card,
    opacity: [0, 1],
    translateY: [10, 0],
    duration: 600,
    easing: 'easeOutCubic'
  });
  localStorage.setItem('lastCity', cityInput.value.trim());
}

searchBtn?.addEventListener('click', () => {
  const q = cityInput.value.trim();
  if (q) fetchWeather(q);
  else hintEl.textContent = getT('enterCity');
});

cityInput?.addEventListener('keypress', e => {
  if (e.key === 'Enter') searchBtn.click();
});

geoBtn?.addEventListener('click', () => {
  if (!navigator.geolocation) {
    errorEl.textContent = getT('geoNotSupported');
    errorEl?.classList.remove('hidden');
    return;
  }
  hintEl.textContent = getT('geoHint');
  navigator.geolocation.getCurrentPosition(
    pos => fetchWeather(`${pos.coords.latitude},${pos.coords.longitude}`),
    err => {
      errorEl.textContent = `${getT('geoFailed')}: ${err.message}`;
      errorEl?.classList.remove('hidden');
      hintEl.textContent = getT('geoHint');
    }
  );
});

function animateSections() {
  const sections = ['about', 'how-to', 'support'].map(id => document.getElementById(id)).filter(el => el);
  sections.forEach((el, i) => {
    anime({
      targets: el,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: 'easeOutExpo',
      delay: i * 150 + 300
    });
  });
}


window.addEventListener('DOMContentLoaded', () => {
  initCosmic();
  drawCosmic(); 
  animateSections();

  const last = localStorage.getItem('lastCity') || 'Jakarta';
  if (cityInput) cityInput.value = last;

  fetchWeather(last)
    .then(() => {
      setTimeout(() => {
        anime({
          targets: '#loading-screen',
          opacity: [1, 0],
          duration: 800,
          easing: 'easeInOutQuad',
          complete: () => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) loadingScreen.style.display = 'none';
            document.body.classList.remove('loading');
            anime({
              targets: '#main-content',
              opacity: [0, 1],
              translateY: [10, 0],
              duration: 600,
              easing: 'easeOutCubic'
            });
          }
        });
      }, 800);
    })
    .catch(() => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) loadingScreen.style.display = 'none';
      document.body.classList.remove('loading');
      anime({
        targets: '#main-content',
        opacity: [0, 1],
        duration: 500
      });
    })
    .finally(() => {
      setTimeout(() => {
        updateLanguage(currentLang);
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
          langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'id' : 'en';
            updateLanguage(newLang);
          });
        }
      }, 300);
    });
});