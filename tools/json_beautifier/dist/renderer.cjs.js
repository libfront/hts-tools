"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=async a=>({set:async(s,i)=>{console.log(`--renderer [${s.data.curr.type}]`);const r={value:()=>s.data.curr.data.data,formattedJson:()=>{try{const e=JSON.parse(s.data.curr.data.data||"{}");let t=JSON.stringify(e,null,2);return t=t.replace(/\{\n\s+"/,`{
  "`),t}catch{return s.data.curr.data.data||"{}"}},theme:()=>s.data.curr.data.theme||"light"};return{r:(()=>{const e=r.theme(),t=d=>d.replace(/"/g,"&quot;");return`<div id="${a.f.name("root")}" class="min-h-screen transition-colors duration-300 ${e==="dark"?"bg-gray-900 text-white":"bg-gray-50 text-gray-900"}" 
                            data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-gray-50 text-gray-900"},{k:"t-dark-class",v:"bg-gray-900 text-white"}]))}'>
<div class="container mx-auto px-4 py-5">
    <!-- Header -->
    <header class="mb-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    JSON Beautifier
                </h1>
                <p class="mt-2 ${e==="dark"?"text-gray-400":"text-gray-600"}" 
                   data-ce='${t(JSON.stringify([{k:"t-light-class",v:"text-gray-600"},{k:"t-dark-class",v:"text-gray-400"}]))}'>
                    Format and validate your JSON data
                </p>
            </div>
            <div class="flex items-center gap-4">
                <!-- Theme Toggle -->
                <button id="${a.f.name("theme-toggle")}" 
                        class="p-2 rounded-lg ${e==="dark"?"bg-gray-700 hover:bg-gray-600":"bg-white hover:bg-gray-100 border border-gray-200"} transition-colors duration-200"
                        data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-white hover:bg-gray-100 border border-gray-200"},{k:"t-dark-class",v:"bg-gray-700 hover:bg-gray-600"}]))}'>
                    <span class="sr-only">Toggle theme</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${e==="dark"?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>':'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>'}
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Input Section -->
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold">Input JSON</h2>
                <button id="${a.f.name("format-btn")}" 
                        class="px-4 py-2 rounded-lg font-medium ${e==="dark"?"bg-green-600 hover:bg-green-700":"bg-green-500 hover:bg-green-600 text-white"} transition-colors duration-200"
                        data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-green-500 hover:bg-green-600 text-white"},{k:"t-dark-class",v:"bg-green-600 hover:bg-green-700 text-white"}]))}'>
                    Format & Validate
                </button>
            </div>
            <div class="relative">
                <textarea 
                    id="${a.f.name("json-input")}"
                    placeholder='Paste your JSON here... Example: {"name":"John","age":30}'
                    class="w-full h-[500px] p-4 rounded-lg border-2 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200
                        ${e==="dark"?"bg-gray-800 border-gray-700 text-white placeholder-gray-500":"bg-white border-gray-300 text-gray-900 placeholder-gray-400"}"
                    data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-white border-gray-300 text-gray-900 placeholder-gray-400"},{k:"t-dark-class",v:"bg-gray-800 border-gray-700 text-white placeholder-gray-500"}]))}'
                >${r.value()}</textarea>
                <div id="${a.f.name("error-indicator")}" class="hidden absolute top-2 right-2">
                    <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                        Invalid JSON
                    </span>
                </div>
            </div>
        </div>

        <!-- Output Section -->
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold">Formatted JSON</h2>
                <!-- Copy Button moved here -->
                <button id="${a.f.name("copy-btn")}" 
                        class="px-4 py-2 rounded-lg font-medium ${e==="dark"?"bg-blue-600 hover:bg-blue-700":"bg-blue-500 hover:bg-blue-600 text-white"} transition-colors duration-200"
                        data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-blue-500 hover:bg-blue-600 text-white"},{k:"t-dark-class",v:"bg-blue-600 hover:bg-blue-700 text-white"}]))}'>
                    Copy JSON
                </button>
            </div>
            <div class="relative">
                <pre class="h-[500px] overflow-auto p-4 rounded-lg border-2 font-mono text-sm whitespace-pre break-words
                    ${e==="dark"?"bg-gray-800 border-gray-700 text-gray-200":"bg-gray-50 border-gray-200 text-gray-800"}"
                    data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-gray-50 border-gray-200 text-gray-800"},{k:"t-dark-class",v:"bg-gray-800 border-gray-700 text-gray-200"}]))}'><code id="${a.f.name("json-output")}">${r.formattedJson()}</code></pre>
                <!-- Character and line count moved to bottom -->
                <div class="absolute bottom-2 left-2 flex items-center gap-2 text-xs ${e==="dark"?"text-gray-400":"text-gray-500"}"
                     data-ce='${t(JSON.stringify([{k:"t-light-class",v:"text-gray-500"},{k:"t-dark-class",v:"text-gray-400"}]))}'>
                    <span id="${a.f.name("char-count")}">0 characters</span>
                    <span>•</span>
                    <span id="${a.f.name("line-count")}">0 lines</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Features Section -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-lg ${e==="dark"?"bg-gray-800":"bg-white border border-gray-200"}"
             data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-white border border-gray-200"},{k:"t-dark-class",v:"bg-gray-800"}]))}'>
            <div class="w-10 h-10 rounded-lg ${e==="dark"?"bg-blue-600":"bg-blue-100"} flex items-center justify-center mb-4"
                 data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-blue-100"},{k:"t-dark-class",v:"bg-blue-600"}]))}'>
                <svg class="w-5 h-5 ${e==="dark"?"text-white":"text-blue-600"}" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     data-ce='${t(JSON.stringify([{k:"t-light-class",v:"text-blue-600"},{k:"t-dark-class",v:"text-white"}]))}'>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">JSON Validation</h3>
            <p class="${e==="dark"?"text-gray-400":"text-gray-600"}"
               data-ce='${t(JSON.stringify([{k:"t-light-class",v:"text-gray-600"},{k:"t-dark-class",v:"text-gray-400"}]))}'>Real-time validation with detailed error messages</p>
        </div>
        
        <div class="p-6 rounded-lg ${e==="dark"?"bg-gray-800":"bg-white border border-gray-200"}"
             data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-white border border-gray-200"},{k:"t-dark-class",v:"bg-gray-800"}]))}'>
            <div class="w-10 h-10 rounded-lg ${e==="dark"?"bg-green-600":"bg-green-100"} flex items-center justify-center mb-4"
                 data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-green-100"},{k:"t-dark-class",v:"bg-green-600"}]))}'>
                <svg class="w-5 h-5 ${e==="dark"?"text-white":"text-green-600"}" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     data-ce='${t(JSON.stringify([{k:"t-light-class",v:"text-green-600"},{k:"t-dark-class",v:"text-white"}]))}'>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Smart Formatting</h3>
            <p class="${e==="dark"?"text-gray-400":"text-gray-600"}"
               data-ce='${t(JSON.stringify([{k:"t-light-class",v:"text-gray-600"},{k:"t-dark-class",v:"text-gray-400"}]))}'>Automatic indentation and syntax highlighting</p>
        </div>
        
        <div class="p-6 rounded-lg ${e==="dark"?"bg-gray-800":"bg-white border border-gray-200"}"
             data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-white border border-gray-200"},{k:"t-dark-class",v:"bg-gray-800"}]))}'>
            <div class="w-10 h-10 rounded-lg ${e==="dark"?"bg-purple-600":"bg-purple-100"} flex items-center justify-center mb-4"
                 data-ce='${t(JSON.stringify([{k:"t-light-class",v:"bg-purple-100"},{k:"t-dark-class",v:"bg-purple-600"}]))}'>
                <svg class="w-5 h-5 ${e==="dark"?"text-white":"text-purple-600"}" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     data-ce='${t(JSON.stringify([{k:"t-light-class",v:"text-purple-600"},{k:"t-dark-class",v:"text-white"}]))}'>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">One-Click Copy</h3>
            <p class="${e==="dark"?"text-gray-400":"text-gray-600"}"
               data-ce='${t(JSON.stringify([{k:"t-light-class",v:"text-gray-600"},{k:"t-dark-class",v:"text-gray-400"}]))}'>Copy formatted JSON to clipboard instantly</p>
        </div>
    </div>
</div>



              <!-- Footer -->
              <footer
                class="mt-0 mb-5 text-center text-gray-500"
                data-ce='[{"k":"t-light-class","v":"text-gray-500"}, {"k":"t-dark-class","v":"text-gray-400"}]'
              >
                <!--p>Made with ❤️ using TypeScript & Tailwind CSS</p-->
                <p>${s.data.curr.data?.foo?.txt||""}</p>
              </footer>



</div>`})(),style:`
                    @import url('${a.f.path("/style.css")}');
                    
                    /* Custom scrollbar for output */
                    pre::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                    }
                    
                    pre::-webkit-scrollbar-track {
                        ${r.theme()==="dark"?"background: #374151;":"background: #f3f4f6;"}
                        border-radius: 4px;
                    }
                    
                    pre::-webkit-scrollbar-thumb {
                        ${r.theme()==="dark"?"background: #6b7280;":"background: #d1d5db;"}
                        border-radius: 4px;
                    }
                    
                    pre::-webkit-scrollbar-thumb:hover {
                        ${r.theme()==="dark","background: #9ca3af;"}
                    }
                    
                    /* Smooth transitions */
                    * {
                        transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
                    }
                    
                    /* Focus styles */
                    textarea:focus {
                        box-shadow: 0 0 0 3px ${r.theme()==="dark"?"rgba(59, 130, 246, 0.3)":"rgba(59, 130, 246, 0.1)"};
                    }
                    
                    /* JSON syntax highlighting in output */
                    .json-key { color: ${r.theme()==="dark"?"#60a5fa":"#2563eb"}; }
                    .json-string { color: ${r.theme()==="dark"?"#34d399":"#059669"}; }
                    .json-number { color: ${r.theme()==="dark"?"#f87171":"#dc2626"}; }
                    .json-boolean { color: ${r.theme()==="dark"?"#fbbf24":"#d97706"}; }
                    .json-null { color: ${r.theme()==="dark"?"#a78bfa":"#7c3aed"}; }
                    `}}});exports.index=o;exports.renderer=o;
