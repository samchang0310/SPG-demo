<script setup>
import { ref } from 'vue'
import { smoothScrollTo } from '../utils/smoothScroll.js'
import { locale, t } from '../composables/i18n.js'

defineProps({ msg: String })

const showMenu = ref(false)
const showLangDropdown = ref(false)

function setLocale(l) {
  locale.value = l
  showLangDropdown.value = false
  showMenu.value = false
}
</script>

<template>
  <div class="w-[100vw] px-4 md:px-0 h-15 md:h-20 flex justify-center bg-white items-center sticky top-0 z-50 shadow">
    <div class="flex items-center w-[1110px] m-auto justify-between">
      <!-- 左側：Logo -->
      <div>
        <a href="#" @click.prevent="smoothScrollTo('top', 50)">
          <img src="/logo.svg" alt="">
        </a>
      </div>

      <!-- 中間：桌機選單（只在 md 以上顯示） -->
      <div class="hidden md:flex gap-[20px] items-center">
        <a href="#about" @click.prevent="smoothScrollTo('about',50)" class="hover:text-[#54AF8F] transition">{{ t('menu.about') }}</a>
        <a href="#introduction" @click.prevent="smoothScrollTo('introduction',50)" class="hover:text-[#54AF8F] transition">{{ t('menu.introduction') }}</a>
        <a href="#feature" @click.prevent="smoothScrollTo('feature',50)" class="hover:text-[#54AF8F] transition">{{ t('menu.feature') }}</a>
        <a href="#contact" @click.prevent="smoothScrollTo('contact',50)" class="hover:text-[#54AF8F] transition">{{ t('menu.contact') }}</a>
      </div>

      <!-- 右側：語言 / 漢堡（語言在桌機顯示、漢堡在手機顯示） -->
      <div class="flex items-center gap-4">
        <!-- 語言按鈕（桌機） -->
        <div class="relative hidden md:block">
          <button @click="showLangDropdown = !showLangDropdown" class="py-2 px-4 border rounded-full flex items-center gap-2">
            <span>{{ locale === 'zh' ? '中文' : 'EN' }}</span>
            <img src="../assets/down.png" alt="" class="w-4 h-4">
          </button>
          <div v-if="showLangDropdown" class="absolute right-0 mt-2 bg-white border rounded shadow">
            <button class="block w-full text-left px-4 py-2 hover:bg-gray-100" @click="setLocale('zh')">中文</button>
            <button class="block w-full text-left px-4 py-2 hover:bg-gray-100" @click="setLocale('en')">English</button>
          </div>
        </div>

        <!-- 漢堡按鈕（手機） -->
        <button class="md:hidden flex items-center z-50" @click="showMenu = !showMenu" aria-label="menu">
          <template v-if="!showMenu">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect y="7" width="32" height="3" rx="1.5" fill="#232323"/><rect y="14" width="32" height="3" rx="1.5" fill="#232323"/><rect y="21" width="32" height="3" rx="1.5" fill="#232323"/></svg>
          </template>
          <template v-else>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><line x1="8" y1="8" x2="24" y2="24" stroke="#232323" stroke-width="3" stroke-linecap="round"/><line x1="24" y1="8" x2="8" y2="24" stroke="#232323" stroke-width="3" stroke-linecap="round"/></svg>
          </template>
        </button>
      </div>
    </div>

    <!-- 手機漢堡內容 -->
    <div v-if="showMenu" class="absolute top-full left-0 w-full md:hidden z-50">
      <div class="w-full max-w-[1110px] mx-auto bg-white flex flex-col items-center gap-6 py-6 shadow">
        <a href="#about" @click.prevent="smoothScrollTo('about',50); showMenu=false" class="hover:text-[#54AF8F] transition">{{ t('menu.about') }}</a>
        <a href="#introduction" @click.prevent="smoothScrollTo('introduction',50); showMenu=false" class="hover:text-[#54AF8F] transition">{{ t('menu.introduction') }}</a>
        <a href="#feature" @click.prevent="smoothScrollTo('feature',50); showMenu=false" class="hover:text-[#54AF8F] transition">{{ t('menu.feature') }}</a>
        <a href="#contact" @click.prevent="smoothScrollTo('contact',50); showMenu=false" class="hover:text-[#54AF8F] transition">{{ t('menu.contact') }}</a>

        <!-- 手機語言 -->
        <div class="w-full flex justify-center">
          <div class="relative">
            <button @click="showLangDropdown = !showLangDropdown" class="py-2 px-5 border rounded-full flex items-center gap-2.5">
              <p>{{ locale === 'zh' ? '中文' : 'EN' }}</p>
              <img src="../assets/down.png" alt="" class="w-4 h-4">
            </button>
            <div v-if="showLangDropdown" class="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border rounded shadow">
              <button class="block w-full text-left px-4 py-2 hover:bg-gray-100" @click="setLocale('zh')">中文</button>
              <button class="block w-full text-left px-4 py-2 hover:bg-gray-100" @click="setLocale('en')">English</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>