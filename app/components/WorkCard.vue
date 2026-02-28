<script setup lang="ts">
import type { Work } from '~/utils/worksData'

defineProps<{
  work: Work
}>()
</script>

<template>
  <div class="p-10 rounded-[2.5rem] bg-gray-900/50 border border-gray-800 hover:border-cyan-400/50 hover:bg-gray-900 transition-all duration-500 shadow-xl group">
    <div class="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
      <div>
        <h3 class="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tighter leading-tight">
          {{ work.title }}
        </h3>
        <p class="text-xs text-gray-500 mt-3 font-bold uppercase tracking-[0.2em] flex items-center gap-3">
          {{ work.period }} 
          <span v-if="work.time" class="w-1 h-1 bg-gray-700 rounded-full"></span>
          <span v-if="work.time" class="text-fuchsia-400">{{ work.time }}</span>
        </p>
      </div>
      <div v-if="work.repo" class="text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-800 px-4 py-1.5 rounded-full bg-gray-950">
        Public Repository
      </div>
    </div>

    <p v-if="work.description" class="text-gray-400 font-medium leading-relaxed mb-10 text-base italic line-clamp-2">
      {{ work.description }}
    </p>

    <div v-if="work.images.length > 0" class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="(img, idx) in work.images.slice(0, 3)"
        :key="idx"
        class="aspect-video rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-gray-800"
      >
        <img :src="img.src" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>
