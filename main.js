// =============================================
//  IRONOVA – main.js
// =============================================

// ---------- PRODUCT DATA ----------
const PRODUCTS = [
  {
    id: 1, name: "Pro Weerstandsbanden Set", nameFull: "IRONOVA Pro Weerstandsbanden – 5-Delige Set",
    price: 34.99, oldPrice: 49.99, cat: "kracht",
    badge: "Bestseller", img: "assets/resistance_bands.jpg",
    desc: "Complete set van 5 weerstandsbanden voor kracht- en mobiliteitstraining thuis of in de sportschool.",
    features: ["5 levels van weerstand", "Duurzaam latex materiaal", "Inclusief draagankers", "Geschikt voor beginners & gevorderden"]
  },
  {
    id: 2, name: "Premium Yoga Mat Non-Slip", nameFull: "IRONOVA Premium Non-Slip Yoga & Trainingsmat",
    price: 44.95, oldPrice: 64.95, cat: "herstel",
    badge: "Top Keuze", img: "assets/yoga_mat.jpg",
    desc: "Extra dikke, antislip fitnessmat perfect voor yoga, pilates, stretching en HIIT training.",
    features: ["6mm dikte voor kniecomfort", "Non-slip oppervlak", "Eco-vriendelijk TPE materiaal", "Inclusief draagband"]
  },
  {
    id: 3, name: "Hex Dumbbells Set 2×10kg", nameFull: "IRONOVA Rubber Hex Dumbbells – 2×10kg",
    price: 59.95, oldPrice: 79.95, cat: "kracht",
    badge: "Nieuw", img: "assets/dumbbells.jpg",
    desc: "Professionele hexagonale dumbbells met rubber coating. Antislip greep voor maximale controle.",
    features: ["Rubber hex ontwerp", "Geknopt stalen greep", "Antislip oppervlak", "Verschillende gewichten beschikbaar"]
  },
  {
    id: 4, name: "Premium Iron Kettlebell 16kg", nameFull: "IRONOVA Gegoten IJzeren Kettlebell – 16kg",
    price: 49.95, oldPrice: 69.95, cat: "kracht",
    badge: "Populair", img: "assets/kettlebell.jpg",
    desc: "Professionele gegoten-ijzeren kettlebell met brede handgreep. Perfect voor swings, presses en deadlifts.",
    features: ["Gegoten ijzer constructie", "Brede vlakke basis", "Professionele handgreep", "Eén stuk gegoten"]
  },
  {
    id: 5, name: "Speed Jump Rope Pro", nameFull: "IRONOVA Speed Springtouw – Aluminium Handvatten",
    price: 24.95, oldPrice: 39.95, cat: "cardio",
    badge: "Bestseller", img: "assets/jump_rope.jpg",
    desc: "Professioneel springtouw met kogellager rotatie en verstelbaar stalen kabel. Ideaal voor cardio en boxing.",
    features: ["360° kogellager", "Verstelbare lengte", "Aluminium handvatten", "Breed inzetbaar"]
  },
  {
    id: 6, name: "Foam Roller Spierherstel", nameFull: "IRONOVA High-Density Foam Roller – 33cm",
    price: 29.95, oldPrice: 44.95, cat: "herstel",
    badge: "Aanbevolen", img: "assets/foam_roller.jpg",
    desc: "High-density foam roller voor diepe spiermassage, myofasciale release en sneller herstel na training.",
    features: ["High-density EPP foam", "Multisurface textuur", "33cm lengte", "Bestand tegen 150+ kg"]
  },
  {
    id: 7, name: "Gym Sporttas Premium", nameFull: "IRONOVA Premium Gym Duffel Tas – 40L",
    price: 54.95, oldPrice: 74.95, cat: "accessoires",
    badge: "Nieuw", img: "assets/sports_bag.jpg",
    desc: "Ruime waterdichte trainingstas met apart schoenenvak, natte afdeling en ergonomische schouderbanden.",
    features: ["40 liter inhoud", "Apart schoenenvak", "Waterdicht materiaal", "Ergonomische riem"]
  },
  {
    id: 8, name: "Insulated Sport Bidon 1L", nameFull: "IRONOVA RVS Thermosport Bidon – 1000ml",
    price: 32.95, oldPrice: 44.95, cat: "accessoires",
    badge: "Top Keuze", img: "assets/water_bottle.jpg",
    desc: "Dubbelwandige roestvrijstalen thermosbidon houdt dranken 24u koud en 12u warm. 1 liter inhoud.",
    features: ["Dubbelwandig RVS", "24u koud / 12u warm", "BPA-vrij", "Lekvrij deksel"]
  },
  {
    id: 9, name: "Fitness Trainingshandschoenen", nameFull: "IRONOVA Pro Trainingshandschoenen met Polsbeschermer",
    price: 27.95, oldPrice: 39.95, cat: "kracht",
    badge: "Populair", img: "assets/lifting_gloves.jpg",
    desc: "Professionele fitnesshandschoenen met palmbescherming en polssteun voor veilig en comfortabel tillen.",
    features: ["Lederen palmpad", "Polssteun inbegrepen", "Ventilerend mesh", "Verstelbare sluiting"]
  },
  {
    id: 10, name: "Ab Wheel Core Trainer", nameFull: "IRONOVA Ab Roller – Dubbel Wiel Core Trainer",
    price: 22.95, oldPrice: 34.95, cat: "kracht",
    badge: "Nieuw", img: "assets/ab_roller.jpg",
    desc: "Verstevigde ab roller met dubbel wiel voor maximale stabiliteit en effectieve coretraining.",
    features: ["Dubbel wiel stabiliteit", "Antislip handvatten", "Ingebouwde kniebeschermer", "Max 120kg belasting"]
  },
  {
    id: 11, name: "Deurframe Pull-Up Bar", nameFull: "IRONOVA Verstelbare Pull-Up Bar – Geen Boren",
    price: 39.95, oldPrice: 59.95, cat: "kracht",
    badge: "Bestseller", img: "assets/pull_up_bar.jpg",
    desc: "Multifunctionele pull-up bar voor deurframes. Geen boren nodig. Geschikt voor deur-breedtes 62–100cm.",
    features: ["Geen boren nodig", "62–100cm verstelbaar", "Max gewicht 150kg", "9 gripposities"]
  },
  {
    id: 12, name: "Protein Shaker Pro 700ml", nameFull: "IRONOVA Pro Shaker Fles – 700ml met Mengbal",
    price: 14.95, oldPrice: 22.95, cat: "accessoires",
    badge: "Voordelig", img: "assets/protein_shaker.jpg",
    desc: "Premium shaker fles met RVS mengbal voor klontvrije eiwitshakes. Lekvrij en BPA-vrij.",
    features: ["RVS mengbal", "700ml inhoud", "BPA-vrij Tritan", "Lekvrij schroefdeksel"]
  },
  {
    id: 13, name: "Trainingsbroek Flex Pro", nameFull: "IRONOVA FlexFit Trainingsbroek – Stretch Slim Fit",
    price: 44.95, oldPrice: 59.95, cat: "accessoires",
    badge: "Nieuw", img: "assets/yoga_mat.jpg",
    desc: "Strakke sportbroek van sneldrogend stretch materiaal. Perfecte pasvorm voor training, yoga en dagelijks gebruik.",
    features: ["4-way stretch weefsel", "Sneldrogend", "Diepe zakken", "Reflecterende details"]
  },
  {
    id: 14, name: "Verstelbaar Dumbbell 2–24kg", nameFull: "IRONOVA Verstelbare Dumbbell – 2-24kg in 15 Stappen",
    price: 129.95, oldPrice: 179.95, cat: "kracht",
    badge: "Premium", img: "assets/dumbbells.jpg",
    desc: "Eén dumbbell die 15 gewichten vervangt. Ruimtebesparend en professioneel. Ideaal voor thuisgym.",
    features: ["2kg t/m 24kg in 1", "15 gewichtsstappen", "Snap-lock systeem", "Inclusief houder"]
  },
  {
    id: 15, name: "Cardio Power Plate Mini", nameFull: "IRONOVA Mini Vibratieplaat – Cardio & Afvallen",
    price: 89.95, oldPrice: 119.95, cat: "cardio",
    badge: "Populair", img: "assets/foam_roller.jpg",
    desc: "Compacte mini-vibratieplaat voor vetverbranding, doorbloeding en spierstimulatie. Thuis en kantoor.",
    features: ["99 vibratiesnelheden", "Ultra compact design", "Stille motor", "Tot 120kg draagvermogen"]
  },
  {
    id: 16, name: "Pull Rope Kabelmachine Set", nameFull: "IRONOVA Kabel Pull Rope – Bicep & Tricep Trainer",
    price: 18.95, oldPrice: 29.95, cat: "kracht",
    badge: "Aanrader", img: "assets/resistance_bands.jpg",
    desc: "Multifunctionele kabeltrekkabel voor bicep curls, tricep pushdowns en back exercises. Past op elke machine.",
    features: ["Universele aansluiting", "Katoenen greep", "Anti-oxidant stalen kabel", "Geschikt voor alle machines"]
  },
  {
    id: 17, name: "Sport Cooling Handdoek", nameFull: "IRONOVA Instant Cooling Trainingshanddoek – XL",
    price: 16.95, oldPrice: 24.95, cat: "accessoires",
    badge: "Slim", img: "assets/sports_bag.jpg",
    desc: "Instant cooling sporthanddoek die door nat maken direct 15–20°C koelt. Microvezel XL formaat.",
    features: ["Instant koeleffect", "Microvezel XL (120×30cm)", "Sneldrogend", "Wasbaar op 40°C"]
  },
  {
    id: 18, name: "Yoga Block & Strap Set", nameFull: "IRONOVA Yoga Block & Strap Combiset",
    price: 19.95, oldPrice: 29.95, cat: "herstel",
    badge: "Compleet", img: "assets/yoga_mat.jpg",
    desc: "Complete yoga accessoireset met twee blokken en een 2m verstelbare stretch-riem. Ideaal voor beginners.",
    features: ["2× EVA yoga blokken", "2m verstelbare strap", "Antislip oppervlak", "Milieuvriendelijk EVA"]
  },
  {
    id: 19, name: "Lacrosse Massage Ballen Set", nameFull: "IRONOVA Lacrosse Triggerpoint Massage Ballen – Set van 2",
    price: 15.95, oldPrice: 24.95, cat: "herstel",
    badge: "Herstel", img: "assets/foam_roller.jpg",
    desc: "Triggerpoint massage ballen voor diepe myofasciale release van rug, schouders, billen en voeten.",
    features: ["Hard rubber kern", "6,3cm diameter", "Wasbaar", "Set van 2"]
  },
  {
    id: 20, name: "Pro Resistance Loop Bands", nameFull: "IRONOVA Pro Resistance Loop Bands – 5 Stuks",
    price: 21.95, oldPrice: 32.95, cat: "kracht",
    badge: "Hot Deal", img: "assets/resistance_bands.jpg",
    desc: "Set van 5 korte hip circle weerstandsringen voor glutetraining, heupabductie en warm-ups.",
    features: ["5 weerstandsniveaus", "100% natuurlijk latex", "Antislip textuur", "Reistas inbegrepen"]
  }
];

