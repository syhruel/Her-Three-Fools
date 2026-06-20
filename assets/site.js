// ─── THEME ─────────────────────────────────────────────
(function () {
    const root = document.documentElement;
    let isDark = true;
    try {
        const saved = localStorage.getItem('htf-theme');
        if (saved === 'light') isDark = false;
    } catch (e) {}
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');

    function updateToggleUI() {
        document.querySelectorAll('#icon-dark').forEach(el => el.classList.toggle('active', isDark));
        document.querySelectorAll('#icon-light').forEach(el => el.classList.toggle('active', !isDark));
    }

    window.toggleTheme = function () {
        isDark = !isDark;
        root.setAttribute('data-theme', isDark ? 'dark' : 'light');
        try { localStorage.setItem('htf-theme', isDark ? 'dark' : 'light'); } catch (e) {}
        updateToggleUI();
    };

    document.addEventListener('DOMContentLoaded', updateToggleUI);
    updateToggleUI();
})();

// ─── MOBILE MENU ───────────────────────────────────────
window.openMobileMenu = function () {
    document.getElementById('mobile-menu').classList.add('open');
    document.getElementById('menu-overlay').classList.add('open');
};

window.closeMobileMenu = function () {
    document.getElementById('mobile-menu').classList.remove('open');
    document.getElementById('menu-overlay').classList.remove('open');
};
