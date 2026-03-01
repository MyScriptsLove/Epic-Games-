// Дані ігор з реальними фото
const games = [
    { 
        id: 1, 
        name: 'Fortnite', 
        developer: 'Epic Games', 
        price: 0, 
        category: 'free',
        image: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/store/software/switch/70010000010192/62622611f98e5d14633a2078f15a528f2926d0374c07c5023b6d610fb90e8599',
        banner: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/store/software/switch/70010000010192/62622611f98e5d14633a2078f15a528f2926d0374c07c5023b6d610fb90e8599',
        description: 'Fortnite — це безкоштовна гра в жанрі «королівська битва» з режимами творчості та виживання.'
    },
    { 
        id: 2, 
        name: 'Alan Wake 2', 
        developer: 'Remedy', 
        price: 1499, 
        category: 'premium',
        image : 'https://upload.wikimedia.org/wikipedia/ru/c/cc/Alan_Wake_2_%28game%29.jpg',
        banner: 'https://upload.wikimedia.org/wikipedia/ru/c/cc/Alan_Wake_2_%28game%29.jpg',
        description: 'Психологічний хорор-трилер від творців Max Payne та Control.'
    },
    { 
        id: 3, 
        name: 'Rocket League', 
        developer: 'Psyonix', 
        price: 0, 
        category: 'free',
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202511/2205/1acc8baedb2bbd51480d961c02fe84b0669bc0ac56f4b9dc.jpg',
        banner: 'https://image.api.playstation.com/vulcan/ap/rnd/202511/2205/1acc8baedb2bbd51480d961c02fe84b0669bc0ac56f4b9dc.jpg',
        description: 'Гібрид футболу та автомобільних перегонів. Забивайте неймовірні голи!'
    },
    { 
        id: 4, 
        name: 'GTA VІ', 
        developer: 'Rockstar', 
        price: 4230, 
        category: 'premium',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8fdeCzEkBZBhn2aOS0SIWSP87h_OWmDboA&s',
        banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8fdeCzEkBZBhn2aOS0SIWSP87h_OWmDboA&s',
        description: 'Відкритий світ Вайс-Сіті чекає на вас. Троє унікальних героїв.'
    },
    { 
        id: 5, 
        name: 'The Witcher 3', 
        developer: 'CD Projekt', 
        price: 399, 
        category: 'premium',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmKw30ME6bHQIDw1XMwaeMASDn6Qyn-uslw&s',
        banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmKw30ME6bHQIDw1XMwaeMASDn6Qyn-uslw&s',
        description: 'Станьте Ґеральтом з Рівії, мисливцем на чудовиськ.'
    },
    { 
        id: 6, 
        name: 'Cyberpunk 2077', 
        developer: 'CD Projekt', 
        price: 1299, 
        category: 'premium',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OtNYofKriu0yY0vvkoEAj_tQi9SaupJpZw&s',
        banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OtNYofKriu0yY0vvkoEAj_tQi9SaupJpZw&s',
        description: 'Відкритий світ майбутнього в Найт-Сіті.'
    },
    { 
        id: 7, 
        name: 'Fall Guys', 
        developer: 'Mediatonic', 
        price: 0,
        category: 'free',
        image: 'https://cdn2.unrealengine.com/fgss04-keyart-offerimagelandscape-2560x1440-2560x1440-89c8edd4ffe307f5d760f286a28c3404-2560x1440-e9d811eebce7.jpg',
        banner: 'https://cdn2.unrealengine.com/fgss04-keyart-offerimagelandscape-2560x1440-2560x1440-89c8edd4ffe307f5d760f286a28c3404-2560x1440-e9d811eebce7.jpg',
        description: 'Весела королівська битва з милими персонажами.'
    },
    { 
        id: 8, 
        name: 'Among Us', 
        developer: 'Innersloth', 
        price: 0, 
        category: 'free',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4pC911RR8_8f9fN7T2AYbgBWfH-lv8DX7w&s',
        banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqLA6-eAXA-sxkAnbafTd7NB4DKaIsqiMrg&s',
        description: 'Гра про довіру та зраду на космічному кораблі.'
    }
];

