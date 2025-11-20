const o = async (t) => ({
  set: async (a, s) => {
    console.log(`--renderer [${a.data.curr.type}]`);
    const e = {
      value: () => a.data.curr.data.data || "",
      theme: () => a.data.curr.data.theme || "light"
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
                <p>${a.data.curr.data?.foo?.txt || ""}</p>
              </footer>

              
            </div>
          </div>
          `,
      style: (() => {
        let r = "";
        return r = `
           
          @import url('${t.f.path("/style.css")}'); 
          
          
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
          `, r;
      })()
    };
  }
});
export {
  o as index,
  o as renderer
};
