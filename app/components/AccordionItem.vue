<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  id: string
  label: string
}>()

const isOpen = ref(false)
</script>

<template>
  <div class="border border-gray-900 rounded-[2rem] overflow-hidden bg-gray-950 shadow-inner group transition-all duration-500">
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="w-full flex items-center justify-between p-7 text-left hover:bg-gray-900 transition-all group"
    >
      <span class="font-black text-gray-400 group-hover:text-white transition-colors tracking-tight uppercase tracking-[0.1em]">{{ label }}</span>
      <div
        class="w-10 h-10 rounded-2xl bg-gray-900 flex items-center justify-center text-cyan-400 transition-all duration-500 group-hover:bg-cyan-400 group-hover:text-black shadow-lg"
        :class="{ 'rotate-180 bg-fuchsia-400 text-black': isOpen }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isOpen"
        class="pb-8 px-8 border-t border-gray-900/50 bg-gray-900/10"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
