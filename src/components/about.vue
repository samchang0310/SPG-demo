<script setup>
import { ref } from 'vue'
import { t } from '../composables/i18n.js'
import icon1 from '/icon1.svg'
import icon2 from '/icon2.svg'
import icon3 from '/icon3.svg'
import icon4 from '/icon4.svg'

const features = [
  {
    icon: icon1,
    titleKey: 'about.features.f1.title',
    descKey: 'about.features.f1.desc'
  },
  {
    icon: icon2,
    titleKey: 'about.features.f2.title',
    descKey: 'about.features.f2.desc'
  },
  {
    icon: icon3,
    titleKey: 'about.features.f3.title',
    descKey: 'about.features.f3.desc'
  },
  {
    icon: icon4,
    titleKey: 'about.features.f4.title',
    descKey: 'about.features.f4.desc'
  }
]

const count = ref(0)
</script>

<template>
  <div class="bg-white h-auto scroll-mt-[100px]" id="about">
    <div class="w-full max-w-[1100px] mx-auto flex justify-center py-8 md:py-[50px] px-4 md:px-[70px] text-center flex-col gap-10 md:gap-[40px]">
      <!-- 文字區塊 -->
      <div class="px-2 md:px-[70px] grid gap-4 md:gap-[20px]">
        <p class="text-2xl md:text-[30px] font-semibold">{{ t('about.title') }}</p>
        <p class="text-start text-base md:text-lg">
          {{ t('about.desc') }}
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
            <div class="text-lg md:text-lg font-bold mb-1">{{ t(item.titleKey) }}</div>
          </div>
          <div class="text-base md:text-base">{{ t(item.descKey) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>