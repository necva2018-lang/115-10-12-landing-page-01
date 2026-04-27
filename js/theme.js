// theme.js — 淺色 / 深色主題切換（記憶使用者偏好）

(function () {
  const HTML    = document.documentElement;
  const BTN     = document.getElementById("theme-toggle");
  const ICON    = document.getElementById("toggle-icon");
  const LABEL   = document.getElementById("toggle-label");
  const KEY     = "nantou-theme";

  // 套用主題
  function applyTheme(theme) {
    if (theme === "dark") {
      HTML.setAttribute("data-theme", "dark");
      if (ICON)  ICON.textContent  = "☀️";
      if (LABEL) LABEL.textContent = "淺色";
    } else {
      HTML.removeAttribute("data-theme");
      if (ICON)  ICON.textContent  = "🌙";
      if (LABEL) LABEL.textContent = "深色";
    }
  }

  // 初始化：讀取 localStorage，否則偵測系統偏好
  function init() {
    const saved = localStorage.getItem(KEY);
    if (saved) {
      applyTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }
  }

  // 切換
  function toggle() {
    const isDark = HTML.getAttribute("data-theme") === "dark";
    const next   = isDark ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(KEY, next);
  }

  // 初始化 — 盡早執行避免閃爍
  init();

  // 綁定按鈕
  if (BTN) BTN.addEventListener("click", toggle);

  // 監聽系統主題變更（使用者沒有手動設定時才跟隨）
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (!localStorage.getItem(KEY)) applyTheme(e.matches ? "dark" : "light");
  });
})();
