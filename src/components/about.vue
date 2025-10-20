<script setup>
import { ref } from 'vue'
import icon1 from '/icon1.svg'
import icon2 from '/icon2.svg'
import icon3 from '/icon3.svg'
import icon4 from '/icon4.svg'

const features = [
  {
    icon: icon1,
    title: '诚信正直',
    desc: '我们坚守诚信，以建立长久稳固的商业合作关系'
  },
  {
    icon: icon2,
    title: '技術創新',
    desc: '持續推動技術革新，提升用戶體驗'
  },
  {
    icon: icon3,
    title: '專業團隊',
    desc: '擁有豐富經驗的專業團隊，提供最佳服務'
  },
  {
    icon: icon4,
    title: '全球佈局',
    desc: '業務遍及全球，服務多元市場'
  }
]

const count = ref(0)
</script>

<template>
  <div class="bg-white h-auto scroll-mt-[100px]" id="about">
    <div class="w-full max-w-[1100px] mx-auto flex justify-center py-8 md:py-[50px] px-4 md:px-[70px] text-center flex-col gap-10 md:gap-[40px]">
      <!-- 文字區塊 -->
      <div class="px-2 md:px-[70px] grid gap-4 md:gap-[20px]">
        <p class="text-2xl md:text-[30px] font-semibold">关于我们</p>
        <p class="text-start text-base md:text-lg">
          对 SPG SPORT 而言，诚信不只是原则，而是我们的核心信念。这份信念引导每一次策略选择，推动技术与使用者体验持续创新，并支撑以信任为基础的长期合作。
        </p>
      </div>
      <!-- 特色介紹 -->
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2.5">
        <div
          v-for="(item, idx) in features"
          :key="idx"
          class="flex flex-col items-center bg-[url('./assets/itembg.png')] bg-center bg-cover bg-no-repeat w-full min-w-0 text-white px-4 md:px-[20px] py-8 md:py-[40px] rounded-xl"
        >
          <div class="gap-4 flex flex-col justify-center items-center w-full">
            <img :src="item.icon" alt="" class="w-[40px] h-[40px]" />
            <div class="text-lg md:text-lg font-bold mb-1">{{ item.title }}</div>
          </div>
          <div class="text-base md:text-base">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>