// =============================================
//  IRONOVA – Pro main.js (Elite Version)
// =============================================

// ---------- PRODUCT DATA ----------
const PRODUCTS = [
  { id: 1, name: "PRO WEERSTANDSBANDEN", nameFull: "IRONOVA PRO RESISTANCE BANDS (5-SET)", price: 34.99, oldPrice: 49.99, cat: "kracht", badge: "ELITE", img: "assets/resistance_bands.jpg", desc: "Military-grade resistance bands for home and studio conditioning. 5 tension levels engineered for progressive overload.", features: ["5 Tension Levels", "Aerospace-grade Latex", "Carbon-steel Anchors"] },
  { id: 2, name: "PRO YOGA MAT", nameFull: "IRONOVA ANTI-SLIP RECOVERY MAT", price: 44.95, oldPrice: 64.95, cat: "herstel", badge: "CORE", img: "assets/yoga_mat.jpg", desc: "6mm high-density polymer mat offering absolute grip and joint protection during intense ground work.", features: ["6mm Shock Absorption", "Micro-textured Grip", "Odor-resistant Compound"] },
  { id: 3, name: "HEX DUMBBELLS 2×10KG", nameFull: "IRONOVA VULCANIZED RUBBER HEX DUMBBELLS", price: 59.95, oldPrice: 79.95, cat: "kracht", badge: "NEW", img: "assets/dumbbells.jpg", desc: "Ergonomically contoured and vulcanized for structural integrity. The foundation of any serious strength protocol.", features: ["Vulcanized Coating", "Knurled Steel Handle", "Anti-roll Hex Geometry"] },
  { id: 4, name: "IRON KETTLEBELL 16KG", nameFull: "IRONOVA CAST-IRON KETTLEBELL 16KG", price: 49.95, oldPrice: 69.95, cat: "kracht", badge: "HEAVY", img: "assets/kettlebell.jpg", desc: "Single-cast iron architecture providing perfect weight distribution for ballistic endurance training.", features: ["Single-Cast Physics", "Machined Flat Base", "Tactile Powder Coat"] },
  { id: 5, name: "AERO SPEED ROPE", nameFull: "IRONOVA COMPETITION SPEED ROPE", price: 24.95, oldPrice: 39.95, cat: "cardio", badge: "AERO", img: "assets/jump_rope.jpg", desc: "Precision-machined aluminum handles housing dual bearing systems for frictionless rotation.", features: ["Dual Ball-Bearing", "Aircraft Aluminum", "Micro-adjustable Cable"] },
  { id: 6, name: "TACTICAL FOAM ROLLER", nameFull: "IRONOVA HIGH-DENSITY FOAM ROLLER", price: 29.95, oldPrice: 44.95, cat: "herstel", badge: "RECOVERY", img: "assets/foam_roller.jpg", desc: "Extra-firm molded EPP foam designed for intense myofascial release and tissue mobilization.", features: ["High-Density EPP", "33cm Tactical Grid", "150kg Load Capacity"] },
  { id: 7, name: "COMMAND DUFFEL 40L", nameFull: "IRONOVA COMMANDO DUFFEL BAG 40L", price: 54.95, oldPrice: 74.95, cat: "accessoires", badge: "GEAR", img: "assets/sports_bag.jpg", desc: "Weather-proof modular transport system for all your training gear. Dedicated wet/dry compartments.", features: ["40L Ballistic Nylon", "Ventilated Boot Vault", "Weather-Sealed Zippers"] },
  { id: 8, name: "OBSIDIAN BIDON 1L", nameFull: "IRONOVA OBSIDIAN THERMAL FLASK 1L", price: 32.95, oldPrice: 44.95, cat: "accessoires", badge: "CORE", img: "assets/water_bottle.jpg", desc: "Double-wall vacuum insulated stainless steel. Maintains liquid thermodynamics for up to 24 hours.", features: ["Vacuum Insulation", "Matte Powder Finish", "Leak-Protocol Cap"] },
  { id: 9, name: "ARMOUR GLOVES", nameFull: "IRONOVA HEAVY LIFTING ARMOUR GLOVES", price: 27.95, oldPrice: 39.95, cat: "kracht", badge: "GRIP", img: "assets/lifting_gloves.jpg", desc: "Engineered palm protection with integrated wrist stabilization for max-load lifting sequences.", features: ["Integrated Wrist Wrap", "Tactical Silicone Palm", "Breathable Mesh Matrix"] },
  { id: 10, name: "CORE GLIDER AB WHEEL", nameFull: "IRONOVA DUAL-AXIS AB WHEEL", price: 22.95, oldPrice: 34.95, cat: "kracht", badge: "CORE", img: "assets/ab_roller.jpg", desc: "Dual-wheel stabilization system designed to challenge anterior core engagement safely.", features: ["Dual Wheel Tread", "High-Torque Axis", "Carbon-Steel Shaft"] },
  { id: 11, name: "DOORWAY PULL-UP BAR", nameFull: "IRONOVA TACTICAL DOORWAY PULL-UP BAR", price: 39.95, oldPrice: 59.95, cat: "kracht", badge: "ELITE", img: "assets/pull_up_bar.jpg", desc: "No-drill tension mount architecture. Supports dynamic load capacities up to 150kg.", features: ["Tension-Mount Design", "Multi-Vector Grips", "Non-scuff Endpads"] },
  { id: 12, name: "TITAN PROTEIN SHAKER", nameFull: "IRONOVA TITAN PRO SHAKER 700ML", price: 14.95, oldPrice: 22.95, cat: "accessoires", badge: "ESSENTIAL", img: "assets/protein_shaker.jpg", desc: "BPA-free tritan polymer vessel with surgical steel mixing vortex for perfect consistency.", features: ["Steel Agitator Orb", "700ml Capacity", "Shatter-Resistant Tritan"] }
];

