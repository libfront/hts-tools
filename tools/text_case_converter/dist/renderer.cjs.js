"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function l(t,e){e===void 0&&(e={});var i=e.insertAt;if(!(typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",i==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}const d='@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-orange-500:oklch(70.5% .213 47.604);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-900:oklch(37.9% .146 265.522);--color-indigo-500:oklch(58.5% .233 277.117);--color-indigo-800:oklch(39.8% .195 277.366);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-500:oklch(65.6% .241 354.308);--color-pink-600:oklch(59.2% .249 .584);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-4xl:56rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-light:300;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-black:900;--leading-tight:1.25;--leading-relaxed:1.625;--radius-xl:.75rem;--radius-2xl:1rem;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-4{top:calc(var(--spacing)*4)}.right-0{right:calc(var(--spacing)*0)}.right-4{right:calc(var(--spacing)*4)}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-4{bottom:calc(var(--spacing)*4)}.left-0{left:calc(var(--spacing)*0)}.z-10{z-index:10}.z-50{z-index:50}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-16{margin-top:calc(var(--spacing)*16)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-12{margin-bottom:calc(var(--spacing)*12)}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-12{height:calc(var(--spacing)*12)}.h-16{height:calc(var(--spacing)*16)}.h-32{height:calc(var(--spacing)*32)}.h-48{height:calc(var(--spacing)*48)}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-3{width:calc(var(--spacing)*3)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-12{width:calc(var(--spacing)*12)}.w-16{width:calc(var(--spacing)*16)}.w-32{width:calc(var(--spacing)*32)}.w-48{width:calc(var(--spacing)*48)}.w-full{width:100%}.max-w-4xl{max-width:var(--container-4xl)}.max-w-none{max-width:none}.flex-1{flex:1}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-1\\/3{--tw-translate-x:calc(1/3*100%);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-1\\/3{--tw-translate-y:calc(1/3*100%);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.resize-none{resize:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-blue-500{border-color:var(--color-blue-500)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300\\/50{border-color:#d1d5dc80}@supports (color:color-mix(in lab,red,red)){.border-gray-300\\/50{border-color:color-mix(in oklab,var(--color-gray-300)50%,transparent)}}.border-gray-600{border-color:var(--color-gray-600)}.border-gray-600\\/50{border-color:#4a556580}@supports (color:color-mix(in lab,red,red)){.border-gray-600\\/50{border-color:color-mix(in oklab,var(--color-gray-600)50%,transparent)}}.border-gray-700{border-color:var(--color-gray-700)}.border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.bg-black\\/10{background-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.bg-black\\/10{background-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-gray-800\\/50{background-color:#1e293980}@supports (color:color-mix(in lab,red,red)){.bg-gray-800\\/50{background-color:color-mix(in oklab,var(--color-gray-800)50%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-white{background-color:var(--color-white)}.bg-white\\/5{background-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.bg-white\\/5{background-color:color-mix(in oklab,var(--color-white)5%,transparent)}}.bg-white\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.bg-white\\/10{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.bg-white\\/20{background-color:#fff3}@supports (color:color-mix(in lab,red,red)){.bg-white\\/20{background-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white)50%,transparent)}}.bg-gradient-to-b{--tw-gradient-position:to bottom in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-blue-500{--tw-gradient-from:var(--color-blue-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-blue-700{--tw-gradient-from:var(--color-blue-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-gray-50{--tw-gradient-from:var(--color-gray-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-gray-100{--tw-gradient-from:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-gray-500{--tw-gradient-from:var(--color-gray-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-gray-700{--tw-gradient-from:var(--color-gray-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-gray-800{--tw-gradient-from:var(--color-gray-800);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-green-500{--tw-gradient-from:var(--color-green-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-green-600{--tw-gradient-from:var(--color-green-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-indigo-500{--tw-gradient-from:var(--color-indigo-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-orange-500{--tw-gradient-from:var(--color-orange-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-purple-500{--tw-gradient-from:var(--color-purple-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-red-500{--tw-gradient-from:var(--color-red-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-white{--tw-gradient-from:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.via-purple-700{--tw-gradient-via:var(--color-purple-700);--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-blue-200{--tw-gradient-to:var(--color-blue-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-blue-500{--tw-gradient-to:var(--color-blue-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-emerald-600{--tw-gradient-to:var(--color-emerald-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-emerald-700{--tw-gradient-to:var(--color-emerald-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-gray-50{--tw-gradient-to:var(--color-gray-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-gray-200{--tw-gradient-to:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-gray-600{--tw-gradient-to:var(--color-gray-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-gray-800{--tw-gradient-to:var(--color-gray-800);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-gray-900{--tw-gradient-to:var(--color-gray-900);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-indigo-800{--tw-gradient-to:var(--color-indigo-800);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-pink-500{--tw-gradient-to:var(--color-pink-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-pink-600{--tw-gradient-to:var(--color-pink-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-purple-500{--tw-gradient-to:var(--color-purple-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-red-500{--tw-gradient-to:var(--color-red-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-1{padding-block:calc(var(--spacing)*1)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-8{padding-block:calc(var(--spacing)*8)}.py-9{padding-block:calc(var(--spacing)*9)}.py-12{padding-block:calc(var(--spacing)*12)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-black{--tw-font-weight:var(--font-weight-black);font-weight:var(--font-weight-black)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.whitespace-pre-wrap{white-space:pre-wrap}.text-blue-100{color:var(--color-blue-100)}.text-blue-200{color:var(--color-blue-200)}.text-blue-500{color:var(--color-blue-500)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.placeholder-gray-400::placeholder{color:var(--color-gray-400)}.placeholder-gray-500::placeholder{color:var(--color-gray-500)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-4{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(4px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-blue-500\\/20{--tw-ring-color:#3080ff33}@supports (color:color-mix(in lab,red,red)){.ring-blue-500\\/20{--tw-ring-color:color-mix(in oklab,var(--color-blue-500)20%,transparent)}}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}.group-hover\\:text-blue-400:is(:where(.group):hover *){color:var(--color-blue-400)}.group-hover\\:text-blue-500:is(:where(.group):hover *){color:var(--color-blue-500)}.group-hover\\:text-blue-600:is(:where(.group):hover *){color:var(--color-blue-600)}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\:shadow-md:is(:where(.group):hover *){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:border-blue-400:hover{border-color:var(--color-blue-400)}.hover\\:border-blue-400\\/50:hover{border-color:#54a2ff80}@supports (color:color-mix(in lab,red,red)){.hover\\:border-blue-400\\/50:hover{border-color:color-mix(in oklab,var(--color-blue-400)50%,transparent)}}.hover\\:border-blue-500:hover{border-color:var(--color-blue-500)}.hover\\:border-blue-500\\/50:hover{border-color:#3080ff80}@supports (color:color-mix(in lab,red,red)){.hover\\:border-blue-500\\/50:hover{border-color:color-mix(in oklab,var(--color-blue-500)50%,transparent)}}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:from-blue-50:hover{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:from-blue-900\\/20:hover{--tw-gradient-from:#1c398e33}@supports (color:color-mix(in lab,red,red)){.hover\\:from-blue-900\\/20:hover{--tw-gradient-from:color-mix(in oklab,var(--color-blue-900)20%,transparent)}}.hover\\:from-blue-900\\/20:hover{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:from-gray-200:hover{--tw-gradient-from:var(--color-gray-200);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:from-gray-600:hover{--tw-gradient-from:var(--color-gray-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:from-green-600:hover{--tw-gradient-from:var(--color-green-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:to-emerald-700:hover{--tw-gradient-to:var(--color-emerald-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:to-gray-300:hover{--tw-gradient-to:var(--color-gray-300);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:to-gray-700:hover{--tw-gradient-to:var(--color-gray-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:to-purple-50:hover{--tw-gradient-to:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:to-purple-900\\/20:hover{--tw-gradient-to:#59168b33}@supports (color:color-mix(in lab,red,red)){.hover\\:to-purple-900\\/20:hover{--tw-gradient-to:color-mix(in oklab,var(--color-purple-900)20%,transparent)}}.hover\\:to-purple-900\\/20:hover{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-blue-400:focus{border-color:var(--color-blue-400)}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:ring-4:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(4px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-400\\/20:focus{--tw-ring-color:#54a2ff33}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-400\\/20:focus{--tw-ring-color:color-mix(in oklab,var(--color-blue-400)20%,transparent)}}.focus\\:ring-blue-500\\/20:focus{--tw-ring-color:#3080ff33}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-blue-500\\/20:focus{--tw-ring-color:color-mix(in oklab,var(--color-blue-500)20%,transparent)}}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}@media(min-width:48rem){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.md\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}}}.prose{line-height:1.6}.prose p{margin-bottom:1rem}.prose strong{color:inherit;font-weight:600}*{transition-property:background-color,border-color,color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}button:focus,textarea:focus{outline-offset:2px;outline:2px solid #0000}button{position:relative;overflow:hidden}button:after{content:"";background:#fff3;border-radius:50%;width:0;height:0;transition:width .3s,height .3s;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}button:active:after{width:300px;height:300px}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:2s cubic-bezier(.4,0,.6,1) infinite pulse}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:4px}::-webkit-scrollbar-thumb:hover{background:#a8a8a8}[data-theme=dark] ::-webkit-scrollbar-track{background:#374151}[data-theme=dark] ::-webkit-scrollbar-thumb{background:#6b7280}[data-theme=dark] ::-webkit-scrollbar-thumb:hover{background:#9ca3af}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}';l(d);const s=async t=>({set:async(e,i)=>{console.log(`--renderer [${e.data.curr.type}]`);const a=[{name:"UPPERCASE",icon:"🔠",description:"ALL CAPITAL LETTERS"},{name:"lowercase",icon:"🔡",description:"all small letters"},{name:"Title Case",icon:"🏷️",description:"Each Word Capitalized"},{name:"camelCase",icon:"🐫",description:"firstWordCapitalized"},{name:"PascalCase",icon:"🔷",description:"EachWordCapitalized"},{name:"snake_case",icon:"🐍",description:"words_with_underscores"},{name:"kebab-case",icon:"🍢",description:"words-with-dashes"},{name:"Start Case",icon:"⭐",description:"First Letter Capital"},{name:"Sentence case",icon:"📝",description:"First word capitalized"}];return{r:`
                    <div id="${t.f.name("root")}" class="min-h-screen bg-white transition-colors duration-300" 
                         data-ce='[{"k":"t-light-class","v":"bg-white"},{"k":"t-dark-class","v":"bg-gray-900"}]'>
                        
                        <!-- Enhanced Header -->
                        <header class="relative bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 text-white py-9 shadow-2xl overflow-hidden">
                            <!-- Background Pattern -->
                            <div class="absolute inset-0 bg-black/10"></div>
                            <div class="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div class="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
                            
                            <div class="container mx-auto px-4 relative z-10">
                                <div class="text-center max-w-4xl mx-auto">
                                    <!--div class="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm mb-6 border border-white/30">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                        </svg>
                                    </div-->
                                    <!--text-transparent-->
                                    <h1 class="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text  leading-tight"
                                        data-ce='[{"k":"t-light-class","v":"bg-gradient-to-r from-white to-blue-100"},{"k":"t-dark-class","v":"bg-gradient-to-r from-white to-blue-200"}]'>
                                        Text Case Converter
                                    </h1>
                                    <p class="text-md md:text-xl text-blue-100 font-light mb-6 leading-relaxed"
                                       data-ce='[{"k":"t-light-class","v":"text-blue-100"},{"k":"t-dark-class","v":"text-blue-200"}]'>
                                        Transform Your Text Instantly Across <span class="font-semibold">9+ Formats</span>
                                    </p>
                                    <div class="flex flex-wrap justify-center gap-3 text-sm text-blue-200">
                                        <span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">🚀 Instant Conversion</span>
                                        <span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">🎯 9+ Case Formats</span>
                                        <span class="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">💾 Copy & Paste</span>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <!-- Theme Toggle -->
                        <div class="container mx-auto px-4 py-4 flex justify-end">
                            <button id="${t.f.name("theme-toggle")}" 
                                    class="group p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300/50"
                                    data-ce='[{"k":"t-light-class","v":"from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 border-gray-300/50"},{"k":"t-dark-class","v":"from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border-gray-600/50"}]'
                                    aria-label="Toggle theme">
                                <svg class="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform duration-300" 
                                     data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                                </svg>
                            </button>
                        </div>

                        <!-- Main Content -->
                        <main class="container mx-auto px-4 py-8">
                            <!-- Input Section -->
                            <section class="mb-12">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                                    <!--Input Text-->
                                    <h2 class="text-3xl font-bold text-gray-800"
                                        data-ce='[{"k":"t-light-class","v":"text-gray-800"},{"k":"t-dark-class","v":"text-white"}]'>
                                        Text
                                    </h2>
                                </div>
                                <div class="relative group">
                                    <textarea 
                                        id="${t.f.name("input-text")}"
                                        placeholder="Enter or paste your text here to convert it to different cases... You can type anything - variable names, titles, sentences, or code identifiers."
                                        class="w-full h-48 p-6 border-2 border-gray-200 rounded-2xl resize-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm group-hover:shadow-md backdrop-blur-sm bg-white/50"
                                        data-ce='[{"k":"t-light-class","v":"border-gray-200 bg-white/50 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20"},{"k":"t-dark-class","v":"border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20"}]'
                                    ></textarea>

                                    
                                    <!--div class="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-gray-500"
                                         data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Type or paste your text</span>
                                    </div-->

                                    <div class="absolute bottom-4 right-4 flex items-center gap-3">
                                        <button 
                                            id="${t.f.name("copy-btn")}"
                                            class="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 font-semibold flex items-center gap-2 group"
                                        >
                                            <svg class="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                            </svg>
                                            Copy Text
                                        </button>
                                        <button 
                                            id="${t.f.name("clear-btn")}"
                                            class="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 font-semibold flex items-center gap-2 group"
                                        >
                                            <svg class="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                            </svg>
                                            Clear All
                                        </button>
                                    </div>

                                </div>
                            </section>

                            <!-- Enhanced Conversion Options -->
                            <section class="mb-12">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="w-3 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
                                    <h2 class="text-3xl font-bold text-gray-800"
                                        data-ce='[{"k":"t-light-class","v":"text-gray-800"},{"k":"t-dark-class","v":"text-white"}]'>
                                        Conversion Formats
                                    </h2>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    ${a.map((o,c)=>`
                                        <button 
                                            id="${t.f.name(`btn-${o.name.replace(/\s+/g,"-").toLowerCase()}`)}"
                                            class="group p-3 text-left border-2 border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-purple-50 active:scale-95"
                                            data-ce='[{"k":"t-light-class","v":"border-gray-200 from-white to-gray-50 hover:border-blue-500 hover:from-blue-50 hover:to-purple-50 text-gray-800"},{"k":"t-dark-class","v":"border-gray-600 from-gray-800 to-gray-900 hover:border-blue-400 hover:from-blue-900/20 hover:to-purple-900/20 text-white"}]'
                                        >
                                            <div class="flex items-start gap-4">
                                                <div class="text-xl group-hover:scale-110 transition-transform duration-300">${o.icon}</div>
                                                <div class="flex-1">
                                                    <div class="font-bold text-md mb-1 group-hover:text-blue-600 transition-colors duration-300"
                                                         data-ce='[{"k":"t-light-class","v":"group-hover:text-blue-600"},{"k":"t-dark-class","v":"group-hover:text-blue-400"}]'>
                                                        ${o.name}
                                                    </div>
                                                    <div class="text-sm opacity-70 font-mono"
                                                         data-ce='[{"k":"t-light-class","v":"text-gray-600"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                                                        ${o.description}
                                                    </div>
                                                </div>
                                                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-500">
                                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </button>
                                    `).join("")}
                                </div>
                            </section>

                            <!-- Output Section -->
                            <!--section class="mb-12">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                                    <h2 class="text-3xl font-bold text-gray-800"
                                        data-ce='[{"k":"t-light-class","v":"text-gray-800"},{"k":"t-dark-class","v":"text-white"}]'>
                                        Converted Text
                                    </h2>
                                </div>
                                <div class="relative group">
                                    <div 
                                        id="${t.f.name("output-text")}"
                                        class="w-full h-48 p-6 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-gray-50 to-white overflow-auto whitespace-pre-wrap font-mono text-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                                        data-ce='[{"k":"t-light-class","v":"border-gray-200 from-gray-50 to-white text-gray-900"},{"k":"t-dark-class","v":"border-gray-600 from-gray-800 to-gray-900 text-white"}]'
                                    >
                                        <div class="flex items-center justify-center h-full text-gray-500"
                                             data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                                            <div class="text-center">
                                                <svg class="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                                </svg>
                                                <p>Your converted text will appear here...</p>
                                                <p class="text-sm mt-2">Select a format above to convert your text</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="absolute bottom-4 right-4 flex items-center gap-3">
                                        <button 
                                            id="${t.f.name("copy-btn")}"
                                            class="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 font-semibold flex items-center gap-2 group"
                                        >
                                            <svg class="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                            </svg>
                                            Copy Text
                                        </button>
                                        <button 
                                            id="${t.f.name("clear-btn")}"
                                            class="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 font-semibold flex items-center gap-2 group"
                                        >
                                            <svg class="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                            </svg>
                                            Clear All
                                        </button>
                                    </div>
                                </div>
                            </section-->

                            <!-- Content Sections -->
                            <section class="mb-12">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="w-3 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                                    <h2 class="text-3xl font-bold text-gray-800"
                                        data-ce='[{"k":"t-light-class","v":"text-gray-800"},{"k":"t-dark-class","v":"text-white"}]'>
                                        Overview
                                    </h2>
                                </div>
                                <div class="prose max-w-none text-gray-700 text-lg leading-relaxed"
                                     data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                                    <p class="text-xl font-light mb-6">The Text Case Converter is a powerful, user-friendly tool designed to transform your text into various case formats instantly. Whether you're a developer working on code, a writer formatting content, or a student preparing documents, this tool simplifies the process of text transformation with just a few clicks.</p>
                                    <p>Our converter supports multiple case formats including uppercase, lowercase, title case, camel case, Pascal case, snake case, kebab case, start case, and sentence case. Each format serves different purposes across various industries and use cases, making this tool essential for professionals and casual users alike.</p>
                                </div>
                            </section>

                            <!-- FAQ Section with Working Toggle -->
                            <section class="mb-12">
                                <div class="flex items-center gap-3 mb-6">
                                    <div class="w-3 h-8 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full"></div>
                                    <h2 class="text-3xl font-bold text-gray-800"
                                        data-ce='[{"k":"t-light-class","v":"text-gray-800"},{"k":"t-dark-class","v":"text-white"}]'>
                                        Frequently Asked Questions
                                    </h2>
                                </div>
                                <div class="space-y-4" id="${t.f.name("faq-container")}">
                                    <div class="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
                                         data-ce='[{"k":"t-light-class","v":"border-gray-200 hover:border-blue-500/50"},{"k":"t-dark-class","v":"border-gray-600 hover:border-blue-400/50"}]'>
                                        <button class="w-full p-6 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center group"
                                                data-ce='[{"k":"t-light-class","v":"text-gray-800 hover:bg-gray-50"},{"k":"t-dark-class","v":"text-white hover:bg-gray-800"}]'
                                                data-faq-toggle="true">
                                            <span>What is the difference between camelCase and PascalCase?</span>
                                            <svg class="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-300 transform transition-transform duration-300" 
                                                 data-ce='[{"k":"t-light-class","v":"text-gray-500 group-hover:text-blue-500"},{"k":"t-dark-class","v":"text-gray-400 group-hover:text-blue-400"}]'
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                        <div class="p-6 border-t border-gray-200 text-gray-700 hidden transition-all duration-300"
                                             data-ce='[{"k":"t-light-class","v":"border-gray-200 text-gray-700"},{"k":"t-dark-class","v":"border-gray-600 text-gray-300"}]'
                                             data-faq-content="true">
                                            <p class="leading-relaxed">CamelCase starts with a lowercase letter and capitalizes the first letter of each subsequent word (e.g., "firstName"). PascalCase capitalizes the first letter of every word, including the first one (e.g., "FirstName"). Both are commonly used in programming for naming variables, classes, and functions.</p>
                                        </div>
                                    </div>

                                    <div class="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
                                         data-ce='[{"k":"t-light-class","v":"border-gray-200 hover:border-blue-500/50"},{"k":"t-dark-class","v":"border-gray-600 hover:border-blue-400/50"}]'>
                                        <button class="w-full p-6 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center group"
                                                data-ce='[{"k":"t-light-class","v":"text-gray-800 hover:bg-gray-50"},{"k":"t-dark-class","v":"text-white hover:bg-gray-800"}]'
                                                data-faq-toggle="true">
                                            <span>Can I convert text with special characters and numbers?</span>
                                            <svg class="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-300 transform transition-transform duration-300" 
                                                 data-ce='[{"k":"t-light-class","v":"text-gray-500 group-hover:text-blue-500"},{"k":"t-dark-class","v":"text-gray-400 group-hover:text-blue-400"}]'
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                        <div class="p-6 border-t border-gray-200 text-gray-700 hidden transition-all duration-300"
                                             data-ce='[{"k":"t-light-class","v":"border-gray-200 text-gray-700"},{"k":"t-dark-class","v":"border-gray-600 text-gray-300"}]'
                                             data-faq-content="true">
                                            <p class="leading-relaxed">Yes, our Text Case Converter handles special characters and numbers intelligently. They are preserved in the conversion process and don't affect the case transformation of alphabetical characters. For example, "user123@email.com" converted to Title Case would remain "User123@Email.Com" with only the alphabetical characters being modified.</p>
                                        </div>
                                    </div>

                                    <div class="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
                                         data-ce='[{"k":"t-light-class","v":"border-gray-200 hover:border-blue-500/50"},{"k":"t-dark-class","v":"border-gray-600 hover:border-blue-400/50"}]'>
                                        <button class="w-full p-6 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center group"
                                                data-ce='[{"k":"t-light-class","v":"text-gray-800 hover:bg-gray-50"},{"k":"t-dark-class","v":"text-white hover:bg-gray-800"}]'
                                                data-faq-toggle="true">
                                            <span>Is there a limit to the amount of text I can convert?</span>
                                            <svg class="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-300 transform transition-transform duration-300" 
                                                 data-ce='[{"k":"t-light-class","v":"text-gray-500 group-hover:text-blue-500"},{"k":"t-dark-class","v":"text-gray-400 group-hover:text-blue-400"}]'
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                        <div class="p-6 border-t border-gray-200 text-gray-700 hidden transition-all duration-300"
                                             data-ce='[{"k":"t-light-class","v":"border-gray-200 text-gray-700"},{"k":"t-dark-class","v":"border-gray-600 text-gray-300"}]'
                                             data-faq-content="true">
                                            <p class="leading-relaxed">There's no strict limit to the amount of text you can convert. However, for optimal performance and user experience, we recommend converting reasonable amounts of text (up to 10,000 characters at a time). The tool processes text client-side in your browser, so extremely large documents might slow down the conversion slightly.</p>
                                        </div>
                                    </div>

                                    <div class="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
                                         data-ce='[{"k":"t-light-class","v":"border-gray-200 hover:border-blue-500/50"},{"k":"t-dark-class","v":"border-gray-600 hover:border-blue-400/50"}]'>
                                        <button class="w-full p-6 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center group"
                                                data-ce='[{"k":"t-light-class","v":"text-gray-800 hover:bg-gray-50"},{"k":"t-dark-class","v":"text-white hover:bg-gray-800"}]'
                                                data-faq-toggle="true">
                                            <span>How does Title Case handle small words like "and", "the", "or"?</span>
                                            <svg class="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-300 transform transition-transform duration-300" 
                                                 data-ce='[{"k":"t-light-class","v":"text-gray-500 group-hover:text-blue-500"},{"k":"t-dark-class","v":"text-gray-400 group-hover:text-blue-400"}]'
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                        <div class="p-6 border-t border-gray-200 text-gray-700 hidden transition-all duration-300"
                                             data-ce='[{"k":"t-light-class","v":"border-gray-200 text-gray-700"},{"k":"t-dark-class","v":"border-gray-600 text-gray-300"}]'
                                             data-faq-content="true">
                                            <p class="leading-relaxed">Our Title Case conversion follows standard title capitalization rules. Small words (conjunctions, articles, prepositions with three letters or fewer) are generally not capitalized unless they are the first or last word in the title. This ensures your titles look professional and follow conventional publishing standards.</p>
                                        </div>
                                    </div>

                                    <div class="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
                                         data-ce='[{"k":"t-light-class","v":"border-gray-200 hover:border-blue-500/50"},{"k":"t-dark-class","v":"border-gray-600 hover:border-blue-400/50"}]'>
                                        <button class="w-full p-6 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center group"
                                                data-ce='[{"k":"t-light-class","v":"text-gray-800 hover:bg-gray-50"},{"k":"t-dark-class","v":"text-white hover:bg-gray-800"}]'
                                                data-faq-toggle="true">
                                            <span>Can I use this tool for programming variable names?</span>
                                            <svg class="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-300 transform transition-transform duration-300" 
                                                 data-ce='[{"k":"t-light-class","v":"text-gray-500 group-hover:text-blue-500"},{"k":"t-dark-class","v":"text-gray-400 group-hover:text-blue-400"}]'
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                        <div class="p-6 border-t border-gray-200 text-gray-700 hidden transition-all duration-300"
                                             data-ce='[{"k":"t-light-class","v":"border-gray-200 text-gray-700"},{"k":"t-dark-class","v":"border-gray-600 text-gray-300"}]'
                                             data-faq-content="true">
                                            <p class="leading-relaxed">Absolutely! This tool is perfect for developers who need to convert between different naming conventions. You can quickly transform descriptive text into camelCase for JavaScript variables, PascalCase for class names, snake_case for database columns, or kebab-case for CSS classes and URL slugs. This saves time and ensures consistency across your codebase.</p>
                                        </div>
                                    </div>

                                    <div class="border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
                                         data-ce='[{"k":"t-light-class","v":"border-gray-200 hover:border-blue-500/50"},{"k":"t-dark-class","v":"border-gray-600 hover:border-blue-400/50"}]'>
                                        <button class="w-full p-6 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center group"
                                                data-ce='[{"k":"t-light-class","v":"text-gray-800 hover:bg-gray-50"},{"k":"t-dark-class","v":"text-white hover:bg-gray-800"}]'
                                                data-faq-toggle="true">
                                            <span>Is my text stored or sent to any servers?</span>
                                            <svg class="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-300 transform transition-transform duration-300" 
                                                 data-ce='[{"k":"t-light-class","v":"text-gray-500 group-hover:text-blue-500"},{"k":"t-dark-class","v":"text-gray-400 group-hover:text-blue-400"}]'
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                        <div class="p-6 border-t border-gray-200 text-gray-700 hidden transition-all duration-300"
                                             data-ce='[{"k":"t-light-class","v":"border-gray-200 text-gray-700"},{"k":"t-dark-class","v":"border-gray-600 text-gray-300"}]'
                                             data-faq-content="true">
                                            <p class="leading-relaxed">No, all text conversion happens entirely in your browser. Your text is never sent to any servers or stored anywhere. This ensures complete privacy and security for your content. The tool works offline once loaded, making it safe for sensitive or confidential text.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>

                        <!-- Footer -->
                        <footer class="mt-16 py-12 border-t bg-gradient-to-r from-gray-50 to-white"
                                data-ce='[{"k":"t-light-class","v":"border-gray-200 from-gray-50 to-white text-gray-600"},{"k":"t-dark-class","v":"border-gray-700 from-gray-800 to-gray-900 text-gray-400"}]'>
                            <div class="container mx-auto px-4 text-center">
                                <div class="flex flex-col items-center gap-4">
                                    <p class="text-lg">${e.data.curr.data?.foo?.txt||""}</p>
                                    <div class="flex items-center gap-6 text-sm text-gray-500"
                                         data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                                        <span>Instant Text Conversion</span>
                                        <span>•</span>
                                        <span>100% Client-Side</span>
                                        <span>•</span>
                                        <span>Privacy First</span>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                    `,head:`
                    <title>Text Case Converter - Transform Text to UPPERCASE, lowercase, camelCase & More</title>
                    <meta name="description" content="Free online Text Case Converter tool. Instantly transform text to uppercase, lowercase, title case, camelCase, PascalCase, snake_case, kebab-case and more. Perfect for developers, writers, and professionals.">
                    <script type="application/ld+json">
                    {
                      "@context": "https://schema.org",
                      "@type": "WebApplication",
                      "name": "Text Case Converter"
                    }
                    <\/script>
                    `,style:`
                    .${t.f.name("text")} {
                       background: transparent;
                    }
                    
                    /* Enhanced scrollbar styling */
                    .${t.f.name("output-text")}::-webkit-scrollbar {
                        width: 8px;
                    }
                    
                    .${t.f.name("output-text")}::-webkit-scrollbar-track {
                        background: #f8fafc;
                        border-radius: 4px;
                    }
                    
                    .${t.f.name("output-text")}::-webkit-scrollbar-thumb {
                        background: #cbd5e1;
                        border-radius: 4px;
                    }
                    
                    .${t.f.name("output-text")}::-webkit-scrollbar-thumb:hover {
                        background: #94a3b8;
                    }
                    
                    /* Dark mode scrollbar */
                    [data-theme="dark"] .${t.f.name("output-text")}::-webkit-scrollbar-track {
                        background: #1e293b;
                    }
                    
                    [data-theme="dark"] .${t.f.name("output-text")}::-webkit-scrollbar-thumb {
                        background: #475569;
                    }
                    
                    [data-theme="dark"] .${t.f.name("output-text")}::-webkit-scrollbar-thumb:hover {
                        background: #64748b;
                    }
                    
                    /* Backdrop blur support */
                    @supports (backdrop-filter: blur(10px)) {
                        .backdrop-blur-sm {
                            backdrop-filter: blur(4px);
                        }
                    }
                    `}}});exports.index=s;exports.renderer=s;
