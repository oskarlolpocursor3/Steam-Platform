/**
 * STEAM NEXT-GEN FRONTEND ENGINE
 * Dynamic GitHub catalog fetching • 2-Tab Navigation • Local Profile & Avatar • C++ IPC
 */

// Local fallback catalog in case of network issue
const FALLBACK_CATALOG = [
  {
    id: 570,
    title: "Counter-Strike 2 (3D FPS Demake)",
    genre: "Тактический 3D шутер / FPS",
    developer: "Valve & Community",
    publisher: "Steam Clone Platform",
    releaseDate: "2026",
    price: "Бесплатно",
    rating: "98%",
    shortDescription: "Аутентичный софтверный 3D шутер от первого лица на C# (.NET 9) с DDA Raycasting, полной вертикальной камерой (Pitch look) и картой Dust 2.",
    detailedDescription: "Counter-Strike 2 Demake — это высокопроизводительный софтверный 3D FPS, созданный с нуля на C#. Движок трассировки лучей (DDA) работает напрямую с кадровым буфером памяти в 32bpp ARGB при 100+ FPS.\n\nКлючевые особенности:\n• Полный обзор во всех плоскостях (Yaw вращение + Pitch наклон камеры вверх и вниз).\n• Оружие синхронизировано с прицелом: отдача (recoil), инерция мыши (sway) и хедшоты.\n• Арсенал: AK-47 с бакелитовым рожком, Desert Eagle со стальным затвором, тактический боевой нож.\n• Двери на клавишу [E], физика прыжков (Space) и присядки (Ctrl / C).\n• Динамичный HUD, киллфид, радар и мишени-боты.",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop"
    ],
    tags: ["3D FPS", "CS2 Demake", "Dust 2", "Стрельба", "Экшен"],
    executableRelativePath: "cs2.exe",
    installDirectory: "steamapps/common/CS2Source",
    installSize: 15728640,
    downloadUrl: "https://github.com/oskarlolpocursor3/Steam-Platform/releases/download/v1.0.0/CS2Source.zip"
  },
  {
    id: 1992,
    title: "Super Mario Kart C# (60 FPS Edition)",
    genre: "Аркадные гонки / Mode 7 3D",
    developer: "Nintendo & OpenSource",
    publisher: "Steam Clone Platform",
    releaseDate: "2026",
    price: "Бесплатно",
    rating: "96%",
    shortDescription: "Культовые аркадные гонки со сплит-скрином и сетевым мультиплеером, реализованные на C# с аппаратным шейдером Mode 7.",
    detailedDescription: "Классический Super Mario Kart, воссозданный на современной кодовой базе C# .NET 9. Использует аппаратный шейдер Mode 7 для проекции псевдо-3D трассы Mario Circuit 2, стабильные 60 FPS, 8 персонажей на выбор и поддержку локального/сетевого мультиплеера по LAN.",
    banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop"
    ],
    tags: ["Гонки", "Mode 7", "60 FPS", "Мультиплеер", "Ретро"],
    executableRelativePath: "MarioKartCS.exe",
    installDirectory: "steamapps/common/MarioKartCS",
    installSize: 18874368,
    downloadUrl: "https://github.com/oskarlolpocursor3/Steam-Platform/releases/download/v1.0.0/MarioKartCS.zip"
  },
  {
    id: 101,
    title: "Dungeons & Dragons: Console RPG",
    genre: "Текстовая RPG / Пошаговая тактика",
    developer: "Wizards & Community",
    publisher: "Steam Clone Platform",
    releaseDate: "2026",
    price: "Бесплатно",
    rating: "94%",
    shortDescription: "Глубокая партийная ролевая игра по правилам D&D 5-й редакции с 12 классами, расами, подземельями, инвентарем и ASCII-арт графикой.",
    detailedDescription: "Пошаговая ролевая система с генерацией персонажа, характеристиками D20, торговцем Бобом, квестами в таверне, битвами с боссами в подземельях и интерактивной ASCII-графикой.",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop"
    ],
    tags: ["D&D 5e", "RPG", "Пошаговая", "ASCII Art", "Классика"],
    executableRelativePath: "game.exe",
    installDirectory: "games/Console-DnD",
    installSize: 8388608,
    downloadUrl: "https://github.com/oskarlolpocursor3/Steam-Platform/releases/download/v1.0.0/Console-DnD.zip"
  }
];

class SteamApp {
  constructor() {
    this.catalog = [];
    this.library = [];
    this.selectedGameId = null;
    this.isGameRunning = false;
    this.runningGameId = null;
    this.downloadingGameId = null;
    this.downloadTimer = null;
    
    // User Profile state
    this.userProfile = {
      username: "ØSKARŁØŁPØ⁴²",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      hoursPlayed: 48,
      status: "online"
    };

    this.init();
  }

