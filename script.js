
/* INSATRÉ shared script: header, footer, cart and products */

const SOCIAL = {
  fb: "https://www.facebook.com/",
  ig: "https://www.instagram.com/insatre.official/",
  tt: "https://www.tiktok.com/",
  web: "https://insatre.vercel.app//"
};

const CATS = {
  hijabs: {
    t: "Hijabs",
    d: "Soft, breathable scarves in chiffon, jersey and silk, made to drape beautifully all day.",
    g: ["#0f4c45", "#2f8a78"]
  },
  niqabs: {
    t: "Niqabs",
    d: "Lightweight, comfortable face veils in clean, elegant cuts.",
    g: ["#1d1517", "#6b3a4a"]
  },
  "modest-clothing": {
    t: "Modest Clothing",
    d: "Abayas and modest sets designed for comfort, movement and grace.",
    g: ["#a8445c", "#e9a5a0"]
  },
  accessories: {
    t: "Accessories",
    d: "Pins, caps and finishing touches that complete every look.",
    g: ["#c8923f", "#0f4c45"]
  }
};


/* PRODUCT DATA */

const P = [

  // Hijabs
  ["Chiffon Hijab", "hijabs", 1800, "", "#2f8a78", "#bfe0d5", "chiffon.jpg"],
  ["Jersey Hijab", "hijabs", 1500, "", "#0f4c45", "#7fb8a8", "jersey.jpg"],
  ["Silk Satin Hijab", "hijabs", 2400, "", "#a8445c", "#f1c3bd", "silk.jpg"],
  ["Crinkle Cotton Hijab", "hijabs", 1300, "", "#c8923f", "#f1dfb8", "crinkle.jpg"],

  // Niqabs
  ["Classic Niqab", "niqabs", 900, "", "#1d1517", "#6b3a4a", "classic.jpg"],
  ["Saudi Niqab", "niqabs", 1000, "", "#2b2326", "#8a5a6a", "saudi.jpg"],
  ["Half Niqab", "niqabs", 500, "", "#3b2c31", "#a8445c", "Half.jpg"],
  ["Eid Embroidered Niqab", "niqabs", 1600, "", "#0f4c45", "#c8923f", "embro.jpg"],

  // Modest Clothing
  ["Nida Abaya", "modest-clothing", 6500, "", "#14201e", "#2f8a78", "nida.jpg"],
  ["Open Front Abaya", "modest-clothing", 7800, "", "#a8445c", "#e9a5a0", "frontopen.jpg"],
  ["Linen Co-ord Set", "modest-clothing", 5400, "", "#c8923f", "#f1dfb8", "cords.jpg"],
  ["Layered Overcoat", "modest-clothing", 8900, "", "#0f4c45", "#7fb8a8", "coat.jpg"],

  // Accessories
  ["Pearl Pin Set", "accessories", 900, "", "#c8923f", "#f6ead2", "pearl.jpg"],
  ["Under-scarf Cap", "accessories", 600, "", "#a8445c", "#f1c3bd", "undercap.jpg"],
  ["Magnetic Hijab Pins", "accessories", 750, "", "#0f4c45", "#c8923f", "magnet.jpg"],
  ["Gift Box Set", "accessories", 3200, "", "#6b3a4a", "#f4dcd5", "giftbox.jpg"]

].map((p, i) => ({

  id: i + 1,
  name: p[0],
  cat: p[1],
  price: p[2],
  badge: p[3],
  a: p[4],
  b: p[5],
  image: p[6] || "",

  // Category colour options
  colors: (
    p[1] === "hijabs" ? [
      { name: "Black", hex: "#171717" },
      { name: "Beige", hex: "#D8C3A5" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Dusty Pink", hex: "#D99AA5" },
      { name: "Brown", hex: "#795548" },
      { name: "Navy Blue", hex: "#263B5A" }
    ] :

    p[1] === "niqabs" ? [
      { name: "Black", hex: "#171717" },
      { name: "Coffee", hex: "#49352A" },
      { name: "Chocolate", hex: "#684333" },
      { name: "Beige", hex: "#D8C3A5" },
      { name: "Maroon", hex: "#6B263B" }
    ] :

    p[1] === "modest-clothing" ? [
      { name: "Black", hex: "#171717" },
      { name: "Mocha", hex: "#8A6A55" },
      { name: "Stone", hex: "#C8BBA8" },
      { name: "Olive", hex: "#687052" },
      { name: "Navy", hex: "#263B5A" }
    ] : [
      { name: "Black", hex: "#171717" },
      { name: "Gold", hex: "#C69A45" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Rose Pink", hex: "#D99AA5" },
      { name: "Pearl", hex: "#F4EBDD" }
    ]
  )

}));


/* HELPER FUNCTIONS */

const $ = s => document.querySelector(s);

const fmt = n => "Rs. " + n.toLocaleString("en-PK");


/* SHOPPING CART */

let cart = [];

try {
  cart = JSON.parse(localStorage.getItem("insatre_cart") || "[]");
  if (!Array.isArray(cart)) cart = [];
} catch (e) {
  cart = [];
}

const save = () => {
  try {
    localStorage.setItem("insatre_cart", JSON.stringify(cart));
  } catch (e) {}
};


/* NAVIGATION */

const NAV = [
  ["index.html", "Home"],
  ["hijabs.html", "Hijabs"],
  ["niqabs.html", "Niqabs"],
  ["modest-clothing.html", "Modest Clothing"],
  ["accessories.html", "Accessories"],
  ["contact.html", "Contact"]
];

const here = location.pathname.split("/").pop() || "index.html";


/* SOCIAL ICONS */

const ic = (id, label, path) => `
<a id="s-${id}" target="_blank" rel="noopener"
   aria-label="${label}" title="${label}">
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    ${path}
  </svg>
</a>`;


/* HEADER */

document.body.insertAdjacentHTML("afterbegin", `
<div class="bar">FREE DELIVERY ON SELECTED ORDERS</div>

<header>

  <button class="burger" id="burger" aria-label="Menu">☰</button>

  <a href="index.html" class="brand" aria-label="INSATRÉ home">
    <i class="mark"></i>
    <span class="btxt">
      <span class="bname">INSATRÉ</span>
      <span class="btag">Grace in Every Fold</span>
    </span>
  </a>

  <nav class="nav" id="nav">
    ${NAV.map(n => `
      <a href="${n[0]}" class="${n[0] === here ? "on" : ""}">
        ${n[1]}
      </a>
    `).join("")}
  </nav>

  <div class="hd">
    <button class="bag" id="openCart">
      Bag (<span id="cnt">0</span>)
    </button>
  </div>

</header>
`);


/* FOOTER AND CART PANEL */

document.body.insertAdjacentHTML("beforeend", `
<footer>

  <div class="fg">

    <div>
      <i class="mark"></i>
      <p>Pakistani modest fashion.<br>Grace in every fold.</p>
    </div>

    <div>
      <h4>Shop</h4>
      <ul>
        <li><a href="hijabs.html">Hijabs</a></li>
        <li><a href="niqabs.html">Niqabs</a></li>
        <li><a href="modest-clothing.html">Modest Clothing</a></li>
        <li><a href="accessories.html">Accessories</a></li>
      </ul>
    </div>

    <div>
      <h4>Connect with us</h4>

      <div class="socials">

        ${ic("fb", "Facebook", `
          <path d="M14 8h2.5V5H14c-2 0-3.5 1.6-3.5 3.6V11H8v3h2.5v7h3v-7H16l.5-3h-3V9c0-.6.4-1 1-1z"/>
        `)}

        ${ic("ig", "Instagram", `
          <rect x="4" y="4" width="16" height="16" rx="5"
            fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="12" cy="12" r="3.6"
            fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="17" cy="7" r="1.2"/>
        `)}

        ${ic("tt", "TikTok", `
          <path d="M16.5 3c.3 2.2 1.7 3.7 3.8 3.9v3a7 7 0 0 1-3.8-1.2v6.2a5.8 5.8 0 1 1-5-5.7v3.1a2.8 2.8 0 1 0 2 2.7V3h3z"/>
        `)}

        ${ic("web", "Website", `
          <g fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="12" r="9"/>
            <ellipse cx="12" cy="12" rx="4" ry="9"/>
            <path d="M3 12h18"/>
          </g>
        `)}

      </div>

      <ul style="margin-top:18px">
        <li><a href="contact.html">Contact us</a></li>
      </ul>

    </div>

  </div>

  <p class="copy">© 2026 INSATRÉ. All rights reserved.</p>

</footer>

<div class="ov" id="ov">

  <aside class="cart">

    <div class="ch">
      <h2>Your Bag</h2>
      <button id="closeCart" aria-label="Close">×</button>
    </div>

    <div class="ci" id="ci"></div>

    <div class="ct">
      <span>Total</span>
      <span id="tot">Rs. 0</span>
    </div>

    <button class="btn" id="chk">Checkout</button>

  </aside>

</div>
`);


/* SOCIAL LINKS */

for (const k in SOCIAL) {
  const link = $("#s-" + k);
  if (link) link.href = SOCIAL[k];
}


/* PRODUCT CARD */

const card = p => `
<div class="card">

  <div class="pimg"
       style="background: ${
         p.image
           ? `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.25)), url('${p.image}') center/cover no-repeat`
           : `linear-gradient(165deg,${p.a},${p.b})`
       }">

    ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}

    <span class="product-image-label">${p.name}</span>

  </div>

  <div class="pinfo">

    <div class="pcat">${CATS[p.cat].t}</div>

    <div class="pname">${p.name}</div>

    <div class="price">${fmt(p.price)}</div>

    <!-- Product Colour Options -->

    ${p.colors && p.colors.length ? `
      <div class="product-colors">

        <span class="color-label">Colors:</span>

        ${p.colors.map((color, index) => `
          <button
            type="button"
            class="color-swatch ${index === 0 ? "selected" : ""}"
            style="background-color: ${color.hex};"
            data-color="${color.name}"
            aria-label="${color.name}"
            aria-pressed="${index === 0}"
            title="${color.name}">
          </button>
        `).join("")}

        <span class="selected-color">${p.colors[0].name}</span>

      </div>
    ` : ""}

    <button class="add" data-id="${p.id}">Add to bag</button>

  </div>

</div>
`;


