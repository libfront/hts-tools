const v = async (c) => ({
  set: async (n, u) => {
    console.log(`--hydrator [${n.data.curr.type}]`);
    const r = {
      generateUUID: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
        const o = Math.random() * 16 | 0;
        return (a == "x" ? o : o & 3 | 8).toString(16);
      }),
      copyToClipboard: async (a) => {
        try {
          return await navigator.clipboard.writeText(a), !0;
        } catch {
          const e = document.createElement("textarea");
          e.value = a, e.style.position = "fixed", e.style.left = "-999999px", e.style.top = "-999999px", document.body.appendChild(e), e.focus(), e.select();
          try {
            return document.execCommand("copy"), !0;
          } catch {
            return !1;
          } finally {
            document.body.removeChild(e);
          }
        }
      },
      showCopySuccess: (a) => {
        a.classList.remove("hidden"), setTimeout(() => {
          a.classList.add("hidden");
        }, 2e3);
      }
    }, d = {
      r: "",
      style: "",
      evt: {
        change: () => {
          u?.change({ _$p: n });
        }
      }
    }, m = document.getElementById(c.f.name("root"));
    return (async (a) => {
      n.data.curr.data.data || (n.data.curr.data.data = r.generateUUID(), d.evt.change());
      const o = document.getElementById(c.f.name("theme-toggle")), e = document.getElementById(c.f.name("uuid-display")), i = document.getElementById(c.f.name("generate-btn")), y = document.getElementById(c.f.name("copy-btn")), h = document.getElementById(c.f.name("copy-success")), f = () => {
        const t = n.data.curr.data.theme, g = ((s) => s === "dark" ? "light" : s === "light" ? "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark")(t);
        (async () => {
          try {
            await c.f.set_theme({ name: `${g}`, el_id: `${m.id}` }), n.data.curr.data.theme = g;
          } catch (s) {
            console.error("Failed to set theme:", s);
          }
        })();
      }, l = () => {
        const t = r.generateUUID();
        n.data.curr.data.data = t, e.value = t, d.evt.change(), e.classList.add("animate-fade-in"), setTimeout(() => {
          e.classList.remove("animate-fade-in");
        }, 500);
      }, x = async () => {
        await r.copyToClipboard(e.value) ? r.showCopySuccess(h) : alert("Failed to copy UUID to clipboard");
      }, p = async () => {
        await r.copyToClipboard(e.value) && (r.showCopySuccess(h), e.classList.add("ring-2", "ring-green-500"), setTimeout(() => {
          e.classList.remove("ring-2", "ring-green-500");
        }, 300));
      };
      if (o.addEventListener("click", f), i.addEventListener("click", l), y.addEventListener("click", x), e.addEventListener("click", p), setTimeout(() => {
        l();
      }, 150), document.addEventListener("keydown", (t) => {
        (t.ctrlKey || t.metaKey) && t.key === "g" && (t.preventDefault(), l()), (t.ctrlKey || t.metaKey) && t.key === "c" && document.activeElement === e && (t.preventDefault(), x());
      }), i.title = "Generate new UUID (Ctrl+G)", y.title = "Copy UUID to clipboard", e.title = "Click to copy UUID", !n.data.curr.data.theme) {
        const t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        n.data.curr.data.theme = t;
      }
      u?.add({ $d: n.data.curr.data, el: a });
    })(m), d;
  }
});
export {
  v as hydrator,
  v as index
};
