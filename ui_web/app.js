/**
 * AUTHENTIC STEAM CLIENT CONTROLLER
 * Real Screenshots • True Steam Colorway • Async Game Launcher • 2-Tab Split
 */

const STEAM_CATALOG = [
  {
    id: 570,
    title: "Counter-Strike 2 (3D FPS Demake)",
    genre: "Тактический 3D шутер / FPS",
    developer: "Valve & Community",
    publisher: "Steam Platform",
    price: "Бесплатно",
    rating: "98% Крайне положительные (4,120)",
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
    installed: true,
    playtimeHours: 48.2,
    lastPlayed: "Сегодня"
  },
  {
    id: 1992,
    title: "Super Mario Kart C# (60 FPS Edition)",
    genre: "Аркадные гонки / Mode 7 3D",
    developer: "Nintendo / C# Port",
    publisher: "Steam Platform",
    price: "Бесплатно",
    rating: "96% Очень положительные (2,890)",
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
    installed: true,
    playtimeHours: 23.5,
    lastPlayed: "Вчера"
  },
  {
    id: 101,
    title: "Dungeons & Dragons: Console RPG",
    genre: "Пошаговая RPG / ASCII Art",
    developer: "Wizards & Community",
    publisher: "Steam Platform",
    price: "Бесплатно",
    rating: "94% Положительные (1,420)",
    shortDescription: "Глубокая партийная ролевая игра по правилам D&D 5-й редакции с 12 классами, расами, подземельями, инвентарем и ASCII-арт графикой.",
    detailedDescription: "Пошаговая ролевая система с генерацией персонажа, бросками кубиков D20, торговцем Бобом, квестами в таверне, битвами с боссами в подземельях и интерактивной ASCII-графикой.",
    banner: "assets/games/cs2/screen2.png",
    screenshots: [
      "assets/games/cs2/screen2.png",
      "assets/games/cs2/screen3.png"
    ],
    tags: ["D&D 5e", "RPG", "Пошаговая", "ASCII Art", "Классика"],
    executableRelativePath: "game.exe",
    installDirectory: "games/Console-DnD",
    installSize: "8.3 МБ",
    installed: true,
    playtimeHours: 12.0,
    lastPlayed: "28 окт."
  },
  {
    id: 70,
    title: "Half-Life 3 (Source 2 Prototype)",
    genre: "Шутер от первого лица / Valve",
    developer: "Valve Corporation",
    publisher: "Valve",
    price: "Бесплатно",
    rating: "99% Шедевр (99,999)",
    shortDescription: "Самая долгожданная игра в истории индустрии. Приключения Гордона Фримена и Аликс Вэнс в Арктике у исследовательского судна Борей.",
    detailedDescription: "Легендарное продолжение истории Half-Life 2: Episode Two на движке Source 2. Гравитационная пушка, физические головоломки и противостояние Альянсу.",
    banner: "assets/games/cs2/screen1.png",
    screenshots: [
      "assets/games/cs2/screen1.png",
      "assets/games/cs2/screen3.png"
    ],
    tags: ["Valve", "Гордон Фримен", "Борей", "Шутер", "Сюжет"],
    executableRelativePath: "hl3_game.exe",
    installDirectory: "steamapps/common/HalfLife3",
    installSize: "10.0 МБ",
    installed: true,
    playtimeHours: 3.4,
    lastPlayed: "1 окт."
  }
];

class SteamClientApp {
  constructor() {
    this.games = STEAM_CATALOG;
    this.selectedGameId = 570;
    this.runningGameId = null;
    this.isGameRunning = false;

    // User Profile
    this.profile = {
      nickname: "ØSKARŁØŁPØ⁴²",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      wallet: "75,31 руб."
    };

    this.init();
  }

  init() {
    this.loadProfile();
    this.bindEvents();
    this.renderStore();
    this.renderLibrarySidebar();
    this.selectGame(this.selectedGameId);

    // Setup IPC with C++ WebView2
    if (window.chrome && window.chrome.webview) {
      window.chrome.webview.addEventListener("message", (event) => {
        this.handleBackendMessage(event.data);
      });
      this.sendToBackend({ action: "ready" });
    }
  }

