add_library(steam_ui STATIC
    src/SteamMainWindow.cpp
)

target_include_directories(steam_ui PUBLIC
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
    $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/../../third_party/webview2/build/native/include>
    $<INSTALL_INTERFACE:include>
)

target_link_libraries(steam_ui PUBLIC
    steam_core
    steam_downloader
    steam_launcher
    steam_storage
    project_warnings
)

if(WIN32)
    target_link_libraries(steam_ui PRIVATE
        gdi32 user32 shell32 gdiplus msimg32 shlwapi ole32 oleaut32
        ${CMAKE_CURRENT_SOURCE_DIR}/../../third_party/webview2/build/native/x64/WebView2Loader.dll.lib
    )
endif()
