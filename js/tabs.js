// tabs.js — Curriculum section tabs (desktop) + accordion (mobile)

document.addEventListener("DOMContentLoaded", () => {

  // ── Desktop Tabs ──────────────────────────────────────────
  const tabBtns   = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b  => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const panel = document.getElementById("panel-" + target);
      if (panel) panel.classList.add("active");
    });
  });

  // ── Mobile Accordion ─────────────────────────────────────
  const triggers = document.querySelectorAll(".curr-acc-trigger");
  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const isOpen  = trigger.classList.contains("open");
      const content = trigger.nextElementSibling;

      // Close all
      triggers.forEach(t => {
        t.classList.remove("open");
        if (t.nextElementSibling) t.nextElementSibling.classList.remove("open");
      });

      // Open clicked (toggle)
      if (!isOpen) {
        trigger.classList.add("open");
        if (content) content.classList.add("open");
      }
    });
  });

});
