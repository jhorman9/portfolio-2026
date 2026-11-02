function imgToSVG(): void {
  document.querySelectorAll<HTMLImageElement>("img.sm_svg").forEach(async (image) => {
    const src = image.getAttribute("src");
    if (!src) return;

    try {
      const response = await fetch(src);
      if (!response.ok) return;

      const svg = new DOMParser().parseFromString(await response.text(), "image/svg+xml").querySelector("svg");
      if (!svg) return;

      if (image.id) svg.id = image.id;
      if (image.className) svg.setAttribute("class", `${image.className} replaced-svg`);
      svg.removeAttribute("xmlns:a");
      image.replaceWith(svg);
    } catch {
      // Keep the original image when its SVG cannot be loaded.
    }
  });
}

function preloader(): void {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  const loader = document.getElementById("preloader");

  if (loader && !isMobile) {
    window.setTimeout(() => loader.classList.add("preloaded"), 800);
    window.setTimeout(() => loader.remove(), 2000);
  } else {
    loader?.remove();
  }

  window.setTimeout(() => document.body.classList.add("opened"), 3000);
  window.setTimeout(() => document.querySelector(".waxon_tm_preloader")?.classList.add("loaded"), 1000);
}

function dataImage(): void {
  document.querySelectorAll<HTMLElement>("[data-bg-img]").forEach((element) => {
    const src = element.dataset.bgImg;
    if (src) element.style.backgroundImage = `url(${src})`;
  });
}

async function animation(): Promise<void> {
  const { WOW } = await import("wowjs");
  new WOW().init();
}

function stickyNav(): void {
  window.addEventListener("scroll", () => {
    const opened = window.scrollY > 100;
    document.querySelectorAll(".nicolas_sm_header").forEach((header) => {
      header.classList.toggle("opened", opened);
    });
  });
}

function customCursor(): void {
  const inner = document.querySelector<HTMLElement>(".cursor-inner");
  const outer = document.querySelector<HTMLElement>(".cursor-outer");
  if (!inner || !outer || !document.querySelector(".mouse-cursor")) return;

  const toggleHover = (hovered: boolean) => {
    inner.classList.toggle("cursor-hover", hovered);
    outer.classList.toggle("cursor-hover", hovered);
  };

  document.querySelectorAll("a, .cursor-pointer, .hamburger, .kura_tm_topbar").forEach((element) => {
    element.addEventListener("mouseenter", () => toggleHover(true));
    element.addEventListener("mouseleave", () => toggleHover(false));
  });

  window.addEventListener("mousemove", (event) => {
    const position = `translate(${event.clientX}px, ${event.clientY}px)`;
    inner.style.transform = position;
    outer.style.transform = position;
  });
  inner.style.visibility = "visible";
  outer.style.visibility = "visible";
}

function interactiveImage(): void {
  const wrapper = document.querySelector<HTMLElement>(".nicolas_sm_interactive_list");
  const inner = wrapper?.querySelector<HTMLElement>(".interactive_list_inner");
  const box = document.querySelector<HTMLElement>(".movingbox");
  if (!wrapper || !inner || !box) return;

  box.style.right = `${wrapper.getBoundingClientRect().left}px`;
  wrapper.querySelectorAll("li").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const src = item.querySelector<HTMLImageElement>(".interactive_image")?.getAttribute("src");
      if (src) box.style.backgroundImage = `url(${src})`;
    });
  });

  inner.addEventListener("mouseenter", () => inner.classList.add("active"));
  inner.addEventListener("mouseleave", () => inner.classList.remove("active"));
  document.addEventListener("mousemove", (event) => {
    box.style.top = `${event.clientY}px`;
  });
}

function activeMenuBySection(): void {
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll<HTMLElement>(".nicolas_sm_section").forEach((section) => {
      if (window.scrollY >= section.offsetTop - section.clientHeight / 3) {
        current = section.id;
      }
    });

    document.querySelectorAll(".anchor_nav li").forEach((item) => {
      item.classList.toggle("current", item.querySelector("a")?.getAttribute("href") === `#${current}`);
    });
  });
}

export const nicolasUtility = {
  imgToSVG,
  preloader,
  dataImage,
  animation,
  stickyNav,
  customCursor,
  interactiveImage,
  activeMenuBySection,
};
