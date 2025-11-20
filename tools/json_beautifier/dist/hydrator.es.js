const T = async (s) => ({
  set: async (a, i) => {
    console.log(`--hydrator [${a.data.curr.type}]`);
    const E = {
      r: "",
      style: "",
      evt: {
        change: () => {
          i?.change({ _$p: a });
        }
      }
    }, v = document.getElementById(s.f.name("json-input"));
    return (async (u) => {
      if (!u) return;
      const n = document.getElementById(s.f.name("json-input")), d = document.getElementById(s.f.name("json-output")), g = document.getElementById(s.f.name("format-btn")), o = document.getElementById(s.f.name("copy-btn")), m = document.getElementById(s.f.name("theme-toggle")), f = document.getElementById(s.f.name("error-indicator")), h = document.getElementById(s.f.name("char-count")), y = document.getElementById(s.f.name("line-count")), I = document.getElementById(s.f.name("root")), p = (t) => {
        try {
          if (!t.trim())
            return { success: !0, formatted: "" };
          const e = JSON.parse(t);
          let r = JSON.stringify(e, null, 2);
          return r = r.replace(/\{\n\s+"/, `{
  "`), { success: !0, formatted: r.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?)/g, (l) => /:$/.test(l) ? `<span class="json-key">${l}</span>` : `<span class="json-string">${l}</span>`).replace(/\b(true|false)\b/g, '<span class="json-boolean">$1</span>').replace(/\b(null)\b/g, '<span class="json-null">$1</span>').replace(/\b-?\d+(\.\d+)?([eE][+-]?\d+)?\b/g, '<span class="json-number">$&</span>') };
        } catch (e) {
          return {
            success: !1,
            formatted: t,
            error: e instanceof Error ? e.message : "Invalid JSON"
          };
        }
      }, L = (t) => {
        if (h && (h.textContent = `${t.length} characters`), y) {
          const e = t.split(`
`).length;
          y.textContent = `${e} lines`;
        }
      }, c = () => {
        const t = n.value;
        L(t);
        const e = p(t);
        d && (d.innerHTML = e.success ? e.formatted : t), f && f.classList.toggle("hidden", e.success), n && (n.classList.toggle("border-red-500", !e.success), n.classList.toggle("border-green-500", e.success && t.trim() !== ""));
      }, B = async () => {
        try {
          const t = p(n.value);
          let e = t.success ? JSON.stringify(JSON.parse(n.value), null, 2) : n.value;
          t.success && (e = e.replace(/\{\n\s+"/, `{
  "`)), await navigator.clipboard.writeText(e);
          const r = o.textContent;
          o.textContent = "Copied!", o.classList.remove("bg-blue-500", "bg-blue-600", "hover:bg-blue-700"), o.classList.add("bg-green-500", "hover:bg-green-600"), setTimeout(() => {
            o.textContent = r, o.classList.remove("bg-green-500", "hover:bg-green-600"), o.classList.add("bg-blue-500", "hover:bg-blue-600");
          }, 2e3);
        } catch {
          alert("Failed to copy to clipboard");
        }
      }, x = () => {
        const t = a.data.curr.data.theme, e = ((r) => r == "dark" ? "light" : r == "light" ? "dark" : r)(t);
        (async () => {
          try {
            await s.f.set_theme({ name: `${e}`, el_id: `${I.id}` }), a.data.curr.data.theme = e;
          } catch {
          }
        })();
      }, b = () => {
        const t = document.querySelector("pre");
        if (t && n) {
          const e = "500px";
          n.style.height = e, t.style.height = e;
        }
      };
      n && (n.addEventListener("input", c), n.addEventListener("input", b)), g && g.addEventListener("click", c), o && o.addEventListener("click", B), m && m.addEventListener("click", x), b(), c(), i?.add({ $d: a.data.curr.data, el: u });
    })(v), E;
  }
});
export {
  T as hydrator,
  T as index
};