/* DRAW CART */

function draw() {

  const count = $("#cnt");
  const total = $("#tot");
  const cartItems = $("#ci");

  if (!count || !total || !cartItems) return;

  count.textContent = cart.reduce((a, i) => a + i.q, 0);

  total.textContent = fmt(
    cart.reduce((a, i) => a + i.q * i.price, 0)
  );

  cartItems.innerHTML = cart.length

    ? cart.map(i => `
      <div class="it">

        <div class="sw" style="--a:${i.a};--b:${i.b}"></div>

        <div>

          <b>${i.name}</b>

          ${i.selectedColor ? `
            <div style="font-size:12px;color:var(--muted);margin-top:3px">
              Colour: ${i.selectedColor}
            </div>
          ` : ""}

          <div style="font-size:13px;color:var(--muted)">
            ${fmt(i.price)}
          </div>

          <div class="q">

            <button data-d="-1" data-index="${cart.indexOf(i)}">−</button>

            <span>${i.q}</span>

            <button data-d="1" data-index="${cart.indexOf(i)}">+</button>

            <button class="rm" data-rm="${cart.indexOf(i)}">
              Remove
            </button>

          </div>

        </div>

      </div>
    `).join("")

    : '<p class="empty">Your bag is empty.</p>';

  save();

}


