/*
 * 每日行程資料集中在這裡。
 * 之後要新增/修改行程，優先編輯這個檔案，不需要修改 app.js。
 */
const itinerary = [
  {
    date: "12.10",
    tab: "12/10 · 東京",
    weekday: "THU · DAY 01",
    theme: "抵達東京",
    image: "assets/images/tokyo.jpg",
    imageAlt: "東京街景",

    events: [
      {
        time: "14:25 — 18:30",
        title: "✈️ 台北 → 東京成田",
        description: "TPE 第一航廈 → NRT 第一航廈"
      },
      {
        time: "抵達後・彈性安排",
        title: "ナガノマーケット GINZA",
        description: "打烊時間 21:00",

        image: "assets/images/nagano-market-ginza.png",

        imageLink: "https://www.google.com/maps/search/?api=1&query=Ginza+Station",

      }
    ],

    hotel: "N+HOTEL",
    hotelNote: "東京住宿",
    hotelMapUrl: "https://maps.app.goo.gl/cTn4tRjMTTB4pNEAA"
  },

  {
    date: "12.11", tab: "12/11 · 東京", weekday: "FRI · DAY 02", theme: "東京 → 河口湖",
    image: "assets/images/tokyo.jpg", imageAlt: "東京城市風景",
    events: [
      { time: "早上", title: "🏃 皇居晨跑", description: "跑步後回飯店整理行李、Check-out。",
        links: [{ label: "皇居地圖", url: "https://www.google.com/maps/search/?api=1&query=皇居+東京" }] },
      { time: "上午・彈性安排", title: "ナガノマーケット GINZA", description: "購買餅餅。",
        links: [{ label: "Google Map", url: "https://www.google.com/maps/search/?api=1&query=ナガノマーケット+GINZA" }] },
      { time: "12:00", title: "🥩 牛たんの檸檬 有楽町店", description: "午餐。",
        links: [{ label: "Google Map", url: "https://www.google.com/maps/search/?api=1&query=牛たんの檸檬+有楽町店" }] },
      { time: "14:00 — 15:40", title: "🎭 ROCKZA 劇場", description: "表演時間。",
        links: [{ label: "Google Map", url: "https://www.google.com/maps/search/?api=1&query=ROCKZA+劇場+東京" }] },
      { time: "下午", title: "回 N+HOTEL 拿行李", description: "接著前往 Alpen TOKYO 領取物資。",
        links: [{ label: "Alpen TOKYO", url: "https://www.google.com/maps/search/?api=1&query=Alpen+TOKYO" }] },
      { time: "晚餐", title: "🍣 Sushi Ninomiya Tokyo Shinjuku", description: "新宿晚餐。",
        links: [{ label: "Google Map", url: "https://www.google.com/maps/search/?api=1&query=Sushi+Ninomiya+Tokyo+Shinjuku" }] },
      { time: "19:45 — 21:40", title: "🚆 新宿 → 河口湖", description: "搭車前往河口湖。",
        links: [{ label: "Google Map", url: "https://www.google.com/maps/dir/?api=1&origin=新宿駅&destination=河口湖駅&travelmode=transit" }] }
    ],
    hotel: "Hospitable inn NIIYA Mt.Fuji", hotelNote: "河口湖住宿｜地址與訂房連結待補"
  },
  {
    date: "12.12", tab: "12/12 · 河口湖", weekday: "SAT · DAY 03", theme: "河口湖・山中湖",
    image: "assets/images/fuji.jpg", imageAlt: "富士山景色",
    events: [
      { time: "12:00 — 19:00", title: "🎁 領取加購商品", description: "商品攤位開放時間。" },
      { time: "其他時間", title: "🗻 山中湖走走", description: "湖畔散步、欣賞富士山風景。",
        links: [{ label: "山中湖地圖", url: "https://www.google.com/maps/search/?api=1&query=山中湖" }] }
    ],
    info: "<strong>商品攤位時間</strong><br>12/12（六）12:00～19:00<br>12/13（日）07:00～16:00",
    hotel: "Hospitable inn NIIYA Mt.Fuji", hotelNote: "河口湖住宿"
  },
  {
    date: "12.13", tab: "12/13 · 馬拉松", weekday: "SUN · DAY 04", theme: "RACE DAY",
    image: "assets/images/fuji.jpg", imageAlt: "富士山與湖景",
    events: [
      { time: "07:00 — 16:00", title: "🎁 領取加購商品", description: "商品攤位開放時間，請留意賽事安排。" },
      { time: "依賽事時程", title: "🏃‍♀️ 富士山馬拉松", description: "河口湖・山中湖｜完賽後記得領取物品。",
        links: [{ label: "賽事資訊", url: "https://www.google.com/search?q=富士山マラソン+公式" }] },
      { time: "完賽後", title: "🚌 接駁前往御殿場飯店", description: "接駁時間與乘車地點待補。" },
      { time: "晚餐・人在附近時", title: "🍖 靜岡炭烤漢堡排 さわやか", description: "可使用 LINE 預約／取號。",
        links: [
          { label: "LINE 預約", url: "https://miniapp.line.me/2006055787-m6P6OJ38/ticketing/3273/" },
          { label: "附近分店地圖", url: "https://www.google.com/maps/search/?api=1&query=炭焼きレストランさわやか+御殿場" }
        ] }
    ],
    hotel: "Hotel Route-Inn Gotemba Eki-Minami", hotelNote: "御殿場住宿｜地址與訂房連結待補"
  },
  {
    date: "12.14", tab: "12/14 · 箱根", weekday: "MON · DAY 05", theme: "箱根慢旅行",
    image: "assets/images/hakone.jpg", imageAlt: "箱根風景",
    events: [
      { time: "時間待安排", title: "♨️ 前往箱根", description: "交通方式與沿途景點之後再補充。",
        links: [{ label: "箱根地圖", url: "https://www.google.com/maps/search/?api=1&query=箱根" }] }
    ],
    hotel: "Toki resort Hakone Bettei", hotelNote: "箱根住宿｜地址與訂房連結待補"
  },
  {
    date: "12.15", tab: "12/15 · 橫濱", weekday: "TUE · DAY 06", theme: "小田原・橫濱",
    image: "assets/images/yokohama.jpg", imageAlt: "橫濱城市風景",
    events: [
      { time: "中午", title: "🍜 小田原站附近午餐", description: "餐廳待選。",
        links: [{ label: "搜尋附近午餐", url: "https://www.google.com/maps/search/?api=1&query=小田原駅+ランチ" }] },
      { time: "下午／晚上", title: "🎄 橫濱紅磚倉庫聖誕市集", description: "逛聖誕市集、拍照。",
        links: [
          { label: "紅磚倉庫官網", url: "https://www.yokohama-akarenga.jp/" },
          { label: "地圖導航", url: "https://www.google.com/maps/search/?api=1&query=横浜赤レンガ倉庫" }
        ] },
      { time: "之後", title: "🚆 前往成田國際機場第三航廈", description: "前往機場飯店。",
        links: [{ label: "查看交通", url: "https://www.google.com/maps/dir/?api=1&origin=横浜赤レンガ倉庫&destination=成田空港第3ターミナル&travelmode=transit" }] }
    ],
    hotel: "成田東武機場飯店", hotelNote: "成田機場住宿｜地址與訂房連結待補"
  },
  {
    date: "12.16", tab: "12/16 · 回台", weekday: "WED · DAY 07", theme: "平安回家",
    image: "assets/images/airport.jpg", imageAlt: "飛機與天空",
    events: [
      { time: "08:30 — 11:30", title: "✈️ 東京 → 台北", description: "NRT 第三航廈 → TPE 第一航廈。",
        links: [{ label: "成田機場官網", url: "https://www.narita-airport.jp/" }] }
    ],
    info: "<strong>回家提醒</strong><br>確認退房、行李、護照及登機資訊。"
  }
];
