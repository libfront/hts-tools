"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=async e=>({set:async(t,i)=>{console.log(`--renderer [${t.data.curr.type}]`);const l=r=>{switch(r){case"generating":return"text-yellow-500";case"success":return"text-green-500";case"error":return"text-red-500";default:return"text-gray-500"}},o=r=>{switch(r){case"generating":return"Generating keys...";case"success":return"Keys generated successfully!";case"error":return"Error generating keys";default:return"Ready to generate RSA keys"}};return{r:(()=>{const r=t.data.curr.data.keys,a=t.data.curr.data.status||"idle",d=t.data.curr.data.error;return`
                    <div id="${e.f.name("root")}" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
                    data-ce='[{"k":"t-light-class","v":"bg-white"},{"k":"t-dark-class","v":"bg-gray-900"}]'
                    >
                        <div class="container mx-auto px-4 py-8">
                            <!-- Header -->
                            <header class="text-center mb-12">
                                <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                                    data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                                    RSA Key Generator
                                </h1>
                                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                                    data-ce='[{"k":"t-light-class","v":"text-gray-600"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                                    Generate secure RSA public/private key pairs for your cryptographic applications
                                </p>
                            </header>

                            <!-- Theme Toggle -->
                            <div class="flex justify-end mb-6">
                                <button id="${e.f.name("theme-toggle")}" 
                                    class="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                                    data-ce='[{"k":"t-light-class","v":"bg-gray-200 text-gray-800 hover:bg-gray-300"},{"k":"t-dark-class","v":"bg-gray-700 text-gray-200 hover:bg-gray-600"}]'>
                                    <svg class="w-5 h-5 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                                    </svg>
                                    <svg class="w-5 h-5 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                    </svg>
                                </button>
                            </div>

                            <!-- Main Content -->
                            <div class="max-w-4xl mx-auto">
                                <!-- Controls -->
                                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700"
                                    data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                                    <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
                                        <div class="flex-1">
                                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                                data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>
                                                Key Size (bits)
                                            </label>
                                            <select id="${e.f.name("key-size")}" 
                                                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                                data-ce='[{"k":"t-light-class","v":"border-gray-300 bg-white text-gray-900"},{"k":"t-dark-class","v":"border-gray-600 bg-gray-700 text-white"}]'>
                                                <option value="2048">2048 bits (Recommended)</option>
                                                <option value="1024">1024 bits</option>
                                                <option value="3072">3072 bits</option>
                                                <option value="4096">4096 bits</option>
                                            </select>
                                        </div>
                                        <button id="${e.f.name("generate-btn")}" 
                                            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                            data-ce='[{"k":"t-light-class","v":"bg-blue-600 hover:bg-blue-700"},{"k":"t-dark-class","v":"bg-blue-700 hover:bg-blue-600"}]'>
                                            Generate Keys
                                        </button>
                                    </div>
                                </div>

                                <!-- Status -->
                                <div class="mb-8 text-center">
                                    <div id="${e.f.name("status")}" 
                                        class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${l(a)} bg-opacity-10 ${a==="success"?"bg-green-500":a==="error"?"bg-red-500":a==="generating"?"bg-yellow-500":"bg-gray-100"}"
                                        data-ce='[{"k":"t-light-class","v":"bg-opacity-10"},{"k":"t-dark-class","v":"bg-gray-800 bg-opacity-20"}]'>
                                        <span>${o(a)}</span>
                                        ${a==="generating"?`
                                        <svg class="animate-spin -mr-1 ml-2 h-4 w-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        `:""}
                                    </div>
                                    ${d?`
                                    <div class="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400"
                                        data-ce='[{"k":"t-light-class","v":"bg-red-50 border-red-200 text-red-700"},{"k":"t-dark-class","v":"bg-red-900/20 border-red-800 text-red-400"}]'>
                                        ${d}
                                    </div>
                                    `:""}
                                </div>

                                <!-- Keys Output -->
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <!-- Public Key -->
                                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                                        data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                                        <div class="bg-green-50 dark:bg-green-900/20 px-4 py-3 border-b border-green-200 dark:border-green-800"
                                            data-ce='[{"k":"t-light-class","v":"bg-green-50 border-green-200"},{"k":"t-dark-class","v":"bg-green-900/20 border-green-800"}]'>
                                            <h3 class="text-lg font-semibold text-green-800 dark:text-green-300 flex items-center gap-2">
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                                                </svg>
                                                Public Key
                                            </h3>
                                        </div>
                                        <div class="p-4">
                                            <textarea id="${e.f.name("public-key")}" 
                                                readonly
                                                rows="8"
                                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 placeholder-gray-600 dark:text-white font-mono text-sm resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                                data-ce='[{"k":"t-light-class","v":"border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-600"},{"k":"t-dark-class","v":"border-gray-600 bg-gray-900 text-white placeholder-gray-500"}]'
                                                placeholder="Public key will appear here...">${r?.publicKey||""}</textarea>
                                            <div class="flex justify-end mt-2">
                                                <button id="${e.f.name("copy-public")}" 
                                                    class="px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    data-ce='[{"k":"t-light-class","v":"bg-green-600 hover:bg-green-700"},{"k":"t-dark-class","v":"bg-green-700 hover:bg-green-600"}]'
                                                    ${r?.publicKey?"":"disabled"}>
                                                    Copy to Clipboard
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Private Key -->
                                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                                        data-ce='[{"k":"t-light-class","v":"bg-white border-gray-200"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700"}]'>
                                        <div class="bg-red-50 dark:bg-red-900/20 px-4 py-3 border-b border-red-200 dark:border-red-800"
                                            data-ce='[{"k":"t-light-class","v":"bg-red-50 border-red-200"},{"k":"t-dark-class","v":"bg-red-900/20 border-red-800"}]'>
                                            <h3 class="text-lg font-semibold text-red-800 dark:text-red-300 flex items-center gap-2">
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 016 0v2h1V7a5 5 0 00-5-5z"></path>
                                                </svg>
                                                Private Key
                                            </h3>
                                        </div>
                                        <div class="p-4">
                                            <textarea id="${e.f.name("private-key")}" 
                                                readonly
                                                rows="8"
                                                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 placeholder-gray-600 dark:text-white font-mono text-sm resize-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                                data-ce='[{"k":"t-light-class","v":"border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-600"},{"k":"t-dark-class","v":"border-gray-600 bg-gray-900 text-white placeholder-gray-500"}]'
                                                placeholder="Private key will appear here...">${r?.privateKey||""}</textarea>
                                            <div class="flex justify-end mt-2">
                                                <button id="${e.f.name("copy-private")}" 
                                                    class="px-4 py-2 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    data-ce='[{"k":"t-light-class","v":"bg-red-600 hover:bg-red-700"},{"k":"t-dark-class","v":"bg-red-700 hover:bg-red-600"}]'
                                                    ${r?.privateKey?"":"disabled"}>
                                                    Copy to Clipboard
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Security Notice -->
                                <div class="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4"
                                    data-ce='[{"k":"t-light-class","v":"bg-yellow-50 border-yellow-200"},{"k":"t-dark-class","v":"bg-yellow-900/20 border-yellow-800"}]'>
                                    <div class="flex items-start gap-3">
                                        <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                        </svg>
                                        <div class="text-yellow-800 dark:text-yellow-300 text-sm">
                                            <strong class="font-semibold">Security Notice:</strong> Keep your private key secure and never share it. The private key is generated locally in your browser and is not transmitted over the network.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer -->
                            <footer class="mt-16 mb-2 text-center text-gray-500 dark:text-gray-400"
                                data-ce='[{"k":"t-light-class","v":"text-gray-500"},{"k":"t-dark-class","v":"text-gray-400"}]'>
                                <p>${t.data.curr.data?.foo?.txt||"Made with ❤️ using TypeScript & Tailwind CSS"}</p>
                            </footer>
                        </div>
                    </div>
                    `})(),style:`
                    @import url('${e.f.path("/style.css")}');



                    /* Smooth transitions for theme switching */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

/* Custom focus styles */
button:focus,
select:focus,
textarea:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

/* Loading animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}



                    .${e.f.name("text")} {
                        background: transparent;
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

                    .dark textarea::-webkit-scrollbar-thumb {
                        background: #4a5568;
                    }

                    .dark textarea::-webkit-scrollbar-thumb:hover {
                        background: #718096;
                    }
                    `}}});exports.index=s;exports.renderer=s;
