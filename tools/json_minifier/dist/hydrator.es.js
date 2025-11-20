const j = async (n) => ({
  set: async (r, i) => {
    console.log(`--hydrator [${r.data.curr.type}]`);
    const E = {
      r: "",
      style: "",
      evt: {
        change: () => {
          i?.change({ _$p: r });
        }
      }
    }, l = document.getElementById(n.f.name("root"));
    return (async (m) => {
      const v = document.getElementById(n.f.name("theme-toggle")), u = document.getElementById(n.f.name("sun-icon")), g = document.getElementById(n.f.name("moon-icon")), s = document.getElementById(n.f.name("json-input")), c = document.getElementById(n.f.name("json-output")), I = document.getElementById(n.f.name("minify-btn")), x = document.getElementById(n.f.name("clear-btn")), a = document.getElementById(n.f.name("copy-btn")), d = document.getElementById(n.f.name("stats")), B = document.getElementById(n.f.name("original-size")), L = document.getElementById(n.f.name("minified-size")), S = document.getElementById(n.f.name("reduction")), C = () => {
        const t = r.data.curr.data.theme || "light";
        h(t);
      }, h = (t) => {
        t === "dark" ? (u.classList.remove("hidden"), g.classList.add("hidden")) : (u.classList.add("hidden"), g.classList.remove("hidden"));
      }, T = () => {
        const e = (r.data.curr.data.theme || "light") === "dark" ? "light" : "dark";
        (async () => {
          try {
            await n.f.set_theme({ name: `${e}`, el_id: `${l.id}` }), r.data.curr.data.theme = e, h(e);
          } catch (o) {
            console.error("Error setting theme:", o);
          }
        })();
      }, O = (t) => {
        try {
          return t.replace(/\s+/g, " ").trim();
        } catch {
          throw new Error("Invalid JSON format");
        }
      }, J = (t) => {
        try {
          return JSON.parse(t);
        } catch {
          throw new Error("Invalid JSON format");
        }
      }, N = (t) => {
        try {
          const e = JSON.parse(t);
          return JSON.stringify(e, null, 2);
        } catch {
          return t;
        }
      }, b = (t, e) => {
        const o = t.length, f = e.length, z = o > 0 ? Math.round((o - f) / o * 100) : 0;
        B.textContent = o.toString(), L.textContent = f.toString(), S.textContent = `${z}%`, o > 0 && d.classList.remove("hidden");
      }, y = () => {
        const t = s.value.trim();
        if (!t) {
          c.textContent = "Please enter some JSON to minify.", d.classList.add("hidden");
          return;
        }
        try {
          J(t);
          const e = O(t);
          c.textContent = e, b(t, e), r.data.curr.data.data = e, i?.change({ _$p: r });
        } catch (e) {
          c.textContent = `Error: ${e.message}`, d.classList.add("hidden");
        }
      }, w = () => {
        s.value = "", c.textContent = "", d.classList.add("hidden"), s.focus();
      }, k = async () => {
        const t = c.textContent;
        if (t)
          try {
            await navigator.clipboard.writeText(t);
            const e = a.textContent;
            a.textContent = "Copied!", a.classList.remove("bg-green-600", "hover:bg-green-700"), a.classList.add("bg-green-500"), setTimeout(() => {
              a.textContent = e, a.classList.remove("bg-green-500"), a.classList.add("bg-green-600", "hover:bg-green-700");
            }, 2e3);
          } catch (e) {
            console.error("Failed to copy text: ", e);
          }
      };
      v.addEventListener("click", T), I.addEventListener("click", y), x.addEventListener("click", w), a.addEventListener("click", k), C(), r.data.curr.data.data && (s.value = N(r.data.curr.data.data), y()), i?.add({ $d: r.data.curr.data, el: m });
    })(l), E;
  }
});
export {
  j as hydrator,
  j as index
};