/* ADD PRODUCTS TO CART AND SELECT COLOURS */

document.addEventListener("click", e => {

  const t = e.target;

  /* Select a product colour */

  const swatch = t.closest(".color-swatch");

  if (swatch) {

    const container = swatch.closest(".product-colors");

    if (container) {

      container.querySelectorAll(".color-swatch").forEach(button => {
        button.classList.remove("selected");
        button.setAttribute("aria-pressed", "false");
      });

      swatch.classList.add("selected");
      swatch.setAttribute("aria-pressed", "true");

      const selectedText = container.querySelector(".selected-color");

      if (selectedText) {
        selectedText.textContent = swatch.dataset.color;
      }

    }

    return;
  }


  /* Add product with selected colour to bag */

  if (t.classList.contains("add")) {

    const p = P.find(x => x.id == t.dataset.id);

    if (!p) return;

    const productCard = t.closest(".card");

    const selectedSwatch = productCard
      ? productCard.querySelector(".color-swatch.selected")
      : null;

    const selectedColor = selectedSwatch
      ? selectedSwatch.dataset.color
      : (p.colors && p.colors.length ? p.colors[0].name : "");

    const existing = cart.find(x =>
      x.id === p.id &&
      (x.selectedColor || "") === selectedColor
    );

    if (existing) {

      existing.q++;

    } else {

      cart.push({
        ...p,
        selectedColor,
        q: 1
      });

    }

    draw();

    $("#ov").classList.add("open");

  }

});


