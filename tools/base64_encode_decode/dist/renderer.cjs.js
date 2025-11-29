"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function l(e,r){r===void 0&&(r={});var o=r.insertAt;if(!(typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",o==="top"&&t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}const s='/*! tailwindcss v4.1.17 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-outline-style:solid;--tw-duration:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-purple-400:oklch(71.4% .203 305.504);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-600:oklch(55.8% .288 302.321);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--container-4xl:56rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.relative{position:relative}.right-4{right:calc(var(--spacing)*4)}.bottom-4{bottom:calc(var(--spacing)*4)}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-12{margin-top:calc(var(--spacing)*12)}.mt-16{margin-top:calc(var(--spacing)*16)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-12{margin-bottom:calc(var(--spacing)*12)}.flex{display:flex}.grid{display:grid}.table{display:table}.h-64{height:calc(var(--spacing)*64)}.min-h-screen{min-height:100vh}.w-full{width:100%}.max-w-4xl{max-width:var(--container-4xl)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.resize-none{resize:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}.gap-8{gap:calc(var(--spacing)*8)}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.rounded{border-radius:.25rem}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-700{border-color:var(--color-gray-700)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600{background-color:var(--color-green-600)}.bg-purple-500{background-color:var(--color-purple-500)}.bg-red-500{background-color:var(--color-red-500)}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-gray-50{--tw-gradient-from:var(--color-gray-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-gray-800{--tw-gradient-from:var(--color-gray-800);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-gray-900{--tw-gradient-to:var(--color-gray-900);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.p-4{padding:calc(var(--spacing)*4)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-8{padding-block:calc(var(--spacing)*8)}.py-12{padding-block:calc(var(--spacing)*12)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-blue-400{color:var(--color-blue-400)}.text-blue-600{color:var(--color-blue-600)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-400{color:var(--color-green-400)}.text-green-600{color:var(--color-green-600)}.text-purple-400{color:var(--color-purple-400)}.text-purple-600{color:var(--color-purple-600)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.placeholder-gray-400::placeholder{color:var(--color-gray-400)}.placeholder-gray-500::placeholder{color:var(--color-gray-500)}.opacity-80{opacity:.8}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-green-600:hover{background-color:var(--color-green-600)}.hover\\:bg-purple-600:hover{background-color:var(--color-purple-600)}.hover\\:bg-red-600:hover{background-color:var(--color-red-600)}}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}@media(min-width:48rem){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-duration{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}',c=e=>({set:(r,o)=>`
    <footer class="mt-16 py-12 border-t bg-gradient-to-r from-gray-50 to-white text-gray-600 border-gray-200"
                                data-ce='[{"k":"t-light-class","v":"border-gray-200 from-gray-50 to-white text-gray-600"},{"k":"t-dark-class","v":"border-gray-700 from-gray-800 to-gray-900 text-gray-400"}]'>
                            <div class="container mx-auto px-4 text-center">
                                <div class="flex flex-col items-center gap-4">
                                    <p class="text-lg">${r.data.curr.data?.foo?.txt||""}</p>
                                    <div class="flex items-center gap-3 text-sm text-gray-500"
                                         data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                                        <span>•</span>
                                        <a href="https://howtosys.com/?created_by=libfront">Created by LibFront</a> 
                                        <span>•</span>
                                        <a href="https://howtosys.com/">Powered by HowToSys</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
    `});l(s);const n=async e=>({set:async(r,o)=>{console.log(`--renderer [${r.data.curr.type}]`);const t={value:()=>r.data.curr.data.data,theme:()=>r.data.curr.data.theme||"light"};return{r:(()=>{const i={light:"bg-white text-gray-900",dark:"bg-gray-900 text-white"};return`
                    <div id='${e.f.name("root")}' class="min-h-screen transition-colors duration-300 ${i[t.theme()]}" data-ce='[{"k":"t-light-class","v":"bg-white text-gray-900"},{"k":"t-dark-class","v":"bg-gray-900 text-white"}]'>
                        <div class="container mx-auto px-4 py-8">
                            <!-- Header -->
                            <header class="text-center mb-12" data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                                <h1 class="text-4xl font-bold mb-4">Base64 Encoder/Decoder</h1>
                                <p class="text-lg opacity-80">Easily encode and decode Base64 strings</p>
                                
                                <!-- Theme Toggle -->
                                <div class="mt-6 flex justify-center">
                                    <button id="${e.f.name("theme-toggle")}" class="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${t.theme()==="dark"?"bg-gray-800 border-gray-700 text-white":"bg-gray-100 border-gray-300 text-gray-700"}" data-ce='[{"k":"t-light-class","v":"bg-gray-100 border-gray-300 text-gray-700"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700 text-white"}]'>
                                        <span>${t.theme()==="dark"?"☀️":"🌙"}</span>
                                        <span>${t.theme()==="dark"?"Light Mode":"Dark Mode"}</span>
                                    </button>
                                </div>
                            </header>

                            <!-- Main Content -->
                            <div class="max-w-4xl mx-auto">
                                <div class="grid md:grid-cols-2 gap-8">
                                    <!-- Input Section -->
                                    <div class="space-y-4">
                                        <h2 class="text-2xl font-semibold" data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>Input</h2>
                                        <div class="relative">
                                            <textarea 
                                                id="${e.f.name("input-text")}" 
                                                placeholder="Enter text to encode or Base64 to decode..."
                                                class="w-full h-64 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${t.theme()==="dark"?"bg-gray-800 border-gray-700 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"}"
                                                data-ce='[{"k":"t-light-class","v":"bg-white border-gray-300 text-gray-900 placeholder-gray-500"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700 text-white placeholder-gray-400"}]'
                                            >${t.value()}</textarea>
                                            <div class="absolute bottom-4 right-4 flex space-x-2">
                                                <button id="${e.f.name("clear-input")}" class="px-3 py-1 text-sm rounded bg-red-500 hover:bg-red-600 text-white transition-colors">
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Output Section -->
                                    <div class="space-y-4">
                                        <h2 class="text-2xl font-semibold" data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>Output</h2>
                                        <div class="relative">
                                            <textarea 
                                                id="${e.f.name("output-text")}" 
                                                readonly
                                                placeholder="Result will appear here..."
                                                class="w-full h-64 p-4 border rounded-lg resize-none ${t.theme()==="dark"?"bg-gray-800 border-gray-700 text-gray-300":"bg-gray-50 border-gray-300 text-gray-600"}"
                                                data-ce='[{"k":"t-light-class","v":"bg-gray-50 border-gray-300 text-gray-600"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700 text-gray-300"}]'
                                            ></textarea>
                                            <div class="absolute bottom-4 right-4 flex space-x-2">
                                                <button id="${e.f.name("copy-output")}" class="px-3 py-1 text-sm rounded bg-green-500 hover:bg-green-600 text-white transition-colors">
                                                    Copy
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Action Buttons -->
                                <div class="mt-8 flex flex-wrap justify-center gap-4">
                                    <button id="${e.f.name("encode-btn")}" class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors transform hover:scale-105">
                                        Encode to Base64
                                    </button>
                                    <button id="${e.f.name("decode-btn")}" class="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors transform hover:scale-105">
                                        Decode from Base64
                                    </button>
                                </div>

                                <!-- Stats -->
                                <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div class="text-center p-4 rounded-lg ${t.theme()==="dark"?"bg-gray-800":"bg-gray-100"}" data-ce='[{"k":"t-light-class","v":"bg-gray-100"},{"k":"t-dark-class","v":"bg-gray-800"}]'>
                                        <div class="text-2xl font-bold ${t.theme()==="dark"?"text-blue-400":"text-blue-600"}" data-ce='[{"k":"t-light-class","v":"text-blue-600"},{"k":"t-dark-class","v":"text-blue-400"}]' id="${e.f.name("input-length")}">0</div>
                                        <div class="text-sm opacity-80" data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>Input Length</div>
                                    </div>
                                    <div class="text-center p-4 rounded-lg ${t.theme()==="dark"?"bg-gray-800":"bg-gray-100"}" data-ce='[{"k":"t-light-class","v":"bg-gray-100"},{"k":"t-dark-class","v":"bg-gray-800"}]'>
                                        <div class="text-2xl font-bold ${t.theme()==="dark"?"text-green-400":"text-green-600"}" data-ce='[{"k":"t-light-class","v":"text-green-600"},{"k":"t-dark-class","v":"text-green-400"}]' id="${e.f.name("output-length")}">0</div>
                                        <div class="text-sm opacity-80" data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>Output Length</div>
                                    </div>
                                    <div class="text-center p-4 rounded-lg ${t.theme()==="dark"?"bg-gray-800":"bg-gray-100"}" data-ce='[{"k":"t-light-class","v":"bg-gray-100"},{"k":"t-dark-class","v":"bg-gray-800"}]'>
                                        <div class="text-2xl font-bold ${t.theme()==="dark"?"text-purple-400":"text-purple-600"}" data-ce='[{"k":"t-light-class","v":"text-purple-600"},{"k":"t-dark-class","v":"text-purple-400"}]' id="${e.f.name("status")}">Ready</div>
                                        <div class="text-sm opacity-80" data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>Status</div>
                                    </div>
                                </div>
                            </div>

                            
                            

                            <!-- Footer -->
                            ${c().set(r)}



                        </div>
                    </div>
                    `})(),head:`
        <title>Online Base64 Encoder/Decoder</title>
        <meta name="description" content="Convert data to Base64 or decode Base64-encoded data.">
        `,style:`
                    

/* Additional custom styles */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

/* Custom animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeIn 0.5s ease-out;
}

/* Ensure proper dark mode transitions */
* {
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

/* Custom scrollbar styling */
.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}

/* Dark mode scrollbar */
.dark .custom-scrollbar::-webkit-scrollbar-track {
    background: #374151;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #6b7280;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
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
                    
                    /* Dark mode scrollbar */
                    .dark textarea::-webkit-scrollbar-thumb {
                        background: #4a5568;
                    }
                    .dark textarea::-webkit-scrollbar-thumb:hover {
                        background: #718096;
                    }
                    
                    /* Smooth transitions */
                    * {
                        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
                    }
                    
                    /* Focus styles */
                    textarea:focus {
                        outline: none;
                        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
                    }
                    `}}});exports.index=n;exports.renderer=n;
