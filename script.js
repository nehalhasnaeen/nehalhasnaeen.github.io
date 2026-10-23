(function () {
  var root = document.documentElement;
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Theme toggle
  document.querySelector('.theme-btn').addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  var links = document.getElementById('nav-links');


  // Active nav link on scroll
  var navAs = links.querySelectorAll('a');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) navAs.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id); });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('main section').forEach(function (s) { obs.observe(s); });


  // Reveal email as a link (light spam protection)
  var em = document.querySelector('.email');
  if (em) {
    var addr = em.dataset.u + '@' + em.dataset.d;
    em.innerHTML = '<a href="mailto:' + addr + '">' + addr + '</a>';
  }
})();
