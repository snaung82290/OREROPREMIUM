        // ==================== PRODUCT DATA WITH PACKAGES ====================
        const products = [
            {
                id: 1, name: "MLBB Diamonds", nameMm: "MLBB ဒိုင်းမွန်း", category: "gaming", icon: "fas fa-gem", badge: "hot",
                price: "From 900 Ks", priceMm: "၉၀၀ ကျပ်မှ",
                packages: [
                    { name: "Weekly Diamond Pass", price: 6700 }, 
                    { name: "Twilight Pass", price: 35800 },
                    { name: "Monthly Epic Bundle", price: 17900 }, 
                    { name: "Weekly Elite Bundle", price: 3800 },
                    { name: "11 Dia", price: 900 }, 
                    { name: "22 Dia", price: 1800 }, 
                    { name: "33 Dia", price: 2700 },
                    { name: "44 Dia", price: 3600 }, 
                    { name: "56 Dia", price: 4000 }, 
                    { name: "112 Dia", price: 8000 },
                    { name: "86 Dia", price: 5600 }, 
                    { name: "172 Dia", price: 11800 }, 
                    { name: "257 Dia", price: 17500 },
                    { name: "343 Dia", price: 20800 }, 
                    { name: "429 Dia", price: 25900 }, 
                    { name: "514 Dia", price: 30900 },
                    { name: "600 Dia", price: 36900 }, 
                    { name: "706 Dia", price: 41400 }, 
                    { name: "792 Dia", price: 47400 },
                    { name: "878 Dia", price: 52500 }, 
                    { name: "963 Dia", price: 57500 }, 
                    { name: "1049 Dia", price: 63000 },
                    { name: "1135 Dia", price: 68000 }, 
                    { name: "1220 Dia", price: 73500 }, 
                    { name: "1412 Dia", price: 83500 },
                    { name: "2195 Dia", price: 127500 }, 
                    { name: "2538 Dia", price: 148500 }, 
                    { name: "2901 Dia", price: 168900 },
                    { name: "3688 Dia", price: 212000 }, 
                    { name: "5532 Dia", price: 317000 },
                    { name: "9288 Dia", price: 528000 },
                    { name: "50+Bonus", price: 3900 }, 
                    { name: "150+Bonus", price: 10900 },
                    { name: "250+Bonus", price: 17000 },
                    { name: "500+Bonus", price: 33600 },
                    { name: "Dia 400 (Special)", price: 23000 }, 
                    { name: "Dia 600 (Special)", price: 33000 },
                    { name: "Dia 825 (Special)", price: 43000 }, 
                    { name: "Dia 2150 (Special)", price: 110000 },
                    { name: "Dia 3480 (Special)", price: 178000 }, 
                    { name: "Dia 4360 (Special)", price: 225000 },
                    { name: "Dia 6590 (Special)", price: 318000 }
                ],
                note: "ID ပဲလို | Waiting 30-50 min"
            },
            {
                id: 2, name: "PUBG UC", nameMm: "PUBG UC", category: "gaming", icon: "fas fa-crosshairs", badge: "popular",
                price: "From 4,300 Ks", priceMm: "၄,၃၀၀ ကျပ်မှ",
                packages: [
                    { name: "60 UC", price: 4300 },
                    { name: "120 UC", price: 8500 }, 
                    { name: "180 UC", price: 12800 },
                    { name: "240 UC", price: 17000 }, 
                    { name: "325 UC", price: 22000 }, 
                    { name: "385 UC", price: 25500 },
                    { name: "660 UC", price: 44000 }, 
                    { name: "720 UC", price: 47000 }, 
                    { name: "985 UC", price: 64000 },
                    { name: "1320 UC", price: 86000 }, 
                    { name: "1800 UC", price: 107000 }, 
                    { name: "2460 UC", price: 148500 },
                    { name: "3850 UC", price: 212000 }, 
                    { name: "8100 UC", price: 397000 }
                ],
                note: "KR server unavailable | Process 1-15 mins"
            },
            {
                id: 3, name: "HOK Token", nameMm: "HOK တိုကင်", category: "gaming", icon: "fas fa-dragon", badge: "new",
                price: "From 2,000 Ks", priceMm: "၂,၀၀၀ ကျပ်မှ",
                packages: [
                    { name: "17 Tokens", price: 2000 },
                    { name: "88 Tokens", price: 5700 },
                    { name: "240 Tokens", price: 15700 },
                    { name: "400 Tokens", price: 26000 },
                    { name: "560 Tokens", price: 32800 },
                    { name: "830 Tokens", price: 49000 },
                    { name: "1245 Tokens", price: 69000 },
                    { name: "2508 Tokens", price: 129000 },
                    { name: "4180 Tokens", price: 219000 },
                    { name: "8360 Tokens", price: 419000 },
                    { name: "Weekly Card", price: 7500 },
                    { name: "Weekly Card Plus", price: 16500 }
                ]
            },
            {
                id: 4, name: "Telegram Premium", nameMm: "တယ်လီဂရမ် ပရီမီယံ", category: "telegram", icon: "fab fa-telegram-plane", badge: "popular",
                price: "From 23,800 Ks", priceMm: "၂၃,၈၀၀ ကျပ်မှ",
                packages: [
                    { name: "1 Month (Official)", price: 23800, note: "Full Warranty" },
                    { name: "3 Months (Gift)", price: 48000 }, 
                    { name: "6 Months (Gift)", price: 68000 },
                    { name: "1 Year (Gift)", price: 120000 }
                ]
            },
            {
                id: 5, name: "Telegram Stars", nameMm: "တယ်လီဂရမ် စတား", category: "telegram", icon: "fas fa-star", badge: "hot",
                price: "From 4,000 Ks", priceMm: "၄,၀၀၀ ကျပ်မှ",
                packages: [
                    { name: "50 Stars", price: 4000 },
                    { name: "100 Stars", price: 7900 },
                    { name: "150 Stars", price: 11800 },
                    { name: "200 Stars", price: 15700 },
                    { name: "300 Stars", price: 23500 },
                    { name: "500 Stars", price: 39000 },
                    { name: "1000 Stars", price: 78000 },
                    { name: "SMS Fees (1 week Premium)", price: 10000 }
                ]
            },
            {
                id: 6, name: "CapCut Pro (Share)", nameMm: "CapCut Pro (မျှဝေ)", category: "editing", icon: "fas fa-scissors", badge: "popular",
                price: "From 5,500 Ks", priceMm: "၅,၅၀၀ ကျပ်မှ",
                packages: [
                    { name: "1 Month Share", price: 5500 },
                    { name: "2 Months Share", price: 7000 }
                ]
            },
            {
                id: 7, name: "CapCut Pro (Private)", nameMm: "CapCut Pro (သီးသန့်)", category: "editing", icon: "fas fa-crown", badge: "hot",
                price: "From 13,000 Ks", priceMm: "၁၃,၀၀၀ ကျပ်မှ",
                packages: [
                    { name: "2 Months Private", price: 13000 },
                    { name: "1 Month Private", price: 20000 },
                    { name: "3 Months Private", price: 35000 },
                    { name: "6 Months Private", price: 55000 }
                ],
                note: "Private acc (3 devices)"
            },
            {
                id: 8, name: "Canva Pro Edu", nameMm: "Canva Pro Edu", category: "editing", icon: "fas fa-palette", badge: "new",
                price: "10,000 Ks", priceMm: "၁၀,၀၀၀ ကျပ်",
                packages: [
                    { name: "Lifetime", price: 10000 }
                ]
            },
            {
                id: 9, name: "Jump Jump VPN", nameMm: "Jump Jump VPN", category: "vpn", icon: "fas fa-shield-virus", badge: "popular",
                price: "From 4,500 Ks", priceMm: "၄,၅၀၀ ကျပ်မှ",
                packages: [
                    { name: "1 Device 3 Days", price: 4500 },
                    { name: "1 Device 1 Month", price: 15000 },
                    { name: "2 Device 1 Month", price: 22000 },
                    { name: "2 Device 6 Months", price: 95000 },
                    { name: "2 Device 12 Months", price: 110000 },
                    { name: "1 Device 12 Months (Seller Acc)", price: 70000 }
                ]
            },
            {
                id: 10, name: "ChatGPT Plus", nameMm: "ChatGPT Plus", category: "ai", icon: "fas fa-brain", badge: "hot",
                price: "90,000 Ks", priceMm: "၉၀,၀၀၀ ကျပ်",
                packages: [
                    { name: "1 Month Official", price: 90000, note: "Full Warranty" }
                ]
            },
            {
                id: 11, name: "ChatGPT Go", nameMm: "ChatGPT Go", category: "ai", icon: "fas fa-robot", badge: "new",
                price: "32,000 Ks", priceMm: "၃၂,၀၀၀ ကျပ်",
                packages: [
                    { name: "1 Month Official", price: 32000, note: "Full Warranty" }
                ]
            },
            {
                id: 12, name: "Super Grok AI", nameMm: "Super Grok AI", category: "ai", icon: "fas fa-microchip", badge: "new",
                price: "35,000 Ks", priceMm: "၃၅,၀၀၀ ကျပ်",
                packages: [
                    { name: "1 Month", price: 35000, note: "Full Warranty" }
                ]
            },
            {
                id: 13, name: "Kling AI", nameMm: "Kling AI", category: "ai", icon: "fas fa-video", badge: "hot",
                price: "45,000 Ks", priceMm: "၄၅,၀၀၀ ကျပ်",
                packages: [
                    { name: "1 Month Official", price: 45000, note: "Full Warranty" }
                ]
            }
        ];

        // ==================== GLOBAL STATE ====================
        let currentLang = localStorage.getItem('orero_lang') || 'en';
        let selectedPackage = null;
        let currentProduct = null;

        // ==================== INITIALIZATION ====================
        document.addEventListener('DOMContentLoaded', () => {
            initPreloader();
            initParticles();
            initNavbar();
            initLanguage();
            initProductGrid();
            initCategoryFilters();
            initStatCounter();
            applyLanguage(currentLang);
        });

        function initPreloader() {
            const preloader = document.getElementById('preloader');
            window.addEventListener('load', () => {
                setTimeout(() => { preloader.classList.add('hidden'); setTimeout(() => preloader.remove(), 500); }, 800);
            });
        }

        function initNavbar() {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('navMenu');
            hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); navMenu.classList.toggle('active'); });
            document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => { hamburger.classList.remove('active'); navMenu.classList.remove('active'); }));
        }

        function initLanguage() {
            document.getElementById('langToggle').addEventListener('click', () => {
                currentLang = currentLang === 'en' ? 'mm' : 'en';
                localStorage.setItem('orero_lang', currentLang);
                applyLanguage(currentLang);
                renderProducts(currentFilter);
                document.querySelectorAll('.lang-option').forEach(opt => opt.classList.toggle('active', opt.dataset.lang === currentLang));
            });
            document.querySelectorAll('.lang-option').forEach(opt => opt.classList.toggle('active', opt.dataset.lang === currentLang));
        }

        function applyLanguage(lang) {
            document.documentElement.lang = lang === 'mm' ? 'my' : 'en';
            document.querySelectorAll('[data-en][data-mm]').forEach(el => { el.textContent = el.dataset[lang]; });
        }
        
        const langBtns = document.querySelectorAll('.lang-btn');

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.dataset.lang;
        const currentLang = localStorage.getItem('orero_lang') || 'en';
        if (selectedLang === currentLang) return;

        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        localStorage.setItem('orero_lang', selectedLang);
        applyLanguage(selectedLang);
        renderProducts(currentFilter);   // Product list update
    });
});
        // ========== Theme Toggle ==========
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem('orero_theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('orero_theme', 'light');
    } else {
        localStorage.setItem('orero_theme', 'dark');
    }
});
        // ==================== PRODUCT RENDERING ====================
        let currentFilter = 'all';
        function initProductGrid() {
            renderProducts('all');
        }
        function renderProducts(filter) {
            currentFilter = filter;
            const grid = document.getElementById('productsGrid');
            const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
            grid.innerHTML = filtered.map(p => `
                <div class="product-card" data-category="${p.category}">
                    <span class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</span>
                    <div class="product-icon"><i class="${p.icon}"></i></div>
                    <h3>${currentLang === 'mm' ? p.nameMm : p.name}</h3>
                    <p class="product-category">${p.category.toUpperCase()}</p>
                    <div class="product-price">${currentLang === 'mm' ? p.priceMm : p.price}</div>
                    <button class="btn-buy" onclick="openPackageModal(${p.id})">
                        <i class="fas fa-shopping-cart"></i> <span data-en="Buy Now" data-mm="ဝယ်မည်">${currentLang === 'mm' ? 'ဝယ်မည်' : 'Buy Now'}</span>
                    </button>
                </div>
            `).join('');
            applyLanguage(currentLang);
        }
        function initCategoryFilters() {
            const categories = ['all', 'gaming', 'telegram', 'editing', 'vpn', 'ai'];
            const container = document.getElementById('categoryFilters');
            container.innerHTML = categories.map(cat => {
                const label = cat === 'all' ? { en: 'All', mm: 'အားလုံး' } : { en: cat.charAt(0).toUpperCase()+cat.slice(1), mm: cat };
                return `<button class="filter-btn ${cat==='all'?'active':''}" data-filter="${cat}">
                    ${cat!=='all'?`<i class="fas ${cat==='gaming'?'fa-gamepad':cat==='telegram'?'fa-paper-plane':cat==='editing'?'fa-film':cat==='vpn'?'fa-shield-alt':'fa-robot'}"></i>`:''}
                    <span data-en="${label.en}" data-mm="${label.mm}">${label.en}</span>
                </button>`;
            }).join('');
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    renderProducts(btn.dataset.filter);
                });
            });
            applyLanguage(currentLang);
        }

        // ==================== MODAL LOGIC ====================
        function openPackageModal(productId) {
            currentProduct = products.find(p => p.id === productId);
            if (!currentProduct) return;
            selectedPackage = null;
            document.getElementById('modalTitle').textContent = currentLang === 'mm' ? currentProduct.nameMm : currentProduct.name;
            const body = document.getElementById('modalBody');
            body.innerHTML = `<div class="package-grid">${currentProduct.packages.map((pkg, idx) => `
                <div class="package-item" data-index="${idx}" onclick="selectPackage(${idx})">
                    <div class="pkg-name">${pkg.name}</div>
                    <div class="pkg-price">${pkg.price.toLocaleString()} Ks</div>
                    ${pkg.note ? `<small style="color:#a0a0b8;">${pkg.note}</small>` : ''}
                </div>
            `).join('')}</div>`;
            document.getElementById('selectedAmount').textContent = '-';
            document.getElementById('packageModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeModal() {
            document.getElementById('packageModal').classList.remove('active');
            document.body.style.overflow = '';
        }
        function selectPackage(index) {
            selectedPackage = currentProduct.packages[index];
            document.querySelectorAll('.package-item').forEach(item => item.classList.remove('selected'));
            document.querySelector(`.package-item[data-index="${index}"]`).classList.add('selected');
            document.getElementById('selectedAmount').textContent = `${selectedPackage.price.toLocaleString()} Ks`;
        }
        function proceedToPayment() {
            if (!selectedPackage) {
                showToast(currentLang === 'mm' ? 'ကျေးဇူးပြု၍ package တစ်ခုရွေးပါ' : 'Please select a package first', 'error');
                return;
            }
            const productName = currentLang === 'mm' ? currentProduct.nameMm : currentProduct.name;
            const msg = currentLang === 'mm'
                ? `${productName} - ${selectedPackage.name} (${selectedPackage.price.toLocaleString()} Ks) အတွက် ငွေပေးချေပြီး Screenshot နှင့် Game ID/အကောင့်အချက်အလက်ကို @ORERO_69 သို့ Telegram DM ပို့ပေးပါ။`
                : `Please pay ${selectedPackage.price.toLocaleString()} Ks for ${productName} (${selectedPackage.name}) via KBZ Pay/WavePay/UAB/AYA to 09798694091 (Win Cho) with note "Payment/Shopping". Then send screenshot and your Game ID/account info to @ORERO_69 on Telegram.`;
            showToast(msg, 'success');
            closeModal();
            window.open('https://t.me/ORERO_69', '_blank');
        }
        document.getElementById('packageModal').addEventListener('click', function(e) { if (e.target === this) closeModal(); });

        // ==================== UTILS ====================
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => showToast(currentLang === 'mm' ? 'ကူးယူပြီးပါပြီ!' : 'Copied!', 'success'));
        }
        function showToast(message, type = 'info') {
            const toast = document.getElementById('toast');
            toast.innerHTML = `<i class="fas ${type==='success'?'fa-check-circle':type==='error'?'fa-exclamation-circle':'fa-info-circle'}"></i> ${message}`;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 4000);
        }
        function initStatCounter() {
            const stats = document.querySelectorAll('.stat-number[data-count]');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target, target = parseInt(el.dataset.count);
                        let current = 0;
                        const step = target / 100;
                        const timer = setInterval(() => {
                            current += step;
                            if (current >= target) { el.textContent = target; clearInterval(timer); }
                            else el.textContent = Math.floor(current);
                        }, 20);
                        observer.unobserve(el);
                    }
                });
            }, { threshold: 0.5 });
            stats.forEach(s => observer.observe(s));
        }

        // ==================== PARTICLES ====================
        function initParticles() {
            const canvas = document.getElementById('particleCanvas'), ctx = canvas.getContext('2d');
            let particles = [];
            function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
            resize(); window.addEventListener('resize', resize);
            class Particle {
                constructor() { this.reset(); }
                reset() {
                    this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 2 + 0.5; this.speedX = (Math.random() - 0.5) * 0.5;
                    this.speedY = (Math.random() - 0.5) * 0.5; this.opacity = Math.random() * 0.5 + 0.1;
                }
                update() {
                    this.x += this.speedX; this.y += this.speedY;
                    if (this.x < -10) this.x = canvas.width+10; if (this.x > canvas.width+10) this.x = -10;
                    if (this.y < -10) this.y = canvas.height+10; if (this.y > canvas.height+10) this.y = -10;
                }
                draw(ctx) {
                    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
                    ctx.fillStyle = `rgba(139,92,246,${this.opacity})`; ctx.fill();
                }
            }
            for (let i=0; i<80; i++) particles.push(new Particle());
            function animate() {
                ctx.clearRect(0,0,canvas.width,canvas.height);
                particles.forEach(p => { p.update(); p.draw(ctx); });
                requestAnimationFrame(animate);
            }
            animate();
        }
