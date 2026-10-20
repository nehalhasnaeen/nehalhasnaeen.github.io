(function () {
  var pages = ["home", "research", "publications", "cv"];
  var links = document.querySelectorAll(".nav-links a");
  var navList = document.getElementById("nav-links");
  var menuBtn = document.querySelector(".menu-btn");

  function show(name) {
    if (pages.indexOf(name) === -1) name = "home";
    document.querySelectorAll(".page").forEach(function (s) { s.hidden = s.dataset.page !== name; });
    links.forEach(function (a) {
      var on = a.dataset.page === name;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    navList.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  window.addEventListener("hashchange", function () {
    show(location.hash.slice(1));
    var main = document.getElementById("main");
    if (window.scrollY > main.offsetTop) window.scrollTo({ top: main.offsetTop - 90 });
  });
  show(location.hash.slice(1));

  menuBtn.addEventListener("click", function () {
    var open = navList.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  document.querySelector(".theme-btn").addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  document.querySelectorAll(".filter").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.dataset.filter;
      document.querySelectorAll(".filter").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      document.querySelectorAll(".pubs li").forEach(function (li) {
        li.hidden = f !== "all" && li.dataset.type !== f;
      });
    });
  });

  document.getElementById("yr").textContent = new Date().getFullYear();
})();
