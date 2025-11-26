const k = async (n) => ({
  set: async (l, h) => {
    console.log(`--hydrator [${l.data.curr.type}]`);
    const x = {
      r: "",
      style: "",
      evt: {
        change: () => {
          h?.change({ _$p: l });
        }
      }
    }, u = document.getElementById(n.f.name("root"));
    return (async (d) => {
      const c = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
      }, e = {
        themeToggle: document.getElementById(n.f.name("theme-toggle")),
        passwordDisplay: document.getElementById(n.f.name("password-display")),
        copyBtn: document.getElementById(n.f.name("copy-btn")),
        generateBtn: document.getElementById(n.f.name("generate-btn")),
        lengthSlider: document.getElementById(n.f.name("length-slider")),
        lengthValue: document.getElementById(n.f.name("length-value")),
        lengthText: document.getElementById(n.f.name("length-text")),
        strengthMeter: document.getElementById(n.f.name("strength-meter")),
        strengthText: document.getElementById(n.f.name("strength-text")),
        uppercase: document.getElementById(n.f.name("uppercase")),
        lowercase: document.getElementById(n.f.name("lowercase")),
        numbers: document.getElementById(n.f.name("numbers")),
        symbols: document.getElementById(n.f.name("symbols"))
      }, y = () => {
        const t = parseInt(e.lengthSlider.value), r = e.uppercase.checked, s = e.lowercase.checked, a = e.numbers.checked, i = e.symbols.checked;
        if (!r && !s && !a && !i) {
          e.passwordDisplay.textContent = "Select at least one character type", f(0);
          return;
        }
        let o = "";
        r && (o += c.uppercase), s && (o += c.lowercase), a && (o += c.numbers), i && (o += c.symbols);
        let m = "";
        const w = new Uint32Array(t);
        crypto.getRandomValues(w);
        for (let g = 0; g < t; g++) {
          const b = w[g] % o.length;
          m += o[b];
        }
        e.passwordDisplay.textContent = m, f(B(m, {
          includeUppercase: r,
          includeLowercase: s,
          includeNumbers: a,
          includeSymbols: i
        }));
      }, B = (t, r) => {
        let s = 0;
        s += Math.min(t.length * 3, 40);
        let a = 0;
        return r.includeUppercase && (a += 15), r.includeLowercase && (a += 15), r.includeNumbers && (a += 15), r.includeSymbols && (a += 15), s += Math.min(a, 60), Math.min(s, 100);
      }, f = (t) => {
        e.strengthMeter.className = "h-full transition-all duration-300", t < 30 ? (e.strengthMeter.classList.add("strength-weak"), e.strengthText.textContent = "Weak") : t < 60 ? (e.strengthMeter.classList.add("strength-medium"), e.strengthText.textContent = "Medium") : t < 80 ? (e.strengthMeter.classList.add("strength-strong"), e.strengthText.textContent = "Strong") : (e.strengthMeter.classList.add("strength-very-strong"), e.strengthText.textContent = "Very Strong"), e.strengthMeter.style.width = `${t}%`;
      }, T = async () => {
        const t = e.passwordDisplay.textContent;
        if (t && t !== "Click Generate to create a password" && t !== "Select at least one character type")
          try {
            await navigator.clipboard.writeText(t);
            const r = e.copyBtn.innerHTML;
            e.copyBtn.innerHTML = `
                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              `, setTimeout(() => {
              e.copyBtn.innerHTML = r;
            }, 2e3);
          } catch (r) {
            console.error("Failed to copy password:", r);
          }
      }, p = () => {
        const t = e.lengthSlider.value;
        e.lengthValue.textContent = t, e.lengthText.textContent = t;
      }, E = () => {
        const t = l.data.curr.data.theme, r = ((s) => s == "dark" ? "light" : s == "light" ? "dark" : s)(t);
        (async () => {
          try {
            await n.f.set_theme({ name: `${r}`, el_id: `${u.id}` }), l.data.curr.data.theme = r;
          } catch (s) {
            console.error("Theme toggle error:", s);
          }
        })();
      };
      e.themeToggle.addEventListener("click", E), e.generateBtn.addEventListener("click", y), e.copyBtn.addEventListener("click", T), e.lengthSlider.addEventListener("input", p), p(), y(), h?.add({ $d: l.data.curr.data, el: d });
    })(u), x;
  }
});
export {
  k as hydrator,
  k as index
};
