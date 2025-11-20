const R = async (n) => ({
  set: async (c, m) => {
    console.log(`--hydrator [${c.data.curr.type}]`);
    const p = {
      r: "",
      style: "",
      evt: {
        change: () => {
          m?.change({ _$p: c });
        }
      }
    };
    return (async (i) => {
      const o = document.getElementById(n.f.name("input-text")), d = document.getElementById(n.f.name("output-text")), E = document.getElementById(n.f.name("encode-btn")), v = document.getElementById(n.f.name("decode-btn")), x = document.getElementById(n.f.name("clear-input")), r = document.getElementById(n.f.name("copy-output")), B = document.getElementById(n.f.name("theme-toggle")), I = document.getElementById(n.f.name("input-length")), C = document.getElementById(n.f.name("output-length")), s = document.getElementById(n.f.name("status")), L = document.getElementById(n.f.name("root")), b = (e) => {
        try {
          return btoa(unescape(encodeURIComponent(e)));
        } catch {
          throw new Error("Failed to encode string");
        }
      }, k = (e) => {
        try {
          return decodeURIComponent(escape(atob(e)));
        } catch {
          throw new Error("Invalid Base64 string");
        }
      }, g = (e) => {
        try {
          return btoa(atob(e)) === e;
        } catch {
          return !1;
        }
      }, u = () => {
        const e = o.value.length, t = d.value.length;
        I.textContent = e.toString(), C.textContent = t.toString();
      }, a = (e, t = !1) => {
        s.textContent = e, s.className = `text-2xl font-bold ${t ? "text-red-500" : c.data.curr.data.theme === "dark" ? "text-purple-400" : "text-purple-600"}`, !t && e !== "Ready" && setTimeout(() => {
          s.textContent = "Ready", s.className = `text-2xl font-bold ${c.data.curr.data.theme === "dark" ? "text-purple-400" : "text-purple-600"}`;
        }, 3e3);
      }, y = () => {
        try {
          const e = o.value.trim();
          if (!e) {
            a("Please enter text to encode", !0);
            return;
          }
          const t = b(e);
          d.value = t, a("Encoded successfully!"), u();
        } catch {
          a("Encoding failed", !0);
        }
      }, h = () => {
        try {
          const e = o.value.trim();
          if (!e) {
            a("Please enter Base64 to decode", !0);
            return;
          }
          if (!g(e)) {
            a("Invalid Base64 string", !0);
            return;
          }
          const t = k(e);
          d.value = t, a("Decoded successfully!"), u();
        } catch {
          a("Decoding failed", !0);
        }
      }, f = () => {
        o.value = "", d.value = "", a("Cleared"), u(), o.focus();
      }, T = async () => {
        try {
          if (!d.value) {
            a("No output to copy", !0);
            return;
          }
          await navigator.clipboard.writeText(d.value), a("Copied to clipboard!");
          const e = r.textContent;
          r.textContent = "Copied!", r.classList.remove("bg-green-500"), r.classList.add("bg-green-600"), setTimeout(() => {
            r.textContent = e, r.classList.remove("bg-green-600"), r.classList.add("bg-green-500");
          }, 2e3);
        } catch {
          a("Copy failed", !0);
        }
      }, w = () => {
        const e = c.data.curr.data.theme, t = ((l) => l == "dark" ? "light" : l == "light" ? "dark" : l)(e);
        (async () => {
          try {
            await n.f.set_theme({ name: `${t}`, el_id: `${L.id}` }), c.data.curr.data.theme = t;
          } catch {
          }
        })();
      }, D = () => {
        u();
        const e = o.value.trim();
        if (!e) {
          d.value = "", u();
          return;
        }
        g(e) && e.length > 10 && a('Base64 detected - Click "Decode"');
      }, K = (e) => {
        (e.ctrlKey || e.metaKey) && e.key === "Enter" && (e.shiftKey ? h() : y(), e.preventDefault()), (e.ctrlKey || e.metaKey) && e.key === "l" && !e.shiftKey && (f(), e.preventDefault());
      };
      E.addEventListener("click", y), v.addEventListener("click", h), x.addEventListener("click", f), r.addEventListener("click", T), B.addEventListener("click", w), o.addEventListener("input", D), document.addEventListener("keydown", K), u(), o.focus(), m?.add({ $d: c.data.curr.data, el: i });
    })(document.documentElement), p;
  }
});
export {
  R as hydrator,
  R as index
};