/* UPDATE OR REMOVE CART ITEMS */

const cartItems = $("#ci");

if (cartItems) {

  cartItems.addEventListener("click", e => {

    const t = e.target;

    const index = Number(t.dataset.index);

    if (t.dataset.index === undefined || !Number.isInteger(index)) return;

    const item = cart[index];

    if (!item) return;

    if (t.dataset.rm !== undefined) {

      cart.splice(index, 1);

    } else if (t.dataset.d) {

      item.q += Number(t.dataset.d);

      if (item.q < 1) {
        cart.splice(index, 1);
      }

    }

    draw();

  });

}


/* CART OPEN AND CLOSE */

$("#openCart").onclick = () => {
  $("#ov").classList.add("open");
};

$("#closeCart").onclick = () => {
  $("#ov").classList.remove("open");
};

$("#ov").onclick = e => {

  if (e.target.id === "ov") {
    e.target.classList.remove("open");
  }

};



/* WEBSITE CHECKOUT WITH ORDER CONFIRMATION */

function openCheckout() {

  if (!cart.length) {
    alert("Your bag is empty. Please add a product first.");
    return;
  }

  let modal = document.getElementById("insatreCheckout");

  if (!modal) {

    document.body.insertAdjacentHTML("beforeend", `
      <div id="insatreCheckout" style="
        position:fixed;
        inset:0;
        z-index:99999;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:16px;
        background:rgba(0,0,0,.65);
        overflow-y:auto;">

        <div style="
          background:#fff;
          color:#222;
          width:100%;
          max-width:520px;
          max-height:90vh;
          overflow-y:auto;
          padding:26px;
          border-radius:12px;
          position:relative;
          font-family:Arial,sans-serif;">

          <button type="button"
            id="closeInsatreCheckout"
            aria-label="Close"
            style="
              position:absolute;
              right:16px;
              top:12px;
              border:0;
              background:none;
              font-size:28px;
              cursor:pointer;">
            &times;
          </button>

          <h2 style="margin:0 35px 8px 0;">
            Complete Your Order
          </h2>

          <p style="margin:0 0 18px;color:#666;font-size:14px;">
            Please enter your details to confirm your order.
          </p>

          <form id="insatreCheckoutForm">

            <label style="display:block;margin:12px 0 5px;font-size:14px;">
              Full Name
            </label>

            <input
              name="customerName"
              required
              maxlength="80"
              autocomplete="name"
              placeholder="Enter your full name"
              style="
                box-sizing:border-box;
                width:100%;
                padding:12px;
                border:1px solid #ccc;
                border-radius:6px;">

            <label style="display:block;margin:12px 0 5px;font-size:14px;">
              Phone Number
            </label>

            <input
              name="phone"
              required
              type="tel"
              maxlength="25"
              autocomplete="tel"
              placeholder="03XXXXXXXXX"
              style="
                box-sizing:border-box;
                width:100%;
                padding:12px;
                border:1px solid #ccc;
                border-radius:6px;">

            <label style="display:block;margin:12px 0 5px;font-size:14px;">
              Complete Delivery Address
            </label>

            <textarea
              name="address"
              required
              maxlength="500"
              rows="3"
              placeholder="House number, street, area, city"
              style="
                box-sizing:border-box;
                width:100%;
                padding:12px;
                border:1px solid #ccc;
                border-radius:6px;
                resize:vertical;"></textarea>

            <label style="display:block;margin:12px 0 5px;font-size:14px;">
              Additional Note (Optional)
            </label>

            <textarea
              name="note"
              maxlength="300"
              rows="2"
              placeholder="Any additional instructions?"
              style="
                box-sizing:border-box;
                width:100%;
                padding:12px;
                border:1px solid #ccc;
                border-radius:6px;
                resize:vertical;"></textarea>

            <div id="insatreCheckoutSummary" style="
              margin:18px 0;
              padding:14px;
              background:#f7f5f2;
              border-radius:8px;
              font-size:14px;
              line-height:1.7;">
            </div>

            <button type="submit" style="
              width:100%;
              padding:14px;
              border:0;
              border-radius:6px;
              background:#0f4c45;
              color:#fff;
              font-size:15px;
              font-weight:bold;
              cursor:pointer;">
              Place Order
            </button>

          </form>

        </div>
      </div>
    `);

    modal = document.getElementById("insatreCheckout");

    document.getElementById("closeInsatreCheckout").onclick = () => {
      modal.remove();
    };

    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.remove();
      }
    });

    document.getElementById("insatreCheckoutForm")
      .addEventListener("submit", confirmWebsiteOrder);

  }

  const total = cart.reduce(
    (sum, item) => sum + item.q * item.price, 0
  );

  document.getElementById("insatreCheckoutSummary").innerHTML = `
    <strong>Order Summary</strong><br>

    ${cart.map(item => `
      ${item.name}
      (${item.selectedColor || "Colour not selected"})
      × ${item.q} = ${fmt(item.q * item.price)}
    `).join("<br>")}

    <hr style="border:0;border-top:1px solid #ddd;margin:10px 0;">

    <strong>Total: ${fmt(total)}</strong>
  `;

}


