(function () {
  "use strict";
  var cfg = window.SITE_CONFIG || {};

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(id) { return document.getElementById(id); }

  // open.spotify.com/{track|album|playlist}/ID → embed URL
  function spotifyEmbed(url) {
    var m = String(url || "").match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|album|playlist|episode|artist)\/([A-Za-z0-9]+)/);
    return m ? "https://open.spotify.com/embed/" + m[1] + "/" + m[2] + "?utm_source=generator&theme=0" : null;
  }

  function wave(seed) {
    var bars = "", n = 48;
    for (var i = 0; i < n; i++) {
      var h = 18 + Math.abs(Math.sin(i * 0.55 + seed) * Math.cos(i * 0.21 + seed * 2)) * 78;
      bars += '<rect x="' + (i * 6 + 1) + '" y="' + (50 - h / 2) + '" width="3" height="' + h + '" rx="1.5"/>';
    }
    return '<svg class="work__wave" viewBox="0 0 288 100" fill="#efe7da" aria-hidden="true">' + bars + "</svg>";
  }

  function ext(url) { return url ? ' href="' + esc(url) + '" target="_blank" rel="noopener"' : ""; }

  /* ---- Accolades ---- */
  if ($("accolades")) {
    $("accolades").innerHTML = (cfg.accolades || []).map(function (a) {
      return '<li><span class="accolade__fig">' + esc(a.figure) + '</span><span class="accolade__label">' + esc(a.label) + "</span></li>";
    }).join("");
  }

  /* ---- Selected work ---- */
  if ($("work-grid")) {
    $("work-grid").innerHTML = (cfg.work || []).map(function (w, i) {
      var embed = spotifyEmbed(w.spotify);
      var media = embed
        ? '<div class="work__embed"><iframe src="' + esc(embed) + '" height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="' + esc(w.title) + ' on Spotify"></iframe></div>'
        : '<div class="work__art work__art--' + ((i % 4) + 1) + '">' + wave(i + 1) + "</div>";
      var tags = (w.tags || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
      return '<article class="work reveal">' + media +
        '<div class="work__meta"><div><h3 class="work__title">' + esc(w.title) + '</h3><p class="work__artist">' + esc(w.artist) + "</p></div>" +
        '<span class="work__role">' + esc(w.role) + "</span></div>" +
        (w.story ? '<p class="work__story">' + esc(w.story) + "</p>" : "") +
        (tags ? '<ul class="tags">' + tags + "</ul>" : "") +
        "</article>";
    }).join("");
  }

  /* ---- Press ---- */
  if ($("press-list")) {
    $("press-list").innerHTML = (cfg.press || []).map(function (p) {
      var tag = p.url ? "a" : "div";
      return "<" + tag + ' class="press__item reveal"' + ext(p.url) + ">" +
        '<div><span class="press__outlet">' + esc(p.outlet) + '</span><span class="press__date">' + esc(p.date) + "</span></div>" +
        '<div><p class="press__title">' + esc(p.title) + "</p>" + (p.url ? '<span class="press__more">Read / listen →</span>' : "") + "</div>" +
        "</" + tag + ">";
    }).join("");
  }

  /* ---- Discography ---- */
  var d = cfg.discography || {};
  if ($("platforms")) {
    var plats = d.platforms || {};
    $("platforms").innerHTML = Object.keys(plats).map(function (k) {
      return "<a" + ext(plats[k]) + ">" + esc(k) + " ↗</a>";
    }).join("");
  }
  var playlist = spotifyEmbed(d.playlist);
  if ($("disco-playlist")) {
    if (playlist) {
      $("disco-playlist").innerHTML = '<iframe src="' + esc(playlist) + '" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Mara Musica productions playlist"></iframe>';
    } else {
      $("disco-playlist").remove();
      document.querySelector(".disco").classList.add("disco--no-playlist");
    }
  }
  if ($("disco-list")) {
    $("disco-list").innerHTML = (d.releases || []).map(function (r) {
      var tag = r.url ? "a" : "div";
      return "<li><" + tag + ' class="disco__row"' + ext(r.url) + ">" +
        '<span class="disco__year">' + esc(r.year) + "</span>" +
        '<span><span class="disco__title">' + esc(r.title) + '</span><br><span class="disco__artist">' + esc(r.artist) + "</span></span>" +
        '<span class="disco__role">' + esc(r.role) + (r.url ? '<span class="disco__arrow">↗</span>' : "") + "</span>" +
        "</" + tag + "></li>";
    }).join("");
  }

  /* ---- Testimonials (hidden until real ones are added) ---- */
  var quotes = cfg.testimonials || [];
  if (quotes.length) {
    $("words").hidden = false;
    $("quotes").innerHTML = quotes.map(function (q) {
      return '<figure class="quote reveal"><p>“' + esc(q.quote) + '”</p><cite>' + esc(q.name) +
        (q.detail ? "<span>" + esc(q.detail) + "</span>" : "") + "</cite></figure>";
    }).join("");
  }

  /* ---- Booking ---- */
  var email = cfg.email || "";
  var emailLink = $("email-link");
  if (emailLink && email) { emailLink.href = "mailto:" + email; emailLink.textContent = email; }

  var box = $("booking-embed");
  if (box) {
    if (cfg.bookingUrl) {
      box.innerHTML = '<iframe src="' + esc(cfg.bookingUrl) + '" title="Book a consult call with Mara Musica" loading="lazy"></iframe>';
    } else {
      box.classList.add("book__embed--fallback");
      box.innerHTML =
        '<div class="book__fallback"><div><h3>Let\'s find a time.</h3>' +
        "<p>Drop me a line with a bit about what you're working on and I'll send over some times for a video call.</p>" +
        '<a class="btn" href="mailto:' + esc(email) + '?subject=Consult%20call">Email James</a></div></div>';
    }
  }

  /* ---- Footer ---- */
  if ($("socials") && cfg.socials) {
    $("socials").innerHTML = Object.keys(cfg.socials).map(function (k) {
      return "<li><a" + ext(cfg.socials[k]) + ">" + esc(k) + "</a></li>";
    }).join("");
  }
  $("year").textContent = new Date().getFullYear();

  /* ---- Nav border on scroll ---- */
  var nav = document.querySelector(".nav");
  function onScroll() { nav.classList.toggle("is-scrolled", window.scrollY > 10); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Reveal on scroll ---- */
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
