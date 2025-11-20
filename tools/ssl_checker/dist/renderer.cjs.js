"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=async t=>({set:async(e,s)=>(console.log(`--renderer [${e.data.curr.type}]`),{r:`
          <div id="${t.f.name("root")}" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300" 
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
                  
                  <button id="${t.f.name("theme-toggle")}" 
                          class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-shrink-0 ml-2"
                          data-ce='[{"k":"t-light-class","v":"bg-gray-100 text-gray-600 hover:bg-gray-200"}, {"k":"t-dark-class","v":"bg-gray-700 text-gray-300 hover:bg-gray-600"}]'>
                    <svg id="${t.f.name("theme-sun")}" class="w-4 h-4 sm:w-5 sm:h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    <svg id="${t.f.name("theme-moon")}" class="w-4 h-4 sm:w-5 sm:h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <label for="${t.f.name("domain-input")}" 
                         class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3"
                          data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                         >
                    Domain Name
                  </label>
                  <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <input 
                      type="text" 
                      id="${t.f.name("domain-input")}"
                      placeholder="example.com or https://example.com"
                      class="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      data-ce='[{"k":"t-light-class","v":"border-gray-300 bg-white text-gray-900 placeholder-gray-500"}, {"k":"t-dark-class","v":"border-gray-600 bg-gray-700 text-white placeholder-gray-400"}]'
                    >
                    <button 
                      id="${t.f.name("check-btn")}"
                      class="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span class="truncate">Check SSL</span>
                    </button>
                  </div>
                </div>

                <div id="${t.f.name("loading")}" class="hidden flex items-center justify-center py-6 sm:py-8">
                  <div class="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600"></div>
                </div>
              </div>

              <div id="${t.f.name("results")}" class="hidden space-y-4 sm:space-y-6">
                <div class="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
                     data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"}, {"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                  <h2 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4"
                      data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                    Certificate Status
                  </h2>
                  <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
                    <div class="text-center p-3 sm:p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                         data-ce='[{"k":"t-light-class","v":"bg-green-50 border-green-200"}, {"k":"t-dark-class","v":"bg-green-900/20 border-green-800"}]'>
                      <div class="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400" id="${t.f.name("status-days")}"
                           data-ce='[{"k":"t-light-class","v":"text-green-600"},{"k":"t-dark-class","v":"text-green-400"}]'>0</div>
                      <div class="text-xs sm:text-sm text-green-600 dark:text-green-400 mt-1"
                           data-ce='[{"k":"t-light-class","v":"text-green-600"},{"k":"t-dark-class","v":"text-green-400"}]'>Days Left</div>
                    </div>
                    <div class="text-center p-3 sm:p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                         data-ce='[{"k":"t-light-class","v":"bg-blue-50 border-blue-200"}, {"k":"t-dark-class","v":"bg-blue-900/20 border-blue-800"}]'>
                      <div class="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400" id="${t.f.name("status-valid")}"
                           data-ce='[{"k":"t-light-class","v":"text-blue-600"},{"k":"t-dark-class","v":"text-blue-400"}]'>No</div>
                      <div class="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mt-1"
                           data-ce='[{"k":"t-light-class","v":"text-blue-600"},{"k":"t-dark-class","v":"text-blue-400"}]'>Is Valid</div>
                    </div>
                    <div class="text-center p-3 sm:p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 col-span-2 sm:col-span-1"
                         data-ce='[{"k":"t-light-class","v":"bg-purple-50 border-purple-200"}, {"k":"t-dark-class","v":"bg-purple-900/20 border-purple-800"}]'>
                      <div id="${t.f.name("status-issuer")}" class="text-sm sm:text-lg font-semibold text-purple-600 dark:text-purple-400 truncate px-1"
                           data-ce='[{"k":"t-light-class","v":"text-purple-600"},{"k":"t-dark-class","v":"text-purple-400"}]'>Unknown</div>
                      <div class="text-xs sm:text-sm text-purple-600 dark:text-purple-400 mt-1"
                           data-ce='[{"k":"t-light-class","v":"text-purple-600"},{"k":"t-dark-class","v":"text-purple-400"}]'>Issuer</div>
                    </div>
                    <div class="text-center p-3 sm:p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 col-span-2 sm:col-span-1"
                         data-ce='[{"k":"t-light-class","v":"bg-orange-50 border-orange-200"}, {"k":"t-dark-class","v":"bg-orange-900/20 border-orange-800"}]'>
                      <div id="${t.f.name("status-expires")}" class="text-sm sm:text-lg font-semibold text-orange-600 dark:text-orange-400 truncate px-1"
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
                        <div id="${t.f.name("detail-domain")}" class="text-gray-900 dark:text-white font-mono text-xs sm:text-sm break-all"
                             data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>-</div>
                      </div>
                      <div class="space-y-1 sm:space-y-2">
                        <label class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400"
                               data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>Valid From</label>
                        <div id="${t.f.name("detail-valid-from")}" class="text-gray-900 dark:text-white font-mono text-xs sm:text-sm break-all"
                             data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>-</div>
                      </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div class="space-y-1 sm:space-y-2">
                        <label class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400"
                               data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>Valid To</label>
                        <div id="${t.f.name("detail-valid-to")}" class="text-gray-900 dark:text-white font-mono text-xs sm:text-sm break-all"
                             data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>-</div>
                      </div>
                      <div class="space-y-1 sm:space-y-2">
                        <label class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400"
                               data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>Signature Algorithm</label>
                        <div id="${t.f.name("detail-algorithm")}" class="text-gray-900 dark:text-white font-mono text-xs sm:text-sm break-all"
                             data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="${t.f.name("error")}" class="hidden bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6"
                   data-ce='[{"k":"t-light-class","v":"bg-red-50 border-red-200"}, {"k":"t-dark-class","v":"bg-red-900/20 border-red-800"}]'>
                <div class="flex items-start space-x-2 sm:space-x-3">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       data-ce='[{"k":"t-light-class","v":"text-red-600"},{"k":"t-dark-class","v":"text-red-400"}]'>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div class="min-w-0 flex-1">
                    <h3 class="text-base sm:text-lg font-medium text-red-800 dark:text-red-300" id="${t.f.name("error-title")}"
                        data-ce='[{"k":"t-light-class","v":"text-red-800"},{"k":"t-dark-class","v":"text-red-300"}]'>Error</h3>
                    <p class="text-red-700 dark:text-red-400 mt-1 text-sm sm:text-base break-words" id="${t.f.name("error-message")}"
                       data-ce='[{"k":"t-light-class","v":"text-red-700"},{"k":"t-dark-class","v":"text-red-400"}]'></p>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mt-6 sm:mt-8"
                   data-ce='[{"k":"t-light-class","v":"bg-gray-50 border-gray-200"}, {"k":"t-dark-class","v":"bg-gray-800/50 border-gray-700"}]'>
                <h3 class="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-3 sm:mb-4"
                 data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'
                >Try these examples:</h3>
                <div id="${t.f.name("eg-btns")}" class="flex flex-wrap gap-2">
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
                <p>${e.data.curr.data?.foo?.txt||""}</p>
            </footer>




            
          </div>
          `,style:`
          @import  url('${t.f.path("/style.css")}');
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
          `})});exports.index=a;exports.renderer=a;
