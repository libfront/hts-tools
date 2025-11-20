"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=async t=>({set:async(e,l)=>{console.log(`--renderer [${e.data.curr.type}]`);const s={value:()=>e.data.curr.data.data};return{r:`
                <div id="${t.f.name("root")}" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
                data-ce='[{"k":"t-light-class","v":"bg-white"},{"k":"t-dark-class","v":"bg-gray-900"}]'
                >
                  <div class="container mx-auto px-4 py-8">
                    <!-- Header -->
                    <header class="text-center mb-12">
                      <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-4" 
                          data-ce='[{"k":"t-light-class","v":"text-gray-800"},{"k":"t-dark-class","v":"text-white"}]'>
                        UUID Generator
                      </h1>
                      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                         data-ce='[{"k":"t-light-class","v":"text-gray-600"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                        Generate unique identifiers instantly with our powerful UUID v4 generator
                      </p>
                    </header>

                    <!-- Main Content -->
                    <main class="max-w-4xl mx-auto">
                      <!-- Theme Toggle -->
                      <div class="flex justify-end mb-8">
                        <button id="${t.f.name("theme-toggle")}" 
                                class="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg"
                                data-ce='[{"k":"t-light-class","v":"bg-gray-200 text-gray-800 hover:bg-gray-300"},{"k":"t-dark-class","v":"bg-gray-700 text-gray-200 hover:bg-gray-600"}]'
                                aria-label="Toggle theme">
                          <svg class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                          </svg>
                          <svg class="w-5 h-5 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                          </svg>
                        </button>
                      </div>

                      <!-- UUID Display -->
                      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8 border border-gray-200 dark:border-gray-700 transition-all duration-300"
                           data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                        <div class="text-center">
                          <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide"
                                 data-ce='[{"k":"t-light-class","v":"text-gray-600"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                            Generated UUID
                          </label>
                          <div class="relative">
                            <input id="${t.f.name("uuid-display")}" 
                                   type="text" 
                                   readonly 
                                   class="w-full px-6 py-4 text-lg font-mono bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl text-center text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 cursor-pointer"
                                   data-ce='[{"k":"t-light-class","v":"bg-gray-50 border-gray-300 text-gray-800"},{"k":"t-dark-class","v":"bg-gray-900 border-gray-600 text-gray-200"}]'
                                   value="${s.value()}">
                            <div id="${t.f.name("copy-success")}" 
                                 class="absolute inset-y-0 right-3 flex items-center hidden">
                              <span class="text-green-500 text-sm font-semibold bg-white dark:bg-gray-800 px-2 py-1 rounded"
                                    data-ce='[{"k":"t-light-class","v":"bg-white"},{"k":"t-dark-class","v":"bg-gray-800"}]'>Copied!</span>
                            </div>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400 mt-3"
                             data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                            Click on the UUID to copy to clipboard
                          </p>
                        </div>
                      </div>

                      <!-- Controls -->
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Generate Button -->
                        <button id="${t.f.name("generate-btn")}" 
                                class="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                                data-ce='[{"k":"t-light-class","v":"bg-blue-600 hover:bg-blue-700"},{"k":"t-dark-class","v":"bg-blue-700 hover:bg-blue-600"}]'>
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                          <span>Generate New UUID</span>
                        </button>

                        <!-- Copy Button -->
                        <button id="${t.f.name("copy-btn")}" 
                                class="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                                data-ce='[{"k":"t-light-class","v":"bg-green-600 hover:bg-green-700"},{"k":"t-dark-class","v":"bg-green-700 hover:bg-green-600"}]'>
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                          <span>Copy to Clipboard</span>
                        </button>
                      </div>

                      <!-- Stats -->
                      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 transition-all duration-300"
                             data-ce='[{"k":"t-light-class","v":"bg-blue-50 border-blue-200"},{"k":"t-dark-class","v":"bg-blue-900/20 border-blue-800"}]'>
                          <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">36</div>
                          <div class="text-sm text-blue-500 dark:text-blue-300 mt-2">Characters</div>
                        </div>
                        <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800 transition-all duration-300"
                             data-ce='[{"k":"t-light-class","v":"bg-green-50 border-green-200"},{"k":"t-dark-class","v":"bg-green-900/20 border-green-800"}]'>
                          <div class="text-2xl font-bold text-green-600 dark:text-green-400">v4</div>
                          <div class="text-sm text-green-500 dark:text-green-300 mt-2">Version</div>
                        </div>
                        <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800 transition-all duration-300"
                             data-ce='[{"k":"t-light-class","v":"bg-purple-50 border-purple-200"},{"k":"t-dark-class","v":"bg-purple-900/20 border-purple-800"}]'>
                          <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">122<sup>bit</sup></div>
                          <div class="text-sm text-purple-500 dark:text-purple-300 mt-2">Entropy</div>
                        </div>
                      </div>
                    </main>

                    <!-- Footer -->
                    <footer class="mt-16 mb-8 text-center">
                      <p class="text-gray-500 dark:text-gray-400 text-sm"
                         data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                        ${e.data.curr.data?.foo?.txt||"Made with ❤️ using TypeScript & Tailwind CSS"}
                      </p>
                    </footer>
                  </div>
                </div>
                `,style:(()=>{let r="";return r=`
                @import url('${t.f.path("/style.css")}');

                /* Custom scrollbar for webkit browsers */
                ::-webkit-scrollbar {
                  width: 8px;
                }
                ::-webkit-scrollbar-track {
                  background: #f1f1f1;
                }
                ::-webkit-scrollbar-thumb {
                  background: #c1c1c1;
                  border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                  background: #a8a8a8;
                }

                /* Smooth transitions for all interactive elements */
                * {
                  transition-property: color, background-color, border-color, transform, box-shadow;
                  transition-duration: 200ms;
                  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Focus states for accessibility */
                button:focus-visible,
                input:focus-visible {
                  outline: 2px solid #3b82f6;
                  outline-offset: 2px;
                }

                /* Custom animations */
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                  animation: fadeIn 0.5s ease-out;
                }

                /* Print styles */
                @media print {
                  button {
                    display: none !important;
                  }
                }
                `,r})()}}});exports.index=a;exports.renderer=a;
