function l(r, t) {
  t === void 0 && (t = {});
  var o = t.insertAt;
  if (!(typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
    e.type = "text/css", o === "top" && a.firstChild ? a.insertBefore(e, a.firstChild) : a.appendChild(e), e.styleSheet ? e.styleSheet.cssText = r : e.appendChild(document.createTextNode(r));
  }
}
const i = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-300:oklch(80.8% .114 19.571);--color-red-400:oklch(70.4% .191 22.216);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-orange-50:oklch(98% .016 73.684);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-400:oklch(75% .183 55.934);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-800:oklch(47% .157 37.304);--color-orange-900:oklch(40.8% .123 38.172);--color-green-50:oklch(98.2% .018 155.826);--color-green-200:oklch(92.5% .084 155.995);--color-green-400:oklch(79.2% .209 151.711);--color-green-600:oklch(62.7% .194 149.214);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-400:oklch(71.4% .203 305.504);--color-purple-600:oklch(55.8% .288 302.321);--color-purple-800:oklch(43.8% .218 303.724);--color-purple-900:oklch(38.1% .176 304.987);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--container-4xl:56rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.col-span-2{grid-column:span 2/span 2}.mx-auto{margin-inline:auto}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-16{margin-top:calc(var(--spacing)*16)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-2{margin-left:calc(var(--spacing)*2)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.table{display:table}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.min-h-screen{min-height:100vh}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-8{width:calc(var(--spacing)*8)}.max-w-4xl{max-width:var(--container-4xl)}.max-w-7xl{max-width:var(--container-7xl)}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.animate-spin{animation:var(--animate-spin)}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-600{border-color:var(--color-blue-600)}.border-blue-800{border-color:var(--color-blue-800)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-600{border-color:var(--color-gray-600)}.border-gray-700{border-color:var(--color-gray-700)}.border-green-200{border-color:var(--color-green-200)}.border-green-800{border-color:var(--color-green-800)}.border-orange-200{border-color:var(--color-orange-200)}.border-orange-800{border-color:var(--color-orange-800)}.border-purple-200{border-color:var(--color-purple-200)}.border-purple-800{border-color:var(--color-purple-800)}.border-red-200{border-color:var(--color-red-200)}.border-red-800{border-color:var(--color-red-800)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-900\\/20{background-color:#1c398e33}@supports (color:color-mix(in lab,red,red)){.bg-blue-900\\/20{background-color:color-mix(in oklab,var(--color-blue-900)20%,transparent)}}.bg-blue-900\\/30{background-color:#1c398e4d}@supports (color:color-mix(in lab,red,red)){.bg-blue-900\\/30{background-color:color-mix(in oklab,var(--color-blue-900)30%,transparent)}}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-800\\/50{background-color:#1e293980}@supports (color:color-mix(in lab,red,red)){.bg-gray-800\\/50{background-color:color-mix(in oklab,var(--color-gray-800)50%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-900\\/20{background-color:#0d542b33}@supports (color:color-mix(in lab,red,red)){.bg-green-900\\/20{background-color:color-mix(in oklab,var(--color-green-900)20%,transparent)}}.bg-orange-50{background-color:var(--color-orange-50)}.bg-orange-900\\/20{background-color:#7e2a0c33}@supports (color:color-mix(in lab,red,red)){.bg-orange-900\\/20{background-color:color-mix(in oklab,var(--color-orange-900)20%,transparent)}}.bg-purple-50{background-color:var(--color-purple-50)}.bg-purple-900\\/20{background-color:#59168b33}@supports (color:color-mix(in lab,red,red)){.bg-purple-900\\/20{background-color:color-mix(in oklab,var(--color-purple-900)20%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-red-900\\/20{background-color:#82181a33}@supports (color:color-mix(in lab,red,red)){.bg-red-900\\/20{background-color:color-mix(in oklab,var(--color-red-900)20%,transparent)}}.bg-white{background-color:var(--color-white)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-blue-500{--tw-gradient-from:var(--color-blue-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-purple-600{--tw-gradient-to:var(--color-purple-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.break-words{overflow-wrap:break-word}.break-all{word-break:break-all}.text-blue-300{color:var(--color-blue-300)}.text-blue-400{color:var(--color-blue-400)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-400{color:var(--color-green-400)}.text-green-600{color:var(--color-green-600)}.text-orange-400{color:var(--color-orange-400)}.text-orange-600{color:var(--color-orange-600)}.text-purple-400{color:var(--color-purple-400)}.text-purple-600{color:var(--color-purple-600)}.text-red-300{color:var(--color-red-300)}.text-red-400{color:var(--color-red-400)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-red-800{color:var(--color-red-800)}.text-white{color:var(--color-white)}.placeholder-gray-400::placeholder{color:var(--color-gray-400)}.placeholder-gray-500::placeholder{color:var(--color-gray-500)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.hover\\:bg-blue-200:hover{background-color:var(--color-blue-200)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-blue-900\\/50:hover{background-color:#1c398e80}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-blue-900\\/50:hover{background-color:color-mix(in oklab,var(--color-blue-900)50%,transparent)}}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:40rem){.sm\\:col-span-1{grid-column:span 1/span 1}.sm\\:mt-8{margin-top:calc(var(--spacing)*8)}.sm\\:mb-3{margin-bottom:calc(var(--spacing)*3)}.sm\\:mb-4{margin-bottom:calc(var(--spacing)*4)}.sm\\:mb-6{margin-bottom:calc(var(--spacing)*6)}.sm\\:mb-8{margin-bottom:calc(var(--spacing)*8)}.sm\\:h-5{height:calc(var(--spacing)*5)}.sm\\:h-6{height:calc(var(--spacing)*6)}.sm\\:h-10{height:calc(var(--spacing)*10)}.sm\\:h-12{height:calc(var(--spacing)*12)}.sm\\:w-5{width:calc(var(--spacing)*5)}.sm\\:w-6{width:calc(var(--spacing)*6)}.sm\\:w-10{width:calc(var(--spacing)*10)}.sm\\:w-12{width:calc(var(--spacing)*12)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:gap-3{gap:calc(var(--spacing)*3)}.sm\\:gap-4{gap:calc(var(--spacing)*4)}:where(.sm\\:space-y-0>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*0)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*0)*calc(1 - var(--tw-space-y-reverse)))}:where(.sm\\:space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.sm\\:space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.sm\\:space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.sm\\:space-x-3>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*3)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-x-reverse)))}:where(.sm\\:space-x-4>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*4)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-2xl{border-radius:var(--radius-2xl)}.sm\\:p-4{padding:calc(var(--spacing)*4)}.sm\\:p-6{padding:calc(var(--spacing)*6)}.sm\\:px-4{padding-inline:calc(var(--spacing)*4)}.sm\\:px-6{padding-inline:calc(var(--spacing)*6)}.sm\\:py-3{padding-block:calc(var(--spacing)*3)}.sm\\:py-4{padding-block:calc(var(--spacing)*4)}.sm\\:py-6{padding-block:calc(var(--spacing)*6)}.sm\\:py-8{padding-block:calc(var(--spacing)*8)}.sm\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.sm\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.sm\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.sm\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:gap-4{gap:calc(var(--spacing)*4)}.lg\\:px-6{padding-inline:calc(var(--spacing)*6)}.lg\\:px-8{padding-inline:calc(var(--spacing)*8)}.lg\\:py-8{padding-block:calc(var(--spacing)*8)}.lg\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}}@media(prefers-color-scheme:dark){.dark\\:border-blue-800{border-color:var(--color-blue-800)}.dark\\:border-gray-600{border-color:var(--color-gray-600)}.dark\\:border-gray-700{border-color:var(--color-gray-700)}.dark\\:border-green-800{border-color:var(--color-green-800)}.dark\\:border-orange-800{border-color:var(--color-orange-800)}.dark\\:border-purple-800{border-color:var(--color-purple-800)}.dark\\:border-red-800{border-color:var(--color-red-800)}.dark\\:bg-blue-900\\/20{background-color:#1c398e33}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-blue-900\\/20{background-color:color-mix(in oklab,var(--color-blue-900)20%,transparent)}}.dark\\:bg-blue-900\\/30{background-color:#1c398e4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-blue-900\\/30{background-color:color-mix(in oklab,var(--color-blue-900)30%,transparent)}}.dark\\:bg-gray-700{background-color:var(--color-gray-700)}.dark\\:bg-gray-800{background-color:var(--color-gray-800)}.dark\\:bg-gray-800\\/50{background-color:#1e293980}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-gray-800\\/50{background-color:color-mix(in oklab,var(--color-gray-800)50%,transparent)}}.dark\\:bg-gray-900{background-color:var(--color-gray-900)}.dark\\:bg-green-900\\/20{background-color:#0d542b33}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-green-900\\/20{background-color:color-mix(in oklab,var(--color-green-900)20%,transparent)}}.dark\\:bg-orange-900\\/20{background-color:#7e2a0c33}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-orange-900\\/20{background-color:color-mix(in oklab,var(--color-orange-900)20%,transparent)}}.dark\\:bg-purple-900\\/20{background-color:#59168b33}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-purple-900\\/20{background-color:color-mix(in oklab,var(--color-purple-900)20%,transparent)}}.dark\\:bg-red-900\\/20{background-color:#82181a33}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-red-900\\/20{background-color:color-mix(in oklab,var(--color-red-900)20%,transparent)}}.dark\\:text-blue-300{color:var(--color-blue-300)}.dark\\:text-blue-400{color:var(--color-blue-400)}.dark\\:text-gray-300{color:var(--color-gray-300)}.dark\\:text-gray-400{color:var(--color-gray-400)}.dark\\:text-green-400{color:var(--color-green-400)}.dark\\:text-orange-400{color:var(--color-orange-400)}.dark\\:text-purple-400{color:var(--color-purple-400)}.dark\\:text-red-300{color:var(--color-red-300)}.dark\\:text-red-400{color:var(--color-red-400)}.dark\\:text-white{color:var(--color-white)}.dark\\:placeholder-gray-400::placeholder{color:var(--color-gray-400)}@media(hover:hover){.dark\\:hover\\:bg-blue-900\\/50:hover{background-color:#1c398e80}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-blue-900\\/50:hover{background-color:color-mix(in oklab,var(--color-blue-900)50%,transparent)}}.dark\\:hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}}}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-duration{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}';
l(i);
const s = async (r) => ({
  set: async (t, o) => (console.log(`--renderer [${t.data.curr.type}]`), {
    r: `
          <div id="${r.f.name("root")}" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300" 
          data-ce='[{"k":"t-light-class","v":"bg-white"},{"k":"t-dark-class","v":"bg-gray-900"}]'
          >
            <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700" 
                    data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"}, {"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2 sm:space-x-3">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h1 class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white truncate"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'
                      >SSL Checker</h1>
                      <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate"
                      data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'
                      >Verify SSL certificate status</p>
                    </div>
                  </div>
                  
                  <button id="${r.f.name("theme-toggle")}" 
                          class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-shrink-0 ml-2"
                          data-ce='[{"k":"t-light-class","v":"bg-gray-100 text-gray-600 hover:bg-gray-200"}, {"k":"t-dark-class","v":"bg-gray-700 text-gray-300 hover:bg-gray-600"}]'>
                    <svg id="${r.f.name("theme-sun")}" class="w-4 h-4 sm:w-5 sm:h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    <svg id="${r.f.name("theme-moon")}" class="w-4 h-4 sm:w-5 sm:h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </header>

            <main class="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
              <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6 sm:mb-8"
                   data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"}, {"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                <div class="mb-4 sm:mb-6">
                  <label for="${r.f.name("domain-input")}" 
                         class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3"
                          data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                         >
                    Domain Name
                  </label>
                  <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <input 
                      type="text" 
                      id="${r.f.name("domain-input")}"
                      placeholder="example.com or https://example.com"
                      class="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      data-ce='[{"k":"t-light-class","v":"border-gray-300 bg-white text-gray-900 placeholder-gray-500"}, {"k":"t-dark-class","v":"border-gray-600 bg-gray-700 text-white placeholder-gray-400"}]'
                    >
                    <button 
                      id="${r.f.name("check-btn")}"
                      class="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span class="truncate">Check SSL</span>
                    </button>
                  </div>
                </div>

                <div id="${r.f.name("loading")}" class="hidden flex items-center justify-center py-6 sm:py-8">
                  <div class="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600"></div>
                </div>
              </div>

              <div id="${r.f.name("results")}" class="hidden space-y-4 sm:space-y-6">
                <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
                     data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"}, {"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                  <h2 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                    Certificate Status
                  </h2>
                  <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                    <div class="text-center p-3 sm:p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                         data-ce='[{"k":"t-light-class","v":"bg-green-50 border-green-200"}, {"k":"t-dark-class","v":"bg-green-900/20 border-green-800"}]'>
                      <div class="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400" id="${r.f.name("status-days")}"
                           data-ce='[{"k":"t-light-class","v":"text-green-600"},{"k":"t-dark-class","v":"text-green-400"}]'>0</div>
                      <div class="text-xs sm:text-sm text-green-600 dark:text-green-400 mt-1"
                           data-ce='[{"k":"t-light-class","v":"text-green-600"},{"k":"t-dark-class","v":"text-green-400"}]'>Days Left</div>
                    </div>
                    <div class="text-center p-3 sm:p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                         data-ce='[{"k":"t-light-class","v":"bg-blue-50 border-blue-200"}, {"k":"t-dark-class","v":"bg-blue-900/20 border-blue-800"}]'>
                      <div class="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400" id="${r.f.name("status-valid")}"
                           data-ce='[{"k":"t-light-class","v":"text-blue-600"},{"k":"t-dark-class","v":"text-blue-400"}]'>No</div>
                      <div class="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mt-1"
                           data-ce='[{"k":"t-light-class","v":"text-blue-600"},{"k":"t-dark-class","v":"text-blue-400"}]'>Is Valid</div>
                    </div>
                    <div class="text-center p-3 sm:p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 col-span-2 sm:col-span-1"
                         data-ce='[{"k":"t-light-class","v":"bg-purple-50 border-purple-200"}, {"k":"t-dark-class","v":"bg-purple-900/20 border-purple-800"}]'>
                      <div id="${r.f.name("status-issuer")}" class="text-sm sm:text-lg font-semibold text-purple-600 dark:text-purple-400 truncate px-1"
                           data-ce='[{"k":"t-light-class","v":"text-purple-600"},{"k":"t-dark-class","v":"text-purple-400"}]'>Unknown</div>
                      <div class="text-xs sm:text-sm text-purple-600 dark:text-purple-400 mt-1"
                           data-ce='[{"k":"t-light-class","v":"text-purple-600"},{"k":"t-dark-class","v":"text-purple-400"}]'>Issuer</div>
                    </div>
                    <div class="text-center p-3 sm:p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 col-span-2 sm:col-span-1"
                         data-ce='[{"k":"t-light-class","v":"bg-orange-50 border-orange-200"}, {"k":"t-dark-class","v":"bg-orange-900/20 border-orange-800"}]'>
                      <div id="${r.f.name("status-expires")}" class="text-sm sm:text-lg font-semibold text-orange-600 dark:text-orange-400 truncate px-1"
                           data-ce='[{"k":"t-light-class","v":"text-orange-600"},{"k":"t-dark-class","v":"text-orange-400"}]'>Unknown</div>
                      <div class="text-xs sm:text-sm text-orange-600 dark:text-orange-400 mt-1"
                           data-ce='[{"k":"t-light-class","v":"text-orange-600"},{"k":"t-dark-class","v":"text-orange-400"}]'>Expires On</div>
                    </div>
                  </div>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
                     data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"}, {"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                  <h2 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                    Certificate Details
                  </h2>
                  <div class="space-y-3 sm:space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div class="space-y-1 sm:space-y-2">
                        <label class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400"
                               data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>Domain</label>
                        <div id="${r.f.name("detail-domain")}" class="text-gray-900 dark:text-white font-mono text-xs sm:text-sm break-all"
                             data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>-</div>
                      </div>
                      <div class="space-y-1 sm:space-y-2">
                        <label class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400"
                               data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>Valid From</label>
                        <div id="${r.f.name("detail-valid-from")}" class="text-gray-900 dark:text-white font-mono text-xs sm:text-sm break-all"
                             data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>-</div>
                      </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div class="space-y-1 sm:space-y-2">
                        <label class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400"
                               data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>Valid To</label>
                        <div id="${r.f.name("detail-valid-to")}" class="text-gray-900 dark:text-white font-mono text-xs sm:text-sm break-all"
                             data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>-</div>
                      </div>
                      <div class="space-y-1 sm:space-y-2">
                        <label class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400"
                               data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>Signature Algorithm</label>
                        <div id="${r.f.name("detail-algorithm")}" class="text-gray-900 dark:text-white font-mono text-xs sm:text-sm break-all"
                             data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="${r.f.name("error")}" class="hidden bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6"
                   data-ce='[{"k":"t-light-class","v":"bg-red-50 border-red-200"}, {"k":"t-dark-class","v":"bg-red-900/20 border-red-800"}]'>
                <div class="flex items-start space-x-2 sm:space-x-3">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       data-ce='[{"k":"t-light-class","v":"text-red-600"},{"k":"t-dark-class","v":"text-red-400"}]'>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-base sm:text-lg font-medium text-red-800 dark:text-red-300" id="${r.f.name("error-title")}"
                        data-ce='[{"k":"t-light-class","v":"text-red-800"},{"k":"t-dark-class","v":"text-red-300"}]'>Error</h3>
                    <p class="text-red-700 dark:text-red-400 mt-1 text-sm sm:text-base break-words" id="${r.f.name("error-message")}"
                       data-ce='[{"k":"t-light-class","v":"text-red-700"},{"k":"t-dark-class","v":"text-red-400"}]'></p>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mt-6 sm:mt-8"
                   data-ce='[{"k":"t-light-class","v":"bg-gray-50 border-gray-200"}, {"k":"t-dark-class","v":"bg-gray-800/50 border-gray-700"}]'>
                <h3 class="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-3 sm:mb-4"
                 data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                >Try these examples:</h3>
                <div id="${r.f.name("eg-btns")}" class="flex flex-wrap gap-2">
                  <button class="quick-domain px-3 py-1.5 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                          data-domain="google.com"
                           data-ce='[{"k":"t-light-class","v":"text-blue-700 bg-blue-100 hover:bg-blue-200"},{"k":"t-dark-class","v":"text-blue-300 bg-blue-900/30 hover:bg-blue-900/50"}]'
                          
                          >google.com</button>
                  <button class="quick-domain px-3 py-1.5 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                          data-domain="github.com"
                           data-ce='[{"k":"t-light-class","v":"text-blue-700 bg-blue-100 hover:bg-blue-200"},{"k":"t-dark-class","v":"text-blue-300 bg-blue-900/30 hover:bg-blue-900/50"}]'
                          
                          >github.com</button>
                  <button class="quick-domain px-3 py-1.5 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                          data-domain="howtosys.com"
                           data-ce='[{"k":"t-light-class","v":"text-blue-700 bg-blue-100 hover:bg-blue-200"},{"k":"t-dark-class","v":"text-blue-300 bg-blue-900/30 hover:bg-blue-900/50"}]'
                          
                          >howtosys.com</button>
                  <button class="quick-domain px-3 py-1.5 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                          data-domain="wikipedia.org"
                           data-ce='[{"k":"t-light-class","v":"text-blue-700 bg-blue-100 hover:bg-blue-200"},{"k":"t-dark-class","v":"text-blue-300 bg-blue-900/30 hover:bg-blue-900/50"}]'
                          
                          
                          >wikipedia.org</button>
                </div>
              </div>
            </main>


            
            <!-- Footer -->
            <footer 
                class="mt-16 text-center text-gray-500"
                data-ce='[{"k":"t-light-class","v":"text-gray-500"}, {"k":"t-dark-class","v":"text-gray-400"}]'
              >
                <!--p>Made with ❤️ using TypeScript & Tailwind CSS</p-->
                <p>${t.data.curr.data?.foo?.txt || ""}</p>
            </footer>




            
          </div>
          `,
    head: `
        <title>Online SSL Checker</title>
        <meta name="description" content="Verify SSL certificate, its issue date, and validity.">
        `,
    style: `
          
          @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

          
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 4px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 2px;
          }
          
          .dark ::-webkit-scrollbar-track {
            background: #374151;
          }
          
          .dark ::-webkit-scrollbar-thumb {
            background: #6b7280;
          }
          
          /* Smooth transitions */
          * {
            transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          }
          
          /* Focus styles for mobile */
          input:focus, button:focus {
            outline: none;
            ring: 2px;
            ring-color: rgba(59, 130, 246, 0.5);
          }
          
          /* Better touch targets for mobile */
          @media (max-width: 640px) {
            button, 
            .quick-domain {
              min-height: 44px;
              min-width: 44px;
            }
            
            input, 
            select, 
            textarea {
              font-size: 16px; /* Prevents zoom on iOS */
            }
          }
          
          /* Improved responsive text sizing */
          html {
            -webkit-text-size-adjust: 100%;
          }
          
          /* Prevent horizontal scroll */
          body {
            overflow-x: hidden;
          }
          
          /* Better spacing for mobile */
          @media (max-width: 640px) {
            .space-y-3 > * + * {
              margin-top: 0.75rem;
            }
            
            .space-y-4 > * + * {
              margin-top: 1rem;
            }
          }
          `
  })
});
export {
  s as index,
  s as renderer
};
