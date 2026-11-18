const tabsContainer = document.querySelector("#day-tabs");
const itineraryContainer = document.querySelector("#itinerary");

function createLink(link) {
  const anchor = document.createElement("a");
  anchor.className = "link-chip";
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.textContent = `${link.label} ↗`;
  return anchor;
}



function renderEvent(event) {
  const article = document.createElement("article");
  article.className = "event";

  const time = document.createElement("div");
  time.className = "event-time";
  time.textContent = event.time || "";

  const title = document.createElement("h3");
  title.textContent = event.title || "";

  article.append(time, title);

  if (event.description) {
    const description = document.createElement("p");
    description.innerHTML = event.description.replace(/\n/g, "<br>");
    article.append(description);
  }

  // 單張景點圖片
  if (event.image) {
    const image = document.createElement("img");
    image.src = event.image;
    image.alt = event.title || "行程圖片";
    image.className = "event-image";
    image.loading = "lazy";

    image.onerror = () => {
      image.style.display = "none";
    };

    if (event.imageLink) {
      const imageLink = document.createElement("a");
      imageLink.href = event.imageLink;
      imageLink.target = "_blank";
      imageLink.rel = "noopener noreferrer";
      imageLink.append(image);
      article.append(imageLink);
    } else {
      article.append(image);
    }
  }

  // 多張景點圖片
  if (event.images?.length) {
    const imageGallery = document.createElement("div");
    imageGallery.className = "event-image-gallery";

    event.images.forEach(item => {
      const image = document.createElement("img");
      image.src = item.src;
      image.alt = item.alt || "景點圖片";
      image.className = "event-image";
      image.loading = "lazy";

      image.onerror = () => {
        image.style.display = "none";
      };

      const imageLink = document.createElement("a");
      imageLink.href = item.url;
      imageLink.target = "_blank";
      imageLink.rel = "noopener noreferrer";
      imageLink.append(image);

      imageGallery.append(imageLink);
    });

    article.append(imageGallery);
  }

  // 行程連結
  if (event.links?.length) {
    const links = document.createElement("div");
    links.className = "event-links";

    event.links.forEach(link => {
      links.append(createLink(link));
    });

    article.append(links);
  }

  return article;
}


function renderDay(day, index) {
  const section = document.createElement("section");
  section.className = `day-page${index === 0 ? " active" : ""}`;
  section.dataset.page = index;

  const head = document.createElement("div");
  head.className = "day-head";
  head.innerHTML = `
    <div><span class="day-date">${day.date}</span><span class="day-name">${day.weekday}</span></div>
    <span class="day-theme">${day.theme}</span>
  `;

  const cover = document.createElement("div");
  cover.className = "day-cover";
  if (day.image) {
    const img = document.createElement("img");
    img.src = day.image;
    img.alt = day.imageAlt || "";
    img.loading = "lazy";
    img.onerror = () => { img.style.display = "none"; };
    cover.append(img);
  }

  const title = document.createElement("h2");
  title.className = "section-title";
  title.textContent = "今日行程　/　ITINERARY";

  const timeline = document.createElement("div");
  timeline.className = "timeline";
  (day.events || []).forEach(event => timeline.append(renderEvent(event)));

  section.append(head, cover, title, timeline);

  if (day.info) {
    const info = document.createElement("aside");
    info.className = "info-box";
    info.innerHTML = day.info;
    section.append(info);
  }

  if (day.hotel) {
    const stayTitle = document.createElement("h2");
    stayTitle.className = "section-title";
    stayTitle.textContent = "今晚住宿　/　STAY";

    
    const hotel = document.createElement("div");
    hotel.className = "hotel-card";

    // 房子圖示
    const hotelIcon = document.createElement("div");
    hotelIcon.className = "hotel-icon";
    hotelIcon.textContent = "🏡";

    // 如果有 Google Maps 連結，房子圖示就可以點擊
    if (day.hotelMapUrl) {
      const mapLink = document.createElement("a");
      mapLink.href = day.hotelMapUrl;
      mapLink.target = "_blank";
      mapLink.rel = "noopener noreferrer";
      mapLink.className = "hotel-map-link";
      mapLink.append(hotelIcon);

      hotel.append(mapLink);
    } else {
      hotel.append(hotelIcon);
    }

    // 飯店名稱及說明
    const hotelInfo = document.createElement("div");

    const hotelName = document.createElement("b");
    hotelName.textContent = day.hotel;

    const hotelNote = document.createElement("small");
    hotelNote.textContent = day.hotelNote || "";

    hotelInfo.append(hotelName, hotelNote);
    hotel.append(hotelInfo);


    if (day.hotelLinks?.length) {
      const links = document.createElement("div");
      links.className = "event-links";

      day.hotelLinks.forEach(link => {
        links.append(createLink(link));
      });

      hotel.querySelector("div:last-child").append(links);
    }

    section.append(stayTitle, hotel);
  }

  return section;
}

function selectDay(index) {
  const tabs = [...tabsContainer.querySelectorAll(".tab")];
  const pages = [...itineraryContainer.querySelectorAll(".day-page")];

  tabs.forEach((tab, i) => {
    const active = i === index;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  pages.forEach((page, i) => page.classList.toggle("active", i === index));

  // 切換日期後，將內容帶回頁面上方，方便手機閱讀。
  window.scrollTo({ top: document.querySelector(".tabs-wrap").offsetTop, behavior: "smooth" });
}

function initItinerary() {
  itinerary.forEach((day, index) => {
    const tab = document.createElement("button");
    tab.className = `tab${index === 0 ? " active" : ""}`;
    tab.type = "button";
    tab.textContent = day.tab;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", String(index === 0));
    tab.addEventListener("click", () => selectDay(index));
    tabsContainer.append(tab);

    itineraryContainer.append(renderDay(day, index));
  });
}

initItinerary();
