<script setup>
import { reactive, ref } from 'vue'

const contactItems = [
  { img: '/email.png', label: 'Email', value: 'sales@spgsports.io' },
  { img: '/facebook.png', label: 'Facebook', value: '敬請期待' },
  { img: '/ig.png', label: 'Instagram', value: '敬請期待' },
  { img: '/telegram.png', label: 'Telegram', value: '敬請期待' },
  { img: '/linkedin.png', label: 'LinkedIn', value: '敬請期待' }
]

const FORM_ENDPOINT = 'https://formspree.io/f/mzzjlyvp' // ← 保留或換成你的 endpoint

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
  _gotcha: '',      // honeypot（隱藏，機器人會填）
  _ts: Date.now()   // timestamp（用來偵測太快提交）
})

const submitting = ref(false)
const status = ref(null) // null | 'success' | 'error'
const errorMsg = ref('')

function validate() {
  if (!form.name || !form.email || !form.message) {
    errorMsg.value = '請填寫姓名、電子郵件與訊息。'
    return false
  }
  const re = /\S+@\S+\.\S+/
  if (!re.test(form.email)) {
    errorMsg.value = '請輸入有效的電子郵件。'
    return false
  }
  errorMsg.value = ''
  return true
}

async function onSubmit() {
  // honeypot 檢查
  if (form._gotcha) {
    errorMsg.value = '偵測到可疑提交'
    status.value = 'error'
    return
  }
  // 時間檢查（太快表示自動化）
  if (Date.now() - form._ts < 2000) {
    errorMsg.value = '提交過快，請稍候再試'
    status.value = 'error'
    return
  }
  if (!validate()) return

  submitting.value = true
  status.value = null
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message
      })
    })
    if (res.ok) {
      status.value = 'success'
      form.name = form.email = form.company = form.message = ''
    } else {
      const text = await res.text()
      status.value = 'error'
      errorMsg.value = `伺服器回應錯誤：${res.status} ${text}`.slice(0, 300)
    }
  } catch (err) {
    status.value = 'error'
    errorMsg.value = err.message || '網路錯誤'
  } finally {
    submitting.value = false
    form._ts = Date.now() // 重置時間戳
  }
}

const count = ref(0)
</script>

<template>
  <div class="w-full h-auto bg-[#232323] scroll-mt-[100px]" id="contact">
    <div class="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-2 md:gap-[56px] py-8 md:py-[70px] px-4 md:px-0 text-center">
      <!-- 聯繫資訊 -->
      <div class="flex flex-col gap-[30px] w-full md:w-5/12">
        <div class="flex flex-col gap-[30px] items-start">
          <p class="text-2xl md:text-3xl text-white">取得联系</p>
          <p class="text-base text-[#a6a6a6] text-start">如有任何问题或需求，欢迎留言表单与我们联系。我们将尽快回复并提供帮助。</p>
        </div>

        <div class="flex flex-col gap-[30px] items-start">
          <p class="text-2xl md:text-3xl text-white">公司业务相关联系方式</p>
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

      <!-- 聯繫表單（含 honeypot & timestamp） -->
      <form @submit.prevent="onSubmit" class="p-4 md:p-[80px] bg-[#323232] w-full md:w-[600px] rounded-lg md:rounded-[20px] grid gap-[20px] mt-8 md:mt-0">
        <!-- honeypot 隱藏欄位（讓機器人填但人類看不到） -->
        <input v-model="form._gotcha" name="_gotcha" autocomplete="off" tabindex="-1" class="hidden" />

        <div class="flex flex-col gap-[10px] mb-4">
          <p class="text-white text-lg text-left">姓名*</p>
          <input
            v-model="form.name"
            type="text"
            name="name"
            placeholder="姓名"
            required
            aria-required="true"
            class="bg-white rounded-[10px] px-[20px] h-[50px]"
          />
        </div>

        <div class="flex flex-col gap-[10px] mb-4 relative">
          <p class="text-white text-lg text-left">电子邮箱*</p>
          <input
            v-model="form.email"
            name="email"
            type="email"
            autocomplete="email"
            inputmode="email"
            aria-label="電子郵件"
            autocapitalize="off"
            spellcheck="false"
            placeholder="电子邮箱"
            class="bg-white rounded-[10px] px-[20px] h-[50px]"
          />
        </div>

        <div class="flex flex-col gap-[10px] mb-4">
          <p class="text-white text-lg text-left">公司名</p>
          <input v-model="form.company" type="text" name="company" placeholder="公司名" class="bg-white rounded-[10px] px-[20px] h-[50px]" />
        </div>

        <div class="flex flex-col gap-[10px] mb-4">
          <p class="text-white text-lg text-left">信息*</p>
          <textarea
            v-model="form.message"
            name="message"
            placeholder="信息"
            required
            aria-required="true"
            class="bg-white rounded-[10px] px-[20px] py-3 h-[120px]"
          ></textarea>
        </div>

        <div class="flex items-center justify-between gap-4">
          <button
            type="submit"
            :disabled="submitting"
            class="bg-[#6CB49B] text-white px-6 py-3 rounded-[10px] disabled:opacity-60"
          >
            <span v-if="!submitting">发送</span>
            <span v-else>傳送中...</span>
          </button>

          <div class="flex-1 text-sm">
            <div class="text-sm text-red-400" v-if="errorMsg && status === 'error'">{{ errorMsg }}</div>
            <div class="text-sm text-green-400" v-if="status === 'success'">已送出，感謝您！</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


