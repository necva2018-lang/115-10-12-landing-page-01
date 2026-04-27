// countdown.js — 倒數至最近截止日
const DEADLINES = {
  puli:   new Date("2026-05-14T17:00:00+08:00"),   // 埔里班
  caotun: new Date("2026-05-19T17:00:00+08:00"),   // 草屯班
};

function getNearestDeadline() {
  const now = new Date();
  const upcoming = Object.values(DEADLINES).filter(d => d - now > 0);
  return upcoming.length ? new Date(Math.min(...upcoming)) : null;
}

function getDaysRemaining() {
  const nearest = getNearestDeadline();
  if (!nearest) return 0;
  return Math.max(0, Math.ceil((nearest - new Date()) / (1000 * 60 * 60 * 24)));
}

// Sticky bar: days only
function updateStickyCountdown() {
  const el = document.getElementById("countdown-days");
  if (el) el.textContent = getDaysRemaining();
}

// Final CTA: full countdown (days / hours / minutes / seconds)
function updateFullCountdown() {
  const nearest = getNearestDeadline();
  if (!nearest) return;

  const diff = Math.max(0, nearest - new Date());
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const pad = n => String(n).padStart(2, "0");
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = pad(val); };

  set("timer-days",    days);
  set("timer-hours",   hours);
  set("timer-minutes", minutes);
  set("timer-seconds", seconds);
}

updateStickyCountdown();
updateFullCountdown();
setInterval(() => { updateStickyCountdown(); updateFullCountdown(); }, 1000);

// Show sticky bar after scrolling 400px
window.addEventListener("scroll", () => {
  const bar = document.getElementById("sticky-bar");
  if (!bar) return;
  if (window.scrollY > 400) bar.classList.add("visible");
  else bar.classList.remove("visible");
}, { passive: true });
