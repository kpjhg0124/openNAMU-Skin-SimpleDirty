window.onload = function () {
    if (window.location.pathname === '/skin_set') {
        loadSkinSettingsPage()
    } else if ((window.location.pathname.match(/(\/edit\/).*?/)) || (window.location.pathname.match(/(\/topic\/).*?/)) || (window.location.pathname.match(/(\/thread\/).*?/))) {
        bindingEvents(document.getElementById('content'))
    }
    loadSkinSettings()
    materialize()
}

if (getCookie('skinSettingsVersion') == null || getCookie('skinSettingsVersion') < defaultSkinSettings['skinSettingsVersion']) {
    let skinSettingsKeys = Object.keys(defaultSkinSettings)
    for (let i = 0; i < skinSettingsKeys.length; i++) {
        if (getCookie(skinSettingsKeys[i]) == null) {
            setCookie(skinSettingsKeys[i], defaultSkinSettings[skinSettingsKeys[i]], new Date('9999-1-01T00:00:00').getTime())
        }
    }
}