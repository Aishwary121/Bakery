// Menu Items Data
const menuItems = [
    {
        id: 1,
        name: "Chocolate Croissant",
        category: "pastry",
        price: 4.99,
        description: "Buttery croissant filled with rich chocolate",
        badge: "Popular",
        icon: "fa-bread-slice"
    },
    {
        id: 2,
        name: "Red Velvet Cake",
        category: "cake",
        price: 35.99,
        description: "Classic red velvet with cream cheese frosting",
        badge: "New",
        icon: "fa-birthday-cake"
    },
    {
        id: 3,
        name: "Sourdough Bread",
        category: "bread",
        price: 6.99,
        description: "Traditional sourdough with perfect crust",
        badge: "",
        icon: "fa-bread-slice"
    },
    {
        id: 4,
        name: "Chocolate Chip Cookies",
        category: "cookie",
        price: 12.99,
        description: "Dozen of warm, gooey chocolate chip cookies",
        badge: "Best Seller",
        icon: "fa-cookie-bite"
    },
    {
        id: 5,
        name: "French Baguette",
        category: "bread",
        price: 3.99,
        description: "Crispy outside, soft inside French bread",
        badge: "",
        icon: "fa-bread-slice"
    },
    {
        id: 6,
        name: "Strawberry Tart",
        category: "pastry",
        price: 5.99,
        description: "Fresh strawberries on vanilla custard",
        badge: "Seasonal",
        icon: "fa-cheese"
    },
    {
        id: 7,
        name: "Wedding Cake",
        category: "cake",
        price: 199.99,
        description: "Custom designed multi-tier wedding cake",
        badge: "Premium",
        icon: "fa-birthday-cake"
    },
    {
        id: 8,
        name: "Oatmeal Raisin Cookies",
        category: "cookie",
        price: 10.99,
        description: "Healthy oatmeal cookies with raisins",
        badge: "",
        icon: "fa-cookie"
    },
    {
        id: 9,
        name: "Whole Wheat Bread",
        category: "bread",
        price: 5.99,
        description: "Nutritious whole wheat bread loaf",
        badge: "Healthy",
        icon: "fa-bread-slice"
    },
    {
        id: 10,
        name: "Blueberry Muffin",
        category: "pastry",
        price: 3.99,
        description: "Fresh blueberry muffins with sugar topping",
        badge: "",
        icon: "fa-ice-cream"
    },
    {
        id: 11,
        name: "Cheesecake",
        category: "cake",
        price: 29.99,
        description: "New York style creamy cheesecake",
        badge: "Popular",
        icon: "fa-cheese"
    },
    {
        id: 12,
        name: "Sugar Cookies",
        category: "cookie",
        price: 8.99,
        description: "Decorated sugar cookies, perfect for gifts",
        badge: "",
        icon: "fa-cookie"
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

// Render Menu Items
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
                <i class="fas ${item.icon}"></i>
                ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">$${item.price}</span>
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

// Update Cart
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <div class="cart-item-image">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
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
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
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