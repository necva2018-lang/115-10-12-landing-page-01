# 開發紀錄 — 115-10-12 Landing Page

> 專案：南投 AI 數位行銷雙班 2026 Q2 招生頁面  
> 客戶：社團法人南投縣技職教育協會  
> Repo：https://github.com/necva2018-lang/115-10-12-landing-page-01

---

## v1.2 — 2026-04-20

**commit `bde1eaf`**

### 字型排版
- 全站所有文字字號一律 +3px（h1: 48→51、h2: 32→35、p: 18→21 …等共 60+ 處）
- 同步調整相關 padding / spacing，確保文字放大後版面不跑位

### 圖片修正
- **IMG-02 / IMG-03**（草屯、埔里地圖）：容器由固定 `height: 160px` 改為 `aspect-ratio: 600 / 280`，圖片完整顯示不再被裁切
- **手機版 Hero 主視覺**：移除 `display: none`，改為單欄置中顯示於文字下方（max-width: 480px）

### 內容更新
| 位置 | 修改前 | 修改後 |
|------|--------|--------|
| 甄試區塊 exam-tag | 地點由協會另行通知 | 地點為當地本協會教室 |
| 甄試區塊 第3卡 | 佔位文字 | 「前往題庫練習 →」按鈕（連結既有題庫） |
| 關於協會 — 開班次數 | 10+ | 200+ |
| 關於協會 — 結訓學員 | 300+ | 5000+ |
| FAQ Q4 | 在職勞工版本 | 失業者委辦計畫版本（年滿15歲、非在學） |
| FAQ Q7 | 缺席率 20% | 缺席率 10% |

---

## v1.1 — 2026-04-19

**commit `c675a24`**

### 圖片連結填入
從 `img_list.xlsx` 讀取並填入所有圖片網址：

| 編號 | 用途 | 網址 |
|------|------|------|
| IMG-02 | 草屯班地圖 | `https://i.ibb.co/S4DzhXXY/image.png` |
| IMG-03 | 埔里班地圖 | `https://i.ibb.co/zHVDLGSJ/image.png` |
| IMG-04 | 草屯班教室照 | `https://i.ibb.co/jZBhg49p/IMG-04-02.png` |
| IMG-05 | 埔里班教室照 | `https://i.ibb.co/qS9mdjW/img-05.png` |
| IMG-06 | 學員見證 1 | `https://i.ibb.co/5hJ6pDT9/img-06.avif` |
| IMG-07 | 學員見證 2 | `https://i.ibb.co/TMGXZSjB/img-07.jpg` |
| IMG-08 | 學員見證 3 | `https://i.ibb.co/KjcPwXbm/img-08.gif` |
| IMG-09 | 學員見證 4 | `https://i.ibb.co/8LtNjSYN/img-09.jpg` |
| IMG-11 | 協會 Logo | `https://i.ibb.co/5Xncgs84/LOGO-C.png` |
| IMG-12 | 政府計畫 Logo | *(待補)* |

---

## v1.0 — 2026-04-19

**commit `41871f2`**

### 初始建置
- 12 個頁面區塊全部完成（Hero → Footer）
- 淺色 / 深色雙主題切換（右下角浮動按鈕，`localStorage` 記憶）
- 倒數計時器：sticky bar 天數 + 最後行動區完整秒數
- 課程區塊：桌機 Tabs / 手機 Accordion
- JavaScript 模組：`theme.js` / `countdown.js` / `tabs.js` / `tracking.js`
- SEO meta、Open Graph、robots.txt

### 已填入資料
- IMG-01 主視覺：`https://i.ibb.co/zV9L7fH3/OK.png`
- IMG-10 LINE QR Code：`https://qr-official.line.me/gs/M_xat.0000181616.4vf_BW.png`
- 草屯班報名：`https://www.surveycake.com/s/ewL0G`
- 埔里班報名：`https://www.surveycake.com/s/gr7Gd`
- LINE 加好友：`https://lin.ee/OMYMuIj`
- 題庫練習：`https://couputer-1.netlify.app/index.html`

### 待填入
- Meta Pixel ID
- GA4 / GTM ID
- IMG-12 政府計畫 Logo
- 協會統編
- `privacy.html` 隱私權政策
- `CNAME` 自訂網域
- `robots.txt` 正式網域