  async init() {
    this.loadProfile();
    this.loadLibrary();
    this.bindEvents();
    await this.fetchCatalog();
    this.renderStore();
    this.renderLibrary();
    this.updateBadges();

    // Listen for C++ backend messages
    if (window.chrome && window.chrome.webview) {
      window.chrome.webview.addEventListener('message', (event) => {
        this.handleBackendMessage(event.data);
      });
      // Inform C++ backend frontend is ready
      this.sendToBackend({ action: "ready" });
    }
  }

  // 1. DYNAMIC CATALOG FETCH FROM GITHUB
  async fetchCatalog() {
    const GITHUB_CATALOG_URL = "https://raw.githubusercontent.com/oskarlolpocursor3/Steam-Platform/main/catalog/games.json";
    try {
      const response = await fetch(GITHUB_CATALOG_URL, { cache: "no-cache" });
      if (response.ok) {
        this.catalog = await response.json();
        console.log("Cloud Catalog fetched from GitHub successfully!");
      } else {
        throw new Error("HTTP error " + response.status);
      }
    } catch (e) {
      console.warn("Using fallback catalog due to offline/first run:", e);
      this.catalog = FALLBACK_CATALOG;
    }
  }

  // 2. USER PROFILE MANAGEMENT
  loadProfile() {
    const saved = localStorage.getItem("steam_user_profile");
    if (saved) {
      try {
        this.userProfile = Object.assign(this.userProfile, JSON.parse(saved));
      } catch (e) {}
    }
    this.applyProfileToUI();
  }

  saveProfile(username, avatarUrl) {
    if (username.trim()) this.userProfile.username = username.trim();
    if (avatarUrl) this.userProfile.avatar = avatarUrl;
    
    localStorage.setItem("steam_user_profile", JSON.stringify(this.userProfile));
    this.applyProfileToUI();
    this.showToast(`Профиль обновлен: ${this.userProfile.username}`);

    this.sendToBackend({
      action: "update_profile",
      username: this.userProfile.username
    });
  }

  applyProfileToUI() {
    document.getElementById("header-username").textContent = this.userProfile.username;
    document.getElementById("header-avatar-img").src = this.userProfile.avatar;
    document.getElementById("edit-nickname-input").value = this.userProfile.username;
    document.getElementById("edit-avatar-preview").src = this.userProfile.avatar;
    document.getElementById("profile-stat-hours").textContent = `${this.userProfile.hoursPlayed} ч.`;
    document.getElementById("profile-stat-games").textContent = this.library.length;
  }

  // 3. LIBRARY PERSISTENCE
  loadLibrary() {
    const saved = localStorage.getItem("steam_library_apps");
    if (saved) {
      try {
        this.library = JSON.parse(saved);
      } catch (e) {
        this.library = [];
      }
    } else {
      // Default: add Counter-Strike 2 as already added
      this.library = [
        {
          id: 570,
          state: "installed", // installed, downloading, cloud
          playtimeMinutes: 184,
          lastPlayed: "Сегодня"
        }
      ];
      this.saveLibrary();
    }
  }

  saveLibrary() {
    localStorage.setItem("steam_library_apps", JSON.stringify(this.library));
    this.updateBadges();
  }

  addToLibrary(gameId) {
    const existing = this.library.find(item => item.id === gameId);
    if (existing) {
      this.showToast("Игра уже в вашей библиотеке!");
      this.switchToTab("library");
      this.selectLibraryGame(gameId);
      return;
    }

    this.library.push({
      id: gameId,
      state: "installed", // marked ready
      playtimeMinutes: 0,
      lastPlayed: "Не запускалась"
    });

    this.saveLibrary();
    this.renderStore();
    this.renderLibrary();
    
    const game = this.catalog.find(g => g.id === gameId);
    this.showToast(`«${game ? game.title : 'Игра'}» добавлена в библиотеку!`);
    
    this.sendToBackend({
      action: "add_to_library",
      gameId: gameId
    });
  }

