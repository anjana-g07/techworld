// ===============================
// TECHWORLD PRODUCT DATA
// ===============================

const products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "Smartphones",
        brand: "Apple",
        price: 69999,
        rating: 4.8,
        stock: 12,
        icon: "📱",
        description: "Powerful smartphone with an advanced camera system."
    },

    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "Smartphones",
        brand: "Samsung",
        price: 74999,
        rating: 4.7,
        stock: 8,
        icon: "📱",
        description: "Premium Android smartphone with powerful performance."
    },

    {
        id: 3,
        name: "Google Pixel 9",
        category: "Smartphones",
        brand: "Google",
        price: 79999,
        rating: 4.6,
        stock: 10,
        icon: "📱",
        description: "Smartphone with an excellent camera and clean Android."
    },

    {
        id: 4,
        name: "OnePlus 13",
        category: "Smartphones",
        brand: "OnePlus",
        price: 69999,
        rating: 4.5,
        stock: 15,
        icon: "📱",
        description: "Fast and powerful smartphone with premium design."
    },

    {
        id: 5,
        name: "MacBook Air M3",
        category: "Laptops & Tablets",
        brand: "Apple",
        price: 99999,
        rating: 4.9,
        stock: 6,
        icon: "💻",
        description: "Lightweight laptop with powerful Apple Silicon performance."
    },

    {
        id: 6,
        name: "Dell XPS 15",
        category: "Laptops & Tablets",
        brand: "Dell",
        price: 114999,
        rating: 4.7,
        stock: 5,
        icon: "💻",
        description: "Premium laptop designed for productivity and performance."
    },

    {
        id: 7,
        name: "HP Spectre x360",
        category: "Laptops & Tablets",
        brand: "HP",
        price: 104999,
        rating: 4.6,
        stock: 7,
        icon: "💻",
        description: "Convertible laptop with a beautiful touchscreen display."
    },

    {
        id: 8,
        name: "Sony Wireless Headphones",
        category: "Audio & Wearables",
        brand: "Sony",
        price: 14999,
        rating: 4.8,
        stock: 20,
        icon: "🎧",
        description: "Immersive wireless audio with powerful noise cancellation."
    },

    {
        id: 9,
        name: "Apple AirPods Pro",
        category: "Audio & Wearables",
        brand: "Apple",
        price: 24999,
        rating: 4.8,
        stock: 18,
        icon: "🎧",
        description: "Premium wireless earbuds with active noise cancellation."
    },

    {
        id: 10,
        name: "Samsung Galaxy Watch",
        category: "Audio & Wearables",
        brand: "Samsung",
        price: 29999,
        rating: 4.5,
        stock: 11,
        icon: "⌚",
        description: "Smartwatch with fitness tracking and smart features."
    },

    {
        id: 11,
        name: "Anker Power Bank",
        category: "Accessories",
        brand: "Anker",
        price: 2999,
        rating: 4.4,
        stock: 30,
        icon: "🔋",
        description: "High-capacity portable power bank for your devices."
    },

    {
        id: 12,
        name: "USB-C Fast Charger",
        category: "Accessories",
        brand: "Anker",
        price: 1999,
        rating: 4.3,
        stock: 25,
        icon: "🔌",
        description: "Compact fast charger with USB-C compatibility."
    }
];


// ===============================
// DISPLAY PRODUCTS
// ===============================

