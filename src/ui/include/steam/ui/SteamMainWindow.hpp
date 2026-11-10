#pragma once

#include "steam/core/AppManifest.hpp"
#include "steam/core/UserSession.hpp"
#include "steam/downloader/IDownloadManager.hpp"
#include "steam/launcher/IProcessLauncher.hpp"
#include "steam/storage/ILocalStorage.hpp"

#include <memory>
#include <string>
#include <string_view>
#include <vector>
#include <atomic>
#include <thread>
#include <mutex>

#ifdef _WIN32
#ifndef NOMINMAX
#define NOMINMAX
#endif
#include <windows.h>
#include <wrl.h>
#include "WebView2.h"
#endif

namespace steam::ui {

class SteamMainWindow {
public:
    SteamMainWindow(
        std::shared_ptr<steam::storage::ILocalStorage> storage,
        std::shared_ptr<steam::downloader::IDownloadManager> downloadManager,
        std::shared_ptr<steam::launcher::IProcessLauncher> processLauncher,
        steam::core::UserSession session = {}
    );
    ~SteamMainWindow();

    bool create(int width = 1280, int height = 800);
    int runEventLoop();

    void postMessageToWeb(const std::string& jsonString);

    static std::wstring utf8ToWide(std::string_view utf8);
    static std::string wideToUtf8(std::wstring_view wide);

private:
#ifdef _WIN32
    static LRESULT CALLBACK windowProcStatic(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);
    LRESULT windowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);

    void initWebView();
    void resizeWebView();
    void handleWebMessage(const std::string& jsonString);

    HWND m_hwnd{nullptr};
    Microsoft::WRL::ComPtr<ICoreWebView2Environment> m_webViewEnv;
    Microsoft::WRL::ComPtr<ICoreWebView2Controller> m_webViewController;
    Microsoft::WRL::ComPtr<ICoreWebView2> m_webView;
    EventRegistrationToken m_webMessageToken{};
#endif

    std::shared_ptr<steam::storage::ILocalStorage> m_storage;
    std::shared_ptr<steam::downloader::IDownloadManager> m_downloadManager;
    std::shared_ptr<steam::launcher::IProcessLauncher> m_processLauncher;
    steam::core::UserSession m_session;

    std::filesystem::path m_steamRootDir;
    std::atomic<bool> m_isGameRunning{false};
    steam::core::AppId m_runningAppId{0};
    std::thread m_processMonitorThread;
    std::atomic<bool> m_stopMonitor{false};
    std::mutex m_stateMutex;
};

} // namespace steam::ui
