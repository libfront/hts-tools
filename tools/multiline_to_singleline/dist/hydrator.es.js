const p = async (e) => ({
  set: async (a, g) => {
    console.log(`--hydrator [${a.data.curr.type}]`);
    const k = {
      r: "",
      style: "",
      evt: {
        change: () => {
          g?.change({ _$p: a });
        }
      }
    }, C = document.getElementById(e.f.name("text"));
    return (async (l) => {
      const t = document.getElementById(e.f.name("inputText")), r = document.getElementById(e.f.name("outputText")), c = document.getElementById(e.f.name("copyBtn")), f = document.getElementById(e.f.name("clearInput")), h = document.getElementById(e.f.name("clearOutput")), E = document.getElementById(e.f.name("themeToggle")), y = document.getElementById(e.f.name("trimLines")), v = document.getElementById(e.f.name("removeEmpty")), B = document.getElementById(e.f.name("customSeparator")), i = document.getElementById(e.f.name("separator")), x = document.getElementById(e.f.name("lineCount")), u = document.getElementById(e.f.name("charCount")), L = document.getElementById(e.f.name("root"));
      t && a.data.curr.data.data && (t.value = a.data.curr.data.data, m());
      function m() {
        if (!t || !r) return;
        let n = t.value.split(`
`);
        x && (x.textContent = n.length.toString()), y?.checked && (n = n.map((s) => s.trim())), v?.checked && (n = n.filter((s) => s.length > 0));
        let d = " ";
        B?.checked && i && (d = i.value);
        const I = n.join(d);
        r.value = I, u && (u.textContent = I.length.toString());
      }
      t && t.addEventListener("input", m), c && c.addEventListener("click", () => {
        r && r.value && (r.select(), navigator.clipboard.writeText(r.value).then(() => {
          const o = c.textContent;
          c.textContent = "Copied!", c.classList.add("bg-green-500", "hover:bg-green-600"), setTimeout(() => {
            c.textContent = o, c.classList.remove("bg-green-500", "hover:bg-green-600");
          }, 2e3);
        }));
      }), f && f.addEventListener("click", () => {
        t && (t.value = "", m(), t.focus());
      }), h && h.addEventListener("click", () => {
        r && (r.value = "", u && (u.textContent = "0"));
      }), E && E.addEventListener("click", () => {
        const o = a.data.curr.data.theme, n = ((d) => d == "dark" ? "light" : d == "light" ? "dark" : d)(o);
        (async () => {
          try {
            await e.f.set_theme({ name: `${n}`, el_id: `${L.id}` }), a.data.curr.data.theme = n;
          } catch {
          }
        })();
      }), [y, v, B].forEach((o) => {
        o && o.addEventListener("change", m);
      }), i && i.addEventListener("input", m), (a.data.curr.data?.theme || "light") === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), g?.add({ $d: a.data.curr.data, el: l });
    })(C), k;
  }
});
export {
  p as hydrator,
  p as index
};
