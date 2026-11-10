#include "steam/ui/SteamMainWindow.hpp"

#include <iostream>
#include <sstream>
#include <filesystem>
#include <chrono>
#include <algorithm>
#include <regex>
#include <thread>
#include <dwmapi.h>

#pragma comment(lib, "dwmapi.lib")

using namespace Microsoft::WRL;

namespace steam::ui {

namespace {

// Lightweight JSON helper to extract string values
std::string extractJsonString(const std::string& json, const std::string& key) {
    std::regex re("\"" + key + "\"\\s*:\\s*\"([^\"]*)\"");
    std::smatch match;
    if (std::regex_search(json, match, re) && match.size() > 1) {
        return match[1].str();
    }
    return "";
}

// Lightweight JSON helper to extract integer values
long long extractJsonInt(const std::string& json, const std::string& key) {
    std::regex re("\"" + key + "\"\\s*:\\s*(-?\\d+)");
    std::smatch match;
    if (std::regex_search(json, match, re) && match.size() > 1) {
        return std::stoll(match[1].str());
    }
    return 0;
}

std::filesystem::path getExeDirectory() {
    wchar_t exeBuffer[MAX_PATH];
    GetModuleFileNameW(nullptr, exeBuffer, MAX_PATH);
    return std::filesystem::path(exeBuffer).parent_path();
}

std::filesystem::path resolveUiPath(std::filesystem::path& outRootDir) {
    std::filesystem::path exeDir = getExeDirectory();

    std::vector<std::filesystem::path> searchDirs = {
        exeDir,                                           // build/bin/Release or dist
        exeDir / "ui_web",                               // build/bin/Release/ui_web
        exeDir.parent_path(),                            // build/bin
        exeDir.parent_path().parent_path(),              // build
        exeDir.parent_path().parent_path().parent_path(),// project root
        std::filesystem::current_path(),
        std::filesystem::current_path() / "steam",
        std::filesystem::path("C:/Users/govno/Desktop/zadaniy/steam")
    };

    for (const auto& dir : searchDirs) {
        std::filesystem::path candidate1 = dir / "index.html";
        if (std::filesystem::exists(candidate1)) {
            outRootDir = dir.parent_path();
            return std::filesystem::canonical(candidate1);
        }
        std::filesystem::path candidate2 = dir / "ui_web" / "index.html";
        if (std::filesystem::exists(candidate2)) {
            outRootDir = dir;
            return std::filesystem::canonical(candidate2);
        }
    }
    return {};
}

std::filesystem::path resolveGameExecutable(long long gameId, const std::filesystem::path& steamRoot) {
    std::filesystem::path appDir = getExeDirectory();

    std::vector<std::filesystem::path> baseDirs = {
        appDir,
        steamRoot,
        std::filesystem::current_path(),
        std::filesystem::path("C:/Users/govno/Desktop/zadaniy/steam"),
        std::filesystem::path("C:/Users/govno/Desktop/zadaniy")
    };

    if (gameId == 570) { // CS2 Demake
        std::vector<std::filesystem::path> candidates;
        for (const auto& b : baseDirs) {
            candidates.push_back(b / "steamapps" / "common" / "CS2Source" / "cs2.exe");
            candidates.push_back(b / "steamapps" / "common" / "CS2Source" / "CS2WinFormsDemo.exe");
            candidates.push_back(b / "CS2WinFormsDemo" / "bin" / "Release" / "publish" / "CS2WinFormsDemo.exe");
            candidates.push_back(b / "CS2WinFormsDemo" / "bin" / "Release" / "net9.0-windows" / "CS2WinFormsDemo.exe");
            candidates.push_back(b / "CS2WinFormsDemo" / "bin" / "Debug" / "net9.0-windows" / "CS2WinFormsDemo.exe");
            candidates.push_back(b / "SteamSharp" / "Cs2Game" / "bin" / "Debug" / "net9.0-windows" / "cs2.exe");
        }
        for (const auto& c : candidates) {
            if (std::filesystem::exists(c)) return std::filesystem::canonical(c);
        }
    }
    else if (gameId == 1992) { // Mario Kart C#
        std::vector<std::filesystem::path> candidates;
        for (const auto& b : baseDirs) {
            candidates.push_back(b / "steamapps" / "common" / "MarioKartCS" / "MarioKartCS.exe");
            candidates.push_back(b / "MarioKartCS" / "MarioKartCS.exe");
            candidates.push_back(b / "MarioKart_Standalone" / "MarioKartCS.exe");
        }
        for (const auto& c : candidates) {
            if (std::filesystem::exists(c)) return std::filesystem::canonical(c);
        }
    }
    else if (gameId == 101) { // D&D Console RPG
        std::vector<std::filesystem::path> candidates;
        for (const auto& b : baseDirs) {
            candidates.push_back(b / "steamapps" / "common" / "Console-DnD" / "game.exe");
            candidates.push_back(b / "ind" / "Console-DnD-main" / "game.exe");
            candidates.push_back(b / "Steam-Clone-Platform" / "games" / "Console-DnD" / "game.exe");
        }
        for (const auto& c : candidates) {
            if (std::filesystem::exists(c)) {
                // Ensure valid binary, reject old corrupted dummy
                if (std::filesystem::file_size(c) != 10485760) {
                    return std::filesystem::canonical(c);
                }
            }
        }
    }
    else if (gameId == 70) { // Half-Life 3 Prototype
        std::vector<std::filesystem::path> candidates;
        for (const auto& b : baseDirs) {
            candidates.push_back(b / "steamapps" / "common" / "HalfLife3" / "hl3_game.exe");
            candidates.push_back(b / "steamapps" / "common" / "HalfLife3" / "HalfLife3Game.exe");
            candidates.push_back(b / "SteamSharp" / "HalfLife3Game" / "bin" / "Release" / "net9.0-windows" / "HalfLife3Game.exe");
            candidates.push_back(b / "SteamSharp" / "HalfLife3Game" / "bin" / "Debug" / "net9.0-windows" / "HalfLife3Game.exe");
        }
        for (const auto& c : candidates) {
            if (std::filesystem::exists(c)) {
                if (std::filesystem::file_size(c) != 10485760) {
                    return std::filesystem::canonical(c);
                }
            }
        }
    }
    else if (gameId == 400) { // Portal Classic
        std::vector<std::filesystem::path> candidates;
        for (const auto& b : baseDirs) {
            candidates.push_back(b / "steamapps" / "common" / "Portal" / "portal.exe");
            candidates.push_back(b / "steamapps" / "common" / "Portal" / "PortalGame.exe");
            candidates.push_back(b / "SteamSharp" / "PortalGame" / "bin" / "Release" / "net9.0-windows" / "PortalGame.exe");
            candidates.push_back(b / "SteamSharp" / "PortalGame" / "bin" / "Debug" / "net9.0-windows" / "PortalGame.exe");
        }
        for (const auto& c : candidates) {
            if (std::filesystem::exists(c)) return std::filesystem::canonical(c);
        }
    }

    return {};
}

} // namespace

SteamMainWindow::SteamMainWindow(
    std::shared_ptr<steam::storage::ILocalStorage> storage,
    std::shared_ptr<steam::downloader::IDownloadManager> downloadManager,
    std::shared_ptr<steam::launcher::IProcessLauncher> processLauncher,
    steam::core::UserSession session
)
    : m_storage(std::move(storage))
    , m_downloadManager(std::move(downloadManager))
    , m_processLauncher(std::move(processLauncher))
    , m_session(std::move(session))
{
}

SteamMainWindow::~SteamMainWindow() {
    m_stopMonitor = true;
    if (m_processMonitorThread.joinable()) {
        m_processMonitorThread.detach();
    }

#ifdef _WIN32
    if (m_webView && m_webMessageToken.value != 0) {
        m_webView->remove_WebMessageReceived(m_webMessageToken);
    }
    m_webView.Reset();
    m_webViewController.Reset();
    m_webViewEnv.Reset();

    if (m_hwnd) {
        DestroyWindow(m_hwnd);
        m_hwnd = nullptr;
    }
#endif
}

std::wstring SteamMainWindow::utf8ToWide(std::string_view utf8) {
    if (utf8.empty()) return L"";
    int sizeNeeded = MultiByteToWideChar(CP_UTF8, 0, utf8.data(), static_cast<int>(utf8.size()), nullptr, 0);
    std::wstring result(sizeNeeded, 0);
    MultiByteToWideChar(CP_UTF8, 0, utf8.data(), static_cast<int>(utf8.size()), result.data(), sizeNeeded);
    return result;
}

std::string SteamMainWindow::wideToUtf8(std::wstring_view wide) {
    if (wide.empty()) return "";
    int sizeNeeded = WideCharToMultiByte(CP_UTF8, 0, wide.data(), static_cast<int>(wide.size()), nullptr, 0, nullptr, nullptr);
    std::string result(sizeNeeded, 0);
    WideCharToMultiByte(CP_UTF8, 0, wide.data(), static_cast<int>(wide.size()), result.data(), sizeNeeded, nullptr, nullptr);
    return result;
}

bool SteamMainWindow::create(int width, int height) {
    HINSTANCE hInstance = GetModuleHandle(nullptr);

    WNDCLASSEXW wcex = {};
    wcex.cbSize = sizeof(WNDCLASSEXW);
    wcex.style = CS_HREDRAW | CS_VREDRAW;
    wcex.lpfnWndProc = SteamMainWindow::windowProcStatic;
    wcex.cbClsExtra = 0;
    wcex.cbWndExtra = 0;
    wcex.hInstance = hInstance;
    wcex.hIcon = LoadIcon(nullptr, IDI_APPLICATION);
    wcex.hCursor = LoadCursor(nullptr, IDC_ARROW);
    wcex.hbrBackground = (HBRUSH)GetStockObject(BLACK_BRUSH);
    wcex.lpszMenuName = nullptr;
    wcex.lpszClassName = L"SteamNeonClientWindowClass";
    wcex.hIconSm = LoadIcon(nullptr, IDI_APPLICATION);

    RegisterClassExW(&wcex);

    int screenW = GetSystemMetrics(SM_CXSCREEN);
    int screenH = GetSystemMetrics(SM_CYSCREEN);
    int posX = (screenW - width) / 2;
    int posY = (screenH - height) / 2;

    m_hwnd = CreateWindowExW(
        0,
        L"SteamNeonClientWindowClass",
        L"Steam • by zmanovskij",
        WS_OVERLAPPEDWINDOW | WS_CLIPCHILDREN,
        posX, posY, width, height,
        nullptr, nullptr, hInstance, this
    );

    if (!m_hwnd) {
        return false;
    }

    // Windows 10/11 Immersive Dark Titlebar
    BOOL darkMode = TRUE;
    DwmSetWindowAttribute(m_hwnd, 20 /* DWMWA_USE_IMMERSIVE_DARK_MODE */, &darkMode, sizeof(darkMode));

    ShowWindow(m_hwnd, SW_SHOW);
    UpdateWindow(m_hwnd);

    // Initialize WebView2
    initWebView();

    return true;
}

int SteamMainWindow::runEventLoop() {
    MSG msg = {};
    while (GetMessage(&msg, nullptr, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
    return static_cast<int>(msg.wParam);
}

void SteamMainWindow::resizeWebView() {
    if (m_webViewController && m_hwnd) {
        RECT bounds;
        GetClientRect(m_hwnd, &bounds);
        m_webViewController->put_Bounds(bounds);
    }
}

void SteamMainWindow::initWebView() {
    std::filesystem::path appDir = getExeDirectory();
    std::filesystem::path userDataDir = appDir / "userData" / "WebView2Data";
    std::filesystem::create_directories(userDataDir);

    HRESULT hr = CreateCoreWebView2EnvironmentWithOptions(
        nullptr,
        userDataDir.wstring().c_str(),
        nullptr,
        Callback<ICoreWebView2CreateCoreWebView2EnvironmentCompletedHandler>(
            [this](HRESULT result, ICoreWebView2Environment* env) -> HRESULT {
                if (FAILED(result) || !env) {
                    std::cerr << "[WebView2] Environment creation failed: " << result << std::endl;
                    return result;
                }
                m_webViewEnv = env;

                m_webViewEnv->CreateCoreWebView2Controller(
                    m_hwnd,
                    Callback<ICoreWebView2CreateCoreWebView2ControllerCompletedHandler>(
                        [this](HRESULT cResult, ICoreWebView2Controller* controller) -> HRESULT {
                            if (FAILED(cResult) || !controller) {
                                std::cerr << "[WebView2] Controller creation failed: " << cResult << std::endl;
                                return cResult;
                            }
                            m_webViewController = controller;
                            m_webViewController->get_CoreWebView2(&m_webView);

                            if (!m_webView) return E_FAIL;

                            // Configure settings
                            ComPtr<ICoreWebView2Settings> settings;
                            m_webView->get_Settings(&settings);
                            if (settings) {
                                settings->put_IsScriptEnabled(TRUE);
                                settings->put_AreDefaultScriptDialogsEnabled(TRUE);
                                settings->put_IsWebMessageEnabled(TRUE);
                                settings->put_AreDevToolsEnabled(TRUE);
                            }

                            // Subscribe to message events from JavaScript
                            m_webView->add_WebMessageReceived(
                                Callback<ICoreWebView2WebMessageReceivedEventHandler>(
                                    [this](ICoreWebView2* /*sender*/, ICoreWebView2WebMessageReceivedEventArgs* args) -> HRESULT {
                                        LPWSTR rawMsg = nullptr;
                                        args->TryGetWebMessageAsString(&rawMsg);
                                        if (rawMsg) {
                                            std::string utf8Msg = wideToUtf8(rawMsg);
                                            CoTaskMemFree(rawMsg);
                                            handleWebMessage(utf8Msg);
                                        }
                                        return S_OK;
                                    }
                                ).Get(),
                                &m_webMessageToken
                            );

                            m_webViewController->put_IsVisible(TRUE);
                            resizeWebView();

                            // Navigate to local index.html with multi-path fallback
                            std::filesystem::path rootDir;
                            std::filesystem::path htmlPath = resolveUiPath(rootDir);
                            if (!rootDir.empty()) {
                                std::error_code ec;
                                std::filesystem::current_path(rootDir, ec);
                                m_steamRootDir = rootDir;
                            }

                            if (!htmlPath.empty() && std::filesystem::exists(htmlPath)) {
                                std::wstring navUri = L"file:///" + htmlPath.wstring();
                                std::replace(navUri.begin(), navUri.end(), L'\\', L'/');
                                m_webView->Navigate(navUri.c_str());
                            } else {
                                m_webView->NavigateToString(L"<html><body style='background:#171a21;color:#fff;'><h1>UI Not Found</h1><p>Missing ui_web/index.html</p></body></html>");
                            }

                            return S_OK;
                        }
                    ).Get()
                );
                return S_OK;
            }
        ).Get()
    );

    if (FAILED(hr)) {
        std::cerr << "[WebView2] Failed to initialize environment: " << hr << std::endl;
    }
}

void SteamMainWindow::postMessageToWeb(const std::string& jsonString) {
    if (m_webView) {
        std::wstring wideJson = utf8ToWide(jsonString);
        m_webView->PostWebMessageAsJson(wideJson.c_str());
    }
}

void SteamMainWindow::handleWebMessage(const std::string& jsonString) {
    std::cout << "[IPC C++ Received]: " << jsonString << std::endl;

    std::string action = extractJsonString(jsonString, "action");
    long long gameId = extractJsonInt(jsonString, "gameId");

    if (action == "ready") {
        // Check which games actually have executable files available
        std::vector<int> installed;
        if (!resolveGameExecutable(570, m_steamRootDir).empty()) {
            installed.push_back(570);
        }
        if (!resolveGameExecutable(1992, m_steamRootDir).empty()) {
            installed.push_back(1992);
        }
        if (!resolveGameExecutable(101, m_steamRootDir).empty()) {
            installed.push_back(101);
        }
        if (!resolveGameExecutable(70, m_steamRootDir).empty()) {
            installed.push_back(70);
        }
        if (!resolveGameExecutable(400, m_steamRootDir).empty()) {
            installed.push_back(400);
        }

        std::ostringstream ss;
        ss << "{\"event\":\"init_data\",\"username\":\"" << m_session.getUsername() << "\",\"installedGames\":[";
        for (size_t i = 0; i < installed.size(); ++i) {
            ss << installed[i] << (i + 1 < installed.size() ? "," : "");
        }
        ss << "]}";
        postMessageToWeb(ss.str());
    }
    else if (action == "update_profile") {
        std::string username = extractJsonString(jsonString, "username");
        if (!username.empty()) {
            m_session.setUsername(username);
            std::cout << "[PROFILE] Updated username in C++ session: " << username << std::endl;
        }
    }
    else if (action == "add_to_library") {
        std::cout << "[LIBRARY] Game added to library: " << gameId << std::endl;
    }
    else if (action == "install_game") {
        std::cout << "[INSTALLER] Triggering installation for game ID: " << gameId << std::endl;
        
        // Launch installation thread to extract or download game without blocking UI
        std::thread([this, gameId]() {
            for (int p = 15; p <= 85; p += 25) {
                std::this_thread::sleep_for(std::chrono::milliseconds(250));
                std::ostringstream prog;
                prog << "{\"event\":\"download_progress\",\"gameId\":" << gameId << ",\"percent\":" << p << "}";
                postMessageToWeb(prog.str());
            }

            std::filesystem::path appDir = getExeDirectory();
            std::filesystem::path targetCommon = appDir / "steamapps" / "common";
            std::filesystem::create_directories(targetCommon);

            std::filesystem::path zipPath;
            std::filesystem::path targetDir;
            if (gameId == 570) {
                zipPath = "catalog/releases/CS2Source.zip";
                targetDir = targetCommon / "CS2Source";
            } else if (gameId == 1992) {
                zipPath = "catalog/releases/MarioKartCS.zip";
                targetDir = targetCommon / "MarioKartCS";
            }

            if (std::filesystem::exists(zipPath)) {
                std::filesystem::create_directories(targetDir);
                std::string cmd = "tar -xf \"" + zipPath.string() + "\" -C \"" + targetDir.string() + "\"";
                system(cmd.c_str());
            }

            std::this_thread::sleep_for(std::chrono::milliseconds(250));
            std::ostringstream done;
            done << "{\"event\":\"download_progress\",\"gameId\":" << gameId << ",\"percent\":100}";
            postMessageToWeb(done.str());

            std::ostringstream inst;
            inst << "{\"event\":\"game_installed\",\"gameId\":" << gameId << "}";
            postMessageToWeb(inst.str());
        }).detach();
    }
    else if (action == "launch_game") {
        std::cout << "[LAUNCHER] Launching game ID: " << gameId << " (asynchronously)" << std::endl;

        // Async execution to prevent UI freezing
        std::thread([this, gameId]() {
            std::filesystem::path exePath = resolveGameExecutable(gameId, m_steamRootDir);
            if (exePath.empty() || !std::filesystem::exists(exePath)) {
                std::cerr << "[LAUNCHER ERROR] Executable not found on disk for game ID: " << gameId << std::endl;
                std::ostringstream err;
                err << "{\"event\":\"error\",\"message\":\"Исполняемый файл игры не найден на диске!\"}";
                postMessageToWeb(err.str());
                return;
            }

            steam::launcher::LaunchConfig config;
            config.executablePath = exePath;
            config.workingDirectory = exePath.parent_path();
            if (gameId == 101) {
                config.createNewConsole = true;
            }

            std::cout << "[LAUNCHER] Starting process: " << exePath.string() << std::endl;
            bool ok = m_processLauncher->launch(static_cast<steam::core::AppId>(gameId), config);
            if (ok) {
                m_isGameRunning = true;
                m_runningAppId = static_cast<steam::core::AppId>(gameId);

                std::ostringstream ss;
                ss << "{\"event\":\"game_state\",\"gameId\":" << gameId << ",\"running\":true}";
                postMessageToWeb(ss.str());

                // Asynchronously monitor until process exits
                while (m_processLauncher->isRunning(static_cast<steam::core::AppId>(gameId))) {
                    std::this_thread::sleep_for(std::chrono::milliseconds(300));
                }

                m_isGameRunning = false;
                std::ostringstream stopped;
                stopped << "{\"event\":\"game_state\",\"gameId\":" << gameId << ",\"running\":false}";
                postMessageToWeb(stopped.str());
            } else {
                std::cerr << "[LAUNCHER] Failed to create process for game: " << gameId << std::endl;
            }
        }).detach();
    }
    else if (action == "stop_game") {
        std::cout << "[LAUNCHER] Stopping game ID: " << gameId << std::endl;
        std::thread([this, gameId]() {
            m_processLauncher->terminate(static_cast<steam::core::AppId>(gameId));
            m_isGameRunning = false;
            std::ostringstream ss;
            ss << "{\"event\":\"game_state\",\"gameId\":" << gameId << ",\"running\":false}";
            postMessageToWeb(ss.str());
        }).detach();
    }
}

LRESULT CALLBACK SteamMainWindow::windowProcStatic(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    SteamMainWindow* pThis = nullptr;
    if (uMsg == WM_NCCREATE) {
        auto pCreate = reinterpret_cast<CREATESTRUCT*>(lParam);
        pThis = reinterpret_cast<SteamMainWindow*>(pCreate->lpCreateParams);
        SetWindowLongPtr(hwnd, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(pThis));
        pThis->m_hwnd = hwnd;
    } else {
        pThis = reinterpret_cast<SteamMainWindow*>(GetWindowLongPtr(hwnd, GWLP_USERDATA));
    }

    if (pThis) {
        return pThis->windowProc(hwnd, uMsg, wParam, lParam);
    }
    return DefWindowProc(hwnd, uMsg, wParam, lParam);
}

LRESULT SteamMainWindow::windowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (uMsg) {
    case WM_SIZE:
        resizeWebView();
        return 0;

    case WM_DESTROY:
        PostQuitMessage(0);
        return 0;

    default:
        break;
    }
    return DefWindowProc(hwnd, uMsg, wParam, lParam);
}

} // namespace steam::ui
