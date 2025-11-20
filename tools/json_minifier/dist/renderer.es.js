const o = async (a) => ({
  set: async (r, s) => {
    console.log(`--renderer [${r.data.curr.type}]`);
    const e = {
      value: () => r.data.curr.data.data
    };
    return {
      r: `
                    <div id="${a.f.name("root")}" class="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900" 
                    data-ce='[{"k":"t-light-class","v":"bg-gray-50"},{"k":"t-dark-class","v":"bg-gray-900"}]'
                    >
                        <div class="container mx-auto px-4 py-8">
                            <!-- Header -->
                            <header class="text-center mb-8">
                                <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-2" data-ce='[{"k":"t-light-class","v":"text-gray-800"},{"k":"t-dark-class","v":"text-white"}]'>
                                    JSON Minifier
                                </h1>
                                <p class="text-lg text-gray-600 dark:text-gray-300" data-ce='[{"k":"t-light-class","v":"text-gray-600"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                                    Minify your JSON data with ease
                                </p>
                            </header>

                            <!-- Theme Toggle -->
                            <div class="flex justify-end mb-6">
                                <button id="${a.f.name("theme-toggle")}" 
                                        class="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                                        data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                                    <svg id="${a.f.name("sun-icon")}" class="w-6 h-6 text-yellow-500 hidden" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                                    </svg>
                                    <svg id="${a.f.name("moon-icon")}" class="w-6 h-6 text-blue-500 hidden" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                    </svg>
                                </button>
                            </div>

                            <!-- Main Content -->
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <!-- Input Section -->
                                <div class="space-y-4">
                                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                                         data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                                        <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-4"
                                            data-ce='[{"k":"t-light-class","v":"text-gray-800"},{"k":"t-dark-class","v":"text-white"}]'>
                                            Input JSON
                                        </h2>
                                        <textarea 
                                            id="${a.f.name("json-input")}"
                                            placeholder='Paste your JSON here...&#10;Example: { "name": "John", "age": 30 }'
                                            class="w-full h-64 p-4 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                                            data-ce='[{"k":"t-light-class","v":"border-gray-300 bg-gray-50 text-gray-900"},{"k":"t-dark-class","v":"border-gray-600 bg-gray-700 text-white"}]'
                                        >${e.value()}</textarea>
                                        <div class="flex gap-3 mt-4">
                                            <button id="${a.f.name("minify-btn")}"
                                                    class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
                                                Minify JSON
                                            </button>
                                            <button id="${a.f.name("clear-btn")}"
                                                    class="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
                                                Clear
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <!-- Output Section -->
                                <div class="space-y-4">
                                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                                         data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                                        <div class="flex justify-between items-center mb-4">
                                            <h2 class="text-xl font-semibold text-gray-800 dark:text-white"
                                                data-ce='[{"k":"t-light-class","v":"text-gray-800"},{"k":"t-dark-class","v":"text-white"}]'>
                                                Minified JSON
                                            </h2>
                                            <button id="${a.f.name("copy-btn")}"
                                                    class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
                                                Copy to Clipboard
                                            </button>
                                        </div>
                                        <pre class="w-full h-64 p-4 border border-gray-300 dark:border-gray-600 rounded-lg overflow-auto bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300 whitespace-pre-wrap break-words"
                                             id="${a.f.name("json-output")}"
                                             data-ce='[{"k":"t-light-class","v":"border-gray-300 bg-gray-50 text-gray-900"},{"k":"t-dark-class","v":"border-gray-600 bg-gray-700 text-white"}]'
                                        ></pre>
                                        <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hidden"
                                             id="${a.f.name("stats")}"
                                             data-ce='[{"k":"t-light-class","v":"bg-blue-50 border-blue-200"},{"k":"t-dark-class","v":"bg-blue-900/20 border-blue-800"}]'>
                                            <div class="text-sm text-blue-800 dark:text-blue-300 flex justify-between"
                                                 data-ce='[{"k":"t-light-class","v":"text-blue-800"},{"k":"t-dark-class","v":"text-blue-300"}]'>
                                                <span>Original size: <span id="${a.f.name("original-size")}">0</span> characters</span>
                                                <span>Minified size: <span id="${a.f.name("minified-size")}">0</span> characters</span>
                                                <span>Reduction: <span id="${a.f.name("reduction")}">0%</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             

                            <!-- Footer -->
                            <footer
                              class="mt-16 mb-2 text-center text-gray-500"
                              data-ce='[{"k":"t-light-class","v":"text-gray-500"}, {"k":"t-dark-class","v":"text-gray-400"}]'
                            >
                              <!--p>Made with ❤️ using TypeScript & Tailwind CSS</p-->
                              <p>${r.data.curr.data?.foo?.txt || ""}</p>
                            </footer>



                        </div>
                    </div>
                    `,
      style: (() => {
        let t = "";
        return t = `
                    @import url('${a.f.path("/style.css")}');
                    
                    /* Custom scrollbar */
                    pre::-webkit-scrollbar {
                        width: 6px;
                    }
                    
                    pre::-webkit-scrollbar-track {
                        background: #f1f1f1;
                        border-radius: 3px;
                    }
                    
                    pre::-webkit-scrollbar-thumb {
                        background: #c1c1c1;
                        border-radius: 3px;
                    }
                    
                    pre::-webkit-scrollbar-thumb:hover {
                        background: #a8a8a8;
                    }
                    
                    /* Dark mode scrollbar */
                    @media (prefers-color-scheme: dark) {
                        pre::-webkit-scrollbar-track {
                            background: #374151;
                        }
                        
                        pre::-webkit-scrollbar-thumb {
                            background: #6b7280;
                        }
                        
                        pre::-webkit-scrollbar-thumb:hover {
                            background: #9ca3af;
                        }
                    }
                    
                    /* Smooth transitions */
                    * {
                        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
                    }
                    
                    /* Focus styles */
                    textarea:focus, button:focus {
                        outline: none;
                        ring: 2px;
                    }
                    
                    /* Button animations */
                    button {
                        transform: translateY(0);
                    }
                    
                    button:hover {
                        transform: translateY(-1px);
                    }
                    
                    button:active {
                        transform: translateY(0);
                    }
                    `, t;
      })()
    };
  }
});
export {
  o as index,
  o as renderer
};