/* CONFIRM ORDER ON WEBSITE */

function confirmWebsiteOrder(event) {

  event.preventDefault();

  if (!cart.length) {
    alert("Your bag is empty.");
    return;
  }

  const form = event.currentTarget;

  if (!form.reportValidity()) return;

  const formData = new FormData(form);

  const customerName = String(
    formData.get("customerName") || ""
  ).trim();

  const phone = String(
    formData.get("phone") || ""
  ).trim();

  const address = String(
    formData.get("address") || ""
  ).trim();

  if (!customerName || !phone || !address) {
    alert("Please complete all required details.");
    return;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.q * item.price, 0
  );

  const orderItems = cart.map(item => `
    <div style="
      padding:10px 0;
      border-bottom:1px solid #eee;
      font-size:14px;
      line-height:1.6;">

      <strong>${item.name}</strong><br>

      Colour: ${item.selectedColor || "Not specified"}<br>

      Quantity: ${item.q}<br>

      Price: ${fmt(item.price * item.q)}

    </div>
  `).join("");

  const modal = document.getElementById("insatreCheckout");

  modal.innerHTML = `
    <div style="
      background:#fff;
      color:#222;
      width:100%;
      max-width:520px;
      max-height:90vh;
      overflow-y:auto;
      padding:30px;
      border-radius:12px;
      text-align:center;
      font-family:Arial,sans-serif;">

      <div style="
        width:65px;
        height:65px;
        margin:0 auto 16px;
        border-radius:50%;
        background:#e6f3ed;
        color:#0f4c45;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:38px;">
        ✓
      </div>

      <h2 style="
        color:#0f4c45;
        margin:0 0 10px;">
        Order Confirmed!
      </h2>

      <p style="
        color:#666;
        font-size:14px;
        line-height:1.6;">
        Thank you for shopping with INSATRÉ.
        Your order has been confirmed successfully!
      </p>

      <div style="
        background:#f7f5f2;
        padding:16px;
        border-radius:8px;
        margin:20px 0;
        text-align:left;">

        <h3 style="margin:0 0 12px;">
          Order Details
        </h3>

        <p style="font-size:14px;line-height:1.6;">
          <strong>Customer:</strong> ${customerName}<br>
          <strong>Phone:</strong> ${phone}<br>
          <strong>Address:</strong> ${address}
        </p>

        <hr style="border:0;border-top:1px solid #ddd;">

        ${orderItems}

        <h3 style="
          text-align:right;
          color:#0f4c45;
          margin-bottom:0;">
          Total: ${fmt(total)}
        </h3>

      </div>

      <p style="
        color:#888;
        font-size:12px;
        line-height:1.5;">
        This is a demonstration order confirmation.
        No actual order has been submitted or stored.
      </p>

      <button type="button"
        id="finishInsatreOrder"
        style="
          width:100%;
          padding:14px;
          border:0;
          border-radius:6px;
          background:#0f4c45;
          color:#fff;
          font-size:15px;
          font-weight:bold;
          cursor:pointer;">
        Continue Shopping
      </button>

    </div>
  `;

  // Clear demo cart after confirmation.
  cart = [];
  save();
  draw();

  document.getElementById("finishInsatreOrder").onclick = () => {
    modal.remove();
    document.getElementById("ov").classList.remove("open");
  };

}