// ---------- STATE ----------
let cart = JSON.parse(localStorage.getItem('ironova_pro_cart') || '[]');
let currentModalProduct = null;
let modalQty = 1;

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  updateCartUI();
  
  initCursor();
  initObservers();
  initParallax();
  
  setupCart();
  setupModal();
  setupFilterBtns();
  
  window.addEventListener('scroll', handleHeaderScroll);
});

// ---------- CUSTOM CURSOR ----------
function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const outline = document.getElementById('cursor-outline');
  
  // Only apply custom cursor on non-touch screens
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px)`;
      
      // Smooth follow for outline
      outline.animate({
        transform: `translate(${x}px, ${y}px)`
      }, { duration: 500, fill: "forwards" });
    });
    
    // Hover interactions
    document.querySelectorAll('a, button, .magnetic, .product-card').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }
}

// ---------- INTERSECTION OBSERVER (REVEAL) ----------
function initObservers() {
  const options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  document.querySelectorAll('.reveal-up, .reveal-scale').forEach(el => observer.observe(el));
}

// ---------- PARALLAX ----------
function initParallax() {
  const elements = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    elements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 0.5;
      el.style.transform = `translateY(${y * speed}px)`;
    });
  });
}

// ---------- HEADER ----------
function handleHeaderScroll() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// ---------- PRODUCTS RENDER ----------
function renderProducts(filter) {
  const grid = document.getElementById('products-grid');
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  
  grid.innerHTML = '';
  filtered.forEach((p, i) => {
    const delay = (i % 4) * 100; // stagger effect
    const card = document.createElement('div');
    card.className = `product-card reveal-up`;
    card.style.transitionDelay = `${delay}ms`;
    
    // Force trigger observer immediately if they are in view
    setTimeout(() => card.classList.add('active'), delay + 50); 
    
    card.innerHTML = `
      <div class="product-img-wrap" onclick="openModal(${p.id})">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='assets/hero.jpg'" />
      </div>
      <div class="product-info">
        <div class="product-cat">${catLabel(p.cat)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">€${p.price.toFixed(2).replace('.', ',')}
          ${p.oldPrice ? `<span class="product-price-old">€${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
        <button class="add-cart-btn magnetic" onclick="addToCart(${p.id}, event)" id="add-btn-${p.id}">ACQUIRE GEAR +</button>
      </div>`;
    grid.appendChild(card);
  });
  
  // Re-bind cursor hover for new elements
  initCursor(); 
}

function catLabel(c) {
  return {kracht:'STRENGTH', cardio:'ENDURANCE', herstel:'RECOVERY', accessoires:'ESSENTIALS'}[c] || c;
}

function setupFilterBtns() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