  // 1. NAVIGATION
  switchTab(tabName) {
    document.querySelectorAll(".steam-nav-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.tab === tabName);
    });
    document.querySelectorAll(".steam-view-tab").forEach(view => {
      view.classList.toggle("active", view.id === `view-${tabName}`);
    });
  }

  // 2. STORE RENDERING
  renderStore() {
    const container = document.getElementById("store-cards-container");
    if (!container) return;
    container.innerHTML = "";

    this.games.forEach(game => {
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
            <button class="steam-btn steam-btn-green card-add-btn" data-id="${game.id}">
              В БИБЛИОТЕКУ
            </button>
          </div>
        </div>
      `;

      card.querySelector(".card-add-btn").onclick = (e) => {
        e.stopPropagation();
        this.addToLibrary(game.id);
      };

      container.appendChild(card);
    });

    // Carousel feature game (First game)
    const featured = this.games[0];
    if (featured) {
      document.getElementById("carousel-title").textContent = featured.title;
      document.getElementById("carousel-short-desc").textContent = featured.shortDescription;
      document.getElementById("carousel-main-img").src = featured.banner;

      const thumbsContainer = document.getElementById("carousel-thumbs");
      thumbsContainer.innerHTML = "";
      featured.screenshots.forEach((shot, idx) => {
        const thumb = document.createElement("img");
        thumb.src = shot;
        thumb.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
        thumb.onclick = () => {
          document.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
          thumb.classList.add("active");
          document.getElementById("carousel-main-img").src = shot;
        };
        thumbsContainer.appendChild(thumb);
      });

      document.getElementById("carousel-add-btn").onclick = () => {
        this.addToLibrary(featured.id);
      };
    }
  }

  // 3. LIBRARY SIDEBAR & GAME HUB
  renderLibrarySidebar() {
    const list = document.getElementById("lib-games-list");
    if (!list) return;
    list.innerHTML = "";

    document.getElementById("lib-total-count").textContent = this.games.length;
    document.getElementById("lib-count-badge").textContent = this.games.length;

    this.games.forEach(game => {
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
  }

  selectGame(gameId) {
    this.selectedGameId = gameId;
    const game = this.games.find(g => g.id === gameId);
    if (!game) return;

    // Update active highlight in sidebar
    document.querySelectorAll(".lib-game-item").forEach((item, index) => {
      item.classList.toggle("active", this.games[index] && this.games[index].id === gameId);
    });

    // Update Game Hub
    document.getElementById("hub-game-title").textContent = game.title;
    document.getElementById("hub-genre").textContent = game.genre;
    document.getElementById("hub-dev").textContent = game.developer;
    document.getElementById("stat-last-played").textContent = game.lastPlayed;
    document.getElementById("stat-playtime").textContent = `${game.playtimeHours} ч.`;
    document.getElementById("info-developer").textContent = game.developer;
    document.getElementById("info-install-dir").textContent = game.installDirectory;
    document.getElementById("hub-full-description").textContent = game.detailedDescription;

    // Set Banner
    const heroBanner = document.getElementById("game-hero-banner");
    heroBanner.style.backgroundImage = `url('${game.banner}')`;

    // Render Real Screenshots Gallery
    const gallery = document.getElementById("hub-gallery");
    gallery.innerHTML = "";
    game.screenshots.forEach(shot => {
      const img = document.createElement("img");
      img.src = shot;
      img.alt = game.title;
      img.onclick = () => {
        window.open(shot, "_blank");
      };
      gallery.appendChild(img);
    });

    // Update Action Play/Install Button
    this.updatePlayButton();
  }

  updatePlayButton() {
    const game = this.games.find(g => g.id === this.selectedGameId);
    if (!game) return;

    const btn = document.getElementById("main-play-btn");
    const icon = document.getElementById("play-btn-icon");
    const text = document.getElementById("play-btn-text");
    const status = document.getElementById("hub-game-status");

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

  // 4. GAME ACTIONS
  launchGame(gameId) {
    const game = this.games.find(g => g.id === gameId);
    this.showToast(`Запуск игры: ${game ? game.title : ''}`);
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
    progressBox.style.display = "block";
    fill.style.width = "10%";

    this.sendToBackend({ action: "install_game", gameId: gameId });

    let p = 10;
    const timer = setInterval(() => {
      p += 15;
      fill.style.width = `${Math.min(p, 95)}%`;
      speed.textContent = `34.5 МБ/с • ${Math.min(p, 95)}%`;
      if (p >= 100) {
        clearInterval(timer);
      }
    }, 250);
  }

  addToLibrary(gameId) {
    const game = this.games.find(g => g.id === gameId);
    if (!game) return;
    this.showToast(`«${game.title}» добавлена в библиотеку!`);
    this.sendToBackend({ action: "add_to_library", gameId: gameId });
    this.selectGame(gameId);
    this.switchTab("library");
  }

  // 5. USER PROFILE
  loadProfile() {
    const saved = localStorage.getItem("steam_profile_v2");
    if (saved) {
      try {
        Object.assign(this.profile, JSON.parse(saved));
      } catch (e) {}
    }
    this.applyProfileUI();
  }

  saveProfile(nick, avatar) {
    this.profile.nickname = nick || this.profile.nickname;
    this.profile.avatar = avatar || this.profile.avatar;
    localStorage.setItem("steam_profile_v2", JSON.stringify(this.profile));
    this.applyProfileUI();
    this.showToast(`Профиль обновлен: ${this.profile.nickname}`);
    this.sendToBackend({ action: "update_profile", username: this.profile.nickname });
  }

  applyProfileUI() {
    document.getElementById("header-nickname").textContent = this.profile.nickname;
    document.getElementById("header-avatar-img").src = this.profile.avatar;
    document.getElementById("edit-nickname-input").value = this.profile.nickname;
    document.getElementById("edit-avatar-img").src = this.profile.avatar;
  }

  // 6. IPC WITH C++ BACKEND
  sendToBackend(data) {
    if (window.chrome && window.chrome.webview) {
      window.chrome.webview.postMessage(JSON.stringify(data));
    }
  }

  handleBackendMessage(raw) {
    try {
      const msg = typeof raw === "string" ? JSON.parse(raw) : raw;
      if (msg.event === "game_state") {
        this.isGameRunning = msg.running;
        this.runningGameId = msg.running ? msg.gameId : null;
        this.updatePlayButton();
      } else if (msg.event === "game_installed") {
        const game = this.games.find(g => g.id === msg.gameId);
        if (game) game.installed = true;
        document.getElementById("lib-download-progress").style.display = "none";
        this.renderLibrarySidebar();
        this.updatePlayButton();
        this.showToast("Игра успешно установлена в папку steamapps/common!");
      } else if (msg.event === "init_data") {
        if (msg.username) {
          this.profile.nickname = msg.username;
          this.applyProfileUI();
        }
        if (msg.installedGames && Array.isArray(msg.installedGames)) {
          this.games.forEach(g => {
            if (msg.installedGames.includes(g.id)) {
              g.installed = true;
            }
          });
          this.renderLibrarySidebar();
          this.updatePlayButton();
        }
      } else if (msg.event === "error") {
        this.showToast(`Ошибка: ${msg.message}`);
      }
    } catch (e) {
      console.error("IPC Error:", e);
    }
  }

  showToast(message) {
    const box = document.getElementById("steam-toast-box");
    const toast = document.createElement("div");
    toast.className = "steam-toast";
    toast.innerHTML = `<span>✔</span> <span>${message}</span>`;
    box.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  bindEvents() {
    // Top Tabs
    document.getElementById("tab-store").onclick = () => this.switchTab("store");
    document.getElementById("tab-library").onclick = () => this.switchTab("library");
    document.getElementById("brand-logo-btn").onclick = () => this.switchTab("store");

    // Profile Modal
    const modal = document.getElementById("profile-modal");
    document.getElementById("user-profile-btn").onclick = () => {
      modal.style.display = "flex";
    };
    document.getElementById("profile-modal-close").onclick = () => {
      modal.style.display = "none";
    };
    document.getElementById("profile-modal-cancel").onclick = () => {
      modal.style.display = "none";
    };

    // Save Profile
    document.getElementById("profile-modal-save").onclick = () => {
      const nick = document.getElementById("edit-nickname-input").value;
      const avatar = document.getElementById("edit-avatar-img").src;
      this.saveProfile(nick, avatar);
      modal.style.display = "none";
    };

    // Preset Avatars
    document.querySelectorAll(".preset-avatar-opt").forEach(opt => {
      opt.onclick = () => {
        document.querySelectorAll(".preset-avatar-opt").forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
        document.getElementById("edit-avatar-img").src = opt.dataset.src;
      };
    });

    // Custom File Avatar
    document.getElementById("avatar-file-input").onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          document.getElementById("edit-avatar-img").src = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    // Library Search Filter
    const searchInput = document.getElementById("lib-search-input");
    searchInput.oninput = () => {
      const q = searchInput.value.toLowerCase().trim();
      document.querySelectorAll(".lib-game-item").forEach(item => {
        const title = item.querySelector(".lib-game-title").textContent.toLowerCase();
        item.style.display = title.includes(q) ? "flex" : "none";
      });
    };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.steamClient = new SteamClientApp();
});
