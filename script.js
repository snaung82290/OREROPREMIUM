        :root {
            --bg-primary: #0a0a0f;
            --bg-secondary: #0f0f1a;
            --bg-card: #12121f;
            --bg-card-hover: #1a1a2e;
            --text-primary: #e8e8f0;
            --text-secondary: #a0a0b8;
            --accent-purple: #8b5cf6;
            --accent-purple-glow: rgba(139, 92, 246, 0.4);
            --accent-cyan: #00d4ff;
            --accent-cyan-glow: rgba(0, 212, 255, 0.4);
            --accent-gold: #f59e0b;
            --accent-gold-glow: rgba(245, 158, 11, 0.4);
            --accent-rose: #f43f5e;
            --border-color: rgba(255, 255, 255, 0.06);
            --border-glow: rgba(139, 92, 246, 0.15);
            --gradient-hero: linear-gradient(135deg, #8b5cf6 0%, #00d4ff 50%, #f59e0b 100%);
            --shadow-glow-purple: 0 0 30px rgba(139, 92, 246, 0.3);
            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 20px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --font-display: 'Orbitron', sans-serif;
            --font-body: 'Rajdhani', sans-serif;
            --font-myanmar: 'Noto Sans Myanmar', sans-serif;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; scrollbar-width: thin; scrollbar-color: var(--accent-purple) var(--bg-primary); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg-primary); }
        ::-webkit-scrollbar-thumb { background: var(--accent-purple); border-radius: 3px; }
        body {
            font-family: var(--font-body);
            background: var(--bg-primary);
            color: var(--text-primary);
            overflow-x: hidden;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }
        [data-mm] { font-family: var(--font-myanmar); }
        .preloader {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: var(--bg-primary); display: flex; align-items: center; justify-content: center;
            z-index: 9999; transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        .preloader.hidden { opacity: 0; visibility: hidden; }
        .preloader-content { text-align: center; }
        .glitch-text {
            font-family: var(--font-display); font-size: 3rem; font-weight: 900;
            color: var(--accent-purple); letter-spacing: 8px;
        }
        .loading-bar { width: 200px; height: 3px; background: rgba(255,255,255,0.1); margin: 20px auto 0; border-radius: 3px; overflow: hidden; }
        .loading-fill { display: block; width: 0; height: 100%; background: var(--gradient-hero); border-radius: 3px; animation: loadingFill 1.5s ease-in-out forwards; }
        @keyframes loadingFill { 0% { width: 0; } 100% { width: 100%; } }

        .particle-canvas { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; opacity: 0.3; }

        .navbar {
            position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; padding: 15px 0;
            transition: var(--transition); background: rgba(10,10,15,0.8); backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
        }
        .nav-container { max-width: 1300px; margin: 0 auto; padding: 0 30px; display: flex; align-items: center; justify-content: space-between; }
        .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .logo-icon-img {
                height: 2rem;      /* လိုသလောက်ပြောင်းပါ */
                width: auto;       /* လိုသလောက်ပြောင်းပါ */
                display: block;
                background: white;
                padding: 4px;
                border-radius: 50%;
        }
        .logo-text { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; color: #fff; letter-spacing: 2px; }
        .logo-highlight { color: var(--accent-purple); }
        .nav-menu { display: flex; list-style: none; gap: 5px; }
        .nav-link { color: var(--text-secondary); text-decoration: none; padding: 8px 16px; border-radius: var(--radius-sm); font-weight: 500; font-size: 0.95rem; transition: var(--transition); }
        .nav-link:hover, .nav-link.active { color: #fff; background: rgba(139,92,246,0.1); }
        .nav-actions { display: flex; align-items: center; gap: 15px; }
        .lang-toggle {
    display: flex;
    align-items: center;
    gap: 4px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 4px 8px;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 0.85rem;
}

.lang-btn {
    background: none;
    border: none;
    color: #fff;                  /* Inactive: white */
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 16px;
    transition: all 0.3s;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
}

.lang-btn.active {
    color: var(--accent-cyan);    /* Active: cyan */
    background: rgba(0, 212, 255, 0.15);
    box-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
}

.lang-divider {
    color: var(--border-color);
    margin: 0 2px;
    pointer-events: none;
}
        /* ========== Theme Toggle Button ========== */
        .toggle-container {
             height: 40px;                 /* လိုချင်တဲ့ အမြင့် သတ်မှတ်ပါ */
             min-width: 80px;
                background: rgba(255,255,255,0.05);
                border: 1px solid var(--border-color);
                border-radius: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                padding: 0 0 0 0;
                position: relative;
                transition: var(--transition);
}
.toggle-container:hover {
    border-color: var(--accent-purple);
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
}
.mode-text {
    display: flex;
    flex-direction: row;
    color: #fff;
    pointer-events: none;
    font-size: 0.75rem;
}

.day-text {
    opacity: 0.5;
    transition: opacity 0.3s;
}
.night-text {
    opacity: 1;
    transition: opacity 0.3s;
}

/* Active state for light mode */
body.light-mode .day-text {
    opacity: 1;
}
body.light-mode .night-text {
    opacity: 0.5;
}

.toggle-circle {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: var(--accent-purple);
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55), background 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
}
.nav-actions {
    display: flex;
    align-items: center;
    gap: 20px;                   /* ခလုတ်နှစ်ခုကြား အကွာအဝေး */
}
/* Circle moves to right when light mode */
body.light-mode .toggle-circle {
    transform: translateX(48px);
    background: var(--accent-gold);
    box-shadow: 0 0 15px rgba(245, 158, 11, 0.7);
}

/* Icons */
.toggle-circle .icon {
    position: absolute;
    font-size: 1.1rem;
    transition: opacity 0.3s, transform 0.3s;
    color: #fff;
}

.sun-icon {
    opacity: 0;
    transform: scale(0.5);
}

.moon-icon {
    opacity: 1;
    transform: scale(1);
}

body.light-mode .sun-icon {
    opacity: 1;
    transform: scale(1);
}
body.light-mode .moon-icon {
    opacity: 0;
    transform: scale(0.5);
}

/* Light Mode Global Overrides (အောက်မှာ လိုအပ်သလို ချိန်ပါ) */
body.light-mode {
    --bg-primary: #f5f5fa;
    --bg-secondary: #e8e8f0;
    --bg-card: #ffffff;
    --bg-card-hover: #f0f0f8;
    --text-primary: #1a1a2e;
    --text-thirdary: #ffffff;
    --text-secondary: #555570;
    --border-color: rgba(0, 0, 0, 0.1);
    --border-glow: rgba(139, 92, 246, 0.2);
}
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
        .hamburger span { width: 25px; height: 2px; background: #fff; border-radius: 2px; transition: var(--transition); }
        .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
        /* ========== Promo Marquee (CSS Animation) ========== */
.promo-marquee {
    padding: 8px 0;
    max-width: 1300px;
    margin: 0 auto;
    align-items: center;
    color: var(--accent-cyan);
    font-weight: 600;
    font-family: var(--font-body);
    font-size: 0.9rem;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
}

.marquee-inner {
    display: inline-block;
    white-space: nowrap;
    animation: marqueeScroll 30s linear infinite;
    padding-left: 100%; /* Screen ရဲ့ ညာဘက်ကနေ စဝင်လာမယ် */
}

.marquee-item {
    margin: 0 5px;
}

.marquee-sep {
    margin: 0 15px;
    opacity: 0.8;
}

/* Animation */
@keyframes marqueeScroll {
    0% {
        transform: translateX(0%);
    }
    100% {
        /* စာသားတစ်ဝက်ကို translate လုပ်ပြီး Loop လိုက်မယ် */
        transform: translateX(-50%);
    }
}

/* Mouse hover ဆို ရပ်မယ် */
.promo-marquee:hover .marquee-inner {
    animation-play-state: paused;
}
        .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; padding: 120px 30px 60px; text-align: center; }
        .hero-overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 70%); z-index: 0; }
        .hero-content { position: relative; z-index: 1; max-width: 800px; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.3); padding: 8px 20px; border-radius: 25px; font-size: 0.85rem; color: var(--accent-cyan); margin-bottom: 30px; }
        .pulse-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); } 50% { box-shadow: 0 0 0 12px rgba(34,197,94,0); } }
        .hero-title { font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 3.5rem); font-weight: 800; line-height: 1.5; margin-bottom: 20px; }
        .gradient-text { background: var(--gradient-hero); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-subtitle { font-size: 1.15rem; color: var(--text-secondary); max-width: 550px; margin: 0 auto 35px; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: var(--radius-md); font-weight: 600; font-size: 1rem; cursor: pointer; text-decoration: none; transition: var(--transition); font-family: var(--font-body); border: none; }
        .hero-buttons { display: flex; gap: 20px; justify-content: center; }
        .btn-primary { background: var(--accent-purple); color: #fff; box-shadow: var(--shadow-glow-purple); }
        .btn-primary:hover { background: #7c3aed; transform: translateY(-2px); }
        .btn-outline { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.2); }
        .btn-outline:hover { border-color: var(--accent-cyan); background: rgba(0,212,255,0.05); }
        .hero-stats { display: flex; max-width: 1300px; padding: 10px 10px 10px 10px; gap: 40px; justify-content: space-around; margin-top: 50px; align-items: center; border-radius: var(--radius-lg); }
        .stat-item { font-family: var(--font-display);text-align: center; display: flex; flex-direction: row; gap: 10px; align-items: baseline; }
        .stat-number { font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: #ffffff;  }
        .stat-label { font-size: 1.5rem; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
        

        section { padding: 80px 30px; position: relative; z-index: 1; }
        .section-header { text-align: center; margin-bottom: 50px; }
        .section-title { font-family: var(--font-display); font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 12px; }
        .title-icon { color: var(--accent-gold); font-size: 1.8rem; }
        .category-filters { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 40px; }
        .filter-btn { padding: 10px 20px; border-radius: 25px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); color: var(--text-secondary); cursor: pointer; font-weight: 500; font-size: 0.9rem; transition: var(--transition); font-family: var(--font-body); display: flex; align-items: center; gap: 6px; }
        .filter-btn:hover, .filter-btn.active { background: rgba(139,92,246,0.15); border-color: var(--accent-purple); color: #fff; box-shadow: 0 0 15px rgba(139,92,246,0.2); }
        .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; max-width: 1300px; margin: 0 auto; }
        .product-card {
            background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg);
            padding: 25px; transition: var(--transition); position: relative; overflow: hidden; cursor: default;
        }
        .product-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--gradient-hero); opacity: 0; transition: var(--transition); }
        .product-card:hover { background: var(--bg-card-hover); border-color: var(--border-glow); transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.4), var(--shadow-glow-purple); }
        .product-card:hover::before { opacity: 1; }
        .product-badge { position: absolute; top: 15px; right: 15px; padding: 5px 12px; border-radius: 15px; font-size: 0.75rem; font-weight: 600; }
        .badge-hot { background: rgba(244,63,94,0.2); color: #f43f5e; }
        .badge-popular { background: rgba(245,158,11,0.2); color: #f59e0b; }
        .badge-new { background: rgba(0,212,255,0.2); color: #00d4ff; }
        .product-icon { font-size: 2.5rem; margin-bottom: 15px; }
        .product-card h3 { font-family: var(--font-display); font-size: 1.2rem; font-weight: 600; margin-bottom: 6px; }
        .product-category { font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
        .product-price { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--accent-gold); margin-bottom: 15px; }
        .btn-buy { width: 100%; padding: 12px; background: rgba(139,92,246,0.2); border: 1px solid rgba(139,92,246,0.3); color: var(--accent-cyan); border-radius: var(--radius-sm); cursor: pointer; font-weight: 600; transition: var(--transition); font-family: var(--font-body); }
        .btn-buy:hover { background: var(--accent-purple); border-color: var(--accent-purple); box-shadow: var(--shadow-glow-purple); }

        .payment-container { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 25px; }
        .payment-methods-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .payment-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 20px; text-align: center; transition: var(--transition); }
        .payment-card-inner { display: flex; flex-direction: column; gap: 12px; align-items: center; }
        .payment-icon {height: 3rem; width: auto; display: block; flex-direction: column; gap: 10px; align-self: center; background: white; padding: 4px; border-radius: 5px; }
        .payment-card:hover { border-color: var(--accent-purple); box-shadow: var(--shadow-glow-purple); transform: translateY(-3px); }
        .payment-icon-fallback { font-size: 2.5rem; color: var(--accent-cyan); }
        .payment-name { font-weight: 600; font-size: 0.9rem; flex-direction: column; gap: 10px; align-self: center; color: var(--text-secondary); }
        .payment-details-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 25px 30px; }
        .payment-details-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; font-size: 1.2rem; color: var(--accent-gold); }
        .detail-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border-color); flex-wrap: wrap; }
        .detail-label { font-size: 0.85rem; color: white; min-width: 130px; }
        .detail-value { font-weight: 600; color: var(--accent-cyan); font-size: 1.2rem; }
        .detail-value.highlight { font-family: 'Rajdhani'; color: var(--accent-cyan); font-size: 1.2rem; }
        .copy-btn { background: rgba(255,255,255,0.05); border: 1px solid var(--border-color); color: var(--accent-cyan); padding: 6px 6px 6px 6px; border-radius: var(--radius-sm); cursor: pointer; transition: var(--transition); }
        .alert-row { background: rgba(244,63,94,0.05); border-radius: var(--radius-sm); padding: 12px 15px; border: 1px solid rgba(244,63,94,0.2); }
        .alert-text { color: #f43f5e !important; font-size: 0.9rem !important; }
        .telegram-card { background: linear-gradient(145deg, #1a3a4a 0%, #0f1f2e 100%); border: 1px solid rgba(0,136,204,0.3); border-radius: var(--radius-lg); padding: 35px; text-align: center; position: relative; }
        .btn-telegram { background: #0088cc; color: #fff; font-size: 1.1rem; padding: 16px 32px; border-radius: var(--radius-lg); box-shadow: 0 0 30px rgba(0,136,204,0.4); display: inline-flex; align-items: center; gap: 10px; text-decoration: none; }
        .btn-telegram:hover { background: #0099dd; transform: translateY(-3px); }

        .steps-container { display: flex; align-items: flex-start; justify-content: center; gap: 0; max-width: 1100px; margin: 0 auto; flex-wrap: wrap; }
        .step-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 30px 25px; text-align: center; flex: 1; min-width: 200px; max-width: 240px; transition: var(--transition); position: relative; }
        .step-card:hover { border-color: var(--accent-purple); box-shadow: var(--shadow-glow-purple); transform: translateY(-5px); }
        .step-card::after { content: attr(data-step); position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--accent-purple); color: #fff; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 0.8rem; }
        .step-connector { display: flex; align-items: center; padding: 0 5px; margin-top: 40px; }
        .step-connector span { width: 40px; height: 2px; background: linear-gradient(90deg, var(--accent-purple), var(--accent-cyan)); display: block; }

        .contact-container { max-width: 500px; margin: 0 auto; }
        .contact-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 35px; text-align: center; }
        .contact-icon-telegram { font-size: 3rem; color: #0088cc; margin-bottom: 12px; }
        .contact-link { color:#00d4ff; font-size: 1.1rem; font-weight: 600; text-decoration: none; transition: var(--transition); }
        .footer { 
            background: var(--bg-primary); 
            border-top: 1px solid var(--border-color); 
            padding: 30px; 
            text-align: center; 
            color: var(--text-secondary); 
            font-size: 0.9rem;

        }

        /* Modal */
        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 2000; display: none; align-items: center; justify-content: center; backdrop-filter: blur(4px); }
        .modal-overlay.active { display: flex; }
        .modal {
            background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg);
            width: 90%; max-width: 900px; max-height: 85vh; overflow: hidden; display: flex; flex-direction: column;
            box-shadow: 0 0 60px rgba(139,92,246,0.3);
        }
        .modal-header { padding: 20px 25px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; }
        .modal-header h3 { font-family: var(--font-display); font-size: 1.3rem; }
        .modal-close { background: none; border: none; color: var(--text-secondary); font-size: 1.5rem; cursor: pointer; }
        .modal-body { padding: 20px; overflow-y: auto; flex: 1; }
        .package-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .package-item {
            background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md);
            padding: 15px; text-align: center; cursor: pointer; transition: var(--transition);
        }
        .package-item:hover, .package-item.selected { border-color: var(--accent-purple); box-shadow: 0 0 15px rgba(139,92,246,0.3); background: var(--bg-card-hover); }
        .package-item .pkg-name { font-size: 0.95rem; font-weight: 600; margin-bottom: 5px; }
        .package-item .pkg-price { color: var(--accent-gold); font-weight: 700; font-family: var(--font-display); font-size: 1.1rem; }
        .modal-footer { padding: 15px 25px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
        .selected-total { font-size: 1.2rem; font-weight: 600; }
        .selected-total span { color: var(--accent-gold); font-family: var(--font-display); }
        .btn-proceed { background: #0088cc; color: #ffff; padding: 12px 24px; border-radius: var(--radius-md); border: none; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 8px; font-family: var(--font-body); }
        .toast-notification { position: fixed; bottom: 30px; right: 0px; background: var(--bg-card); border: 1px solid #22c55e; color: #fff; padding: 14px 22px; border-radius: var(--radius-md); z-index: 9998; font-weight: 500; transform: translateX(120%); transition: transform 0.4s; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 10px; }
        .toast-notification.show { transform: translateX(0); }

        @media (max-width: 768px) {
            .nav-menu { position: fixed; top: 0; right: -100%; width: 280px; height: 100vh; background: rgba(10,10,15,0.98); flex-direction: column; padding: 100px 30px 30px; gap: 5px; transition: var(--transition); backdrop-filter: blur(20px); border-left: 1px solid var(--border-color); }
            .nav-menu.active { right: 0; }
            .hamburger { display: flex; }
            .payment-methods-grid { grid-template-columns: repeat(2, 1fr); }
            .package-grid { grid-template-columns: repeat(2, 1fr); }
            .steps-container { flex-direction: column; align-items: center; gap: 20px; }
            .step-connector { display: none; }
        }
        @media (max-width: 480px) {
            .package-grid { grid-template-columns: 1fr; }
            .products-grid { grid-template-columns: 1fr; }
        }
