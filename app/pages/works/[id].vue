<script setup lang="ts">
import { worksData } from '~/utils/worksData'

const route = useRoute()
const workId = route.params.id as string
const work = worksData.find(w => w.id === workId)

if (!work) {
  throw createError({ statusCode: 404, statusMessage: 'Work not found' })
}
</script>

<template>
  <div class="pt-32 pb-24 px-6 max-w-5xl mx-auto">
    <div class="mb-12">
      <NuxtLink to="/works" class="text-sm font-black text-gray-500 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] flex items-center gap-2 mb-8 group">
        <span class="group-hover:-translate-x-1 transition-transform">←</span> Back to list
      </NuxtLink>
      <h2 class="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-tight mb-4">
        {{ work.title }}
      </h2>https://www.youtube.com/?gl=JP&hl=ja
      <div class="flex flex-wrap gap-4 items-center">
        <span class="text-xs font-black text-cyan-400 uppercase tracking-widest border border-cyan-400/30 px-4 py-1.5 rounded-full bg-cyan-400/5">
          {{ work.period }}
        </span>
        <span v-if="work.time" class="text-xs font-black text-fuchsia-400 uppercase tracking-widest border border-fuchsia-400/30 px-4 py-1.5 rounded-full bg-fuchsia-400/5">
          Time: {{ work.time }}
        </span>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-12">
      <div class="lg:col-span-2 space-y-12">
        <div class="p-10 rounded-[2.5rem] bg-gray-900 border border-gray-800 shadow-2xl">
          <h3 class="text-lg font-black text-cyan-400 uppercase tracking-widest mb-6 border-b border-gray-800 pb-4">Description</h3>
          <p class="text-gray-300 font-medium leading-relaxed text-lg italic">
            "{{ work.description || 'No description available for this project.' }}"
          </p>
        </div>

        <div v-if="work.images.length > 0" class="grid gap-6">
          <a
            v-for="(img, idx) in work.images"
            :key="idx"
            :href="img.src"
            :data-lightbox="'work-detail'"
            class="block rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl group"
          >
            <img :src="img.src" class="w-full h-auto group-hover:scale-105 transition-transform duration-1000" />
          </a>
        </div>
      </div>

      <div class="space-y-6">
        <div class="p-8 rounded-[2rem] bg-blue-700/10 border border-blue-700/30 sticky top-32">
          <h3 class="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">Links & Repo</h3>
          <div class="grid gap-3">
            <a :href="work.href" target="_blank" class="flex items-center justify-between p-4 rounded-2xl bg-blue-700 text-white font-black text-sm hover:bg-blue-600 transition-all shadow-lg shadow-blue-700/20">
              Live Preview <span>↗</span>
            </a>
            <a v-if="work.repo" :href="work.repo" target="_blank" class="flex items-center justify-between p-4 rounded-2xl bg-gray-900 border border-gray-800 text-gray-300 font-black text-sm hover:border-gray-600 transition-all">
              GitHub Repo <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
