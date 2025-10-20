<script setup>
import { ref, onMounted } from 'vue'
import obSports from '../assets/ob-sports2.mp4'

defineProps({
  msg: String,
})

const count = ref(0)
// 新增 video ref 並在 mounted 時嘗試播放
const videoRef = ref(null)
onMounted(() => {
  const v = videoRef.value
  if (v) {
    v.play().catch(() => {
      // 手機或瀏覽器策略可能阻擋自動播放，catch 可忽略
    })
  }
})
</script>

<template>
  <div class="bg-header2 bg-center  h-[600px] md:h-[500px] w-full flex justify-center relative">
    <video
      :src="obSports"
      ref="videoRef"
      class="absolute inset-0 w-full h-full z-0 object-cover pointer-events-none"
      autoplay
      muted
      loop
      playsinline
      webkit-playsinline
      preload="metadata"
      aria-hidden="true"
    ></video>
    <div class="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-center z-10 absolute px-4 md:px-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="text-white flex flex-col justify-start gap-8 md:gap-[40px] w-full md:w-auto">
        <div class="grid gap-2 md:gap-[10px]">
          <p class="text-3xl md:text-6xl font-extrabold">SPG SPORTS</p>
          <p class="text-xl md:text-[24px] w-full md:w-[370px] m-auto">
            Experience World-Class Sportsbook
          </p>
        </div>
        <a
          href="#"
          class="w-fit bg-transparent hover:bg-[#69E0CE] px-6 md:px-[28px] py-3 md:py-[13px] text-[#69E0CE] hover:text-white border-[#69E0CE] border-1 bg-maincolor-30 rounded-full transition-all duration-300 ease-in-out text-base md:text-lg"
        >
          取得联系
        </a>
      </div>
      <img src="/header-img.png" alt="" class="w-full md:w-[600px] h-auto mt-6 md:mt-0" />
    </div>
    <div class="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="block"
        preserveAspectRatio="none"
      >
        <path d="M1920 100H0L1920 0V100Z" fill="#FFFEFE"></path>
      </svg>
    </div>
  </div>
</template>