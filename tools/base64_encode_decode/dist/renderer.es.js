const d = async (e) => ({
  set: async (a, s) => {
    console.log(`--renderer [${a.data.curr.type}]`);
    const t = {
      value: () => a.data.curr.data.data,
      theme: () => a.data.curr.data.theme || "light"
    };
    return {
      r: (() => {
        const r = {
          light: "bg-white text-gray-900",
          dark: "bg-gray-900 text-white"
        };
        return `
                    <div id='${e.f.name("root")}' class="min-h-screen transition-colors duration-300 ${r[t.theme()]}" data-ce='[{"k":"t-light-class","v":"bg-white text-gray-900"},{"k":"t-dark-class","v":"bg-gray-900 text-white"}]'>
                        <div class="container mx-auto px-4 py-8">
                            <!-- Header -->
                            <header class="text-center mb-12" data-ce='[{"k":"t-light-class","v":"text-gray-900"},{"k":"t-dark-class","v":"text-white"}]'>
                                <h1 class="text-4xl font-bold mb-4">Base64 Encoder/Decoder</h1>
                                <p class="text-lg opacity-80">Easily encode and decode Base64 strings</p>
                                
                                <!-- Theme Toggle -->
                                <div class="mt-6 flex justify-center">
                                    <button id="${e.f.name("theme-toggle")}" class="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${t.theme() === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-gray-100 border-gray-300 text-gray-700"}" data-ce='[{"k":"t-light-class","v":"bg-gray-100 border-gray-300 text-gray-700"},{"k":"t-dark-class","v":"bg-gray-800 border-gray-700 text-white"}]'>
                                        <span>${t.theme() === "dark" ? "☀️" : "🌙"}</span>
                                        <span>${t.theme() === "dark" ? "Light Mode" : "Dark Mode"}</span>
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
                                                class="w-full h-64 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${t.theme() === "dark" ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"}"
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
                                                class="w-full h-64 p-4 border rounded-lg resize-none ${t.theme() === "dark" ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-gray-50 border-gray-300 text-gray-600"}"
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
                                    <div class="text-center p-4 rounded-lg ${t.theme() === "dark" ? "bg-gray-800" : "bg-gray-100"}" data-ce='[{"k":"t-light-class","v":"bg-gray-100"},{"k":"t-dark-class","v":"bg-gray-800"}]'>
                                        <div class="text-2xl font-bold ${t.theme() === "dark" ? "text-blue-400" : "text-blue-600"}" data-ce='[{"k":"t-light-class","v":"text-blue-600"},{"k":"t-dark-class","v":"text-blue-400"}]' id="${e.f.name("input-length")}">0</div>
                                        <div class="text-sm opacity-80" data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>Input Length</div>
                                    </div>
                                    <div class="text-center p-4 rounded-lg ${t.theme() === "dark" ? "bg-gray-800" : "bg-gray-100"}" data-ce='[{"k":"t-light-class","v":"bg-gray-100"},{"k":"t-dark-class","v":"bg-gray-800"}]'>
                                        <div class="text-2xl font-bold ${t.theme() === "dark" ? "text-green-400" : "text-green-600"}" data-ce='[{"k":"t-light-class","v":"text-green-600"},{"k":"t-dark-class","v":"text-green-400"}]' id="${e.f.name("output-length")}">0</div>
                                        <div class="text-sm opacity-80" data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>Output Length</div>
                                    </div>
                                    <div class="text-center p-4 rounded-lg ${t.theme() === "dark" ? "bg-gray-800" : "bg-gray-100"}" data-ce='[{"k":"t-light-class","v":"bg-gray-100"},{"k":"t-dark-class","v":"bg-gray-800"}]'>
                                        <div class="text-2xl font-bold ${t.theme() === "dark" ? "text-purple-400" : "text-purple-600"}" data-ce='[{"k":"t-light-class","v":"text-purple-600"},{"k":"t-dark-class","v":"text-purple-400"}]' id="${e.f.name("status")}">Ready</div>
                                        <div class="text-sm opacity-80" data-ce='[{"k":"t-light-class","v":"text-gray-700"},{"k":"t-dark-class","v":"text-gray-300"}]'>Status</div>
                                    </div>
                                </div>
                            </div>

                            
                            

                            <!-- Footer -->
                            <footer
                              class="mt-16 mb-2 text-center text-gray-500"
                              data-ce='[{"k":"t-light-class","v":"text-gray-500"}, {"k":"t-dark-class","v":"text-gray-400"}]'
                            >
                              <!--p>Made with ❤️ using TypeScript & Tailwind CSS</p-->
                              <p>${a.data.curr.data?.foo?.txt || ""}</p>
                            </footer>



                        </div>
                    </div>
                    `;
      })(),
      style: `
                    @import url('${e.f.path("/style.css")}'); 

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
                    `
    };
  }
});
export {
  d as index,
  d as renderer
};
