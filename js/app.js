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
    description.textContent = event.description;
    article.append(description);
  }

  if (event.links?.length) {
    const links = document.createElement("div");
    links.className = "event-links";
    event.links.forEach(link => links.append(createLink(link)));
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
    hotel.innerHTML = `
      <div class="hotel-icon" aria-hidden="true">🏡</div>
      <div><b></b><small></small></div>
    `;
    hotel.querySelector("b").textContent = day.hotel;
    hotel.querySelector("small").textContent = day.hotelNote || "";

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