// ---------- STATE ----------
let cart = JSON.parse(localStorage.getItem('ironova_cart') || '[]');
let activeFilter = 'all';
let modalQty = 1;
let currentModalProduct = null;

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  updateCartUI();
  setupScrollHeader();
  setupHamburger();
  setupCart();
  setupModal();
  setupFilterBtns();
});

// ---------- RENDER PRODUCTS ----------
function renderProducts(filter) {
  const grid = document.getElementById('products-grid');
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  grid.innerHTML = '';
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="product-img-wrap" onclick="openModal(${p.id})">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='assets/hero.jpg'" />
      </div>
      <div class="product-info">
        <div class="product-cat">${catLabel(p.cat)}</div>
        <div class="product-name" onclick="openModal(${p.id})">${p.name}</div>
        <div class="product-desc">${p.desc.substring(0, 80)}…</div>
        <div class="product-footer">
          <div>
            <span class="product-price">€${p.price.toFixed(2).replace('.', ',')}</span>
            ${p.oldPrice ? `<span class="product-price-old">€${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="addToCart(${p.id},event)" id="add-btn-${p.id}" title="Toevoegen aan winkelwagen">+</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function catLabel(c) {
  return {kracht:'Kracht',cardio:'Cardio',herstel:'Herstel',accessoires:'Accessoires'}[c] || c;
}

// ---------- FILTER ----------
function filterProducts(filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`filter-${filter}`);
  if (btn) btn.classList.add('active');
  renderProducts(filter);
  // Scroll to products
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setupFilterBtns() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// ---------- CART ----------
function addToCart(id, e, qty = 1) {
  if (e) e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart();
  updateCartUI();
  flashCartBtn(id);
  openCartSidebar();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() { localStorage.setItem('ironova_cart', JSON.stringify(cart)); }

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = total;
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  const noteEl = document.getElementById('cart-shipping-note');
  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Je winkelwagen is leeg.</p>';
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
          <p>€${(p.price * item.qty).toFixed(2).replace('.', ',')} <small style="color:var(--text-muted);font-weight:400">(${item.qty}×)</small></p>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})">✕</button>
      </div>`;
  }).join('');
  document.getElementById('cart-total-price').textContent = `€${totalPrice.toFixed(2).replace('.', ',')}`;
  if (totalPrice < 25) {
    const left = (25 - totalPrice).toFixed(2).replace('.', ',');
    noteEl.textContent = `🚚 Nog €${left} voor gratis verzending!`;
    noteEl.style.color = 'var(--orange)';
  } else {
    noteEl.textContent = '✅ Je hebt gratis verzending!';
    noteEl.style.color = '#4caf50';
  }
  footer.style.display = 'block';
}

