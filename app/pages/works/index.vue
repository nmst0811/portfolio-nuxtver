<script setup lang="ts">
const { getWorks } = useMicroCMS()

const { data: worksResponse } = await useAsyncData('all-works', () => getWorks({ limit: 100 }))
const allWorks = computed(() => worksResponse.value?.contents || [])

const products = computed(() => allWorks.value.filter(w => w.category?.slug === 'products'))
const movies = computed(() => allWorks.value.filter(w => w.category?.slug === 'movie'))
const events = computed(() => allWorks.value.filter(w => w.category?.slug === 'events-lighting'))
</script>

<template>
  <div class="pt-32 pb-24 px-6 max-w-5xl mx-auto">
    <div class="mb-16">
      <SectionTitle>All Works</SectionTitle>
      <p class="text-gray-500 font-bold mt-4 uppercase tracking-[0.3em]">これまでの制作物と活動の記録</p>
    </div>

    <div class="space-y-24">
      <!-- Products -->
      <section v-if="products.length > 0">
        <div class="flex items-center gap-4 mb-10">
          <h3 class="text-xl font-black text-white uppercase tracking-widest pl-4 border-l-4 border-cyan-400">Products</h3>
          <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">プロダクト制作</span>
        </div>
        <div class="grid gap-12">
          <NuxtLink
            v-for="work in products"
            :key="work.id"
            :to="`/works/${work.id}`"
            class="group block"
          >
            <WorkCard :work="work" class="pointer-events-none" />
          </NuxtLink>
        </div>
      </section>

      <!-- Movie -->
      <section v-if="movies.length > 0">
        <div class="flex items-center gap-4 mb-10">
          <h3 class="text-xl font-black text-white uppercase tracking-widest pl-4 border-l-4 border-fuchsia-400">Movie</h3>
          <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">映像制作</span>
        </div>
        <div class="grid gap-12">
          <NuxtLink
            v-for="work in movies"
            :key="work.id"
            :to="`/works/${work.id}`"
            class="group block"
          >
            <WorkCard :work="work" class="pointer-events-none" />
          </NuxtLink>
        </div>
      </section>

      <!-- Events/Lighting -->
      <section v-if="events.length > 0">
        <div class="flex items-center gap-4 mb-10">
          <h3 class="text-xl font-black text-white uppercase tracking-widest pl-4 border-l-4 border-blue-600">Events / Lighting</h3>
          <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">イベント運営 / 照明</span>
        </div>
        <div class="grid gap-12">
          <NuxtLink
            v-for="work in events"
            :key="work.id"
            :to="`/works/${work.id}`"
            class="group block"
          >
            <WorkCard :work="work" class="pointer-events-none" />
          </NuxtLink>
        </div>
      </section>

      <!-- Empty State -->
      <div v-if="allWorks.length === 0" class="mt-12 bg-gray-900/30 border border-dashed border-gray-800 rounded-[3rem] p-12 text-center group">
        <h3 class="text-2xl font-black text-gray-500 uppercase tracking-widest leading-none mb-4">No Works Found</h3>
        <p class="text-gray-600 font-bold">コンテンツを準備中です</p>
      </div>
    </div>
  </div>
</template>
