<script setup lang="ts">
import { worksData } from '~/utils/worksData'

const navItems = [
  { label: 'About me', href: '#About' },
  { label: 'Skills', href: '#Skills' },
  { label: 'Links', href: '#Links' },
  { label: 'Contact', href: '#Contact' },
]

const aboutItems = [
  { label: 'Name', value: 'minena / Umamimi' },
  { label: '所属', value: '大阪公立大学工業高等専門学校' },
  { label: '学年・コース', value: '3年 知能情報コース / 18歳' },
  { label: '所属団体', value: '学友会執行部 / 汽車倶楽部 / MikuIT / ボカロ紅白歌合戦' },
]

const primarySkills = [
  { id: 'HTML5', img: '/images/Skills/HTML5.png', title: 'HTML5: 授業・独学で習った程度' },
  { id: 'CSS3', img: '/images/Skills/CSS3.png', title: 'CSS3: 授業・独学で習った程度' },
  { id: 'JavaScript', img: '/images/Skills/JavaScript.png', title: 'JavaScript: 独学で理解できる程度' },
  { id: 'Python', img: '/images/Skills/Python.png', title: 'Python: 授業で習った程度' },
  { id: 'Arduino', img: '/images/Skills/Arduino.png', title: 'Arduino: 授業で習った程度' },
  { id: 'Git', img: '/images/Skills/Git.png', title: 'Git: 授業で習った程度' },
  { id: 'GitHub', img: '/images/Skills/GitHub.png', title: 'GitHub: 授業で習った程度' },
  { id: 'Tinkercad', img: '/images/Skills/tinkercad.png', title: 'Tinkercad: 授業で習った程度' },
]

const otherSkills = [
  { id: 'Fusion 360', img: '/images/Skills/fusion.png', title: 'Fusion 360: ポリゴンのモデリングの代用で利用しています。' },
  { id: 'Blender', img: '/images/Skills/blender.png', title: 'Blender: UV展開で利用しています。' },
  { id: 'OBS', img: '/images/Skills/OBS.png', title: 'OBS: 配信環境構築・実際に配信しています。' },
  { id: 'AviUtl', img: '/images/Skills/Aviutl.png', title: 'AviUtl: 動画編集しています。' },
  { id: 'paint.net', img: '/images/Skills/paintnet.png', title: 'paint.net: 画像編集しています。' },
  { id: 'rekordbox', img: '/images/Skills/rekordbox.png', title: 'rekordbox: ネットでDJデビューしました。' },
  { id: 'MMD', img: '/images/Skills/MMD.png', title: 'MMD: いくつかの映像作品を投稿しています。' },
  { id: 'MS365', img: '/images/Skills/MS360.png', title: 'Microsoft 365: 事務業務等しています。' },
]

const latestWorks = worksData.slice(0, 5)

const links = [
  { label: '学友会執行部 公式X（旧Twitter）', href: 'https://x.com/omuct_gakuyukai' },
  { label: '汽車倶楽部 公式X（旧Twitter）', href: 'https://twitter.com/ClubKisya' },
  { label: 'MikuIT 公式X（旧Twitter）', href: 'https://x.com/MikuITech' },
]
</script>