/* CHECKOUT BUTTON */

$("#chk").onclick = openCheckout;



/* MOBILE MENU */

$("#burger").onclick = () => {
  $("#nav").classList.toggle("open");
};


/* CATEGORY PRODUCT PAGES */

const pg = $("#pg");

if (pg && pg.dataset.cat) {

  const list = P.filter(p => p.cat === pg.dataset.cat);

  pg.innerHTML = list.map(card).join("");

  const sort = $("#sort");

  if (sort) {

    sort.onchange = e => {

      const v = +e.target.value;

      const products = [...list];

      if (v === 1) {
        products.sort((a, b) => a.price - b.price);
      }

      if (v === 2) {
        products.sort((a, b) => b.price - a.price);
      }

      pg.innerHTML = products.map(card).join("");

    };

  }

}


/* CUSTOMER FAVOURITE PICKS ON HOME PAGE */

if (pg && pg.dataset.featured !== undefined) {

  const favouritePicks = [
    "Chiffon Hijab",
    "Saudi Niqab",
    "Nida Abaya",
    "Pearl Pin Set"
  ];

  pg.innerHTML = P
    .filter(p => favouritePicks.includes(p.name))
    .map(card)
    .join("");

}


/* CONTACT FORM */

if ($("#send")) {

  $("#send").onclick = () => {

    $("#cmsg").textContent =
      /\S+@\S+\.\S+/.test($("#ce").value) && $("#cm").value.trim()
        ? "Thank you. We will reply by email soon."
        : "Please enter a valid email and a message.";

  };

}


/* INITIAL CART DISPLAY */

draw();
