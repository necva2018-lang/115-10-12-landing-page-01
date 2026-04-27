# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for **南投 AI 數位行銷雙班** 2026 Q2 recruitment.  
Client: 社團法人南投縣技職教育協會｜聯絡：049-2903412｜2903412@gmail.com

| 班別 | 編號 | 課程 | 期程 | 時段 | 時數 | 報名截止 |
|------|------|------|------|------|------|---------|
| 草屯班 | 115-10 | AI 數位行銷人員培訓班 | 6/1–8/21 | 週一至週四 | 340hr | 2026-05-19 |
| 埔里班 | 115-12 | 網路行銷設計與 AI 應用班 | 5/26–8/06 | 週二至週五 | 300hr | 2026-05-14 |

甄試日期：草屯班 5/19、埔里班 5/14（地點為當地本協會教室）

## Current Build Status — v1.2

**待填入（頁面中以 `<!-- ★ -->` 標示）：**
- Meta Pixel ID（`<head>` 注解區取消注解，填入 `YOUR_PIXEL_ID`）
- GA4 / GTM ID（`<head>` 注解區取消注解，填入 `G-XXXXXXXXXX`）
- IMG-12 政府計畫 Logo（Footer 合作機構區）
- 協會統編、`privacy.html` 隱私權政策頁面
- `robots.txt` 中的 `YOUR_DOMAIN` 換成正式網域
- Footer 社群連結（Facebook、Instagram `href="#"` 佔位）

**已完成：** IMG-01~11 全部填入、SurveyCake 報名、LINE、題庫練習連結皆已填入。

## Development

No build tools. Preview with `npx serve .` or VS Code Live Server. Open `index.html` directly.

## Architecture — Cross-File Interactions

### FOUC 防閃爍（雙層機制）
1. `<head>` 內聯 `<script>`：最早執行，讀取 `localStorage["nantou-theme"]` 並立即設定 `<html data-theme="dark">`
2. `theme.js`（`defer`）：綁定切換按鈕、監聽系統主題變更

兩者合作：內聯解決初次渲染閃爍，`theme.js` 處理互動。**不要把內聯 script 移到 defer。**

### Sticky Bar 顯示邏輯
CSS 預設 `#sticky-bar { display: none }`，`countdown.js` 監聽 scroll 超過 400px 後加上 `.visible` class 切換為 `display: flex`。

### img-slot 佔位系統
每個圖片容器有 `.img-slot` class，內含 `<img>` 和 `.slot-label` 覆蓋層。`<img onload="this.classList.add('loaded')">` 觸發 CSS 讓圖片顯示；頁底 inline script 在圖片成功載入後把 `.slot-label` 隱藏。`onerror` 讓圖片 `display:none` 以顯示佔位標籤。

### 課程區塊：桌機 Tabs vs 手機 Accordion
同一份課程資料在 HTML 中重複了兩次：
- `.tabs-wrapper`：桌機顯示（CSS media query 控制）
- `.curriculum-accordion`：手機顯示

`tabs.js` 分別初始化兩套獨立的事件監聽。若修改課程內容須同步更新兩處。

### 倒數計時器目標
`countdown.js` 的 `getNearestDeadline()` 自動選取最近未到期截止日：埔里截止後自動切換倒數草屯班。Sticky bar 顯示天數，`#final-cta` 顯示完整 `天:時:分:秒`，共用同一邏輯。

## Design System

```css
/* 淺色主題（預設） */
:root {
  --brand:      #0052cc;   /* 主藍 — 按鈕、CTA */
  --brand-dark: #003a8c;   /* 深藍 — 標題、深色區塊 */
  --accent:     #0065ff;   /* 亮藍 — hover */
  --gold:       #f59e0b;   /* 琥珀 — 深色區塊數字 */
  --cream:      #f0f4ff;   /* 淺藍灰 — 交替區塊底色 */
}
```

深色主題：`[data-theme="dark"]` 覆寫 CSS 變數，`localStorage` key = `"nantou-theme"`。

## JavaScript Modules

| 檔案 | 說明 |
|------|------|
| `theme.js` | 主題切換 + 系統偏好偵測；`defer` 載入，但 `<head>` 有同步內聯版防閃爍 |
| `countdown.js` | 截止日：埔里 `2026-05-14T17:00+08:00`，草屯 `2026-05-19T17:00+08:00` |
| `tabs.js` | `.tab-btn[data-tab]` → `#panel-{id}`；手機用 `.curr-acc-trigger` |
| `tracking.js` | `[data-cta]` 觸發 Pixel + GA4；`[data-track="line"]` 觸發 ClickLINE |

## Key URLs & Credentials

| 項目 | 值 |
|------|-----|
| 草屯班報名 | `https://www.surveycake.com/s/ewL0G` |
| 埔里班報名 | `https://www.surveycake.com/s/gr7Gd` |
| LINE 加好友 | `https://lin.ee/OMYMuIj` |
| 題庫練習 | `https://couputer-1.netlify.app/index.html` |
| UTM 格式 | `?utm_source=lp&utm_medium={位置}&utm_campaign=nantou_2026q2` |

## Image Slots Reference

| 編號 | 位置 | 用途 | 狀態 | 建議尺寸 |
|------|------|------|------|---------|
| IMG-01 | Hero 右側 | 主視覺 | ✅ 已填 | 800×800px |
| IMG-02 | 地點 草屯卡 | Google Maps 截圖 | ✅ 已填 | 600×280px |
| IMG-03 | 地點 埔里卡 | Google Maps 截圖 | ✅ 已填 | 600×280px |
| IMG-04 | 課程 草屯 Tab | 上課環境照 | ✅ 已填 | 800×450px |
| IMG-05 | 課程 埔里 Tab | 上課環境照 | ✅ 已填 | 800×450px |
| IMG-06~09 | 見證區 | 學員頭像 | ✅ 已填 | 120×120px |
| IMG-10 | 最後行動區 | LINE QR Code | ✅ 已填 | 200×200px |
| IMG-11 | Footer | 協會 Logo | ✅ 已填 | 240×80px |
| IMG-12 | Footer | 政府計畫 Logo | ⬜ 待填 | 200×60px |

填入方式：找到 `<!-- ★ IMG-XX ★ -->` 注解，將 `<img src="">` 換成圖片網址。

## Content Rules

- 津貼金額一律用「約 $XX,XXX」，不用「最高」。
- 補助說明一律用「符合條件可申領」，不用「津貼上限」。
- 埔里班時數 **300 小時**；草屯班時數 **340 小時**。
- 免責聲明：「實際補助金額依勞動部核定為準，津貼資格需符合本方案身分別規定。」
- 證照區段標題：「課程輔導考取三張國際認可證照」。
- 甄試卡片地點標示：「地點為當地本協會教室」（非「由協會另行通知」）。
