<script setup>
import { ref } from 'vue'


defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="w-full min-h-[400px] md:h-[630px] bg-info scroll-mt-[100px]" id="introduction">
    <div class="w-full max-w-[1100px] mx-auto flex justify-center py-8 md:py-[70px] px-4 md:px-[70px] text-center flex-col gap-10 md:gap-[40px]">
      <div class="px-2 md:px-[70px] grid gap-4 md:gap-[20px]">
        <p class="text-2xl md:text-[30px] font-semibold text-white">产品简介</p>
        <p class="text-start text-white font-normal text-base md:text-lg">
          我们致力于引领体育博彩产业，透过持续创新与优化，为玩家打造无与伦比的使用体验。凭借可客制化的工具和服务，协助我们的合作伙伴提升玩家留存率和长期参与度。
        </p>
      </div>
      <div class="flex justify-center">
        <img src="/info-img.png" alt="" class="w-full md:w-[600px] h-auto" />
      </div>
    </div>
  </div>
</template>