function filterProducts(filter) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`filter-${filter}`);
  if (btn) btn.classList.add('active');
  
  renderProducts(filter);
  
  const target = document.getElementById('products');
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------- CART ----------
function addToCart(id, e, qty = 1) {
  if (e) e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty += qty; } 
  else { cart.push({ id, qty }); }
  
  saveCart();
  updateCartUI();
  flashCartBtn(id);
  openCartSidebar();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function saveCart() { localStorage.setItem('ironova_pro_cart', JSON.stringify(cart)); }

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = total;
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  const noteEl = document.getElementById('cart-shipping-note');
  const progressFill = document.getElementById('shipping-progress');
  
  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">YOUR ARSENAL IS EMPTY.</p>';
    footer.style.display = 'none';
    return;
  }
  
  let totalPrice = 0;
  container.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    totalPrice += p.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.name}" onerror="this.src='assets/hero.jpg'" />
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <p>€${(p.price * item.qty).toFixed(2).replace('.', ',')} <span style="color:var(--text-muted); font-size: 0.7rem;">(${item.qty}×)</span></p>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})">✕</button>
      </div>`;
  }).join('');
  
  document.getElementById('cart-total-price').textContent = `€${totalPrice.toFixed(2).replace('.', ',')}`;
  
  // Advanced Shipping Progress
  if (totalPrice >= 25) {
    noteEl.textContent = 'FREE SECURE SHIPPING UNLOCKED.';
    noteEl.style.color = '#4caf50';
    progressFill.style.width = '100%';
    progressFill.style.background = '#4caf50';
  } else {
    const left = (25 - totalPrice).toFixed(2).replace('.', ',');
    noteEl.textContent = `ADD €${left} TO UNLOCK FREE SHIPPING`;
    noteEl.style.color = 'var(--orange)';
    progressFill.style.width = `${(totalPrice / 25) * 100}%`;
    progressFill.style.background = 'var(--orange)';
  }
  
  footer.style.display = 'block';
}

function flashCartBtn(id) {
  const btn = document.getElementById(`add-btn-${id}`);
  if (!btn) return;
  const original = btn.textContent;
  btn.textContent = 'ADDED //';
  btn.style.color = '#fff';
  btn.style.borderColor = '#fff';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.color = '';
    btn.style.borderColor = '';
  }, 1000);
}

function openCartSidebar() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function setupCart() {
  document.getElementById('cart-toggle-btn').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.contains('open') ? closeCartSidebar() : openCartSidebar();
  });
  document.getElementById('cart-close').addEventListener('click', closeCartSidebar);
  document.getElementById('cart-overlay').addEventListener('click', closeCartSidebar);
  document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('IRONOVA SECURE CHECKOUT INITIALIZED.\n\nRedirecting to encrypted payment gateway.');
  });
}

// ---------- MODAL ----------
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentModalProduct = p;
  modalQty = 1;
  const modal = document.getElementById('product-modal');
  const inner = document.getElementById('modal-inner');
  
  // Custom pro modal layout
  inner.innerHTML = `
    <div>
      <img class="modal-img" src="${p.img}" alt="${p.name}" onerror="this.src='assets/hero.jpg'" />
    </div>
    <div class="modal-info">
      <div style="font-family:'Syncopate', sans-serif; font-size:0.75rem; color:var(--orange); letter-spacing:0.1em; margin-bottom:10px;">${catLabel(p.cat)} DIVISION</div>
      <h2 class="modal-name">${p.nameFull}</h2>
      <div class="modal-price">€${p.price.toFixed(2).replace('.', ',')}</div>
      <p class="modal-desc">${p.desc}</p>
      
      <div class="modal-features">
        ${p.features.map(f => `<div class="modal-feature">${f}</div>`).join('')}
      </div>
      
      <div style="display:flex; gap:20px; align-items:center;">
        <div style="display:flex; align-items:center; gap:0;">
          <button class="qty-btn" onclick="changeQty(-1)">-</button>
          <div id="modal-qty-num" style="width:50px; text-align:center; font-family:'Syncopate', sans-serif;">1</div>
          <button class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
        <button class="btn btn-primary magnetic" style="flex:1;" onclick="addToCart(${p.id}, null, modalQty); closeModal()">
          ACQUIRE MODULE
        </button>
      </div>
    </div>`;
    
  modal.classList.add('open');
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  initCursor(); // rebind to new elements
}

function changeQty(delta) {
  modalQty = Math.max(1, Math.min(10, modalQty + delta));
  document.getElementById('modal-qty-num').textContent = modalQty;
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('open');
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function setupModal() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', closeModal);
}

// ---------- NEWSLETTER ----------
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if(!input.value) return;
  
  input.style.display = 'none';
  e.target.querySelector('button').style.display = 'none';
  document.getElementById('nl-success').style.display = 'block';
}