  // 4. RENDERING STORE
  renderStore() {
    const grid = document.getElementById("store-games-grid");
    grid.innerHTML = "";

    // Hero setup
    const heroGame = this.catalog[0];
    if (heroGame) {
      document.getElementById("hero-backdrop").style.backgroundImage = `url('${heroGame.banner}')`;
      document.getElementById("hero-title").textContent = heroGame.title;
      document.getElementById("hero-desc").textContent = heroGame.shortDescription;
      
      const heroBtn = document.getElementById("hero-cta-btn");
      const inLib = this.library.some(item => item.id === heroGame.id);
      heroBtn.textContent = inLib ? "✓ В библиотеке" : "+ Добавить в библиотеку";
      heroBtn.onclick = () => {
        if (inLib) {
          this.switchToTab("library");
          this.selectLibraryGame(heroGame.id);
        } else {
          this.addToLibrary(heroGame.id);
        }
      };

      document.getElementById("hero-details-btn").onclick = () => {
        this.openGameModal(heroGame.id);
      };
    }

    // Grid cards
    this.catalog.forEach(game => {
      const inLib = this.library.some(item => item.id === game.id);
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <div class="card-banner-wrapper">
          <img src="${game.banner}" alt="${game.title}" class="card-banner">
          <span class="card-badge">${game.genre}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${game.title}</h3>
          <p class="card-desc">${game.shortDescription}</p>
          <div class="card-footer">
            <span class="card-price">${game.price}</span>
            <button class="btn btn-secondary btn-sm card-action-btn">
              ${inLib ? "✓ В библиотеке" : "+ Добавить"}
            </button>
          </div>
        </div>
      `;

      card.onclick = (e) => {
        if (e.target.classList.contains("card-action-btn")) {
          e.stopPropagation();
          if (inLib) {
            this.switchToTab("library");
            this.selectLibraryGame(game.id);
          } else {
            this.addToLibrary(game.id);
          }
          return;
        }
        this.openGameModal(game.id);
      };

      grid.appendChild(card);
    });
  }

  // 5. RENDERING LIBRARY
  renderLibrary() {
    const list = document.getElementById("library-games-list");
    list.innerHTML = "";

    const emptyState = document.getElementById("library-empty-state");
    const activeView = document.getElementById("active-game-view");

    if (this.library.length === 0) {
      emptyState.style.display = "flex";
      activeView.style.display = "none";
      return;
    }

    emptyState.style.display = "none";
    activeView.style.display = "block";

    this.library.forEach(libItem => {
      const game = this.catalog.find(g => g.id === libItem.id) || {
        id: libItem.id,
        title: "Неизвестная игра",
        genre: "Игры"
      };

      const item = document.createElement("div");
      item.className = `lib-item ${this.selectedGameId === game.id ? "active" : ""}`;
      
      let statusClass = "cloud";
      let statusText = "В облаке";
      if (libItem.state === "installed") {
        statusClass = "installed";
        statusText = "Готово к игре";
      } else if (libItem.state === "downloading") {
        statusClass = "downloading";
        statusText = "Установка...";
      }

      if (this.isGameRunning && this.runningGameId === game.id) {
        statusClass = "installed";
        statusText = "Запущено";
      }

      item.innerHTML = `
        <span class="lib-status-dot ${statusClass}"></span>
        <div class="lib-item-info">
          <span class="lib-item-title">${game.title}</span>
          <span class="lib-item-status">${statusText}</span>
        </div>
      `;

      item.onclick = () => this.selectLibraryGame(game.id);
      list.appendChild(item);
    });

    if (!this.selectedGameId && this.library.length > 0) {
      this.selectLibraryGame(this.library[0].id);
    } else if (this.selectedGameId) {
      this.updateActiveGameView();
    }
  }

  selectLibraryGame(gameId) {
    this.selectedGameId = gameId;
    this.renderLibrary();
    this.updateActiveGameView();
  }

  updateActiveGameView() {
    const game = this.catalog.find(g => g.id === this.selectedGameId);
    const libItem = this.library.find(i => i.id === this.selectedGameId);
    if (!game || !libItem) return;

    document.getElementById("lib-hero-backdrop").style.backgroundImage = `url('${game.banner}')`;
    document.getElementById("lib-game-title").textContent = game.title;
    document.getElementById("lib-game-genre").textContent = game.genre;
    document.getElementById("lib-game-developer").textContent = game.developer;
    document.getElementById("lib-full-desc").textContent = game.detailedDescription;

    // Stats
    document.getElementById("stat-last-played").textContent = libItem.lastPlayed || "Сегодня";
    document.getElementById("stat-playtime").textContent = `${libItem.playtimeMinutes || 0} мин.`;
    document.getElementById("stat-size").textContent = `${((game.installSize || 15000000) / (1024 * 1024)).toFixed(1)} МБ`;

    // Screenshots
    const strip = document.getElementById("lib-screenshots-strip");
    strip.innerHTML = "";
    (game.screenshots || []).forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Screenshot";
      strip.appendChild(img);
    });

    // Action button states
    const actionBtn = document.getElementById("lib-action-btn");
    const actionLbl = document.getElementById("lib-action-label");
    const progressBox = document.getElementById("lib-download-progress");

    actionBtn.className = "btn btn-action";

    if (this.isGameRunning && this.runningGameId === game.id) {
      actionBtn.classList.add("stop-mode");
      actionLbl.textContent = "■ ОСТАНОВИТЬ";
      progressBox.style.display = "none";
      actionBtn.onclick = () => this.stopGame(game.id);
    } else if (libItem.state === "downloading") {
      actionBtn.style.display = "none";
      progressBox.style.display = "flex";
    } else if (libItem.state === "installed") {
      actionBtn.style.display = "inline-flex";
      progressBox.style.display = "none";
      actionLbl.textContent = "▶ ИГРАТЬ";
      actionBtn.onclick = () => this.launchGame(game.id);
    } else {
      actionBtn.style.display = "inline-flex";
      actionBtn.classList.add("install-mode");
      progressBox.style.display = "none";
      actionLbl.textContent = "⬇ УСТАНОВИТЬ";
      actionBtn.onclick = () => this.startInstallation(game.id);
    }
  }

  // 6. INSTALLATION & RUNNING GAMES
  startInstallation(gameId) {
    const libItem = this.library.find(i => i.id === gameId);
    if (!libItem) return;

    libItem.state = "downloading";
    this.downloadingGameId = gameId;
    this.renderLibrary();
    this.updateActiveGameView();

    this.showToast("Началась установка игры из GitHub Releases...");

    // Send install command to C++ native downloader
    this.sendToBackend({
      action: "install_game",
      gameId: gameId
    });

    // Animate progress simulation in UI until complete
    let progress = 0;
    const fill = document.getElementById("download-progress-fill");
    const speedTxt = document.getElementById("download-speed-txt");
    const statusTxt = document.getElementById("download-status-txt");

    this.downloadTimer = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 4;
      const speed = (Math.random() * 15 + 24).toFixed(1);
      
      if (progress < 85) {
        statusTxt.textContent = "Скачивание архива с GitHub...";
      } else {
        statusTxt.textContent = "Распаковка и проверка SHA-256...";
      }

      fill.style.width = `${Math.min(progress, 100)}%`;
      speedTxt.textContent = `${speed} МБ/с • ${Math.min(progress, 100)}%`;

      if (progress >= 100) {
        clearInterval(this.downloadTimer);
        libItem.state = "installed";
        this.downloadingGameId = null;
        this.saveLibrary();
        this.renderLibrary();
        this.updateActiveGameView();
        this.showToast("Игра успешно установлена и готова к запуску!");
      }
    }, 250);
  }

  launchGame(gameId) {
    this.isGameRunning = true;
    this.runningGameId = gameId;
    this.renderLibrary();
    this.updateActiveGameView();

    const game = this.catalog.find(g => g.id === gameId);
    this.showToast(`Запуск игры: ${game ? game.title : ''}`);

    this.sendToBackend({
      action: "launch_game",
      gameId: gameId
    });
  }

  stopGame(gameId) {
    this.isGameRunning = false;
    this.runningGameId = null;
    this.renderLibrary();
    this.updateActiveGameView();

    this.showToast("Игра остановлена");

    this.sendToBackend({
      action: "stop_game",
      gameId: gameId
    });
  }

  // 7. MODALS & INTERACTIONS
  openGameModal(gameId) {
    const game = this.catalog.find(g => g.id === gameId);
    if (!game) return;

    document.getElementById("modal-game-title").textContent = game.title;
    document.getElementById("modal-game-banner").src = game.banner;
    document.getElementById("modal-game-full-desc").textContent = game.detailedDescription;
    document.getElementById("modal-game-dev").textContent = game.developer;
    document.getElementById("modal-game-genre").textContent = game.genre;
    document.getElementById("modal-game-rating").textContent = game.rating;
    document.getElementById("modal-game-size").textContent = `${((game.installSize || 15000000) / (1024 * 1024)).toFixed(1)} МБ`;

    const tagsBox = document.getElementById("modal-game-tags");
    tagsBox.innerHTML = "";
    (game.tags || []).forEach(t => {
      const span = document.createElement("span");
      span.className = "tag-pill";
      span.textContent = t;
      tagsBox.appendChild(span);
    });

    const inLib = this.library.some(i => i.id === game.id);
    const addBtn = document.getElementById("modal-add-btn");
    addBtn.textContent = inLib ? "✓ Уже в библиотеке" : "+ Добавить в библиотеку";
    addBtn.onclick = () => {
      this.closeGameModal();
      if (inLib) {
        this.switchToTab("library");
        this.selectLibraryGame(game.id);
      } else {
        this.addToLibrary(game.id);
      }
    };

    document.getElementById("game-modal").style.display = "flex";
  }

  closeGameModal() {
    document.getElementById("game-modal").style.display = "none";
  }

  openProfileModal() {
    document.getElementById("profile-modal").style.display = "flex";
  }

  closeProfileModal() {
    document.getElementById("profile-modal").style.display = "none";
  }

  switchToTab(tabName) {
    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.tab === tabName);
    });
    document.querySelectorAll(".view-panel").forEach(panel => {
      panel.classList.toggle("active", panel.id === `view-${tabName}`);
    });
  }

  updateBadges() {
    document.getElementById("library-count-badge").textContent = this.library.length;
    document.getElementById("library-count").textContent = this.library.length;
    document.getElementById("profile-stat-games").textContent = this.library.length;
  }

  showToast(message) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>✔</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // 8. C++ WEVIEW2 IPC MESSAGING
  sendToBackend(data) {
    if (window.chrome && window.chrome.webview) {
      window.chrome.webview.postMessage(JSON.stringify(data));
    } else {
      console.log("Mock C++ message:", data);
    }
  }

  handleBackendMessage(rawMsg) {
    try {
      const msg = typeof rawMsg === "string" ? JSON.parse(rawMsg) : rawMsg;
      if (msg.event === "game_state") {
        this.isGameRunning = msg.running;
        this.runningGameId = msg.gameId;
        this.updateActiveGameView();
      } else if (msg.event === "download_progress") {
        const fill = document.getElementById("download-progress-fill");
        if (fill) fill.style.width = `${msg.percent}%`;
      }
    } catch (e) {
      console.error("Error parsing backend message:", e);
    }
  }

  bindEvents() {
    // 2-Tab Navigation
    document.getElementById("tab-store").onclick = () => this.switchToTab("store");
    document.getElementById("tab-library").onclick = () => this.switchToTab("library");
    document.getElementById("goto-store-btn").onclick = () => this.switchToTab("store");

    // Profile Click
    document.getElementById("profile-btn").onclick = () => this.openProfileModal();
    document.getElementById("profile-modal-close").onclick = () => this.closeProfileModal();
    document.getElementById("profile-modal-cancel").onclick = () => this.closeProfileModal();
    document.getElementById("game-modal-close").onclick = () => this.closeGameModal();

    // Preset avatar clicks
    document.querySelectorAll(".preset-avatar-option").forEach(opt => {
      opt.onclick = () => {
        document.querySelectorAll(".preset-avatar-option").forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
        document.getElementById("edit-avatar-preview").src = opt.dataset.src;
      };
    });

    // Custom avatar file upload
    document.getElementById("avatar-file-input").onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          document.getElementById("edit-avatar-preview").src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    // Save profile button
    document.getElementById("profile-modal-save").onclick = () => {
      const newNick = document.getElementById("edit-nickname-input").value;
      const newAvatar = document.getElementById("edit-avatar-preview").src;
      this.saveProfile(newNick, newAvatar);
      this.closeProfileModal();
    };

    // Filter chips
    document.querySelectorAll(".filter-chip").forEach(chip => {
      chip.onclick = () => {
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const filter = chip.dataset.filter;
        document.querySelectorAll(".game-card").forEach(card => {
          if (filter === "all") {
            card.style.display = "flex";
          } else {
            const genre = card.querySelector(".card-badge").textContent.toLowerCase();
            const show = (filter === "fps" && (genre.includes("fps") || genre.includes("шутер"))) ||
                         (filter === "racing" && genre.includes("гонки")) ||
                         (filter === "rpg" && genre.includes("rpg"));
            card.style.display = show ? "flex" : "none";
          }
        });
      };
    });

    // Search input
    const searchInput = document.getElementById("search-input");
    const searchClear = document.getElementById("search-clear");
    searchInput.oninput = () => {
      const query = searchInput.value.toLowerCase().trim();
      searchClear.style.display = query ? "block" : "none";
      document.querySelectorAll(".game-card").forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        const desc = card.querySelector(".card-desc").textContent.toLowerCase();
        card.style.display = (title.includes(query) || desc.includes(query)) ? "flex" : "none";
      });
    };
    searchClear.onclick = () => {
      searchInput.value = "";
      searchClear.style.display = "none";
      searchInput.dispatchEvent(new Event("input"));
    };
  }
}

// Instantiate on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.steamApp = new SteamApp();
});