// Дані новин з фото
const news = [
    { 
        id: 1, 
        title: 'Новий сезон Fortnite', 
        category: 'Оновлення', 
        date: '2024-01-15', 
        excerpt: 'Досліджуйте нові локації та отримуйте нагороди',
        image: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/store/software/switch/70010000010192/62622611f98e5d14633a2078f15a528f2926d0374c07c5023b6d610fb90e8599'
    },
    { 
        id: 2, 
        title: 'Знижки на ігри CD Projekt', 
        category: 'Акція', 
        date: '2024-01-10', 
        excerpt: 'Cyberpunk та Відьмак зі знижками до 70%',
        image: 'data:image/jpeg;base64,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'
    },
    { 
        id: 3, 
        title: 'Турнір з Rocket League', 
        category: 'Подія', 
        date: '2024-01-05', 
        excerpt: 'Призовий фонд 500 000 грн',
        image: 'https://i.ytimg.com/vi/pESqfUKaBb8/maxresdefault.jpg'
    }
];

// Стан додатку
let currentUser = null;
let cart = [];
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentPage = 'store';
let sliderInterval;

// DOM елементи
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');
const navLinks = document.querySelectorAll('.nav-link');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userMenu = document.getElementById('userMenu');
const userProfile = document.getElementById('userProfile');
const profileName = document.getElementById('profileName');
const profileAvatar = document.getElementById('profileAvatar');
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const balanceAmount = document.getElementById('balanceAmount');
const addBalanceBtn = document.getElementById('addBalanceBtn');

// Модальні вікна
const registerModal = document.getElementById('registerModal');
const loginModal = document.getElementById('loginModal');
const cartModal = document.getElementById('cartModal');
const gameModal = document.getElementById('gameModal');
const confirmModal = document.getElementById('confirmModal');
const balanceModal = document.getElementById('balanceModal');
const purchaseModal = document.getElementById('purchaseModal');
const insufficientModal = document.getElementById('insufficientModal');

// Функції модальних вікон
function openModal(modal) {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    if (!document.querySelector('.modal.active')) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Функції балансу
function updateBalanceDisplay() {
    if (currentUser) {
        balanceAmount.textContent = currentUser.balance || 0;
    } else {
        balanceAmount.textContent = '0';
    }
}

function addBalance(amount) {
    if (!currentUser) {
        alert('Увійдіть в акаунт');
        openModal(loginModal);
        return;
    }
    
    currentUser.balance = (currentUser.balance || 0) + amount;
    
    // Оновлюємо в масиві users
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].balance = currentUser.balance;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateBalanceDisplay();
    closeModal(balanceModal);
    alert(`Баланс поповнено на ${amount} грн!`);
}

// Функції кошика
function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = total;
    document.getElementById('cartItemCount').textContent = `(${total})`;
}

function addToCart(gameId) {
    if (!currentUser) {
        alert('Увійдіть в акаунт');
        openModal(loginModal);
        return;
    }
    
    const game = games.find(g => g.id === gameId);
    const existing = cart.find(item => item.id === gameId);
    
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...game, quantity: 1 });
    }
    
    updateCartCount();
    renderCart();
    
    document.getElementById('confirmMessage').textContent = `${game.name} додано!`;
    openModal(confirmModal);
}

function removeFromCart(gameId) {
    cart = cart.filter(item => item.id !== gameId);
    updateCartCount();
    renderCart();
}

