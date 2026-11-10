/**
 * STEAM CLIENT CONTROLLER
 * Real Local Auth • Dynamic Profiles • Zero Hardcoding • Per-User Library • Real Game Launcher
 */

// 1. STEAM MASTER CATALOG
const STEAM_CATALOG = [
  {
    id: 570,
    title: "Counter-Strike 2 (3D FPS Demake)",
    genre: "Тактический 3D шутер / FPS",
    developer: "Valve & Community",
    publisher: "Steam Platform",
    price: "Бесплатно",
    rating: "98% Крайне положительные",
    shortDescription: "Аутентичный тактический софтверный 3D FPS на C# (.NET 9) с DDA Raycasting, полным обзором камеры (Pitch/Yaw), оружием AK-47/Deagle/Нож и ботами на карте Dust 2.",
    detailedDescription: "Counter-Strike 2 Demake — это высокопроизводительный софтверный 3D FPS, созданный с нуля на C#. Движок трассировки лучей (DDA Raycasting) работает напрямую с кадровым буфером памяти в 32bpp ARGB при 100+ FPS.\n\nКлючевые особенности:\n• Полный обзор во всех плоскостях: горизонтальное вращение и наклон камеры вверх и вниз.\n• Оружие синхронизировано с прицелом: отдача (recoil), инерция мыши (sway) и хедшоты.\n• Арсенал: автомат Калашникова AK-47, Desert Eagle со стальным затвором, тактический боевой нож.\n• Интерактивные двери на [E], прыжки на [Space], присядка на [Ctrl] / [C].\n• Динамичный тактический HUD, радар, киллфид и мишени-боты.",
    banner: "assets/games/cs2/banner.png",
    screenshots: [
      "assets/games/cs2/screen1.png",
      "assets/games/cs2/screen2.png",
      "assets/games/cs2/screen3.png",
      "assets/games/cs2/banner.png"
    ],
    tags: ["3D FPS", "Dust 2", "AK-47", "C# .NET 9", "Рэйкастинг"],
    executableRelativePath: "cs2.exe",
    installDirectory: "steamapps/common/CS2Source",
    installSize: "15.4 МБ",
    installed: true
  },
  {
    id: 1992,
    title: "Super Mario Kart C# (60 FPS Edition)",
    genre: "Аркадные гонки / Mode 7 3D",
    developer: "Nintendo / C# Port",
    publisher: "Steam Platform",
    price: "Бесплатно",
    rating: "96% Очень положительные",
    shortDescription: "Культовые аркадные гонки со сплит-скрином и сетевым мультиплеером на C# и SFML с аппаратным шейдером Mode 7 и стабильными 60 FPS.",
    detailedDescription: "Аутентичный порт культового Super Mario Kart на современный C# .NET 9 и SFML.Net 3.0.\n\nКлючевые особенности:\n• Mode 7 псевдо-3D рендеринг через аппаратный шейдер GLSL.\n• Стабильные 60 FPS (Zero-Allocation Render Queue & Spatial Grid).\n• 8 уникальных гонщиков: Mario, Luigi, Peach, Bowser, Toad, Yoshi, DK, Koopa.\n• Трасса Mario Circuit 2 и Donut Plains 1 с физикой дрифта и спинаутами.\n• Монеты, бананы, звуки дрифта, оригинальный саундтрек.\n• Мультиплеер 2P по локальной сети (UDP Host-Client).",
    banner: "assets/games/mariokart/screen1.png",
    screenshots: [
      "assets/games/mariokart/screen1.png",
      "assets/games/mariokart/screen2.png",
      "assets/games/mariokart/screen3.png",
      "assets/games/mariokart/screen4.png"
    ],
    tags: ["Гонки", "Mode 7", "60 FPS", "Мультиплеер LAN", "Ретро"],
    executableRelativePath: "MarioKartCS.exe",
    installDirectory: "steamapps/common/MarioKartCS",
    installSize: "38.8 МБ",
    installed: true
  },
  {
    id: 101,
    title: "Dungeons & Dragons: Console RPG",
    genre: "Пошаговая RPG / ASCII Art",
    developer: "Wizards & Community",
    publisher: "Steam Platform",
    price: "Бесплатно",
    rating: "94% Положительные",
    shortDescription: "Глубокая партийная ролевая игра по правилам D&D 5-й редакции с 12 классами, расами, подземельями, инвентарем и ASCII-арт графикой.",
    detailedDescription: "Пошаговая ролевая система с генерацией персонажа, характеристиками D20, торговцем Бобом, квестами в таверне, битвами с боссами в подземельях и интерактивной ASCII-графикой.",
    banner: "assets/games/dnd/banner.png",
    screenshots: [
      "assets/games/dnd/screen1.png",
      "assets/games/dnd/screen2.png",
      "assets/games/dnd/screen3.png",
      "assets/games/dnd/banner.png"
    ],
    tags: ["D&D 5e", "RPG", "Пошаговая", "ASCII Art", "Классика"],
    executableRelativePath: "game.exe",
    installDirectory: "steamapps/common/Console-DnD",
    installSize: "8.3 МБ",
    installed: true
  },
  {
    id: 70,
    title: "Half-Life 3 (Source 2 Prototype)",
    genre: "Шутер от первого лица / Valve",
    developer: "Valve Corporation",
    publisher: "Valve",
    price: "Бесплатно",
    rating: "99% Шедевр",
    shortDescription: "Самая долгожданная игра в истории индустрии. Приключения Гордона Фримена и Аликс Вэнс в Арктике у исследовательского судна Борей.",
    detailedDescription: "Легендарное продолжение истории Half-Life 2: Episode Two на движке Source 2. Гравитационная пушка, физические головоломки и противостояние Альянсу.",
    banner: "assets/games/hl3/banner.png",
    screenshots: [
      "assets/games/hl3/screen1.png",
      "assets/games/hl3/screen2.png",
      "assets/games/hl3/screen3.png",
      "assets/games/hl3/banner.png"
    ],
    tags: ["Valve", "Гордон Фримен", "Борей", "Шутер", "Сюжет"],
    executableRelativePath: "hl3_game.exe",
    installDirectory: "steamapps/common/HalfLife3",
    installSize: "10.0 МБ",
    installed: true
  },
  {
    id: 400,
    title: "Portal: Aperture Science Demo",
    genre: "Головоломка / Порталы",
    developer: "Valve Corporation",
    publisher: "Valve",
    price: "Бесплатно",
    rating: "99% Крайне положительные",
    shortDescription: "Революционная физическая головоломка с портальной пушкой в испытательных камерах Aperture Science под наблюдением GLaDOS.",
    detailedDescription: "Используйте портальную пушку ASHPD для преодоления смертельных испытаний, энергетических сфер и турелей в лабораториях Aperture Science.",
    banner: "assets/games/portal/banner.png",
    screenshots: [
      "assets/games/portal/screen1.png",
      "assets/games/portal/screen2.png",
      "assets/games/portal/screen3.png",
      "assets/games/portal/banner.png"
    ],
    tags: ["Порталы", "Головоломка", "GLaDOS", "Физика", "Шедевр"],
    executableRelativePath: "portal.exe",
    installDirectory: "steamapps/common/Portal",
    installSize: "14.2 МБ",
    installed: true
  }
];

