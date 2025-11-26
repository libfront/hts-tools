"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=t=>({set:(r,o)=>`
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
    `});function n(t,r){r===void 0&&(r={});var o=r.insertAt;if(!(typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",o==="top"&&a.firstChild?a.insertBefore(e,a.firstChild):a.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}}const l='@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-green-500:oklch(72.3% .219 149.579);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-purple-600:oklch(55.8% .288 302.321);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--container-4xl:56rem;--container-7xl:80rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.fixed{position:fixed}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-16{margin-top:calc(var(--spacing)*16)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-12{margin-bottom:calc(var(--spacing)*12)}.ml-2{margin-left:calc(var(--spacing)*2)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.table{display:table}.h-2{height:calc(var(--spacing)*2)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-full{height:100%}.min-h-\\[3rem\\]{min-height:3rem}.min-h-screen{min-height:100vh}.w-5{width:calc(var(--spacing)*5)}.w-8{width:calc(var(--spacing)*8)}.w-full{width:100%}.max-w-4xl{max-width:var(--container-4xl)}.max-w-7xl{max-width:var(--container-7xl)}.max-w-none{max-width:none}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.appearance-none{appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-3>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*3)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-x-reverse)))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-800{border-color:var(--color-blue-800)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-600{border-color:var(--color-gray-600)}.border-gray-700{border-color:var(--color-gray-700)}.border-red-200{border-color:var(--color-red-200)}.border-red-800{border-color:var(--color-red-800)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-900\\/20{background-color:#1c398e33}@supports (color:color-mix(in lab,red,red)){.bg-blue-900\\/20{background-color:color-mix(in oklab,var(--color-blue-900)20%,transparent)}}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-gray-600{background-color:var(--color-gray-600)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-red-50{background-color:var(--color-red-50)}.bg-red-900\\/20{background-color:#82181a33}@supports (color:color-mix(in lab,red,red)){.bg-red-900\\/20{background-color:color-mix(in oklab,var(--color-red-900)20%,transparent)}}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-blue-500{--tw-gradient-from:var(--color-blue-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-gray-50{--tw-gradient-from:var(--color-gray-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-gray-800{--tw-gradient-from:var(--color-gray-800);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-gray-900{--tw-gradient-to:var(--color-gray-900);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-purple-600{--tw-gradient-to:var(--color-purple-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-6{padding:calc(var(--spacing)*6)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-8{padding-block:calc(var(--spacing)*8)}.py-12{padding-block:calc(var(--spacing)*12)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-all{word-break:break-all}.text-blue-100{color:var(--color-blue-100)}.text-blue-200{color:var(--color-blue-200)}.text-blue-600{color:var(--color-blue-600)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-500{color:var(--color-green-500)}.text-red-100{color:var(--color-red-100)}.text-red-200{color:var(--color-red-200)}.text-red-500{color:var(--color-red-500)}.text-red-800{color:var(--color-red-800)}.text-red-900{color:var(--color-red-900)}.text-white{color:var(--color-white)}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.hover\\:from-blue-600:hover{--tw-gradient-from:var(--color-blue-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:to-purple-700:hover{--tw-gradient-to:var(--color-purple-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}@media(min-width:40rem){.sm\\:px-6{padding-inline:calc(var(--spacing)*6)}}@media(min-width:48rem){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@media(prefers-color-scheme:dark){.dark\\:block{display:block}.dark\\:hidden{display:none}.dark\\:border-gray-600{border-color:var(--color-gray-600)}.dark\\:bg-gray-700{background-color:var(--color-gray-700)}.dark\\:text-gray-300{color:var(--color-gray-300)}}}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:#888;border-radius:3px}::-webkit-scrollbar-thumb:hover{background:#555}*{transition:background-color .2s,border-color .2s,color .2s}.focus-outline:focus{outline-offset:2px;outline:2px solid #3b82f6}@keyframes slideIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.animate-slide-in{animation:.3s ease-out slideIn}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}';n(l);const i=async t=>({set:async(r,o)=>(console.log(`--renderer [${r.data.curr.type}]`),{r:`
          <div id="${t.f.name("root")}" class="min-h-screen bg-white"
            data-ce='[{"k":"t-light-class","v":"bg-white"},{"k":"t-dark-class","v":"bg-gray-900"}]'>
            
            <!-- Header -->
            <header class="shadow-sm border-b bg-white border-gray-200"
              data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <h1 class="text-2xl font-bold"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                      Secure Password Generator
                    </h1>
                  </div>
                  <button id="${t.f.name("theme-toggle")}" 
                    class="p-2 rounded-lg focus-outline bg-gray-100 text-gray-600 hover:bg-gray-200"
                    data-ce='[{"k":"t-light-class","v":"bg-gray-100 text-gray-600 hover:bg-gray-200"},{"k":"t-dark-class","v":"bg-gray-700 text-gray-300 hover:bg-gray-600"}]'
                    aria-label="Toggle theme">
                    <svg class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    <svg class="w-5 h-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </header>

            <!-- Main Content -->
            <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <!-- Generator Section -->
              <section class="mb-12 animate-slide-in">
                <div class="rounded-xl shadow-lg border p-6 bg-white border-gray-200"
                  data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                  
                  <h2 class="text-xl font-semibold mb-6"
                    data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                    Generate Secure Password
                  </h2>
                  
                  <!-- Password Display -->
                  <div class="mb-6">
                    <div class="flex items-center space-x-3 mb-4">
                      <div id="${t.f.name("password-display")}" 
                        class="flex-1 border rounded-lg px-4 py-3 text-lg font-mono break-all min-h-[3rem] flex items-center bg-gray-50 border-gray-300 text-gray-900"
                        data-ce='[{"k":"t-light-class","v":"bg-gray-50 border-gray-300 text-gray-900"},{"k":"t-dark-class","v":"bg-gray-700 border-gray-600 text-white"}]'>
                        Click Generate to create a password
                      </div>
                      <button id="${t.f.name("copy-btn")}" 
                        class="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors focus-outline"
                        aria-label="Copy password">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                      </button>
                    </div>
                    <div class="flex items-center justify-between text-sm"
                      data-ce='[{"k":"t-light-class","v":"text-gray-600"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                      <span>Strength: <span id="${t.f.name("strength-text")}" class="font-medium">-</span></span>
                      <span>Length: <span id="${t.f.name("length-text")}" class="font-medium">12</span> characters</span>
                    </div>
                  </div>

                  <!-- Strength Meter -->
                  <div class="mb-6">
                    <div class="h-2 rounded-full overflow-hidden bg-gray-200"
                      data-ce='[{"k":"t-light-class","v":"bg-gray-200"},{"k":"t-dark-class","v":"bg-gray-700"}]'>
                      <div id="${t.f.name("strength-meter")}" 
                        class="h-full transition-all duration-300"
                        data-ce='[{"k":"t-light-class","v":"bg-gray-400"},{"k":"t-dark-class","v":"bg-gray-600"}]'></div>
                    </div>
                  </div>

                  <!-- Options -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <!-- Length Slider -->
                    <div>
                      <label class="block text-sm font-medium mb-2"
                        data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                        Password Length: <span id="${t.f.name("length-value")}" class="font-mono">12</span>
                      </label>
                      <input id="${t.f.name("length-slider")}" 
                        type="range" min="8" max="32" value="12" 
                        class="w-full h-2 rounded-lg appearance-none cursor-pointer slider bg-gray-200"
                        data-ce='[{"k":"t-light-class","v":"bg-gray-200"},{"k":"t-dark-class","v":"bg-gray-700"}]'>
                    </div>

                    <!-- Character Types -->
                    <div class="space-y-3">
                      <label class="flex items-center">
                        <input id="${t.f.name("uppercase")}" type="checkbox" checked 
                          class="rounded text-blue-600 focus:ring-blue-500"
                          data-ce='[{"k":"t-light-class","v":"border-gray-300 dark:border-gray-600"},{"k":"t-dark-class","v":"dark:bg-gray-700"}]'>
                        <span class="ml-2 text-sm"
                          data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                          Uppercase Letters (A-Z)
                        </span>
                      </label>
                      <label class="flex items-center">
                        <input id="${t.f.name("lowercase")}" type="checkbox" checked 
                          class="rounded text-blue-600 focus:ring-blue-500"
                          data-ce='[{"k":"t-light-class","v":"border-gray-300 dark:border-gray-600"},{"k":"t-dark-class","v":"dark:bg-gray-700"}]'>
                        <span class="ml-2 text-sm"
                          data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                          Lowercase Letters (a-z)
                        </span>
                      </label>
                      <label class="flex items-center">
                        <input id="${t.f.name("numbers")}" type="checkbox" checked 
                          class="rounded text-blue-600 focus:ring-blue-500"
                          data-ce='[{"k":"t-light-class","v":"border-gray-300 dark:border-gray-600"},{"k":"t-dark-class","v":"dark:bg-gray-700"}]'>
                        <span class="ml-2 text-sm"
                          data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                          Numbers (0-9)
                        </span>
                      </label>
                      <label class="flex items-center">
                        <input id="${t.f.name("symbols")}" type="checkbox" 
                          class="rounded text-blue-600 focus:ring-blue-500"
                          data-ce='[{"k":"t-light-class","v":"border-gray-300 dark:border-gray-600"},{"k":"t-dark-class","v":"dark:bg-gray-700"}]'>
                        <span class="ml-2 text-sm"
                          data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                          Symbols (!@#$%^&*)
                        </span>
                      </label>
                    </div>
                  </div>

                  <!-- Generate Button -->
                  <button id="${t.f.name("generate-btn")}" 
                    class="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus-outline">
                    Generate Secure Password
                  </button>
                </div>
              </section>

              <!-- Content Sections -->
              <section class="mb-12">
                <h2 class="text-2xl font-bold mb-6"
                  data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                  Why Strong Passwords Matter
                </h2>
                <div class="prose prose-lg dark:prose-invert max-w-none">
                  <p class="mb-4"
                    data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                    In today's digital landscape, password security is more critical than ever. Cyber threats are evolving rapidly, and weak passwords remain one of the most common vulnerabilities exploited by attackers. A strong, unique password for each of your accounts is your first line of defense against unauthorized access, data breaches, and identity theft.
                  </p>
                  <p class="mb-4"
                    data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                    Our password generator creates cryptographically secure passwords using advanced algorithms that ensure true randomness. Unlike human-generated passwords that often follow predictable patterns, our tool produces passwords that are virtually impossible to guess through brute force attacks or social engineering.
                  </p>
                  <p class="mb-4"
                    data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                    The importance of password security extends beyond personal accounts. For businesses, strong password policies are essential for protecting sensitive corporate data, customer information, and intellectual property. A single compromised password can lead to devastating consequences, including financial losses, reputational damage, and legal liabilities.
                  </p>
                  <p class="mb-4"
                    data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                    Modern password cracking techniques have become increasingly sophisticated. Attackers use methods like dictionary attacks, rainbow tables, and advanced brute-force algorithms that can test millions of password combinations per second. This makes traditional "easy-to-remember" passwords extremely vulnerable to compromise.
                  </p>
                </div>
              </section>

              <section class="mb-12">
                <h2 class="text-2xl font-bold mb-6"
                  data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                  Best Practices for Password Security
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="rounded-lg p-6 border bg-blue-50 border-blue-200"
                    data-ce='[{"k":"t-light-class","v":"bg-blue-50 border-blue-200"},{"k":"t-dark-class","v":"bg-blue-900/20 border-blue-800"}]'>
                    <h3 class="text-lg font-semibold mb-3"
                      data-ce='[{"k":"t-light-class","v":"text-blue-900"},{"k":"t-dark-class","v":"text-blue-100"}]'>
                      Do's
                    </h3>
                    <ul class="space-y-2"
                      data-ce='[{"k":"t-light-class","v":"text-blue-800"},{"k":"t-dark-class","v":"text-blue-200"}]'>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Use at least 12 characters
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Mix character types
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Use unique passwords for each account
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Use a password manager
                      </li>
                    </ul>
                  </div>
                  <div class="rounded-lg p-6 border bg-red-50 border-red-200"
                    data-ce='[{"k":"t-light-class","v":"bg-red-50 border-red-200"},{"k":"t-dark-class","v":"bg-red-900/20 border-red-800"}]'>
                    <h3 class="text-lg font-semibold mb-3"
                      data-ce='[{"k":"t-light-class","v":"text-red-900"},{"k":"t-dark-class","v":"text-red-100"}]'>
                      Don'ts
                    </h3>
                    <ul class="space-y-2"
                      data-ce='[{"k":"t-light-class","v":"text-red-800"},{"k":"t-dark-class","v":"text-red-200"}]'>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Don't use personal information
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Avoid dictionary words
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Don't reuse passwords
                      </li>
                      <li class="flex items-start">
                        <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Don't write passwords down
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <!-- FAQ Section -->
              <section class="mb-12">
                <h2 class="text-2xl font-bold mb-6"
                  data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                  Frequently Asked Questions
                </h2>
                <div class="space-y-4">
                  <div class="rounded-lg p-6 border bg-white border-gray-200"
                    data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                    <h3 class="text-lg font-semibold mb-2"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                      How does the password generator work?
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300"
                    data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                    >
                      Our password generator uses cryptographically secure random number generation to create truly random passwords. It combines various character sets based on your selected options (uppercase, lowercase, numbers, symbols) to generate passwords that are highly secure and resistant to brute-force attacks. The algorithm ensures that each character position is completely independent and unpredictable.
                    </p>
                  </div>
                  <div class="rounded-lg p-6 border bg-white border-gray-200"
                    data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                    <h3 class="text-lg font-semibold mb-2"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                      Are the generated passwords stored anywhere?
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300"
                    data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                    >
                      No, all password generation happens locally in your browser. We never send your passwords over the internet or store them on our servers. This ensures complete privacy and security for your generated passwords. The entire process occurs in your device's memory and is discarded once you leave the page or generate a new password.
                    </p>
                  </div>
                  <div class="rounded-lg p-6 border bg-white border-gray-200"
                    data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                    <h3 class="text-lg font-semibold mb-2"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                      What makes a password truly secure?
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300"
                    data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                    >
                      A secure password has sufficient length (12+ characters), uses a mix of character types, avoids predictable patterns or personal information, and is unique to each account. Our generator ensures all these criteria are met while maintaining true randomness. Additionally, entropy (randomness) and resistance to common attack vectors are key factors in password security.
                    </p>
                  </div>
                  <div class="rounded-lg p-6 border bg-white border-gray-200"
                    data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                    <h3 class="text-lg font-semibold mb-2"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                      Can I use this for all my online accounts?
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300"
                    data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                    >
                      Absolutely! Our password generator is perfect for creating secure passwords for email accounts, social media, banking, and any other online services. We recommend using a password manager to securely store and manage all your unique passwords. This tool is particularly useful for accounts containing sensitive personal or financial information.
                    </p>
                  </div>
                  <div class="rounded-lg p-6 border bg-white border-gray-200"
                    data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                    <h3 class="text-lg font-semibold mb-2"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                      How often should I change my passwords?
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300"
                    data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                    >
                      Current security best practices suggest changing passwords when there's evidence of compromise, rather than on a fixed schedule. However, using unique passwords for each account is more important than frequent changes. Regular security audits are recommended. For high-security accounts, consider changing passwords every 3-6 months as an additional precaution.
                    </p>
                  </div>
                  <div class="rounded-lg p-6 border bg-white border-gray-200"
                    data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                    <h3 class="text-lg font-semibold mb-2"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                      What if a website has specific password requirements?
                    </h3>
                    <p class="text-gray-700 dark:text-gray-300"
                    data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                    >
                      Our generator is flexible enough to accommodate most website requirements. You can adjust the length and character types to meet specific criteria. If you encounter unique requirements, you can generate a longer password and modify it slightly while maintaining security. The tool allows you to customize exactly which character sets are included in your password.
                    </p>
                  </div>
                </div>
              </section>
            </main>

            <!-- Footer -->
            ${s().set(r)}



          </div>
          `,head:`
          <title>Secure Password Generator - Create Strong & Random Passwords Online</title>
          <meta name="description" content="Generate cryptographically secure random passwords with our free online tool. Create strong, unique passwords for all your accounts with customizable length and character options.">
          <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Secure Password Generator"
          }
          <\/script>
          `,style:`
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .slider::-webkit-slider-thumb:hover {
            background: #2563eb;
          }

          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .${t.f.name("text")} {
            background: transparent;
          }

          /* Strength meter colors */
          .strength-weak {
            background: linear-gradient(90deg, #ef4444, #f59e0b);
          }

          .strength-medium {
            background: linear-gradient(90deg, #f59e0b, #eab308);
          }

          .strength-strong {
            background: linear-gradient(90deg, #eab308, #22c55e);
          }

          .strength-very-strong {
            background: linear-gradient(90deg, #22c55e, #16a34a);
          }
          `})});exports.index=i;exports.renderer=i;
