<script setup lang="ts">
import { worksData } from '~/utils/worksData'

const allWorks = worksData
</script>

<template>
  <div class="pt-32 pb-24 px-6 max-w-5xl mx-auto">
    <div class="mb-16">
      <SectionTitle>All Works</SectionTitle>
      <p class="text-gray-500 font-bold mt-4 uppercase tracking-[0.3em]">これまでの制作物と活動の記録</p>
    </div>

    <div class="grid gap-12">
      <NuxtLink
        v-for="work in allWorks"
        :key="work.id"
        :to="`/works/${work.id}`"
        class="group block"
      >
        <WorkCard :work="work" class="pointer-events-none" />
      </NuxtLink>

      <div class="mt-12 bg-gray-900/30 border border-dashed border-gray-800 rounded-[3rem] p-12 text-center group hover:border-fuchsia-400/50 transition-all">
        <h3 class="text-2xl font-black text-gray-500 group-hover:text-fuchsia-400 transition-colors uppercase tracking-widest leading-none mb-4">Others</h3>
        <p class="text-gray-600 font-bold">coming soon...</p>
      </div>
    </div>
  </div>
</template>