<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="relative pt-48 pb-32 text-center px-6 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div class="max-w-3xl mx-auto">
        <h2 class="text-7xl sm:text-8xl font-black mb-6 text-white tracking-tighter leading-none">
          Umamimi
        </h2>
        <p class="text-gray-400 text-xl font-medium max-w-lg mx-auto leading-relaxed">
          高専生 / エンジニア志望 / 照明オペレーター
        </p>
        <div class="flex justify-center gap-4 mt-12">
          <NuxtLink to="/works" class="px-8 py-3 rounded-full bg-blue-700 text-white font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-700/20">
            View Works
          </NuxtLink>
          <a href="#About" class="px-8 py-3 rounded-full border border-gray-700 bg-gray-900/50 text-gray-300 font-bold text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
            About me
          </a>
        </div>
      </div>
    </section>

    <!-- ===== MAIN CONTENT ===== -->
    <main class="max-w-5xl mx-auto px-6 pb-24">

      <!-- ── About ── -->
      <section id="About" class="py-24 scroll-mt-24">
        <SectionTitle>About</SectionTitle>
        <div class="mt-12 grid sm:grid-cols-2 gap-6">
          <div v-for="info in aboutItems" :key="info.label"
            class="p-8 rounded-[2rem] bg-gray-900/50 border border-gray-800 hover:border-blue-700/50 transition-all duration-300 shadow-sm"
          >
            <p class="text-[10px] text-cyan-400 font-black uppercase tracking-[0.2em] mb-2">{{ info.label }}</p>
            <p class="text-gray-100 font-bold text-xl leading-tight">{{ info.value }}</p>
          </div>
        </div>
        <p class="mt-8 text-xs text-gray-500 font-bold text-right italic uppercase tracking-widest">(2025年8月現在)</p>
      </section>

      <Divider />

      <!-- ── Skills ── -->
      <section id="Skills" class="py-24 scroll-mt-24">
        <SectionTitle>Skills</SectionTitle>
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-12">
          <a
            v-for="skill in primarySkills"
            :key="skill.id"
            :href="skill.img"
            :data-lightbox="'skills'"
            class="group flex flex-col items-center gap-4 p-6 rounded-[2rem] bg-gray-900/30 border border-gray-800 hover:border-cyan-400 hover:bg-gray-900/60 transition-all duration-300 shadow-inner"
          >
            <img :src="skill.img" :alt="skill.id" class="w-16 h-16 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            <span class="text-xs font-black text-gray-500 group-hover:text-cyan-400 transition-colors uppercase tracking-widest">{{ skill.id }}</span>
          </a>
        </div>

        <div class="mt-10">
          <AccordionItem id="skills-others" label="Others">
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-4">
              <a
                v-for="skill in otherSkills"
                :key="skill.id"
                :href="skill.img"
                :data-lightbox="'skills-other'"
                class="group flex flex-col items-center gap-4 p-6 rounded-[2rem] bg-gray-950/50 border border-gray-900 hover:border-fuchsia-400 transition-all duration-300"
              >
                <img :src="skill.img" :alt="skill.id" class="w-16 h-16 object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                <span class="text-[10px] font-black text-gray-600 group-hover:text-fuchsia-400 transition-colors uppercase tracking-widest text-center">{{ skill.id }}</span>
              </a>
            </div>
          </AccordionItem>
        </div>
      </section>

      <Divider />

      <!-- ── Works Preview ── -->
      <section id="WorksPreview" class="py-24 scroll-mt-24">
        <div class="flex items-center justify-between mb-12">
          <SectionTitle>Latest Works</SectionTitle>
          <NuxtLink to="/works" class="text-sm font-black text-fuchsia-400 hover:text-fuchsia-300 transition-colors uppercase tracking-widest flex items-center gap-2 group">
            View All <span class="group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>
        <div class="grid gap-8">
          <NuxtLink
            v-for="work in latestWorks"
            :key="work.id"
            :to="`/works/${work.id}`"
            class="group block"
          >
            <div class="p-8 rounded-[2.5rem] bg-gray-900/50 border border-gray-800 group-hover:border-cyan-400/50 group-hover:bg-gray-900 transition-all duration-500 shadow-xl">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 class="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors leading-tight mb-2">
                    {{ work.title }}
                  </h3>
                  <p class="text-xs text-gray-500 font-bold uppercase tracking-widest">
                    {{ work.period }}
                  </p>
                </div>
                <div class="flex -space-x-3 overflow-hidden" v-if="work.images.length > 0">
                  <img
                    v-for="(img, idx) in work.images.slice(0, 3)"
                    :key="idx"
                    :src="img.src"
                    class="inline-block h-12 w-12 rounded-full ring-4 ring-gray-900 object-cover"
                  />
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>

      <Divider />

      <!-- ── Links ── -->
      <section id="Links" class="py-24 scroll-mt-24">
        <SectionTitle>Links</SectionTitle>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            target="_blank"
            class="group flex flex-col p-8 rounded-[2rem] bg-gray-900/30 border border-gray-800 hover:border-blue-700/50 hover:bg-gray-900 transition-all duration-500"
          >
            <span class="text-blue-700 text-3xl font-black mb-4 group-hover:scale-110 group-hover:translate-x-1 transition-all inline-block">↗</span>
            <span class="text-gray-100 font-black text-sm tracking-tight leading-snug">{{ link.label }}</span>
          </a>
        </div>
      </section>

      <Divider />

      <!-- ── Contact ── -->
      <section id="Contact" class="py-24 scroll-mt-24">
        <SectionTitle>Contact</SectionTitle>
        <div class="mt-12 p-12 rounded-[3rem] bg-gradient-to-br from-blue-700 to-indigo-900 shadow-2xl shadow-blue-900/40 relative overflow-hidden group">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          
          <div class="relative z-10 max-w-lg">
            <h4 class="text-4xl font-black mb-6 tracking-tighter text-white">Contact Info</h4>
            <div class="space-y-4">
              <p class="inline-block bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-md border border-white/20 font-mono font-bold text-white text-lg w-full">
                rj23098g[at]st.omu.ac.jp
              </p>
              <p class="inline-block bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-md border border-white/20 font-mono font-bold text-white text-lg w-full">
                rj23098g[at]yahoo.co.jp
              </p>
            </div>
            <p class="text-blue-200 text-xs mt-6 font-bold italic tracking-widest uppercase opacity-75">
              ([at] を @ に置き換えてください)
            </p>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>