function flashCartBtn(id) {
  const btn = document.getElementById(`add-btn-${id}`);
  if (!btn) return;
  btn.textContent = '✓';
  btn.style.background = 'linear-gradient(135deg,#4caf50,#2e7d32)';
  setTimeout(() => {
    btn.textContent = '+';
    btn.style.background = '';
  }, 1200);
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
    if (document.getElementById('cart-sidebar').classList.contains('open')) {
      closeCartSidebar();
    } else {
      openCartSidebar();
    }
  });
  document.getElementById('cart-close').addEventListener('click', closeCartSidebar);
  document.getElementById('cart-overlay').addEventListener('click', closeCartSidebar);
  document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Bedankt voor je bestelling! Je wordt doorgeleid naar de betaalpagina.\n\nBetaalmethoden: iDEAL · Visa · Mastercard · PayPal · Klarna');
  });
}

// ---------- PRODUCT MODAL ----------
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentModalProduct = p;
  modalQty = 1;
  const modal = document.getElementById('product-modal');
  const inner = document.getElementById('modal-inner');
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;
  inner.innerHTML = `
    <div>
      <img class="modal-img" src="${p.img}" alt="${p.name}" onerror="this.src='assets/hero.jpg'" />
    </div>
    <div class="modal-info">
      <div class="modal-cat">${catLabel(p.cat)} ${discount ? `· <span style="color:var(--orange)">-${discount}%</span>` : ''}</div>
      <div class="modal-name">${p.nameFull}</div>
      <div class="modal-price">€${p.price.toFixed(2).replace('.', ',')}
        ${p.oldPrice ? `<span style="font-size:1rem;color:var(--text-muted);text-decoration:line-through;font-weight:400;margin-left:8px">€${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
      </div>
      <div class="modal-desc">${p.desc}</div>
      <div class="modal-features">
        ${p.features.map(f => `<div class="modal-feature">${f}</div>`).join('')}
      </div>
      <div class="modal-qty">
        <button class="qty-btn" onclick="changeQty(-1)">-</button>
        <span class="qty-num" id="modal-qty-num">1</span>
        <button class="qty-btn" onclick="changeQty(1)">+</button>
      </div>
      <button class="btn btn-primary btn-full" onclick="addToCart(${p.id},null,modalQty);closeModal()">
        In Winkelwagen – €${p.price.toFixed(2).replace('.', ',')}
      </button>
      <p style="font-size:0.78rem;color:var(--text-muted);text-align:center;margin-top:8px">🚚 Gratis verzending vanaf €25 &nbsp;|&nbsp; 🔄 30 dagen retour</p>
    </div>`;
  modal.classList.add('open');
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
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

// ---------- SCROLL HEADER ----------
function setupScrollHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.style.background = 'rgba(13,15,20,0.98)';
      header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
      header.style.background = 'rgba(13,15,20,0.92)';
      header.style.boxShadow = 'none';
    }
  });
}

// ---------- HAMBURGER ----------
function setupHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// ---------- NEWSLETTER ----------
function handleNewsletter(e) {
  e.preventDefault();
  const name = document.getElementById('nl-name').value;
  const email = document.getElementById('nl-email').value;
  if (!name || !email) return;
  document.getElementById('nl-success').style.display = 'block';
  document.getElementById('nl-name').value = '';
  document.getElementById('nl-email').value = '';
  setTimeout(() => {
    document.getElementById('nl-success').style.display = 'none';
  }, 4000);
}

// ---------- CONTACT FORM ----------
function handleContact(e) {
  e.preventDefault();
  document.getElementById('contact-success').style.display = 'block';
  document.getElementById('contact-form').reset();
  setTimeout(() => {
    document.getElementById('contact-success').style.display = 'none';
  }, 4000);
}
