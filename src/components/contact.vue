<script setup>
import { ref } from 'vue'

const contactItems = [
  {
    img: '/email.png',
    label: 'Email',
    value: 'sales@spgsports.io'
  },
  {
    img: '/facebook.png',
    label: 'Facebook',
    value: '敬請期待'
  },
  {
    img: '/ig.png',
    label: 'Instagram',
    value: '敬請期待'
  },
  {
    img: '/telegram.png',
    label: 'Telegram',
    value: '敬請期待'
  },
  {
    img: '/linkedin.png',
    label: 'LinkedIn',
    value: '敬請期待'
  }
]

const formItems = [
  { label: '姓名*', placeholder: '姓名' },
  { label: '电子邮箱', placeholder: '电子邮箱' },
  { label: '公司名', placeholder: '公司名' },
  { label: '信息', placeholder: '信息' }
]

const count = ref(0)
</script>

<template>
  <div class="w-full h-auto bg-[#232323] scroll-mt-[100px]" id="contact">
    <div class="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-2 md:gap-[56px] py-8 md:py-[70px] px-4 md:px-0 text-center">
      <!--聯繫文字-->
      <div class="flex flex-col gap-[30px] w-full md:w-5/12">
        <div class="flex flex-col gap-[30px] items-start">
          <p class="text-2xl md:text-3xl text-white">取得联系</p>
          <p class="text-base text-[#a6a6a6] text-start">如有任何问题或需求，欢迎留言表单与我们联系。我们将尽快回复并提供帮助。</p>
        </div>
        <div class="flex flex-col gap-[30px] items-start">
          <p class="text-2xl md:text-3xl text-white">公司业务相关联系方式</p>
          <div>
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4 w-full">
              <div
                v-for="(item, idx) in contactItems"
                :key="idx"
                class="flex flex-row items-center gap-[10px] text-left bg-[#323232] min-w-0 w-full p-[10px] mb-2 rounded-lg"
              >
                <img :src="item.img" alt="" class="h-[40px] w-auto object-contain">
                <div class="text-white flex flex-col">
                  <p class="text-sm font-bold">{{ item.label }}</p>
                  <p class="text-xs">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--聯繫表單-->
      <div class="p-4 md:p-[80px] bg-[#323232] w-full md:w-[600px]  rounded-lg md:rounded-[20px] grid gap-[20px] mt-8 md:mt-0">
        <div
          v-for="(item, idx) in formItems"
          :key="idx"
          class="flex flex-col gap-[10px] mb-4"
        >
          <p class="text-white text-lg text-left">{{ item.label }}</p>
          <input
            type="text"
            :placeholder="item.placeholder"
            :class="['bg-white rounded-[10px] px-[20px]', idx === 3 ? 'h-[80px]' : 'h-[50px]']"
          >
        </div>
        <div class="bg-[#6CB49B] h-[60px] text-white flex items-center justify-center rounded-[10px]">发送</div>
      </div>
    </div>
  </div>
</template>


