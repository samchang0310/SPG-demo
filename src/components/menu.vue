<script setup>
import { ref } from 'vue'
import { smoothScrollTo } from '../utils/smoothScroll.js'

defineProps({
  msg: String,
})

const showMenu = ref(false)
</script>

<template>
  <div class="w-[100vw] px-4 md:px-0 h-15 md:h-20 flex justify-center bg-white items-center sticky top-0 z-50 shadow">
    <div class="flex justify-between items-center w-[1110px] m-auto">
      <div>
        <a href="#" @click.prevent="smoothScrollTo('top', 50)">
          <img src="/logo.svg" alt="">
        </a>
      </div>
      <!-- 漢堡選單按鈕（手機顯示） -->
      <button
        class="md:hidden flex items-center z-50"
        @click="showMenu = !showMenu"
        aria-label="menu"
      >
        <template v-if="!showMenu">
          <!-- 漢堡icon -->
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <rect y="7" width="32" height="3" rx="1.5" fill="#232323"/>
            <rect y="14" width="32" height="3" rx="1.5" fill="#232323"/>
            <rect y="21" width="32" height="3" rx="1.5" fill="#232323"/>
          </svg>
        </template>
        <template v-else>
          <!-- 關閉icon -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <line x1="8" y1="8" x2="24" y2="24" stroke="#232323" stroke-width="3" stroke-linecap="round"/>
            <line x1="24" y1="8" x2="8" y2="24" stroke="#232323" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </template>
      </button>
      <!-- 選單內容（桌機顯示） -->
      <div class="flex gap-[20px] items-center md:flex hidden">
        <a href="#about" @click.prevent="smoothScrollTo('about', 50)" class="hover:text-[#54AF8F] transition">关于我们</a>
        <a href="#introduction" @click.prevent="smoothScrollTo('introduction', 50)" class="hover:text-[#54AF8F] transition">产品简介</a>
        <a href="#feature" @click.prevent="smoothScrollTo('feature', 50)" class="hover:text-[#54AF8F] transition">产品特色</a>
        <a href="#contact" @click.prevent="smoothScrollTo('contact',50)" class="hover:text-[#54AF8F] transition">取得联系</a>
        <!-- 桌機語言選單（只在 md 以上顯示） -->
        <div class="py-2 px-5 border rounded-full flex items-center gap-2.5 md:flex hidden">
          <p>中文</p>
          <img src="../assets/down.png" alt="">
        </div>
      </div>
      <!-- 漢堡選單內容（手機顯示） - 無遮罩 -->
      <div
        v-if="showMenu"
        class="absolute top-full left-0 w-full md:hidden z-50"
      >
        <div class="w-full max-w-[1110px] mx-auto bg-white flex flex-col items-center gap-6 py-6 shadow">
          <a href="#about" @click.prevent="smoothScrollTo('about', 50); showMenu=false" class="hover:text-[#54AF8F] transition">关于我们</a>
          <a href="#introduction" @click.prevent="smoothScrollTo('introduction', 50); showMenu=false" class="hover:text-[#54AF8F] transition">产品简介</a>
          <a href="#feature" @click.prevent="smoothScrollTo('feature', 50); showMenu=false" class="hover:text-[#54AF8F] transition">产品特色</a>
          <a href="#contact" @click.prevent="smoothScrollTo('contact',50); showMenu=false" class="hover:text-[#54AF8F] transition">取得联系</a>
          <div class="py-2 px-5 border rounded-full flex items-center gap-2.5">
            <p>中文</p>
            <img src="../assets/down.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>