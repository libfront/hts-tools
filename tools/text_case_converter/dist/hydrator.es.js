const A = async (c) => ({
  set: async (i, g) => {
    console.log(`--hydrator [${i.data.curr.type}]`);
    const d = {
      convertCase: (t, o) => {
        if (!t) return "";
        switch (o) {
          case "UPPERCASE":
            return t.toUpperCase();
          case "lowercase":
            return t.toLowerCase();
          case "Title Case":
            return t.replace(
              /\w\S*/g,
              (e) => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
            );
          case "camelCase":
            return t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (e, s) => s.toUpperCase()).replace(/^[A-Z]/, (e) => e.toLowerCase());
          case "PascalCase":
            return t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (e, s) => s.toUpperCase()).replace(/^[a-z]/, (e) => e.toUpperCase());
          case "snake_case":
            return t.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
          case "kebab-case":
            return t.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          case "Start Case":
            return t.replace(
              /\w\S*/g,
              (e) => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
            );
          case "Sentence case":
            return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
          default:
            return t;
        }
      },
      copyToClipboard: async (t) => {
        try {
          return await navigator.clipboard.writeText(t), !0;
        } catch {
          const e = document.createElement("textarea");
          e.value = t, document.body.appendChild(e), e.select();
          try {
            return document.execCommand("copy"), !0;
          } catch {
            return !1;
          } finally {
            document.body.removeChild(e);
          }
        }
      },
      showNotification: (t, o = !0) => {
        document.querySelectorAll(".custom-notification").forEach((f) => f.remove());
        const s = document.createElement("div");
        s.className = `custom-notification fixed top-4 right-4 p-4 rounded-xl shadow-2xl z-50 transform transition-all duration-300 translate-x-full ${o ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" : "bg-gradient-to-r from-red-500 to-pink-600 text-white"}`, s.innerHTML = `
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                      d="${o ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" : "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path>
                            </svg>
                            <span class="font-semibold">${t}</span>
                        </div>
                    `, document.body.appendChild(s), setTimeout(() => {
          s.classList.remove("translate-x-full");
        }, 10), setTimeout(() => {
          s.classList.add("translate-x-full"), setTimeout(() => {
            document.body.contains(s) && document.body.removeChild(s);
          }, 300);
        }, 3e3);
      }
    }, C = {
      r: "",
      style: "",
      evt: {
        change: () => {
          g?.change({ _$p: i });
        }
      }
    }, h = document.getElementById(c.f.name("root"));
    return (async (t) => {
      const o = document.getElementById(c.f.name("input-text")), e = o, s = document.getElementById(c.f.name("copy-btn")), f = document.getElementById(c.f.name("clear-btn")), y = document.getElementById(c.f.name("theme-toggle")), u = [
        "uppercase",
        "lowercase",
        "title-case",
        "camelcase",
        "pascalcase",
        "snake_case",
        "kebab-case",
        "start-case",
        "sentence-case"
      ].map(
        (a) => document.getElementById(c.f.name(`btn-${a}`))
      ), p = t.querySelectorAll('[data-faq-toggle="true"]'), v = i.data.curr.data.theme || "light";
      document.documentElement.setAttribute("data-theme", v);
      const b = () => {
        const n = (i.data.curr.data.theme || "light") === "dark" ? "light" : "dark";
        (async () => {
          try {
            await c.f.set_theme({ name: n, el_id: h.id }), i.data.curr.data.theme = n, document.documentElement.setAttribute("data-theme", n);
          } catch (r) {
            console.error("Theme toggle failed:", r);
          }
        })();
      }, L = (a) => {
        const n = o.value;
        if (!n.trim()) {
          e.textContent = "Please enter some text to convert.", e.classList.add("text-red-500"), setTimeout(() => e.classList.remove("text-red-500"), 2e3);
          return;
        }
        const r = d.convertCase(n, a);
        e.textContent = r, e.value = r, e.classList.remove("text-gray-500"), u.forEach((l) => l.classList.remove("border-blue-500", "bg-blue-50"));
        const m = u.find(
          (l) => l.id === c.f.name(`btn-${a.replace(/\s+/g, "-").toLowerCase()}`)
        );
        m && m.classList.add("border-blue-500", "bg-blue-50");
      }, w = async () => {
        const a = o.value;
        if (!a) {
          d.showNotification("No text to copy!", !1);
          return;
        }
        await d.copyToClipboard(a) ? (d.showNotification("Text copied to clipboard!"), s.classList.add("from-green-600", "to-emerald-700"), setTimeout(() => {
          s.classList.remove("from-green-600", "to-emerald-700");
        }, 1e3)) : d.showNotification("Failed to copy text", !1);
      }, E = () => {
        o.value = "", e.textContent = "Your converted text will appear here...", e.classList.add("text-gray-500"), o.focus(), u.forEach((a) => a.classList.remove("border-blue-500", "bg-blue-50")), d.showNotification("All fields cleared");
      }, T = (a) => {
        const n = a.nextElementSibling, r = a.querySelector("svg"), m = n.classList.contains("hidden");
        p.forEach((l) => {
          if (l !== a) {
            const x = l.nextElementSibling, k = l.querySelector("svg");
            x.classList.add("hidden"), k.style.transform = "rotate(0deg)";
          }
        }), m ? (n.classList.remove("hidden"), r.style.transform = "rotate(180deg)") : (n.classList.add("hidden"), r.style.transform = "rotate(0deg)");
      };
      y.addEventListener("click", b), s.addEventListener("click", w), f.addEventListener("click", E), u.forEach((a, n) => {
        if (a) {
          const r = [
            "UPPERCASE",
            "lowercase",
            "Title Case",
            "camelCase",
            "PascalCase",
            "snake_case",
            "kebab-case",
            "Start Case",
            "Sentence case"
          ];
          a.addEventListener("click", () => L(r[n]));
        }
      }), p.forEach((a) => {
        a.addEventListener("click", () => T(a));
      }), o.addEventListener("input", function() {
      }), o.addEventListener("focus", function() {
      }), o.addEventListener("blur", function() {
      }), e.classList.add("text-gray-500"), g?.add({ $d: i.data.curr.data, el: t });
    })(h), C;
  }
});
export {
  A as hydrator,
  A as index
};
