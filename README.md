# Tokyo Travel Journal

日系旅行手帳雛型，使用純 HTML / CSS / JavaScript，可直接部署到 GitHub Pages。

## 專案結構

```text
tokyo-travel/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── itinerary.js
├── assets/
│   └── images/
└── README.md
```

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可。無需安裝套件或執行建置指令。

## 修改行程

每日行程集中在 `js/itinerary.js`。可以修改日期、標題、時間、描述、超連結、住宿與圖片路徑。

## 加入圖片

將圖片放入 `assets/images/`，再在 `js/itinerary.js` 指定相對路徑，例如：

```js
image: "assets/images/fuji.jpg"
```

首頁主視覺圖片路徑設定在 `css/style.css`：

```css
url("../assets/images/japan-cover.jpg")
```

若尚未放入圖片，頁面會顯示底色，不影響其他功能。

## 部署到 GitHub Pages

1. 將整個 `tokyo-travel` 資料夾內容上傳至 GitHub repository。
2. 開啟 repository 的 **Settings → Pages**。
3. 在 **Build and deployment** 選擇 **Deploy from a branch**。
4. Branch 選 `main`，資料夾選 `/ (root)`，按 Save。
5. 等待部署完成後，使用 GitHub Pages 提供的網址開啟。

注意：檔案及資料夾名稱大小寫需一致；GitHub Pages 網址通常會區分大小寫。
