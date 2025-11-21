function n(t, r) {
  r === void 0 && (r = {});
  var i = r.insertAt;
  if (!(typeof document > "u")) {
    var e = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", i === "top" && e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t));
  }
}
const l = '/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-yellow-300:oklch(90.5% .182 98.111);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-purple-600:oklch(55.8% .288 302.321);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--container-4xl:56rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.top-4{top:calc(var(--spacing)*4)}.right-3{right:calc(var(--spacing)*3)}.right-4{right:calc(var(--spacing)*4)}.bottom-3{bottom:calc(var(--spacing)*3)}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-16{margin-top:calc(var(--spacing)*16)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-12{margin-bottom:calc(var(--spacing)*12)}.flex{display:flex}.grid{display:grid}.table{display:table}.h-4{height:calc(var(--spacing)*4)}.h-6{height:calc(var(--spacing)*6)}.h-64{height:calc(var(--spacing)*64)}.min-h-screen{min-height:100vh}.w-4{width:calc(var(--spacing)*4)}.w-6{width:calc(var(--spacing)*6)}.w-20{width:calc(var(--spacing)*20)}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.max-w-4xl{max-width:var(--container-4xl)}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-8{gap:calc(var(--spacing)*8)}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-4>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*4)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-x-reverse)))}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-600{border-color:var(--color-gray-600)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-500{background-color:var(--color-green-500)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-blue-500{--tw-gradient-from:var(--color-blue-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-purple-600{--tw-gradient-to:var(--color-purple-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-8{padding-block:calc(var(--spacing)*8)}.text-center{text-align:center}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-blue-600{color:var(--color-blue-600)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-transparent{color:#0000}.text-white{color:var(--color-white)}.text-yellow-300{color:var(--color-yellow-300)}.placeholder-gray-400::placeholder{color:var(--color-gray-400)}.placeholder-gray-500::placeholder{color:var(--color-gray-500)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.hover\\:bg-blue-500:hover{background-color:var(--color-blue-500)}.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-300:hover{background-color:var(--color-gray-300)}.hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.hover\\:bg-green-600:hover{background-color:var(--color-green-600)}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:border-green-500:focus{border-color:var(--color-green-500)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:justify-between{justify-content:space-between}:where(.sm\\:space-y-0>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*0)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*0)*calc(1 - var(--tw-space-y-reverse)))}}@media(min-width:64rem){.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}';
n(l);
const s = async (t) => ({
  set: async (r, i) => {
    console.log(`--renderer [${r.data.curr.type}]`);
    const e = {
      value: () => r.data.curr.data.data || "",
      theme: () => r.data.curr.data.theme || "light"
    };
    return {
      r: `
          <div 
            id='${t.f.name("root")}' 
            class="min-h-screen transition-colors duration-300 bg-gray-50 text-gray-900" 
            data-ce='[{"k":"t-light-class","v":"bg-gray-50 text-gray-900"}, {"k":"t-dark-class","v":"bg-gray-900 text-white"}]'
          >
            <div class="container mx-auto px-4 py-8">
              <!-- Header -->
              <header class="text-center mb-12">
                <h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Multiline to Single Line Converter
                </h1>
                <p 
                  class="text-lg text-gray-600 max-w-2xl mx-auto"
                  data-ce='[{"k":"t-light-class","v":"text-gray-600"}, {"k":"t-dark-class","v":"text-gray-300"}]'
                >
                  Convert your multiline text into a single line instantly. Perfect for code, JSON, URLs, and more.
                </p>
              </header>

              <!-- Main Content -->
              <div class="max-w-4xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <!-- Input Section -->
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <label 
                        class="text-lg font-semibold text-gray-700"
                        data-ce='[{"k":"t-light-class","v":"text-gray-700"}, {"k":"t-dark-class","v":"text-gray-200"}]'
                      >
                        Input (Multiline)
                      </label>
                      <span 
                        class="text-sm text-gray-500"
                        data-ce='[{"k":"t-light-class","v":"text-gray-500"}, {"k":"t-dark-class","v":"text-gray-400"}]'
                      >
                        Lines: <span id="${t.f.name("lineCount")}">0</span>
                      </span>
                    </div>
                    <div class="relative">
                      <textarea 
                        id="${t.f.name("inputText")}"
                        placeholder="Paste your multiline text here..."
                        class="w-full h-64 p-4 rounded-lg border-2 resize-none focus:outline-none focus:border-blue-500 transition-colors bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        data-ce='[{"k":"t-light-class","v":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"}, {"k":"t-dark-class","v":"bg-gray-800 border-gray-600 text-white placeholder-gray-400"}]'
                      >${e.value()}</textarea>
                      <div class="absolute bottom-3 right-3">
                        <button 
                          id="${t.f.name("clearInput")}"
                          class="px-3 py-1 text-sm rounded-md transition-colors bg-gray-200 hover:bg-gray-300 text-gray-700"
                          data-ce='[{"k":"t-light-class","v":"bg-gray-200 hover:bg-gray-300 text-gray-700"}, {"k":"t-dark-class","v":"bg-gray-700 hover:bg-gray-600 text-gray-200"}]'
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Output Section -->
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <label 
                        class="text-lg font-semibold text-gray-700"
                        data-ce='[{"k":"t-light-class","v":"text-gray-700"}, {"k":"t-dark-class","v":"text-gray-200"}]'
                      >
                        Output (Single Line)
                      </label>
                      <div class="flex items-center space-x-2">
                        <span 
                          class="text-sm text-gray-500"
                          data-ce='[{"k":"t-light-class","v":"text-gray-500"}, {"k":"t-dark-class","v":"text-gray-400"}]'
                        >
                          Chars: <span id="${t.f.name("charCount")}">0</span>
                        </span>
                        <button 
                          id="${t.f.name("copyBtn")}"
                          class="px-3 py-1 text-sm rounded-md transition-colors text-white bg-blue-500 hover:bg-blue-600"
                          data-ce='[{"k":"t-light-class","v":"bg-blue-500 hover:bg-blue-600"}, {"k":"t-dark-class","v":"bg-blue-600 hover:bg-blue-500"}]'
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <div class="relative">
                      <textarea 
                        id="${t.f.name("outputText")}"
                        readonly
                        class="w-full h-64 p-4 rounded-lg border-2 resize-none focus:outline-none focus:border-green-500 transition-colors bg-white border-gray-300 text-gray-900"
                        data-ce='[{"k":"t-light-class","v":"bg-white border-gray-300 text-gray-900"}, {"k":"t-dark-class","v":"bg-gray-800 border-gray-600 text-white"}]'
                        placeholder="Your single line text will appear here..."
                      ></textarea>
                      <div class="absolute bottom-3 right-3 flex space-x-2">
                        <button 
                          id="${t.f.name("clearOutput")}"
                          class="px-3 py-1 text-sm rounded-md transition-colors bg-gray-200 hover:bg-gray-300 text-gray-700"
                          data-ce='[{"k":"t-light-class","v":"bg-gray-200 hover:bg-gray-300 text-gray-700"}, {"k":"t-dark-class","v":"bg-gray-700 hover:bg-gray-600 text-gray-200"}]'
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Options Section -->
                <div 
                  class="mt-8 p-6 rounded-lg bg-white border border-gray-200"
                  data-ce='[{"k":"t-light-class","v":"bg-white border border-gray-200"}, {"k":"t-dark-class","v":"bg-gray-800"}]'
                >
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <div class="flex items-center space-x-4">
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" id="${t.f.name("trimLines")}" checked 
                          class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500">
                        <span 
                          class="text-gray-700"
                          data-ce='[{"k":"t-light-class","v":"text-gray-700"}, {"k":"t-dark-class","v":"text-gray-200"}]'
                        >
                          Trim whitespace from each line
                        </span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" id="${t.f.name("removeEmpty")}" checked 
                          class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500">
                        <span 
                          class="text-gray-700"
                          data-ce='[{"k":"t-light-class","v":"text-gray-700"}, {"k":"t-dark-class","v":"text-gray-200"}]'
                        >
                          Remove empty lines
                        </span>
                      </label>
                    </div>
                    <div class="flex items-center space-x-4">
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" id="${t.f.name("customSeparator")}" 
                          class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500">
                        <span 
                          class="text-gray-700"
                          data-ce='[{"k":"t-light-class","v":"text-gray-700"}, {"k":"t-dark-class","v":"text-gray-200"}]'
                        >
                          Custom separator
                        </span>
                      </label>
                      <input type="text" id="${t.f.name("separator")}" value=" " placeholder="Separator"
                        class="w-20 p-2 rounded border bg-white border-gray-300 text-gray-900"
                        data-ce='[{"k":"t-light-class","v":"bg-white border-gray-300 text-gray-900"}, {"k":"t-dark-class","v":"bg-gray-700 border-gray-600 text-white"}]'
                      >
                    </div>
                  </div>
                </div>

                <!-- Theme Toggle -->
                <div class="fixed top-4 right-4"    >
                  <button 
                    id="${t.f.name("themeToggle")}"
                    class="p-3 rounded-full transition-colors bg-white hover:bg-gray-100 text-gray-700 shadow-md"
                    data-ce='[{"k":"t-light-class","v":"bg-white hover:bg-gray-100 text-gray-700 shadow-md"}, {"k":"t-dark-class","v":"bg-gray-700 hover:bg-gray-600 text-yellow-300"}]'
                    title="Toggle theme"
                  >
                    <!-- SVG Path logic remains dynamic as it is not a class property -->
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="${e.theme() === "dark" ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Footer -->
              <footer 
                class="mt-16 text-center text-gray-500"
                data-ce='[{"k":"t-light-class","v":"text-gray-500"}, {"k":"t-dark-class","v":"text-gray-400"}]'
              >
                <!--p>Made with ❤️ using TypeScript & Tailwind CSS</p-->
                <p>${r.data.curr.data?.foo?.txt || ""}</p>
              </footer>

              
            </div>
          </div>
          `,
      head: `
        <title>Online Multiline to Singleline Converter - Text/XML/JSON</title>
        <meta name="description" content="Convert your multiline text into a single line instantly. Perfect for code, JSON, URLs, and more.">
        `,
      style: (() => {
        let o = "";
        return o = `
          
          
          .${t.f.name("text")} {
            background: transparent;
          }
          
          /* Custom scrollbar */
          textarea::-webkit-scrollbar {
            width: 6px;
          }
          
          textarea::-webkit-scrollbar-track {
            background: ${e.theme() === "dark" ? "#374151" : "#f3f4f6"};
            border-radius: 3px;
          }
          
          textarea::-webkit-scrollbar-thumb {
            background: ${e.theme() === "dark" ? "#6b7280" : "#d1d5db"};
            border-radius: 3px;
          }
          
          textarea::-webkit-scrollbar-thumb:hover {
            background: ${e.theme() === "dark", "#9ca3af"};
          }
          
          /* Smooth transitions */
          * {
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          }
          `, o;
      })()
    };
  }
});
export {
  s as index,
  s as renderer
};