function displayProducts(productList) {

    const productGrid = document.getElementById("productGrid");

    if (!productGrid) {
        return;
    }

    productGrid.innerHTML = "";

    if (productList.length === 0) {

        productGrid.innerHTML = `
            <div class="no-products">
                <h2>No products found 😔</h2>
                <p>Try changing your search or filters.</p>
            </div>
        `;

        return;
    }

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                ${product.icon}
            </div>

            <span class="product-category">
                ${product.category}
            </span>

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <div class="rating">
                ⭐ ${product.rating}
            </div>

            <h4>₹${product.price.toLocaleString("en-IN")}</h4>

            <p class="stock">
                ${product.stock > 0
                    ? `✅ ${product.stock} in stock`
                    : "❌ Out of stock"}
            </p>

            <a href="product-detail.html?id=${product.id}" class="view-btn">View Details</a>
<button class="wishlist-btn" onclick="toggleWishlist(${product.id})">♡ Add to Wishlist</button>
<button class="product-btn" onclick="addToCart(${product.id})" ${product.stock === 0 ? "disabled" : ""}>Add to Cart</button>
        `;

        productGrid.appendChild(card);
    });
}


// ===============================
// SEARCH
// ===============================

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const searchText =
        searchInput.value.toLowerCase().trim();

    const filteredProducts = products.filter(product =>

        product.name.toLowerCase().includes(searchText) ||

        product.brand.toLowerCase().includes(searchText) ||

        product.category.toLowerCase().includes(searchText)

    );

    displayProducts(filteredProducts);
}


// ===============================
// CATEGORY FILTER
// ===============================

function filterProducts() {

    const category =
        document.getElementById("categoryFilter").value;

    const brand =
        document.getElementById("brandFilter").value;

    const price =
        document.getElementById("priceFilter").value;

    const rating =
        document.getElementById("ratingFilter").value;


    let filtered = products;


    if (category !== "all") {

        filtered = filtered.filter(product =>
            product.category === category
        );
    }


    if (brand !== "all") {

        filtered = filtered.filter(product =>
            product.brand === brand
        );
    }


    if (price !== "all") {

        if (price === "under5000") {
            filtered = filtered.filter(product =>
                product.price < 5000
            );
        }

        if (price === "5000-20000") {
            filtered = filtered.filter(product =>
                product.price >= 5000 &&
                product.price <= 20000
            );
        }

        if (price === "20000-50000") {
            filtered = filtered.filter(product =>
                product.price > 20000 &&
                product.price <= 50000
            );
        }

        if (price === "above50000") {
            filtered = filtered.filter(product =>
                product.price > 50000
            );
        }
    }


    if (rating !== "all") {

        filtered = filtered.filter(product =>
            product.rating >= Number(rating)
        );
    }


    displayProducts(filtered);
}
localStorage.setItem("techworldCart", JSON.stringify(cart));
updateCartCount();
alert(`${product.name} added to cart! 🛒`);

// ===============================
// CART
// ===============================

let cart = JSON.parse(localStorage.getItem("techworldCart")) || [];


function addToCart(productId) {

    const product = products.find(
        product => product.id === productId
    );

    if (!product) {
        return;
    }


    const existingProduct = cart.find(
        item => item.id === productId
    );
    if (existingProduct && existingProduct.quantity >= product.stock) {
    alert(`❌ Sorry! Only ${product.stock} units of ${product.name} are available.`);
    return;
}


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            quantity: 1
        });
    }


    localStorage.setItem(
        "techworldCart",
        JSON.stringify(cart)
    );


    alert(`${product.name} added to cart! 🛒`);
}


// ===============================
// INITIAL LOAD
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("productGrid")) {
        displayProducts(products);
    }

});
// ===============================
// CART PAGE
// ===============================

function displayCart() {

    const cartItems = document.getElementById("cartItems");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <div>🛒</div>
                <h2>Your cart is empty</h2>
                <p>Add some products to your cart.</p>

                <a href="products.html" class="btn">
                    Continue Shopping
                </a>
            </div>
        `;

        updateCartTotal();

        return;
    }


    cart.forEach(item => {

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <div class="cart-product-icon">
                ${item.icon}
            </div>

            <div class="cart-product-info">

                <h3>${item.name}</h3>

                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                    each
                </p>

            </div>


            <div class="quantity-controls">

                <button onclick="decreaseQuantity(${item.id})">
                    −
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${item.id})">
                    +
                </button>

            </div>


            <div class="cart-item-price">

                ₹${(item.price * item.quantity)
                    .toLocaleString("en-IN")}

            </div>


            <button
                class="remove-btn"
                onclick="removeFromCart(${item.id})">

                ❌

            </button>
        `;

        cartItems.appendChild(cartItem);

    });

    updateCartTotal();
}


// ===============================
// INCREASE QUANTITY
// ===============================

function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(product => product.id === productId);

    if (!item || !product) return;

    if (item.quantity >= product.stock) {
        alert(`❌ Only ${product.stock} units of ${product.name} are available.`);
        return;
    }

    item.quantity++;

    saveCart();
    displayCart();
    updateCartCount();
}


// ===============================
// DECREASE QUANTITY
// ===============================

function decreaseQuantity(productId) {

    const item = cart.find(
        item => item.id === productId
    );

    if (!item) {
        return;
    }

    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart = cart.filter(
            item => item.id !== productId
        );

    }

    saveCart();
    displayCart();
    updateCartCount();
}


// ===============================
// REMOVE PRODUCT
// ===============================

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();
    displayCart();
    updateCartCount();
}


// ===============================
// SAVE CART
// ===============================

function saveCart() {

    localStorage.setItem(
        "techworldCart",
        JSON.stringify(cart)
    );

}


// ===============================
// UPDATE TOTAL
// ===============================

function updateCartTotal() {

    const subtotalElement =
        document.getElementById("subtotal");

    const deliveryElement =
        document.getElementById("delivery");

    const totalElement =
        document.getElementById("total");


    if (!subtotalElement ||
        !deliveryElement ||
        !totalElement) {

        return;
    }


    let subtotal = 0;


    cart.forEach(item => {

        subtotal +=
            item.price * item.quantity;

    });


    const delivery =
        subtotal === 0
            ? 0
            : subtotal >= 50000
                ? 0
                : 99;


    const total =
        subtotal + delivery;


    subtotalElement.textContent =
        `₹${subtotal.toLocaleString("en-IN")}`;

    deliveryElement.textContent =
        delivery === 0
            ? "FREE"
            : `₹${delivery}`;

    totalElement.textContent =
        `₹${total.toLocaleString("en-IN")}`;

}


// ===============================
// CLEAR CART
// ===============================

function clearCart() {

    if (cart.length === 0) {
        return;
    }

    const confirmClear =
        confirm("Are you sure you want to clear the cart?");

    if (confirmClear) {

        cart = [];

        saveCart();

        displayCart();

        updateCartCount();

    }

}


// ===============================
// CHECKOUT
// ===============================

function goToCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    window.location.href = "checkout.html";

}


// ===============================
// LOAD CART PAGE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("cartItems")) {

        displayCart();

    }

});
function displayCheckout() {

    const checkoutItems = document.getElementById("checkoutItems");

    if (!checkoutItems) return;

    checkoutItems.innerHTML = "";

    if (cart.length === 0) {
        checkoutItems.innerHTML = `
            <p>Your cart is empty.</p>
            <a href="products.html" class="btn">Continue Shopping</a>
        `;
        return;
    }

    cart.forEach(item => {

        const checkoutItem = document.createElement("div");

        checkoutItem.className = "checkout-item";

        checkoutItem.innerHTML = `
            <div class="checkout-item-icon">
                ${item.icon}
            </div>

            <div class="checkout-item-info">
                <h4>${item.name}</h4>
                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                    × ${item.quantity}
                </p>
            </div>

            <strong>
                ₹${(item.price * item.quantity).toLocaleString("en-IN")}
            </strong>
        `;

        checkoutItems.appendChild(checkoutItem);
    });

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const delivery = subtotal >= 50000 ? 0 : 99;

    const total = subtotal + delivery;

    document.getElementById("checkoutSubtotal").textContent =
        `₹${subtotal.toLocaleString("en-IN")}`;

    document.getElementById("checkoutDelivery").textContent =
        delivery === 0 ? "FREE" : `₹${delivery}`;

    document.getElementById("checkoutTotal").textContent =
        `₹${total.toLocaleString("en-IN")}`;
}


function placeOrder(event) {

    event.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        window.location.href = "products.html";
        return;
    }

    const name = document.getElementById("fullName").value;

    const payment =
        document.querySelector('input[name="payment"]:checked').value;

    alert(
        `🎉 Order Placed Successfully!\n\n` +
        `Thank you, ${name}!\n` +
        `Payment Method: ${payment}\n\n` +
        `Your order will be delivered soon.`
    );

    cart = [];

    saveCart();

    window.location.href = "order-success.html";
}


document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("productGrid")) {
        displayProducts(products);
    }

    if (document.getElementById("cartItems")) {
        displayCart();
    }

    if (document.getElementById("checkoutItems")) {
        displayCheckout();
    }

});
function registerUser(event) {

    event.preventDefault();

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    const existingUser = JSON.parse(localStorage.getItem("techworldUser"));

if (existingUser && existingUser.email === email) {
    alert("❌ An account with this email already exists. Please login.");
    return;
}
    if (password !== confirmPassword) {
        alert("❌ Passwords do not match!");
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("techworldUser", JSON.stringify(user));

    alert("🎉 Account created successfully!");

    window.location.href = "login.html";
}


function loginUser(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const savedUser =
        JSON.parse(localStorage.getItem("techworldUser"));

    if (!savedUser) {
        alert("❌ No account found. Please register first.");
        return;
    }

    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        localStorage.setItem("techworldLoggedIn", "true");

        alert(`🎉 Welcome back, ${savedUser.name}!`);

        window.location.href = "account.html";

    } else {

        alert("❌ Invalid email or password!");

    }
}
function displayAccount() {

    const savedUser =
        JSON.parse(localStorage.getItem("techworldUser"));

    const loggedIn =
        localStorage.getItem("techworldLoggedIn");

    if (!savedUser || loggedIn !== "true") {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("accountName").textContent =
        savedUser.name;

    document.getElementById("accountEmail").textContent =
        savedUser.email;

    document.getElementById("profileName").textContent =
        savedUser.name;

    document.getElementById("profileEmail").textContent =
        savedUser.email;
}


function logoutUser() {

    localStorage.removeItem("techworldLoggedIn");

    alert("You have been logged out successfully!");

    window.location.href = "login.html";
}


document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("productGrid")) {
        displayProducts(products);
    }

    if (document.getElementById("cartItems")) {
        displayCart();
    }

    if (document.getElementById("checkoutItems")) {
        displayCheckout();
    }

    if (document.getElementById("accountName")) {
        displayAccount();
    }

});
function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value;

    alert(
        `✅ Message sent successfully!\n\n` +
        `Thank you, ${name}!\n` +
        `Our team will contact you soon.`
    );

    event.target.reset();
}
/* PRODUCT DETAIL */

let detailQuantity = 1;

function loadProductDetail() {

    const productId =
        Number(new URLSearchParams(window.location.search).get("id"));

    const product =
        products.find(item => item.id === productId);

    if (!product) {
        return;
    }

    document.getElementById("detailIcon").textContent =
        product.icon;

    document.getElementById("detailCategory").textContent =
        product.category;

    document.getElementById("detailName").textContent =
        product.name;

    document.getElementById("detailRating").textContent =
        `⭐ ${product.rating} / 5`;

    document.getElementById("detailPrice").textContent =
        `₹${product.price.toLocaleString("en-IN")}`;

    document.getElementById("detailDescription").textContent =
        product.description;

    document.getElementById("detailStock").textContent =
        product.stock > 0
            ? `✅ ${product.stock} in stock`
            : "❌ Out of stock";
}


function changeDetailQuantity(amount) {
    const productId = Number(
        new URLSearchParams(window.location.search).get("id")
    );

    const product = products.find(item => item.id === productId);

    if (!product) return;

    detailQuantity += amount;

    if (detailQuantity < 1) {
        detailQuantity = 1;
    }

    if (detailQuantity > product.stock) {
        detailQuantity = product.stock;
        alert(`❌ Only ${product.stock} units are available.`);
    }

    document.getElementById("detailQuantity").textContent = detailQuantity;
}


function addDetailToCart() {
    const productId = Number(
        new URLSearchParams(window.location.search).get("id")
    );

    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existingProduct = cart.find(item => item.id === productId);
    const currentQuantity = existingProduct ? existingProduct.quantity : 0;

    if (currentQuantity + detailQuantity > product.stock) {
        alert(`❌ Only ${product.stock} units of ${product.name} are available.`);
        return;
    }

    if (existingProduct) {
        existingProduct.quantity += detailQuantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            quantity: detailQuantity
        });
    }

    saveCart();
    updateCartCount();

    alert(`${detailQuantity} × ${product.name} added to cart! 🛒`);
}
function updateCartCount() {
    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    cartCount.textContent = count;
}

document.addEventListener("DOMContentLoaded", () => {
updateCartCount();
    if (document.getElementById("productGrid")) {
        const params = new URLSearchParams(window.location.search);
        const category = params.get("category");

        if (category) {
            document.getElementById("categoryFilter").value = category;
            filterProducts();
        } else {
            displayProducts(products);
        }
    }

    if (document.getElementById("cartItems")) {
        displayCart();
    }

    if (document.getElementById("checkoutItems")) {
        displayCheckout();
    }

    if (document.getElementById("accountName")) {
        displayAccount();
    }

    if (document.getElementById("detailName")) {
        loadProductDetail();
    }
});function updateCartCount() {
    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    cartCount.textContent = count;
}
let wishlist = JSON.parse(localStorage.getItem("techworldWishlist")) || [];

function toggleWishlist(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) return;

    const exists = wishlist.includes(productId);

    if (exists) {
        wishlist = wishlist.filter(id => id !== productId);
        alert(`${product.name} removed from wishlist ❤️`);
    } else {
        wishlist.push(productId);
        alert(`${product.name} added to wishlist ❤️`);
    }

    localStorage.setItem("techworldWishlist", JSON.stringify(wishlist));
}
function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);

    if (input.type === "password") {
        input.type = "text";
        button.textContent = "🙈";
    } else {
        input.type = "password";
        button.textContent = "👁️";
    }
}
