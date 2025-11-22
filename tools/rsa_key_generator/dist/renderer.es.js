function d(r, e) {
  e === void 0 && (e = {});
  var i = e.insertAt;
  if (!(typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", i === "top" && a.firstChild ? a.insertBefore(o, a.firstChild) : a.appendChild(o), o.styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r));
  }
}
const c = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-duration:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-300:oklch(80.8% .114 19.571);--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-300:oklch(90.5% .182 98.111);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-800:oklch(47.6% .114 61.907);--color-yellow-900:oklch(42.1% .095 57.708);--color-green-50:oklch(98.2% .018 155.826);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--container-4xl:56rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--radius-xl:.75rem;--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-16{margin-top:calc(var(--spacing)*16)}.-mr-1{margin-right:calc(var(--spacing)*-1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.mb-12{margin-bottom:calc(var(--spacing)*12)}.ml-2{margin-left:calc(var(--spacing)*2)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.min-h-screen{min-height:100vh}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.max-w-4xl{max-width:var(--container-4xl)}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.resize-none{resize:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}.overflow-hidden{overflow:hidden}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-600{border-color:var(--color-gray-600)}.border-gray-700{border-color:var(--color-gray-700)}.border-green-200{border-color:var(--color-green-200)}.border-green-800{border-color:var(--color-green-800)}.border-red-200{border-color:var(--color-red-200)}.border-red-800{border-color:var(--color-red-800)}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-800{border-color:var(--color-yellow-800)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-700{background-color:var(--color-blue-700)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600{background-color:var(--color-green-600)}.bg-green-700{background-color:var(--color-green-700)}.bg-green-900\\/20{background-color:#0d542b33}@supports (color:color-mix(in lab,red,red)){.bg-green-900\\/20{background-color:color-mix(in oklab,var(--color-green-900)20%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-red-500{background-color:var(--color-red-500)}.bg-red-600{background-color:var(--color-red-600)}.bg-red-700{background-color:var(--color-red-700)}.bg-red-900\\/20{background-color:#82181a33}@supports (color:color-mix(in lab,red,red)){.bg-red-900\\/20{background-color:color-mix(in oklab,var(--color-red-900)20%,transparent)}}.bg-white{background-color:var(--color-white)}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-900\\/20{background-color:#733e0a33}@supports (color:color-mix(in lab,red,red)){.bg-yellow-900\\/20{background-color:color-mix(in oklab,var(--color-yellow-900)20%,transparent)}}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-8{padding-block:calc(var(--spacing)*8)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-green-500{color:var(--color-green-500)}.text-green-800{color:var(--color-green-800)}.text-red-400{color:var(--color-red-400)}.text-red-500{color:var(--color-red-500)}.text-red-700{color:var(--color-red-700)}.text-red-800{color:var(--color-red-800)}.text-white{color:var(--color-white)}.text-yellow-500{color:var(--color-yellow-500)}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-800{color:var(--color-yellow-800)}.placeholder-gray-500::placeholder{color:var(--color-gray-500)}.placeholder-gray-600::placeholder{color:var(--color-gray-600)}.opacity-25{opacity:.25}.opacity-75{opacity:.75}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-300:hover{background-color:var(--color-gray-300)}.hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.hover\\:bg-green-600:hover{background-color:var(--color-green-600)}.hover\\:bg-green-700:hover{background-color:var(--color-green-700)}.hover\\:bg-red-600:hover{background-color:var(--color-red-600)}.hover\\:bg-red-700:hover{background-color:var(--color-red-700)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-green-500:focus{--tw-ring-color:var(--color-green-500)}.focus\\:ring-red-500:focus{--tw-ring-color:var(--color-red-500)}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.disabled\\:transform-none:disabled{transform:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}}@media(min-width:64rem){.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(prefers-color-scheme:dark){.dark\\:block{display:block}.dark\\:hidden{display:none}.dark\\:border-gray-600{border-color:var(--color-gray-600)}.dark\\:border-gray-700{border-color:var(--color-gray-700)}.dark\\:border-green-800{border-color:var(--color-green-800)}.dark\\:border-red-800{border-color:var(--color-red-800)}.dark\\:border-yellow-800{border-color:var(--color-yellow-800)}.dark\\:bg-blue-700{background-color:var(--color-blue-700)}.dark\\:bg-gray-700{background-color:var(--color-gray-700)}.dark\\:bg-gray-800{background-color:var(--color-gray-800)}.dark\\:bg-gray-900{background-color:var(--color-gray-900)}.dark\\:bg-green-700{background-color:var(--color-green-700)}.dark\\:bg-green-900\\/20{background-color:#0d542b33}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-green-900\\/20{background-color:color-mix(in oklab,var(--color-green-900)20%,transparent)}}.dark\\:bg-red-700{background-color:var(--color-red-700)}.dark\\:bg-red-900\\/20{background-color:#82181a33}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-red-900\\/20{background-color:color-mix(in oklab,var(--color-red-900)20%,transparent)}}.dark\\:bg-yellow-900\\/20{background-color:#733e0a33}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-yellow-900\\/20{background-color:color-mix(in oklab,var(--color-yellow-900)20%,transparent)}}.dark\\:text-gray-200{color:var(--color-gray-200)}.dark\\:text-gray-300{color:var(--color-gray-300)}.dark\\:text-gray-400{color:var(--color-gray-400)}.dark\\:text-green-300{color:var(--color-green-300)}.dark\\:text-red-300{color:var(--color-red-300)}.dark\\:text-red-400{color:var(--color-red-400)}.dark\\:text-white{color:var(--color-white)}.dark\\:text-yellow-300{color:var(--color-yellow-300)}.dark\\:text-yellow-400{color:var(--color-yellow-400)}@media(hover:hover){.dark\\:hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.dark\\:hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.dark\\:hover\\:bg-green-600:hover{background-color:var(--color-green-600)}.dark\\:hover\\:bg-red-600:hover{background-color:var(--color-red-600)}}}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-duration{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}';
d(c);
const g = async (r) => ({
  set: async (e, i) => {
    console.log(`--renderer [${e.data.curr.type}]`);
    const a = (t) => {
      switch (t) {
        case "generating":
          return "text-yellow-500";
        case "success":
          return "text-green-500";
        case "error":
          return "text-red-500";
        default:
          return "text-gray-500";
      }
    }, o = (t) => {
      switch (t) {
        case "generating":
          return "Generating keys...";
        case "success":
          return "Keys generated successfully!";
        case "error":
          return "Error generating keys";
        default:
          return "Ready to generate RSA keys";
      }
    };
    return {
      r: (() => {
        const t = e.data.curr.data.keys, l = e.data.curr.data.status || "idle", n = e.data.curr.data.error;
        return `
                    <div id="${r.f.name("root")}" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
                    data-ce='[{"k":"t-light-class","v":"bg-white"},{"k":"t-dark-class","v":"bg-gray-900"}]'
                    >
                        <div class="container mx-auto px-4 py-8">
                            <!-- Header -->
                            <header class="text-center mb-12">
                                <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                                    data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                                    RSA Key Generator
                                </h1>
                                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                                    data-ce='[{"k":"t-light-class","v":"text-gray-600"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                                    Generate secure RSA public/private key pairs for your cryptographic applications
                                </p>
                            </header>

                            <!-- Theme Toggle -->
                            <div class="flex justify-end mb-6">
                                <button id="${r.f.name("theme-toggle")}" 
                                    class="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                                    data-ce='[{"k":"t-light-class","v":"bg-gray-200 text-gray-800 hover:bg-gray-300"},{"k":"t-dark-class","v":"bg-gray-700 text-gray-200 hover:bg-gray-600"}]'>
                                    <svg class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                                    </svg>
                                    <svg class="w-5 h-5 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                    </svg>
                                </button>
                            </div>

                            <!-- Main Content -->
                            <div class="max-w-4xl mx-auto">
                                <!-- Controls -->
                                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700"
                                    data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                                    <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
                                        <div class="flex-1">
                                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                                data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                                                Key Size (bits)
                                            </label>
                                            <select id="${r.f.name("key-size")}" 
                                                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                data-ce='[{"k":"t-light-class","v":"border-gray-300 bg-white text-gray-900"},{"k":"t-dark-class","v":"border-gray-600 bg-gray-700 text-white"}]'>
                                                <option value="2048">2048 bits (Recommended)</option>
                                                <option value="1024">1024 bits</option>
                                                <option value="3072">3072 bits</option>
                                                <option value="4096">4096 bits</option>
                                            </select>
                                        </div>
                                        <button id="${r.f.name("generate-btn")}" 
                                            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                            data-ce='[{"k":"t-light-class","v":"bg-blue-600 hover:bg-blue-700"},{"k":"t-dark-class","v":"bg-blue-700 hover:bg-blue-600"}]'>
                                            Generate Keys
                                        </button>
                                    </div>
                                </div>

                                <!-- Status -->
                                <div class="mb-8 text-center">
                                    <div id="${r.f.name("status")}" 
                                        class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${a(l)} bg-opacity-10 ${l === "success" ? "bg-green-500" : l === "error" ? "bg-red-500" : l === "generating" ? "bg-yellow-500" : "bg-gray-100"}"
                                        data-ce='[{"k":"t-light-class","v":"bg-opacity-10"},{"k":"t-dark-class","v":"bg-gray-800 bg-opacity-20"}]'>
                                        <span>${o(l)}</span>
                                        ${l === "generating" ? `
                                        <svg class="animate-spin -mr-1 ml-2 h-4 w-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        ` : ""}
                                    </div>
                                    ${n ? `
                                    <div class="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400"
                                        data-ce='[{"k":"t-light-class","v":"bg-red-50 border-red-200 text-red-700"},{"k":"t-dark-class","v":"bg-red-900/20 border-red-800 text-red-400"}]'>
                                        ${n}
                                    </div>
                                    ` : ""}
                                </div>

                                <!-- Keys Output -->
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <!-- Public Key -->
                                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                                        data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                                        <div class="bg-green-50 dark:bg-green-900/20 px-4 py-3 border-b border-green-200 dark:border-green-800"
                                            data-ce='[{"k":"t-light-class","v":"bg-green-50 border-green-200"},{"k":"t-dark-class","v":"bg-green-900/20 border-green-800"}]'>
                                            <h3 class="text-lg font-semibold text-green-800 dark:text-green-300 flex items-center gap-2">
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                                                </svg>
                                                Public Key
                                            </h3>
                                        </div>
                                        <div class="p-4">
                                            <textarea id="${r.f.name("public-key")}" 
                                                readonly
                                                rows="8"
                                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 placeholder-gray-600 dark:text-white font-mono text-sm resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                                data-ce='[{"k":"t-light-class","v":"border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-600"},{"k":"t-dark-class","v":"border-gray-600 bg-gray-900 text-white placeholder-gray-500"}]'
                                                placeholder="Public key will appear here...">${t?.publicKey || ""}</textarea>
                                            <div class="flex justify-end mt-2">
                                                <button id="${r.f.name("copy-public")}" 
                                                    class="px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    data-ce='[{"k":"t-light-class","v":"bg-green-600 hover:bg-green-700"},{"k":"t-dark-class","v":"bg-green-700 hover:bg-green-600"}]'
                                                    ${t?.publicKey ? "" : "disabled"}>
                                                    Copy to Clipboard
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Private Key -->
                                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                                        data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                                        <div class="bg-red-50 dark:bg-red-900/20 px-4 py-3 border-b border-red-200 dark:border-red-800"
                                            data-ce='[{"k":"t-light-class","v":"bg-red-50 border-red-200"},{"k":"t-dark-class","v":"bg-red-900/20 border-red-800"}]'>
                                            <h3 class="text-lg font-semibold text-red-800 dark:text-red-300 flex items-center gap-2">
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 016 0v2h1V7a5 5 0 00-5-5z"></path>
                                                </svg>
                                                Private Key
                                            </h3>
                                        </div>
                                        <div class="p-4">
                                            <textarea id="${r.f.name("private-key")}" 
                                                readonly
                                                rows="8"
                                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 placeholder-gray-600 dark:text-white font-mono text-sm resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                                data-ce='[{"k":"t-light-class","v":"border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-600"},{"k":"t-dark-class","v":"border-gray-600 bg-gray-900 text-white placeholder-gray-500"}]'
                                                placeholder="Private key will appear here...">${t?.privateKey || ""}</textarea>
                                            <div class="flex justify-end mt-2">
                                                <button id="${r.f.name("copy-private")}" 
                                                    class="px-4 py-2 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    data-ce='[{"k":"t-light-class","v":"bg-red-600 hover:bg-red-700"},{"k":"t-dark-class","v":"bg-red-700 hover:bg-red-600"}]'
                                                    ${t?.privateKey ? "" : "disabled"}>
                                                    Copy to Clipboard
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Security Notice -->
                                <div class="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4"
                                    data-ce='[{"k":"t-light-class","v":"bg-yellow-50 border-yellow-200"},{"k":"t-dark-class","v":"bg-yellow-900/20 border-yellow-800"}]'>
                                    <div class="flex items-start gap-3">
                                        <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                        </svg>
                                        <div class="text-yellow-800 dark:text-yellow-300 text-sm">
                                            <strong class="font-semibold">Security Notice:</strong> Keep your private key secure and never share it. The private key is generated locally in your browser and is not transmitted over the network.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer -->
                            <footer class="mt-16 mb-2 text-center text-gray-500 dark:text-gray-400"
                                data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                                <p>${e.data.curr.data?.foo?.txt || "Made with ❤️ using TypeScript & Tailwind CSS"}</p>
                            </footer>
                        </div>
                    </div>
                    `;
      })(),
      head: `
        <title>Online RSA key generator</title>
        <meta name="description" content="Generate secure RSA public/private key pairs.">
        `,
      style: `
                    



                    /* Smooth transitions for theme switching */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

/* Custom focus styles */
button:focus,
select:focus,
textarea:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

/* Loading animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}



                    .${r.f.name("text")} {
                        background: transparent;
                    }

                    /* Custom scrollbar for textareas */
                    textarea::-webkit-scrollbar {
                        width: 6px;
                    }

                    textarea::-webkit-scrollbar-track {
                        background: transparent;
                    }

                    textarea::-webkit-scrollbar-thumb {
                        background: #cbd5e0;
                        border-radius: 3px;
                    }

                    textarea::-webkit-scrollbar-thumb:hover {
                        background: #a0aec0;
                    }

                    .dark textarea::-webkit-scrollbar-thumb {
                        background: #4a5568;
                    }

                    .dark textarea::-webkit-scrollbar-thumb:hover {
                        background: #718096;
                    }
                    `
    };
  }
});
export {
  g as index,
  g as renderer
};