// ============================================================================
// 2. LOCAL AUTHENTICATION & ACCOUNT MANAGER (Zero Hardcoding)
// ============================================================================

class LocalAccountManager {
  constructor() {
    this.STORAGE_KEY_USERS = "steam_local_accounts_db";
    this.STORAGE_KEY_ACTIVE = "steam_active_account_username";
    this.initDatabase();
  }

  initDatabase() {
    // Zero hardcoding: purge any legacy placeholder accounts and start clean
    let users = [];
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY_USERS);
      if (raw) {
        users = JSON.parse(raw);
        // Remove old demo placeholders
        users = users.filter(u => u.username !== "gamer" && !(u.displayName && u.displayName.includes("ØSKAR")));
      }
    } catch {
      users = [];
    }
    localStorage.setItem(this.STORAGE_KEY_USERS, JSON.stringify(users));

    const active = localStorage.getItem(this.STORAGE_KEY_ACTIVE);
    if (active === "gamer" || (active && !users.some(u => u.username === active))) {
      localStorage.removeItem(this.STORAGE_KEY_ACTIVE);
    }
  }

  getUsers() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY_USERS)) || [];
    } catch {
      return [];
    }
  }

  saveUsers(users) {
    localStorage.setItem(this.STORAGE_KEY_USERS, JSON.stringify(users));
  }

  getActiveUser() {
    const activeUsername = localStorage.getItem(this.STORAGE_KEY_ACTIVE);
    if (!activeUsername) return null;
    const users = this.getUsers();
    return users.find(u => u.username.toLowerCase() === activeUsername.toLowerCase()) || null;
  }

  register(username, password, displayName) {
    username = (username || "").trim().toLowerCase();
    displayName = (displayName || "").trim() || username;
    password = (password || "").trim();

    if (!username) throw new Error("Укажите имя аккаунта (логин).");
    if (username.length < 3) throw new Error("Имя аккаунта должно быть не менее 3 символов.");
    if (!password) throw new Error("Укажите пароль.");
    if (password.length < 3) throw new Error("Пароль должен быть не менее 3 символов.");

    const users = this.getUsers();
    if (users.some(u => u.username.toLowerCase() === username)) {
      throw new Error("Аккаунт с таким именем уже существует.");
    }

    const newUser = {
      username: username,
      password: password,
      displayName: displayName,
      avatar: "assets/avatar_default.svg",
      bio: "Пользователь Steam",
      library: [], // New user starts with clean empty library, can add any game freely
      playtime: {},
      lastPlayed: {},
      createdAt: new Date().toLocaleDateString("ru-RU")
    };

    users.push(newUser);
    this.saveUsers(users);
    this.setActiveUser(username);
    return newUser;
  }

  login(username, password) {
    username = (username || "").trim().toLowerCase();
    password = (password || "").trim();

    if (!username || !password) {
      throw new Error("Заполните логин и пароль.");
    }

    const users = this.getUsers();
    const user = users.find(u => u.username.toLowerCase() === username && u.password === password);
    if (!user) {
      throw new Error("Неверное имя аккаунта или пароль.");
    }

    this.setActiveUser(username);
    return user;
  }

  logout() {
    localStorage.removeItem(this.STORAGE_KEY_ACTIVE);
  }

  setActiveUser(username) {
    localStorage.setItem(this.STORAGE_KEY_ACTIVE, username);
  }

  updateProfile(updates) {
    const user = this.getActiveUser();
    if (!user) return null;

    const users = this.getUsers();
    const idx = users.findIndex(u => u.username.toLowerCase() === user.username.toLowerCase());
    if (idx === -1) return null;

    Object.assign(users[idx], updates);
    this.saveUsers(users);
    return users[idx];
  }

  addGameToLibrary(gameId) {
    const user = this.getActiveUser();
    if (!user) return false;

    if (!user.library) user.library = [];
    if (!user.library.includes(gameId)) {
      user.library.push(gameId);
      this.updateProfile({ library: user.library });
      return true;
    }
    return false;
  }

  recordGamePlayed(gameId) {
    const user = this.getActiveUser();
    if (!user) return;
    const playtimes = user.playtime || {};
    const lastPlayed = user.lastPlayed || {};

    playtimes[gameId] = (playtimes[gameId] || 0) + 0.1;
    lastPlayed[gameId] = "Сегодня";

    this.updateProfile({ playtime: playtimes, lastPlayed: lastPlayed });
  }
}

