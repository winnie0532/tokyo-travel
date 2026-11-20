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

        imageLink: "https://maps.app.goo.gl/HyLKT7bGhoGxWRq48",

      }
    ],

    hotel: "N+HOTEL",
    hotelNote: "東京住宿",
    hotelMapUrl: "https://maps.app.goo.gl/cTn4tRjMTTB4pNEAA"
  },

  {
    date: "12.11", 
    tab: "12/11 · 東京", 
    weekday: "FRI · DAY 02", 
    theme: "東京 → 河口湖",
    image: "assets/images/tokyo.jpg", 
    imageAlt: "東京城市風景",
    events: [
      {
        time: "早上",
        title: "🏃 皇居晨跑",
        description: "11:00 Check-out--行李寄放飯店",
        links: [
          { label: "九段下", url: "https://maps.app.goo.gl/Pgh1b6grBJquEEWHA" },
          { label: "買餅餅", url: "https://maps.app.goo.gl/HyLKT7bGhoGxWRq48" }
        ]
      },
      {
        time: "12:00",
        title: "🥩 牛たんの檸檬 有楽町店",
        description: "Lunch｜牛舌 : P",
        links: [
          { label: "牛たんの檸檬", url: "https://www.google.com/maps/search/?api=1&query=牛たんの檸檬+有楽町店" }
        ]
      },
      {
        time: "下午",
        title: "🎭 ROCKZA 劇場",
        description: "表演時間 14:00 — 15:40",
        links: [
          { label: "ROCKZA", url: "https://www.google.com/maps/search/?api=1&query=ROCKZA+劇場+東京" },
          { label: "N+HOTEL 領行李", url: "https://maps.app.goo.gl/cTn4tRjMTTB4pNEAA" }
        ]
      },
      {
        time: "Dinner",
        title: "Shinjuku Station",
        description: "Alpen TOKYO 領物資\n(1383)🚆新宿 → 河口湖站 19:45 - 21:40",
        links: [
          { label: "新宿(南口)", url: "https://maps.app.goo.gl/AqHEaeF1pevGTu7M7" },
          { label: "Alpen TOKYO", url: "https://maps.app.goo.gl/3gM6JdpGnwZCyFWt5" },
          { label: "🍣 Sushi", url: "https://maps.app.goo.gl/t3gXxpFhaxzkt3YU8" },
          { label: "Jack Ticket", url: "assets/jack-ticket.pdf" },
          { label: "車票", url: "assets/images/Shinjuku-MtFuji.png" }
        ]
      }
    ],
    hotel: "Hospitable inn NIIYA Mt.Fuji",
    hotelNote: "河口湖住宿",
    hotelMapUrl: "https://maps.app.goo.gl/z3LixTwjrnkqbHKT6"
  },

  {
    date: "12.12", 
    tab: "12/12 · 河口湖", 
    weekday: "SAT · DAY 03", 
    theme: "河口湖・山中湖",
    image: "assets/images/fuji.jpg", 
    imageAlt: "富士山景色",
    events: [
      { time: "9:30—", 
        title: "🗻 河口湖・山中湖", 
        description: "",
        images: [
          {
            src: "assets/images/fuji_coffee.jpg",
            alt: "THE PARK",
            url: "https://maps.app.goo.gl/Ejk3De1HF6HL6ybM8"
          },
          {
            src: "assets/images/fuji_park.jpg",
            alt: "長池親水公園",
            url: "https://maps.app.goo.gl/YbWbDd6HfstJ7pEZA"
          }
        ]
      },
      { time: "12:00 —", 
        title: "Fuji Marathon 加購商品", 
        description: "攤位時間 : 12:00—19:00" 
      }
    ],
    info: "<strong>Fuji Marathon 攤位時間</strong><br>12/12（六）12:00～19:00<br>12/13（日）07:00～16:00",
    hotel: "Hospitable inn NIIYA Mt.Fuji",
    hotelNote: "河口湖住宿",
    hotelMapUrl: "https://maps.app.goo.gl/z3LixTwjrnkqbHKT6"
  },


  {
    date: "12.13", 
    tab: "12/13 · 馬拉松", 
    weekday: "SUN · DAY 04", 
    theme: "RACE DAY",
    image: "assets/images/fuji.jpg", 
    imageAlt: "富士山與湖景",
    events: [
      {
        time: "07:30-09:00",
        title: "報到｜領物資・寄放行李",
        description: "Fujikyu Travel｜領物資\n大型行李寄放帳篷｜收費500日圓",
        links: [
          { label: "Fujikyu Travel", url: "https://maps.app.goo.gl/WfPUw3eGuMHxGDx28" },
          { label: "船津濱停車場", url: "https://maps.app.goo.gl/eG62wpofyHeFf2EEA" }
        ]
      },
      {
        time: "10:30",
        title: "🏃‍♀️ Fuji Marathon",
        description: "河口湖・山中湖｜完賽後記得領物品!",
        links: [
          { label: "Mt. International Marathon", url: "https://zh-tw.mtfujimarathon.com/kawaguchiko/?utm_source=chatgpt.com" },
          { label: "運動X生活", url: "assets/運動生活.pdf" }
        ]
      },
      {
        title: "🚌 河口湖・御殿場",
        description: "接駁前往御殿場飯店",
        links: [
          { label: "大石公園", url: "https://maps.app.goo.gl/GWFsTEvc4hpjcrcV8" },
          { label: "BRAND NEW DAY", url: "https://maps.app.goo.gl/8wzEaSibZLsaJVK79" }
        ]
      },
      {
        time: "Dinner",
        title: "御殿場",
        description: "LINE 預約餐廳｜靜岡炭烤漢堡排 さわやか",
        links: [
          { label: "🍖靜岡炭烤漢堡排 さわやか", url: "https://maps.app.goo.gl/rcMD8BmBaWREDww3A" },
          { label: "LINE", url: "https://miniapp.line.me/2006055787-m6P6OJ38/ticketing/3273/" },
          { label: "居酒屋", url: "https://maps.app.goo.gl/6HZmCCzG9xrqwU1a8" }
        ]
      }
    ],
    hotel: "Hotel Route-Inn Gotemba Eki-Minami",
    hotelNote: "御殿場住宿",
    hotelMapUrl: "https://maps.app.goo.gl/BkDXQLs5g8bgdUx96"
  },

  
  {
    date: "12.14",
    tab: "12/14 · 箱根",
    weekday: "MON · DAY 05",
    theme: "箱根慢旅行",
    image: "assets/images/hakone.jpg",
    imageAlt: "箱根風景",

    events: [
      {
        time: "09:05",
        title: "御殿場站 → 箱根神社",
        description: "(0920)御殿場站 → (1020)箱根小田急山のホテル",
        links: [
          { label: "御殿場站（箱根乙女站3號出口）", url: "https://maps.app.goo.gl/MRoiesudPhHD6zUa7" },
          { label: "小田急高速巴士", url: "assets/小田急高速巴士.pdf" }
        ]
      },
      {
        title: "♨️元箱根",
        description: "和平鳥居·箱根神社·成川美術館",
        images: [
          {
            src: "assets/images/hakone-shrine.jpg",
            alt: "箱根神社·和平鳥居",
            url: "https://maps.app.goo.gl/QDZJecRs7xTnLX7Z8"
          },
          {
            src: "assets/images/hakone-museum.jpg",
            alt: "成川美術館",
            url: "https://maps.app.goo.gl/7duTY3uxzhqVx7k99"
          }
        ]
      }
    ],

    hotel: "Toki resort Hakone Bettei",
    hotelNote: "箱根住宿",
    hotelMapUrl: "https://maps.app.goo.gl/7Vt5SHtFNdo4ra1C6"
  },

  {
    date: "12.15",
    tab: "12/15 · 箱根",
    weekday: "TUE · DAY 06",
    theme: "箱根湯本・東京",
    image: "assets/images/hakone.jpg",
    imageAlt: "橫濱城市風景",

    events: [
      {
        time: "Lunch",
        title: "🍜 箱根湯本",
        description: "溫泉街散步、午餐",
        links: [
          { label: "搜尋附近午餐", url: "" }
        ]
      },
      {
        title: "🗼回東京",
        description: "逛街、晚餐",
        links: [
          { label: "東京馳", url: "" }
        ]
      },
      {
        title: "🚆 前往機場飯店",
        description: "第二航廈 1 樓・25 號巴士站\n20:50、21:10、21:30、21:50、22:10",
        links: [
          {
            label: "成田東武飯店免費接駁車",
            url: "https://www.jalan.net/yad312928/qa/0005408167.html"
          }
        ]
      }
    ],

    hotel: "成田東武機場飯店",
    hotelNote: "成田機場住宿",
    hotelMapUrl: "https://maps.app.goo.gl/grtRizaUDtLrJ6ko9"
  },

  {
    date: "12.16", 
    tab: "12/16 · 回台", 
    weekday: "WED · DAY 07", 
    theme: "平安回家",
    image: "assets/images/tokyo.jpg", 
    imageAlt: "飛機與天空",
    events: [
      { time: "8:30", 
        title: "✈️ 東京 → 台北", 
        description: "NRT 第三航廈 → TPE 第一航廈",
        links: [{ label: "成田機場官網", url: "https://www.narita-airport.jp/" }] }
    ],
    info: "<strong>機場接駁往第二航廈 | 6:30、7:00</strong><br> "
  }
];