function clearCart() {
    cart = [];
    updateCartCount();
    renderCart();
    closeModal(cartModal);
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function checkout() {
    if (!currentUser) {
        closeModal(cartModal);
        openModal(loginModal);
        return;
    }
    
    const total = calculateTotal();
    const userBalance = currentUser.balance || 0;
    
    if (total === 0) {
        // Безкоштовні ігри
        document.getElementById('purchaseMessage').innerHTML = `Ви успішно отримали безкоштовні ігри!`;
        cart = [];
        updateCartCount();
        renderCart();
        closeModal(cartModal);
        openModal(purchaseModal);
        return;
    }
    
    if (userBalance >= total) {
        // Достатньо коштів
        currentUser.balance = userBalance - total;
        
        // Оновлюємо в масиві users
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].balance = currentUser.balance;
            localStorage.setItem('users', JSON.stringify(users));
        }
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateBalanceDisplay();
        
        document.getElementById('purchaseMessage').innerHTML = `Покупка успішна!<br>Витрачено: ${total} грн<br>Залишок: ${currentUser.balance} грн`;
        
        cart = [];
        updateCartCount();
        renderCart();
        closeModal(cartModal);
        openModal(purchaseModal);
    } else {
        // Недостатньо коштів
        const needed = total - userBalance;
        document.getElementById('insufficientMessage').innerHTML = `Недостатньо коштів!<br>Потрібно ще: ${needed} грн<br>Ваш баланс: ${userBalance} грн`;
        openModal(insufficientModal);
    }
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const summary = document.getElementById('cartSummary');
    const totalEl = document.getElementById('cartTotal');
    const balanceInfo = document.getElementById('cartBalanceInfo');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Кошик порожній</p>
            </div>
        `;
        summary.style.display = 'none';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price === 0 ? 'Безкоштовно' : item.price + ' грн'} x ${item.quantity}</p>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    container.innerHTML = html;
    summary.style.display = 'block';
    totalEl.textContent = (total === 0 ? 'Безкоштовно' : total + ' грн');
    
    if (currentUser) {
        const userBalance = currentUser.balance || 0;
        if (total > 0) {
            if (userBalance >= total) {
                balanceInfo.innerHTML = `Достатньо коштів: ${userBalance} грн`;
                balanceInfo.style.color = '#00c851';
                checkoutBtn.disabled = false;
            } else {
                balanceInfo.innerHTML = `Недостатньо коштів: ${userBalance} грн (потрібно ще ${total - userBalance} грн)`;
                balanceInfo.style.color = '#ff4444';
                checkoutBtn.disabled = false;
            }
        } else {
            balanceInfo.innerHTML = 'Безкоштовні ігри';
            balanceInfo.style.color = '#ffd700';
            checkoutBtn.disabled = false;
        }
    }
}

// Функції користувача
function handleRegister(name, email, password) {
    if (users.some(u => u.email === email)) {
        alert('Email вже використовується');
        return false;
    }
    
    const user = { 
        id: Date.now(), 
        name, 
        email, 
        password,
        balance: 0 // Початковий баланс 1000 грн для тесту
    };
    
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    updateUIForUser();
    updateBalanceDisplay();
    closeModal(registerModal);
    alert(`Ласкаво просимо, ${name}! Вам нараховано 1000 грн`);
    return true;
}

function handleLogin(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateUIForUser();
        updateBalanceDisplay();
        
        const savedCart = localStorage.getItem(`cart_${user.email}`);
        if (savedCart) cart = JSON.parse(savedCart);
        
        updateCartCount();
        renderCart();
        closeModal(loginModal);
        alert(`Ласкаво просимо, ${user.name}!`);
    } else {
        alert('Невірний email або пароль');
    }
}

function handleLogout() {
    if (currentUser) {
        localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cart));
    }
    
    currentUser = null;
    localStorage.removeItem('currentUser');
    cart = [];
    updateCartCount();
    updateUIForUser();
    updateBalanceDisplay();
    renderPage(currentPage);
}

function updateUIForUser() {
    if (currentUser) {
        userMenu.style.display = 'none';
        userProfile.style.display = 'block';
        profileName.textContent = currentUser.name;
        profileAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
    } else {
        userMenu.style.display = 'flex';
        userProfile.style.display = 'none';
    }
}

// Рендеринг сторінок
function renderPage(page) {
    currentPage = page;
    
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
    
    // Зупиняємо інтервал слайдера якщо він був
    if (sliderInterval) {
        clearInterval(sliderInterval);
    }
    
    switch(page) {
        case 'store': renderStore(); break;
        case 'randomizer': renderRandomizer(); break;
        case 'cat': renderCatGenerator(); break;
        case 'news': renderNews(); break;
        case 'library': renderLibrary(); break;
        case 'support': renderSupport(); break;
        case 'profile': renderProfile(); break;
        default: renderStore();
    }
}

// СЛАЙДЕР
function initSlider() {
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    sliderInterval = setInterval(nextSlide, 5000);
}

function renderStore() {
    const freeGames = games.filter(g => g.price === 0);
    const popularGames = games.filter(g => g.category === 'premium');
    
    // Створюємо слайди для головної сторінки
    const sliderGames = games.slice(0, 3);
    
    mainContent.innerHTML = `
        <!-- Слайдер -->
        <div class="slider-container">
            <div class="slider-wrapper">
                ${sliderGames.map((game, index) => `
                    <div class="slider-slide ${index === 0 ? 'active' : ''}" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${game.banner}');">
                        <div class="slider-content">
                            <h2>${game.name}</h2>
                            <p>${game.description.substring(0, 100)}...</p>
                            <button class="slider-btn" onclick="showGameDetails(${game.id})">Дізнатися більше</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="slider-controls">
                <button class="slider-control slider-prev"><i class="fas fa-chevron-left"></i></button>
                <button class="slider-control slider-next"><i class="fas fa-chevron-right"></i></button>
            </div>
            
            <div class="slider-dots">
                ${sliderGames.map((_, index) => `
                    <span class="slider-dot ${index === 0 ? 'active' : ''}"></span>
                `).join('')}
            </div>
        </div>
        
        <!-- Основний контент магазину -->
        <section class="page">
            <div class="section-header">
                <h2>Безкоштовні ігри</h2>
                <a href="#" class="view-all">Всі <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="games-grid">
                ${freeGames.map(game => `
                    <div class="game-card" onclick="showGameDetails(${game.id})">
                        <img src="${game.image}" alt="${game.name}">
                        <div class="game-card-content">
                            <h3>${game.name}</h3>
                            <p>${game.developer}</p>
                            <div class="game-card-footer">
                                <span class="game-price">Безкоштовно</span>
                                <button class="add-btn" onclick="event.stopPropagation(); addToCart(${game.id})">
                                    <i class="fas fa-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
        
        <section class="page">
            <div class="section-header">
                <h2>Популярні ігри</h2>
                <a href="#" class="view-all">Всі <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="games-grid">
                ${popularGames.map(game => `
                    <div class="game-card" onclick="showGameDetails(${game.id})">
                        <img src="${game.image}" alt="${game.name}">
                        <div class="game-card-content">
                            <h3>${game.name}</h3>
                            <p>${game.developer}</p>
                            <div class="game-card-footer">
                                <span class="game-price">${game.price} грн</span>
                                <button class="add-btn" onclick="event.stopPropagation(); addToCart(${game.id})">
                                    <i class="fas fa-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    
    // Ініціалізуємо слайдер після рендерингу
    setTimeout(initSlider, 100);
}

function renderRandomizer() {
    mainContent.innerHTML = `
        <div class="randomizer-container">
            <h1>Рандомайзер ігор</h1>
            <p class="randomizer-description">Натисніть кнопку, щоб отримати випадкову гру з нашого каталогу</p>
            <button class="randomizer-btn" id="randomizerBtn">Згенерувати гру</button>
            <div class="randomizer-result" id="randomizerResult" style="display: none;">
                <img src="" alt="" class="randomizer-game-image" id="randomizerImage">
                <h2 class="randomizer-game" id="randomizerName"></h2>
                <p class="randomizer-developer" id="randomizerDeveloper"></p>
                <p class="randomizer-game-price" id="randomizerPrice"></p>
                <button class="randomizer-btn" style="margin-top: 20px;" onclick="addToCart(parseInt(document.getElementById('randomizerId').value))">Додати в кошик</button>
                <input type="hidden" id="randomizerId">
            </div>
        </div>
    `;
    
    document.getElementById('randomizerBtn').addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * games.length);
        const game = games[randomIndex];
        
        document.getElementById('randomizerId').value = game.id;
        document.getElementById('randomizerImage').src = game.image;
        document.getElementById('randomizerName').textContent = game.name;
        document.getElementById('randomizerDeveloper').textContent = game.developer;
        document.getElementById('randomizerPrice').textContent = game.price === 0 ? 'Безкоштовно' : game.price + ' грн';
        document.getElementById('randomizerResult').style.display = 'block';
    });
}

function renderCatGenerator() {
    mainContent.innerHTML = `
        <div class="cat-container">
            <h1>Генератор випадкового котика</h1>
            <button class="cat-btn" id="catBtn">Згенерувати котика</button>
            <div class="cat-image-container" id="catContainer">
                <img src="" alt="Випадковий котик" class="cat-image" id="catImage" style="display: none;">
            </div>
        </div>
    `;
    
    document.getElementById('catBtn').addEventListener('click', async () => {
        const btn = document.getElementById('catBtn');
        btn.disabled = true;
        btn.textContent = 'Завантаження...';
        
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            const catUrl = data[0].url;
            
            const img = document.getElementById('catImage');
            img.src = catUrl;
            img.style.display = 'block';
        } catch (error) {
            alert('Не вдалося завантажити котика. Спробуйте пізніше.');
        } finally {
            btn.disabled = false;
            btn.textContent = 'Згенерувати котика';
        }
    });
}

function renderNews() {
    mainContent.innerHTML = `
        <section class="page">
            <h1>Новини</h1>
            <div class="news-grid">
                ${news.map(item => `
                    <div class="news-card">
                        <img src="${item.image}" alt="${item.title}">
                        <div class="news-content">
                            <span class="news-category">${item.category}</span>
                            <h3>${item.title}</h3>
                            <p>${item.excerpt}</p>
                            <small class="news-date">${item.date}</small>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function renderLibrary() {
    if (!currentUser) {
        mainContent.innerHTML = `
            <section class="page">
                <h1>Бібліотека</h1>
                <p>Увійдіть, щоб переглянути бібліотеку</p>
            </section>
        `;
        return;
    }
    
    const ownedGames = games.slice(0, 5);
    
    mainContent.innerHTML = `
        <section class="page">
            <h1>Моя бібліотека</h1>
            <div class="library-grid">
                ${ownedGames.map(game => `
                    <div class="library-item">
                        <h3>${game.name}</h3>
                        <p>${game.developer}</p>
                        <div class="library-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${Math.floor(Math.random() * 100)}%"></div>
                            </div>
                            <span class="progress-text">${Math.floor(Math.random() * 100)}% завершено</span>
                        </div>
                        <button class="play-btn" onclick="alert('Гра запускається...')">
                            <i class="fas fa-play"></i> Грати
                        </button>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function renderSupport() {
    mainContent.innerHTML = `
        <section class="page">
            <h1>Підтримка</h1>
            <div class="support-grid">
                <div class="support-card">
                    <i class="fas fa-question-circle"></i>
                    <h3>FAQ</h3>
                    <p>Відповіді на найпоширеніші питання</p>
                    <a href="#" class="support-link">Дізнатися більше</a>
                </div>
                <div class="support-card">
                    <i class="fas fa-headset"></i>
                    <h3>Контакти</h3>
                    <p>Зв'яжіться з нашою службою підтримки</p>
                    <a href="#" class="support-link">Написати</a>
                </div>
                <div class="support-card">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Безпека</h3>
                    <p>Поради щодо безпеки акаунту</p>
                    <a href="#" class="support-link">Детальніше</a>
                </div>
            </div>
        </section>
    `;
}

function renderProfile() {
    if (!currentUser) {
        renderPage('store');
        return;
    }
    
    mainContent.innerHTML = `
        <section class="page">
            <h1>Профіль користувача</h1>
            <div style="background: #1e1e1e; padding: 30px; border-radius: 12px; margin-top: 20px;">
                <p><strong>Ім'я:</strong> ${currentUser.name}</p>
                <p><strong>Email:</strong> ${currentUser.email}</p>
                <p><strong>Баланс:</strong> ${currentUser.balance || 0} грн</p>
                <p><strong>ID:</strong> ${currentUser.id}</p>
            </div>
        </section>
    `;
}

function showGameDetails(gameId) {
    const game = games.find(g => g.id === gameId);
    
    document.getElementById('gameTitle').textContent = game.name;
    document.getElementById('gameDetails').innerHTML = `
        <img src="${game.banner}" alt="${game.name}" class="game-image">
        <div class="game-info">
            <p><strong>Розробник:</strong> ${game.developer}</p>
            <p><strong>Опис:</strong> ${game.description}</p>
            <p><strong>Ціна:</strong> ${game.price === 0 ? 'Безкоштовно' : game.price + ' грн'}</p>
        </div>
        <div style="display: flex; gap: 10px;">
            <button class="modal-btn" style="flex: 1;" onclick="addToCart(${game.id}); closeModal(gameModal);">
                ${game.price === 0 ? 'Отримати' : 'Додати в кошик'}
            </button>
            ${game.price === 0 ? `
                <button class="modal-btn" style="flex: 1; background: #ff4444;" onclick="alert('Безкоштовні ігри тільки на Торенті 😉');">
                    Грати безкоштовно
                </button>
            ` : ''}
        </div>
    `;
    
    openModal(gameModal);
}

function searchGames(query) {
    if (!query.trim()) {
        searchResults.classList.remove('active');
        return;
    }
    
    const results = games.filter(g => 
        g.name.toLowerCase().includes(query.toLowerCase()) ||
        g.developer.toLowerCase().includes(query.toLowerCase())
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">Нічого не знайдено</div>';
        searchResults.classList.add('active');
        return;
    }
    
    searchResults.innerHTML = results.slice(0, 5).map(game => `
        <div class="search-result-item" onclick="showGameDetails(${game.id}); searchInput.value=''; searchResults.classList.remove('active');">
            <img src="${game.image}" alt="${game.name}">
            <div>
                <h4>${game.name}</h4>
                <p style="color: #888;">${game.developer}</p>
            </div>
            <span style="color: #0078f2; margin-left: auto;">${game.price === 0 ? 'Безкоштовно' : game.price + ' грн'}</span>
        </div>
    `).join('');
    
    searchResults.classList.add('active');
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    // Завантаження користувача
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        const savedCart = localStorage.getItem(`cart_${currentUser.email}`);
        if (savedCart) cart = JSON.parse(savedCart);
        updateCartCount();
        updateUIForUser();
        updateBalanceDisplay();
    }
    
    renderPage('store');
    
    // Навігація
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            renderPage(link.dataset.page);
        });
    });
    
    // Модальні вікна
    registerBtn.addEventListener('click', () => openModal(registerModal));
    loginBtn.addEventListener('click', () => openModal(loginModal));
    cartBtn.addEventListener('click', () => {
        renderCart();
        openModal(cartModal);
    });
    
    addBalanceBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(balanceModal);
    });
    
    // Закриття модальних вікон
    document.getElementById('closeRegister').addEventListener('click', () => closeModal(registerModal));
    document.getElementById('closeLogin').addEventListener('click', () => closeModal(loginModal));
    document.getElementById('closeCart').addEventListener('click', () => closeModal(cartModal));
    document.getElementById('closeGame').addEventListener('click', () => closeModal(gameModal));
    document.getElementById('closeBalance').addEventListener('click', () => closeModal(balanceModal));
    document.getElementById('continueBtn').addEventListener('click', () => closeModal(confirmModal));
    document.getElementById('viewCartBtn').addEventListener('click', () => {
        closeModal(confirmModal);
        renderCart();
        openModal(cartModal);
    });
    document.getElementById('closePurchaseBtn').addEventListener('click', () => closeModal(purchaseModal));
    document.getElementById('closeInsufficientBtn').addEventListener('click', () => closeModal(insufficientModal));
    document.getElementById('addBalanceFromInsufficient').addEventListener('click', () => {
        closeModal(insufficientModal);
        openModal(balanceModal);
    });
    
    overlay.addEventListener('click', closeAllModals);
    
    // Перемикання форм
    document.getElementById('switchToLogin').addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        openModal(loginModal);
    });
    
    document.getElementById('switchToRegister').addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(registerModal);
    });
    
    // Реєстрація
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const pass = document.getElementById('regPassword').value;
        const confirm = document.getElementById('regConfirm').value;
        
        if (pass !== confirm) {
            alert('Паролі не співпадають');
            return;
        }
        
        if (pass.length < 6) {
            alert('Пароль має бути мінімум 6 символів');
            return;
        }
        
        handleRegister(name, email, pass);
        e.target.reset();
    });
    
    // Вхід
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;
        
        handleLogin(email, pass);
        e.target.reset();
    });
    
    // Вихід
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
    });
    
    // Профіль меню
    profileBtn.addEventListener('click', () => {
        profileDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-profile')) {
            profileDropdown.classList.remove('active');
        }
    });
    
    // Пошук
    searchInput.addEventListener('input', (e) => {
        searchGames(e.target.value);
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            searchResults.classList.remove('active');
        }
    });
    
    // Поповнення балансу
    document.querySelectorAll('.balance-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const amount = parseInt(btn.dataset.amount);
            addBalance(amount);
        });
    });
    
    document.getElementById('confirmAddBalance').addEventListener('click', () => {
        const customAmount = parseInt(document.getElementById('customAmount').value);
        if (customAmount && customAmount > 0) {
            addBalance(customAmount);
        } else {
            alert('Введіть коректну суму');
        }
    });
    
    // Очищення кошика
    document.getElementById('clearCartBtn').addEventListener('click', () => {
        if (confirm('Ви впевнені, що хочете очистити кошик?')) {
            clearCart();
        }
    });
    
    // Оформлення замовлення
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
});