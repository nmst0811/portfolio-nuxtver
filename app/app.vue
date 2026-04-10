<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-cyan-500/30">
    <!-- Layout Wrapper -->
    <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/75 border-b border-gray-800 transition-all duration-300">
      <div class="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <NuxtLink to="/" class="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
          minena
        </NuxtLink>
        <nav>
          <ul class="flex items-center gap-1">
            <li v-for="item in navItems" :key="item.label">
              <NuxtLink
                v-if="!item.external"
                :to="item.href"
                class="px-4 py-1.5 rounded-full text-sm font-bold text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
                active-class="text-cyan-400 bg-cyan-400/10"
              >{{ item.label }}</NuxtLink>
              <a
                v-else
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-1.5 rounded-full text-sm font-bold text-gray-400 hover:text-fuchsia-400 hover:bg-fuchsia-400/10 transition-all duration-200"
              >{{ item.label }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <NuxtPage />

    <footer class="bg-gray-900/50 border-t border-gray-800 py-20 px-6">
      <div class="max-w-5xl mx-auto flex flex-col items-center">
        <div class="text-2xl font-black text-blue-700 tracking-tighter mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">minena</div>
        <ul class="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          <li v-for="item in navItems" :key="item.label">
            <component
              :is="item.external ? 'a' : 'NuxtLink'"
              :to="!item.external ? item.href : undefined"
              :href="item.external ? item.href : undefined"
              :target="item.external ? '_blank' : undefined"
              class="text-sm font-bold text-gray-500 hover:text-cyan-400 transition-colors duration-200"
            >{{ item.label }}</component>
          </li>
        </ul>
        <div class="w-full max-w-xs h-px bg-gray-800 mb-10"></div>
        <p class="text-center text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">&copy; minena / nmst0811</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Home', href: '/', external: false },
  { label: 'Works', href: '/works', external: false }
]
</script>
