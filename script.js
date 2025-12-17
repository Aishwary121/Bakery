// Menu Items Data with Online Images
const menuItems = [
    {
        id: 1,
        name: "Chocolate Croissant",
        category: "pastry",
        price: 4.99,
        description: "Buttery croissant filled with rich chocolate",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Red Velvet Cake",
        category: "cake",
        price: 35.99,
        description: "Classic red velvet with cream cheese frosting",
        badge: "New",
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "Sourdough Bread",
        category: "bread",
        price: 6.99,
        description: "Traditional sourdough with perfect crust",
        badge: "",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Chocolate Chip Cookies",
        category: "cookie",
        price: 12.99,
        description: "Dozen of warm, gooey chocolate chip cookies",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "French Baguette",
        category: "bread",
        price: 3.99,
        description: "Crispy outside, soft inside French bread",
        badge: "",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "Strawberry Tart",
        category: "pastry",
        price: 5.99,
        description: "Fresh strawberries on vanilla custard",
        badge: "Seasonal",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        name: "Wedding Cake",
        category: "cake",
        price: 199.99,
        description: "Custom designed multi-tier wedding cake",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        name: "Oatmeal Raisin Cookies",
        category: "cookie",
        price: 10.99,
        description: "Healthy oatmeal cookies with raisins",
        badge: "",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        name: "Whole Wheat Bread",
        category: "bread",
        price: 5.99,
        description: "Nutritious whole wheat bread loaf",
        badge: "Healthy",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        name: "Blueberry Muffin",
        category: "pastry",
        price: 3.99,
        description: "Fresh blueberry muffins with sugar topping",
        badge: "",
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        name: "Cheesecake",
        category: "cake",
        price: 29.99,
        description: "New York style creamy cheesecake",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        name: "Sugar Cookies",
        category: "cookie",
        price: 8.99,
        description: "Decorated sugar cookies, perfect for gifts",
        badge: "",
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop"
    },
    {
        id: 13,
        name: "Chocolate Cake",
        category: "cake",
        price: 45.99,
        description: "Rich chocolate layer cake with ganache",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
        id: 14,
        name: "Danish Pastry",
        category: "pastry",
        price: 4.49,
        description: "Flaky pastry with fruit filling",
        badge: "",
        image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&h=300&fit=crop"
    },
    {
        id: 15,
        name: "Macarons",
        category: "cookie",
        price: 15.99,
        description: "Assorted French macarons box",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=300&fit=crop"
    },
    {
        id: 16,
        name: "Focaccia Bread",
        category: "bread",
        price: 7.99,
        description: "Italian herb focaccia with olive oil",
        badge: "",
        image: "https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop"
    },
    {
        id: 17,
        name: "Tiramisu",
        category: "cake",
        price: 32.99,
        description: "Classic Italian coffee-flavored dessert",
        badge: "Chef's Special",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop"
    },
    {
        id: 18,
        name: "Cinnamon Rolls",
        category: "pastry",
        price: 6.99,
        description: "Warm cinnamon rolls with cream cheese glaze",
        badge: "Hot",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=300&fit=crop"
    }
];

// Shopping Cart
let cart = [];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu('all');
    updateCart();
    setupEventListeners();
    initializeAnimations();
});

// Update renderMenu function
function renderMenu(category) {
    const filteredItems = category === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === category);
    
    menuGrid.innerHTML = '';
    
    filteredItems.forEach(item => {
        const menuItemEl = document.createElement('div');
        menuItemEl.className = 'menu-item';
        menuItemEl.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">₹${item.price}</span>
                    <button class="add-to-cart" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItemEl);
    });
}

// Add to Cart
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCart();
    showNotification('Item added to cart!');
}

// Update cart item rendering
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItemEl);
    });
    
    cartTotal.textContent = `₹${total.toFixed(2)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
    }
}

// Update Quantity
function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
    showNotification('Item removed from cart');
}

// Setup Event Listeners
function setupEventListeners() {
    // Menu Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.filter);
        });
    });
    
    // Cart Modal
    document.querySelector('.cart-icon').addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.classList.add('active');
    });
    
    document.querySelector('.close-cart').addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
    
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
    
    // Checkout
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Thank you for your order! We will contact you soon for delivery details.');
            cart = [];
            updateCart();
            cartModal.classList.remove('active');
        } else {
            alert('Your cart is empty!');
        }
    });
    
    // Mobile Menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Contact Form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully!');
        e.target.reset();
    });
    
    // Newsletter Form
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Successfully subscribed to newsletter!');
        e.target.reset();
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Scroll to hide/show navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const navbar = document.querySelector('.navbar');
        
        if (currentScroll <= 0) {
            navbar.style.transform = 'translateY(0)';
        } else if (currentScroll > lastScroll) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: var(--shadow);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.5s ease forwards';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card, .menu-item, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add scroll animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    
    .navbar {
        transition: transform 0.3s ease;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Initialize Vercel Analytics
if (typeof window !== 'undefined' && window.va) {
    window.va('track', 'pageview');
}