<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps({
  msg: String,
})

const items = [
  {
    img: '/feature1.png',
    title: '客制化',
    desc: '玩家体验的，不仅是一个投注平台，而是您的品牌精神。 SPG Sports 提供全方位客制化服务，合作伙伴可依需求调整品牌 Logo、平台主题与载入图示，轻松打造专属且独一無二的品牌化体育平台。'
  },
  {
    img: '/feature2.png',
    title: '高效穩定',
    desc: '我們的系統架構高效穩定，確保玩家享受流暢的投注體驗，合作夥伴無後顧之憂。'
  },
  {
    img: '/feature3.png',
    title: '多元賽事',
    desc: '提供全球多元賽事選擇，滿足不同玩家的需求，提升平台競爭力。'
  }
]
const count = ref(0)

onMounted(async () => {
  await nextTick()
  const cards = document.querySelectorAll('.feature-animate')
  gsap.set(cards, { opacity: 0, y: 40 })
  cards.forEach((el, idx) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: idx * 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 98%',
        toggleActions: 'play none none none'
        // markers: true // debug用可開啟
      }
    })
  })
})
</script>

<template>
  <div class="w-full min-h-[400px] md:h-[630px] bg-[#E7EAF0] scroll-mt-[100px]" id="feature">
    <div class="w-full max-w-[1100px] mx-auto flex justify-center py-8 md:py-[70px] px-4 md:px-[70px] text-center flex-col gap-10 md:gap-[40px]">
      <div class="px-2 md:px-[70px]">
        <p class="text-2xl md:text-[30px] font-semibold text-[#232323]">产品特色</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="feature-animate w-full rounded-lg overflow-hidden bg-white shadow"
        >
          <img :src="item.img" alt="" class="w-full h-auto object-cover">
          <div class="p-4 md:p-[20px] flex gap-2 md:gap-[10px] flex-col">
            <p class="text-[#54AF8F] text-base md:text-lg font-bold">{{ item.title }}</p>
            <p class="text-[#343434] text-sm md:text-base">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>