/* hireframe fx: reveal on scroll, emphasis triggers and flowing lines.
   No dependencies. Load with <script src=".../fx.js" defer>.

   Markup:
     data-reveal                  fade and rise when it enters the view
     data-reveal="fade|scale"     variants
     data-stagger                 children appear one after another
     .fx-mark .fx-line .fx-ring   emphasis, drawn when it enters the view
     .fx-rule                     a rule that draws across
     data-thread="weave|left|right"  a line that flows down the element as
                                  you scroll, behind the content, and ends
                                  in the gold dot
*/
(function () {
  "use strict";
  var root = document.documentElement;
  if (!("IntersectionObserver" in window)) return; // old browsers: static page
  root.classList.add("fx-on");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---- reveal and emphasis ------------------------------------------- */
  var sel = "[data-reveal],[data-stagger],.fx-mark,.fx-line,.fx-ring,.fx-rule";
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

  function arm(scope) {
    scope.querySelectorAll("[data-stagger]").forEach(function (p) {
      Array.prototype.forEach.call(p.children, function (c, i) { c.style.setProperty("--i", i); });
    });
    scope.querySelectorAll(sel).forEach(function (el) {
      if (reduce.matches) el.classList.add("is-in"); else io.observe(el);
    });
  }
  arm(document);

  /* ---- cascade the page's existing .rv reveal --------------------------- */
  var seen = [];
  document.querySelectorAll(".rv").forEach(function (el) {
    var p = el.parentElement;
    if (seen.indexOf(p) > -1) return;
    seen.push(p);
    var i = 0;
    Array.prototype.forEach.call(p.children, function (c) {
      if (c.classList.contains("rv")) c.style.setProperty("--i", Math.min(i++, 6));
    });
  });

  /* ---- count-up numbers ---------------------------------------------- */
  // <span data-count>202</span> counts from 0 when seen. Screen readers get
  // the final value from a hidden copy; the moving digits are aria-hidden.
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      var el = e.target, n = el.querySelector(".fx-n"), to = +el.getAttribute("data-to");
      var t0 = null, dur = Math.min(1600, 500 + to * 6);
      function step(t) {
        if (!t0) t0 = t;
        var k = Math.min(1, (t - t0) / dur);
        k = 1 - Math.pow(1 - k, 3);
        n.textContent = Math.round(to * k);
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(function (el) {
    var v = el.textContent.trim();
    if (!/^\d+$/.test(v) || reduce.matches) return;
    el.setAttribute("data-to", v);
    el.innerHTML = '<span class="fx-sr">' + v + '</span><span class="fx-n" aria-hidden="true">0</span>';
    cio.observe(el);
  });

  /* ---- flowing lines -------------------------------------------------- */
  var NS = "http://www.w3.org/2000/svg";
  var threads = [];

  function buildPath(w, h, mode) {
    // A calm line that swings across the element every ~460px.
    // weave: crosses the whole width, passing behind cards and showing in the gaps.
    // left / right: stays in the outer gutter.
    var step = Math.max(320, Math.min(520, h / 3));
    var n = Math.max(2, Math.round(h / step));
    var xs;
    if (mode === "left") xs = [w * 0.03, w * 0.09];
    else if (mode === "right") xs = [w * 0.97, w * 0.91];
    else xs = [w * 0.1, w * 0.9];
    var y0 = 0, x0 = xs[0];
    var d = "M" + x0.toFixed(1) + " " + y0;
    for (var i = 1; i <= n; i++) {
      var y = (h * i) / n;
      var x = i === n ? w * (mode === "right" ? 0.94 : mode === "left" ? 0.06 : 0.5) : xs[i % 2];
      var cy = (y - y0) * 0.55;
      d += " C" + x0.toFixed(1) + " " + (y0 + cy).toFixed(1) + " " + x.toFixed(1) + " " + (y - cy).toFixed(1) + " " + x.toFixed(1) + " " + y.toFixed(1);
      x0 = x; y0 = y;
    }
    return { d: d, end: [x0, y0] };
  }

  function makeThread(el) {
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "fx-thread");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var path = document.createElementNS(NS, "path");
    var head = document.createElementNS(NS, "circle");
    head.setAttribute("class", "fx-head"); head.setAttribute("r", "4");
    var end = document.createElementNS(NS, "circle");
    end.setAttribute("class", "fx-end"); end.setAttribute("r", "7");
    svg.appendChild(path); svg.appendChild(end); svg.appendChild(head);
    el.insertBefore(svg, el.firstChild);
    var t = { el: el, svg: svg, path: path, head: head, end: end, len: 0, mode: el.getAttribute("data-thread") || "weave" };
    layout(t);
    threads.push(t);
  }

  function layout(t) {
    var w = t.el.clientWidth, h = t.el.clientHeight;
    if (!w || !h) return;
    t.svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    var p = buildPath(w, h, t.mode);
    t.path.setAttribute("d", p.d);
    t.end.setAttribute("cx", p.end[0]); t.end.setAttribute("cy", p.end[1] - 8);
    t.len = t.path.getTotalLength();
    t.path.style.strokeDasharray = t.len + " " + t.len;
    draw(t);
  }

  function draw(t) {
    if (!t.len) return;
    var r = t.el.getBoundingClientRect();
    var vh = window.innerHeight || root.clientHeight;
    var p = reduce.matches ? 1 : (vh * 0.72 - r.top) / r.height;
    p = Math.max(0, Math.min(1, p));
    t.path.style.strokeDashoffset = (t.len * (1 - p)).toFixed(1);
    if (p > 0 && p < 1) {
      var pt = t.path.getPointAtLength(t.len * p);
      t.head.setAttribute("cx", pt.x); t.head.setAttribute("cy", pt.y);
    }
    t.svg.classList.toggle("is-live", p > 0.01 && p < 0.985);
    t.svg.classList.toggle("is-done", p >= 0.985);
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { threads.forEach(draw); ticking = false; });
  }

  document.querySelectorAll("[data-thread]").forEach(makeThread);
  if (threads.length) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () { threads.forEach(layout); }, { passive: true });
    if ("ResizeObserver" in window) {
      var ro = new ResizeObserver(function () { threads.forEach(layout); });
      threads.forEach(function (t) { ro.observe(t.el); });
    }
    // images loading late change heights
    window.addEventListener("load", function () { threads.forEach(layout); });
  }

  reduce.addEventListener && reduce.addEventListener("change", function () {
    document.querySelectorAll(sel).forEach(function (el) { el.classList.add("is-in"); });
    threads.forEach(draw);
  });
})();