// ============================================================================
// 3. MAIN STEAM CLIENT APPLICATION
// ============================================================================

class SteamClientApp {
  constructor() {
    this.accountManager = new LocalAccountManager();
    this.games = STEAM_CATALOG;
    this.selectedGameId = 570;
    this.featuredCarouselIndex = 0;
    this.carouselTimer = null;
    this.runningGameId = null;
    this.isGameRunning = false;
    this.tempProfileAvatar = null;
    this.searchQuery = "";

    this.init();
  }

  init() {
    this.bindEvents();
    this.syncCurrentUser();
    this.renderStore();
    this.renderLibrarySidebar();
    this.selectGame(this.selectedGameId);
    this.startCarouselAutoCycle();

    // Check if user is logged in; if not, open Auth modal
    const active = this.accountManager.getActiveUser();
    if (!active) {
      this.openAuthModal("login");
    }

    // Setup IPC with C++ WebView2
    if (window.chrome && window.chrome.webview) {
      window.chrome.webview.addEventListener("message", (event) => {
        this.handleBackendMessage(event.data);
      });
      this.sendToBackend({ action: "ready" });
    }
  }

  // ==========================================================================
  // NAVIGATION & TABS
  // ==========================================================================

  switchTab(tabName) {
    document.querySelectorAll(".steam-nav-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.tab === tabName);
    });
    document.querySelectorAll(".steam-view-tab").forEach(view => {
      view.classList.toggle("active", view.id === `view-${tabName}`);
    });
  }

  // ==========================================================================
  // USER SESSION & TOPBAR SYNC
  // ==========================================================================

  syncCurrentUser() {
    const user = this.accountManager.getActiveUser();
    const avatarImg = document.getElementById("header-avatar-img");
    const nicknameEl = document.getElementById("header-nickname");
    const countBadge = document.getElementById("lib-count-badge");
    const logoutBtn = document.getElementById("header-logout-btn");

    if (user) {
      if (avatarImg) avatarImg.src = user.avatar || "assets/avatar_default.svg";
      if (nicknameEl) nicknameEl.textContent = user.displayName || user.username;
      if (countBadge) countBadge.textContent = (user.library || []).length;
      if (logoutBtn) logoutBtn.style.display = "flex";
    } else {
      if (avatarImg) avatarImg.src = "assets/avatar_default.svg";
      if (nicknameEl) nicknameEl.textContent = "Вход в Steam";
      if (countBadge) countBadge.textContent = "0";
      if (logoutBtn) logoutBtn.style.display = "none";
    }
  }

  // ==========================================================================
  // STORE VIEW RENDERING
  // ==========================================================================

  renderStore() {
    this.renderFeaturedCarousel();
    this.renderStoreGrid();
  }

  renderFeaturedCarousel() {
    const featured = this.games[this.featuredCarouselIndex] || this.games[0];
    if (!featured) return;

    const user = this.accountManager.getActiveUser();
    const isOwned = user && user.library && user.library.includes(featured.id);

    // Title & Text
    const titleEl = document.getElementById("carousel-title");
    const descEl = document.getElementById("carousel-short-desc");
    if (titleEl) titleEl.textContent = featured.title;
    if (descEl) descEl.textContent = featured.shortDescription;

    // Main Visual
    const mainImg = document.getElementById("carousel-main-img");
    if (mainImg) mainImg.src = featured.banner;

    // Mini Thumbs Grid
    const thumbsContainer = document.getElementById("carousel-thumbs");
    if (thumbsContainer) {
      thumbsContainer.innerHTML = "";
      featured.screenshots.forEach((shot, idx) => {
        const thumb = document.createElement("img");
        thumb.src = shot;
        thumb.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
        
        thumb.onmouseenter = () => {
          thumbsContainer.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
          thumb.classList.add("active");
          if (mainImg) mainImg.src = shot;
        };
        thumb.onclick = () => {
          thumbsContainer.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
          thumb.classList.add("active");
          if (mainImg) mainImg.src = shot;
        };
        thumbsContainer.appendChild(thumb);
      });
    }

    // Tags
    const tagsContainer = document.getElementById("carousel-tags");
    if (tagsContainer) {
      tagsContainer.innerHTML = "";
      (featured.tags || []).forEach(tag => {
        const span = document.createElement("span");
        span.className = "steam-tag";
        span.textContent = tag;
        tagsContainer.appendChild(span);
      });
    }

    // Carousel Action Button
    const addBtn = document.getElementById("carousel-add-btn");
    if (addBtn) {
      if (isOwned) {
        addBtn.textContent = "✓ В БИБЛИОТЕКЕ";
        addBtn.className = "steam-btn steam-btn-secondary";
        addBtn.onclick = () => {
          this.selectGame(featured.id);
          this.switchTab("library");
        };
      } else {
        addBtn.textContent = "В БИБЛИОТЕКУ";
        addBtn.className = "steam-btn steam-btn-green";
        addBtn.onclick = () => {
          this.addToLibrary(featured.id);
        };
      }
    }

    // Dots indicator
    const dotsBox = document.getElementById("caro-dots");
    if (dotsBox) {
      dotsBox.innerHTML = "";
      this.games.forEach((g, i) => {
        const dot = document.createElement("div");
        dot.className = `caro-dot ${i === this.featuredCarouselIndex ? 'active' : ''}`;
        dot.onclick = () => {
          this.featuredCarouselIndex = i;
          this.renderFeaturedCarousel();
        };
        dotsBox.appendChild(dot);
      });
    }
  }

  nextFeaturedGame() {
    this.featuredCarouselIndex = (this.featuredCarouselIndex + 1) % this.games.length;
    this.renderFeaturedCarousel();
  }

  prevFeaturedGame() {
    this.featuredCarouselIndex = (this.featuredCarouselIndex - 1 + this.games.length) % this.games.length;
    this.renderFeaturedCarousel();
  }

  startCarouselAutoCycle() {
    if (this.carouselTimer) clearInterval(this.carouselTimer);
    this.carouselTimer = setInterval(() => {
      this.nextFeaturedGame();
    }, 8000);
  }

  renderStoreGrid() {
    const container = document.getElementById("store-cards-container");
    if (!container) return;
    container.innerHTML = "";

    const user = this.accountManager.getActiveUser();
    const userLibrary = (user && user.library) ? user.library : [];

    const query = (this.searchQuery || "").trim().toLowerCase();
    const filtered = this.games.filter(g => {
      if (!query) return true;
      return g.title.toLowerCase().includes(query) ||
             g.genre.toLowerCase().includes(query) ||
             (g.tags && g.tags.some(t => t.toLowerCase().includes(query)));
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1 / -1; padding: 40px 20px; text-align: center; color: var(--steam-text-muted); font-size: 14px;">По вашему запросу ничего не найдено.</div>`;
      return;
    }

    filtered.forEach(game => {
      const isOwned = userLibrary.includes(game.id);

      const card = document.createElement("div");
      card.className = "store-game-card";
      card.onclick = () => {
        this.selectGame(game.id);
        this.switchTab("library");
      };

      card.innerHTML = `
        <img src="${game.banner}" alt="${game.title}" class="card-banner-img">
        <div class="card-body">
          <div>
            <h4 class="card-title">${game.title}</h4>
            <div class="card-genre">${game.genre}</div>
          </div>
          <div class="card-bottom-row">
            <div class="steam-discount-block">
              <span class="discount-percent">-100%</span>
              <span class="discount-final">БЕСПЛАТНО</span>
            </div>
            <button class="steam-btn ${isOwned ? 'card-add-btn in-library' : 'steam-btn-green card-add-btn'}" data-id="${game.id}">
              ${isOwned ? '✓ В библиотеке' : '+ В библиотеку'}
            </button>
          </div>
        </div>
      `;

      // Button handler
      const btn = card.querySelector(".card-add-btn");
      btn.onclick = (e) => {
        e.stopPropagation();
        if (isOwned) {
          this.selectGame(game.id);
          this.switchTab("library");
        } else {
          this.addToLibrary(game.id);
        }
      };

      container.appendChild(card);
    });
  }

  addToLibrary(gameId) {
    const user = this.accountManager.getActiveUser();
    if (!user) {
      this.showToast("Сначала войдите в свой аккаунт Steam!");
      this.openAuthModal("login");
      return;
    }

    const added = this.accountManager.addGameToLibrary(gameId);
    const game = this.games.find(g => g.id === gameId);

    if (added) {
      this.showToast(`Игра «${game ? game.title : ''}» добавлена в вашу библиотеку!`);
      this.sendToBackend({ action: "add_to_library", gameId: gameId });
    } else {
      this.showToast(`Игра «${game ? game.title : ''}» уже в вашей библиотеке.`);
    }

    this.syncCurrentUser();
    this.renderStore();
    this.renderLibrarySidebar();
  }

  // ==========================================================================
  // LIBRARY VIEW RENDERING
  // ==========================================================================

  renderLibrarySidebar() {
    const list = document.getElementById("lib-games-list");
    const emptyBox = document.getElementById("lib-empty-box");
    if (!list) return;
    list.innerHTML = "";

    const user = this.accountManager.getActiveUser();
    const userLibrary = (user && user.library) ? user.library : [];
    const libGames = this.games.filter(g => userLibrary.includes(g.id));

    const totalEl = document.getElementById("lib-total-count");
    const countBadge = document.getElementById("lib-count-badge");
    if (totalEl) totalEl.textContent = libGames.length;
    if (countBadge) countBadge.textContent = libGames.length;

    if (libGames.length === 0) {
      if (emptyBox) emptyBox.style.display = "flex";
      return;
    }
    if (emptyBox) emptyBox.style.display = "none";

    libGames.forEach(game => {
      const item = document.createElement("div");
      item.className = `lib-game-item ${game.id === this.selectedGameId ? 'active' : ''}`;
      item.onclick = () => this.selectGame(game.id);

      const dotClass = game.installed ? "installed" : "uninstalled";
      item.innerHTML = `
        <span class="lib-game-dot ${dotClass}"></span>
        <span class="lib-game-title">${game.title}</span>
      `;
      list.appendChild(item);
    });

    // If current selected game not in library, auto-select first owned
    if (!userLibrary.includes(this.selectedGameId) && libGames.length > 0) {
      this.selectGame(libGames[0].id);
    }
  }

  selectGame(gameId) {
    this.selectedGameId = gameId;
    const game = this.games.find(g => g.id === gameId);
    if (!game) return;

    const user = this.accountManager.getActiveUser();
    const userPlaytime = (user && user.playtime && user.playtime[gameId]) ? user.playtime[gameId] : 0.0;
    const userLastPlayed = (user && user.lastPlayed && user.lastPlayed[gameId]) ? user.lastPlayed[gameId] : "Никогда";

    // Update active highlight in sidebar
    document.querySelectorAll(".lib-game-item").forEach(item => {
      const titleSpan = item.querySelector(".lib-game-title");
      if (titleSpan && titleSpan.textContent === game.title) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Update Game Hub
    const hubTitle = document.getElementById("hub-game-title");
    const hubGenre = document.getElementById("hub-genre");
    const hubDev = document.getElementById("hub-dev");
    const statLast = document.getElementById("stat-last-played");
    const statPlay = document.getElementById("stat-playtime");
    const infoDev = document.getElementById("info-developer");
    const infoDir = document.getElementById("info-install-dir");
    const hubDesc = document.getElementById("hub-full-description");

    if (hubTitle) hubTitle.textContent = game.title;
    if (hubGenre) hubGenre.textContent = game.genre;
    if (hubDev) hubDev.textContent = game.developer;
    if (statLast) statLast.textContent = userLastPlayed;
    if (statPlay) statPlay.textContent = `${userPlaytime.toFixed(1)} ч.`;
    if (infoDev) infoDev.textContent = game.developer;
    if (infoDir) infoDir.textContent = game.installDirectory;
    if (hubDesc) hubDesc.textContent = game.detailedDescription;

    // Set Hero Banner
    const heroBanner = document.getElementById("game-hero-banner");
    if (heroBanner) heroBanner.style.backgroundImage = `url('${game.banner}')`;

    // Screenshots Gallery
    const gallery = document.getElementById("hub-gallery");
    if (gallery) {
      gallery.innerHTML = "";
      game.screenshots.forEach(shot => {
        const img = document.createElement("img");
        img.src = shot;
        img.alt = game.title;
        img.onclick = () => window.open(shot, "_blank");
        gallery.appendChild(img);
      });
    }

    // Update Play / Install Button
    this.updatePlayButton();
  }

  updatePlayButton() {
    const game = this.games.find(g => g.id === this.selectedGameId);
    if (!game) return;

    const btn = document.getElementById("main-play-btn");
    const icon = document.getElementById("play-btn-icon");
    const text = document.getElementById("play-btn-text");
    const status = document.getElementById("hub-game-status");
    if (!btn || !icon || !text || !status) return;

    btn.className = "steam-play-btn";

    if (this.isGameRunning && this.runningGameId === game.id) {
      btn.classList.add("red");
      icon.textContent = "⏹";
      text.textContent = "ОСТАНОВИТЬ";
      status.textContent = "В игре";
      status.style.color = "#57cb2e";
      btn.onclick = () => this.stopGame(game.id);
    } else if (game.installed) {
      btn.classList.add("green");
      icon.textContent = "▶";
      text.textContent = "ИГРАТЬ";
      status.textContent = "Готово к запуску";
      status.style.color = "#57cb2e";
      btn.onclick = () => this.launchGame(game.id);
    } else {
      btn.classList.add("blue");
      icon.textContent = "⬇";
      text.textContent = "УСТАНОВИТЬ";
      status.textContent = "Требуется установка";
      status.style.color = "#8f98a0";
      btn.onclick = () => this.installGame(game.id);
    }
  }

  // ==========================================================================
  // GAME LAUNCHER & LIFECYCLE
  // ==========================================================================

  launchGame(gameId) {
    const user = this.accountManager.getActiveUser();
    if (!user) {
      this.showToast("Сначала войдите в свой аккаунт Steam!");
      this.openAuthModal("login");
      return;
    }

    const game = this.games.find(g => g.id === gameId);
    this.showToast(`Запуск игры: ${game ? game.title : ''}`);
    this.accountManager.recordGamePlayed(gameId);
    this.sendToBackend({ action: "launch_game", gameId: gameId });
  }

  stopGame(gameId) {
    this.showToast("Остановка игры...");
    this.sendToBackend({ action: "stop_game", gameId: gameId });
  }

  installGame(gameId) {
    const game = this.games.find(g => g.id === gameId);
    if (!game) return;

    this.showToast(`Установка ${game.title} в steamapps/common/...`);

    const progressBox = document.getElementById("lib-download-progress");
    const fill = document.getElementById("dl-progress-bar");
    const speed = document.getElementById("dl-speed-text");
    if (progressBox) progressBox.style.display = "block";
    if (fill) fill.style.width = "10%";

    this.sendToBackend({ action: "install_game", gameId: gameId });

    let p = 10;
    const timer = setInterval(() => {
      p += 15;
      if (fill) fill.style.width = `${Math.min(p, 95)}%`;
      if (speed) speed.textContent = `34.5 МБ/с • ${Math.min(p, 95)}%`;
      if (p >= 100) {
        clearInterval(timer);
      }
    }, 250);
  }

  // ==========================================================================
  // MODALS & EVENT BINDINGS
  // ==========================================================================

  bindEvents() {
    const on = (id, evt, handler) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener(evt, handler);
    };

    // Top Navigation Tabs
    on("tab-store", "click", () => this.switchTab("store"));
    on("tab-library", "click", () => this.switchTab("library"));

    // History Buttons & Brand Logo
    on("nav-back-btn", "click", () => this.switchTab("store"));
    on("nav-forward-btn", "click", () => this.switchTab("library"));
    on("brand-logo-btn", "click", () => this.switchTab("store"));

    // Carousel Controls
    on("caro-next-btn", "click", () => this.nextFeaturedGame());
    on("caro-prev-btn", "click", () => this.prevFeaturedGame());

    // Store Search Input
    const searchInput = document.getElementById("store-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        this.renderStoreGrid();
      });
    }

    // Go to store from empty library
    on("lib-go-store-btn", "click", () => this.switchTab("store"));

    // Topbar Profile and Logout
    on("user-profile-btn", "click", () => {
      const user = this.accountManager.getActiveUser();
      if (user) {
        this.openProfileModal();
      } else {
        this.openAuthModal("login");
      }
    });

    on("header-logout-btn", "click", () => this.handleLogout());

    // Profile Modal
    on("profile-modal-close", "click", () => this.closeProfileModal());
    on("profile-modal-cancel", "click", () => this.closeProfileModal());
    on("profile-modal-save", "click", () => this.saveProfileModal());
    on("profile-switch-acc-btn", "click", () => {
      this.closeProfileModal();
      this.openAuthModal("login");
    });
    on("profile-logout-btn", "click", () => this.handleLogout());

    // Profile Custom Avatar Upload from Disk
    const avatarInput = document.getElementById("avatar-file-input");
    if (avatarInput) {
      avatarInput.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          if (!file.type.startsWith("image/")) {
            this.showToast("Пожалуйста, выберите файл изображения (PNG, JPG).");
            return;
          }
          const reader = new FileReader();
          reader.onload = (re) => {
            this.tempProfileAvatar = re.target.result;
            const preview = document.getElementById("edit-avatar-img");
            if (preview) preview.src = this.tempProfileAvatar;
            this.showToast("Аватар загружен! Нажмите «СОХРАНИТЬ».");
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // Auth Modal (Login / Register)
    on("auth-modal-close", "click", () => this.closeAuthModal());
    on("auth-tab-login-btn", "click", () => this.switchAuthTab("login"));
    on("auth-tab-reg-btn", "click", () => this.switchAuthTab("reg"));
    on("login-submit-btn", "click", () => this.handleLogin());
    on("reg-submit-btn", "click", () => this.handleRegister());

    // Keyboard shortcuts (Enter in form inputs)
    const onEnter = (id, fn) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("keydown", (e) => {
          if (e.key === "Enter") fn();
        });
      }
    };

    onEnter("login-username-input", () => this.handleLogin());
    onEnter("login-password-input", () => this.handleLogin());
    onEnter("reg-username-input", () => this.handleRegister());
    onEnter("reg-nickname-input", () => this.handleRegister());
    onEnter("reg-password-input", () => this.handleRegister());
    onEnter("edit-nickname-input", () => this.saveProfileModal());
  }

  // ==========================================================================
  // AUTH MODAL LOGIC
  // ==========================================================================

  openAuthModal(defaultTab = "login") {
    const modal = document.getElementById("auth-modal");
    if (!modal) return;
    modal.style.display = "flex";
    this.switchAuthTab(defaultTab);
    this.renderSavedAccountsList();
    const loginErr = document.getElementById("login-error-msg");
    const regErr = document.getElementById("reg-error-msg");
    if (loginErr) loginErr.style.display = "none";
    if (regErr) regErr.style.display = "none";
  }

  closeAuthModal() {
    const modal = document.getElementById("auth-modal");
    if (modal) modal.style.display = "none";
  }

  switchAuthTab(tab) {
    const loginTabBtn = document.getElementById("auth-tab-login-btn");
    const regTabBtn = document.getElementById("auth-tab-reg-btn");
    const loginView = document.getElementById("auth-login-view");
    const regView = document.getElementById("auth-reg-view");

    if (loginTabBtn) loginTabBtn.classList.toggle("active", tab === "login");
    if (regTabBtn) regTabBtn.classList.toggle("active", tab === "reg");
    if (loginView) loginView.classList.toggle("active", tab === "login");
    if (regView) regView.classList.toggle("active", tab === "reg");
  }

  renderSavedAccountsList() {
    const box = document.getElementById("saved-accounts-box");
    const list = document.getElementById("saved-accounts-list");
    if (!box || !list) return;

    const users = this.accountManager.getUsers();
    if (users.length === 0) {
      box.style.display = "none";
      return;
    }

    box.style.display = "block";
    list.innerHTML = "";

    users.forEach(u => {
      const item = document.createElement("div");
      item.className = "saved-acc-item";
      item.onclick = () => {
        const uInput = document.getElementById("login-username-input");
        const pInput = document.getElementById("login-password-input");
        if (uInput) uInput.value = u.username;
        if (pInput) pInput.value = u.password;
        this.handleLogin();
      };
      item.innerHTML = `
        <div class="saved-acc-info">
          <img src="${u.avatar || 'assets/avatar_default.svg'}" class="saved-acc-avatar">
          <span class="saved-acc-name">${u.displayName || u.username} (@${u.username})</span>
        </div>
        <button class="steam-btn steam-btn-secondary" style="padding: 3px 8px; font-size: 11px;">Войти</button>
      `;
      list.appendChild(item);
    });
  }

  handleLogin() {
    const errEl = document.getElementById("login-error-msg");
    const uInput = document.getElementById("login-username-input");
    const pInput = document.getElementById("login-password-input");
    const u = uInput ? uInput.value : "";
    const p = pInput ? pInput.value : "";

    try {
      const user = this.accountManager.login(u, p);
      if (errEl) errEl.style.display = "none";
      this.closeAuthModal();
      this.syncCurrentUser();
      this.renderStore();
      this.renderLibrarySidebar();
      this.showToast(`Добро пожаловать в Steam, ${user.displayName || user.username}!`);
      this.sendToBackend({ action: "update_profile", username: user.displayName || user.username });
    } catch (e) {
      if (errEl) {
        errEl.textContent = e.message;
        errEl.style.display = "block";
      }
    }
  }

  handleRegister() {
    const errEl = document.getElementById("reg-error-msg");
    const uInput = document.getElementById("reg-username-input");
    const nInput = document.getElementById("reg-nickname-input");
    const pInput = document.getElementById("reg-password-input");

    const username = uInput ? uInput.value : "";
    const nickname = nInput ? nInput.value : "";
    const password = pInput ? pInput.value : "";

    try {
      const newUser = this.accountManager.register(username, password, nickname);
      if (errEl) errEl.style.display = "none";
      this.closeAuthModal();
      this.syncCurrentUser();
      this.renderStore();
      this.renderLibrarySidebar();
      this.showToast(`Аккаунт ${newUser.displayName} успешно создан!`);
      this.sendToBackend({ action: "update_profile", username: newUser.displayName });
    } catch (e) {
      if (errEl) {
        errEl.textContent = e.message;
        errEl.style.display = "block";
      }
    }
  }

  handleLogout() {
    this.accountManager.logout();
    this.closeProfileModal();
    this.syncCurrentUser();
    this.renderStore();
    this.renderLibrarySidebar();
    this.showToast("Вы вышли из своего аккаунта Steam.");
    this.openAuthModal("login");
  }

  // ==========================================================================
  // PROFILE MODAL LOGIC
  // ==========================================================================

  openProfileModal() {
    const user = this.accountManager.getActiveUser();
    if (!user) {
      this.openAuthModal("login");
      return;
    }

    const modal = document.getElementById("profile-modal");
    if (!modal) return;

    modal.style.display = "flex";
    const nickInput = document.getElementById("edit-nickname-input");
    const bioInput = document.getElementById("edit-bio-input");
    const avatarImg = document.getElementById("edit-avatar-img");
    const accUser = document.getElementById("profile-acc-username");
    const gamesCount = document.getElementById("profile-games-count");
    const regDate = document.getElementById("profile-reg-date");

    if (nickInput) nickInput.value = user.displayName || user.username;
    if (bioInput) bioInput.value = user.bio || "";
    if (avatarImg) avatarImg.src = user.avatar || "assets/avatar_default.svg";
    if (accUser) accUser.textContent = `@${user.username}`;
    if (gamesCount) gamesCount.textContent = (user.library || []).length;
    if (regDate) regDate.textContent = user.createdAt || "Не указана";

    this.tempProfileAvatar = user.avatar || "assets/avatar_default.svg";
  }

  closeProfileModal() {
    const modal = document.getElementById("profile-modal");
    if (modal) modal.style.display = "none";
  }

  saveProfileModal() {
    const nickInput = document.getElementById("edit-nickname-input");
    const bioInput = document.getElementById("edit-bio-input");

    const newName = nickInput ? nickInput.value.trim() : "";
    const newBio = bioInput ? bioInput.value.trim() : "";

    if (!newName) {
      this.showToast("Имя профиля не может быть пустым!");
      return;
    }

    const avatarToSave = this.tempProfileAvatar || "assets/avatar_default.svg";

    this.accountManager.updateProfile({
      displayName: newName,
      bio: newBio,
      avatar: avatarToSave
    });

    this.closeProfileModal();
    this.syncCurrentUser();
    this.showToast("Профиль Steam успешно сохранён!");
    this.sendToBackend({ action: "update_profile", username: newName });
  }

  // ==========================================================================
  // TOAST NOTIFICATIONS
  // ==========================================================================

  showToast(message) {
    const box = document.getElementById("steam-toast-box");
    if (!box) return;

    const toast = document.createElement("div");
    toast.className = "steam-toast";
    toast.textContent = message;

    box.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ==========================================================================
  // C++ IPC BACKEND BRIDGE
  // ==========================================================================

  sendToBackend(obj) {
    if (window.chrome && window.chrome.webview) {
      try {
        window.chrome.webview.postMessage(JSON.stringify(obj));
      } catch (e) {
        console.error("IPC Send error:", e);
      }
    }
  }

  handleBackendMessage(data) {
    let msg = data;
    if (typeof data === "string") {
      try {
        msg = JSON.parse(data);
      } catch {
        return;
      }
    }

    if (msg.event === "init_data") {
      if (msg.installedGames) {
        this.games.forEach(g => {
          g.installed = msg.installedGames.includes(g.id);
        });
        this.renderLibrarySidebar();
        this.updatePlayButton();
      }
    }
    else if (msg.event === "game_state") {
      this.isGameRunning = msg.running;
      this.runningGameId = msg.running ? msg.gameId : null;
      this.updatePlayButton();
      if (!msg.running) {
        this.showToast("Игра завершена.");
      }
    }
    else if (msg.event === "game_installed") {
      const g = this.games.find(x => x.id === msg.gameId);
      if (g) g.installed = true;
      const progressBox = document.getElementById("lib-download-progress");
      if (progressBox) progressBox.style.display = "none";
      this.renderLibrarySidebar();
      this.updatePlayButton();
      this.showToast(`Игра «${g ? g.title : ''}» готова к запуску!`);
    }
    else if (msg.event === "error") {
      this.showToast(`[Ошибка]: ${msg.message}`);
    }
  }
}

// Bootstrap on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  window.app = new SteamClientApp();
});
