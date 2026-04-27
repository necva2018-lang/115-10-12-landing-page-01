// tracking.js — Meta Pixel + GA4/GTM event tracking

document.addEventListener("DOMContentLoaded", () => {

  // Fire ViewContent on load
  if (window.fbq) fbq("track", "ViewContent");
  if (window.dataLayer) dataLayer.push({ event: "view_content" });

  // Scroll depth 50%
  let fired50 = false;
  window.addEventListener("scroll", () => {
    if (fired50) return;
    const pct = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
    if (pct >= 0.5) {
      fired50 = true;
      if (window.fbq) fbq("trackCustom", "ScrollDepth_50");
      if (window.dataLayer) dataLayer.push({ event: "scroll_depth", depth: 50 });
    }
  }, { passive: true });

  // CTA clicks via data-cta attribute
  document.querySelectorAll("[data-cta]").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.cta;
      if (window.fbq) fbq("trackCustom", "ClickCTA_" + type);
      if (window.dataLayer) dataLayer.push({ event: "cta_click", cta_type: type });
    });
  });

  // LINE clicks
  document.querySelectorAll("[data-track='line']").forEach(el => {
    el.addEventListener("click", () => {
      if (window.fbq) fbq("trackCustom", "ClickLINE");
      if (window.dataLayer) dataLayer.push({ event: "click_line" });
    });
  });

  // Exam practice link
  document.querySelectorAll("[data-track='exam-practice']").forEach(el => {
    el.addEventListener("click", () => {
      if (window.fbq) fbq("trackCustom", "ClickExamPractice");
      if (window.dataLayer) dataLayer.push({ event: "click_exam_practice" });
    });
  });

});
