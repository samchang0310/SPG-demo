import { ref, watch } from 'vue'

export const locale = ref(localStorage.getItem('locale') || 'zh')
watch(locale, (v) => localStorage.setItem('locale', v))

const messages = {
  zh: {
    menu: { about: '关于我们', introduction: '产品简介', feature: '产品特色', contact: '取得联系', lang: '中文', enLabel: 'EN' },
    banner: { contact: '取得联系', title: 'SPG SPORTS', subtitle: 'Experience World-Class Sportsbook' },
    about: {
      title: '关于我们',
      desc: '對 SPG SPORT 而言，誠信不只是原則，而是核心信念。',
      features: {
        f1: {
          title: '诚信正直',
          desc: '我们坚守诚信，以建立长久稳固的商业合作关系'
        },
        f2: {
          title: '技術創新',
          desc: '持續推動技術革新，提升用戶體驗'
        },
        f3: {
          title: '專業團隊',
          desc: '擁有豐富經驗的專業團隊，提供最佳服務'
        },
        f4: {
          title: '全球佈局',
          desc: '業務遍及全球，服務多元市場'
        }
      }
    },
    introduction: { title: '产品简介', desc: '我们致力于引领体育博彩产业，透过持续创新与优化...' },
    feature: { title: '产品特色' },
    contact: { title: '取得联系' }
  },
  en: {
    menu: { about: 'About', introduction: 'Introduction', feature: 'Features', contact: 'Contact', lang: 'EN', enLabel: 'EN' },
    banner: { contact: 'Contact Us', title: 'SPG SPORTS', subtitle: 'Experience World-Class Sportsbook' },
    about: {
      title: 'About Us',
      desc: 'For SPG SPORT, integrity is our core belief.',
      features: {
        f1: {
          title: 'Integrity',
          desc: 'We uphold integrity to build long-term, stable partnerships.'
        },
        f2: {
          title: 'Technical Innovation',
          desc: 'Continuously drive technical innovation to improve UX.'
        },
        f3: {
          title: 'Professional Team',
          desc: 'Experienced professional team delivering top service.'
        },
        f4: {
          title: 'Global Presence',
          desc: 'Operations across the globe serving diverse markets.'
        }
      }
    },
    introduction: { title: 'Introduction', desc: 'We lead the sports betting industry by continuous innovation...' },
    feature: { title: 'Features' },
    contact: { title: 'Contact' }
  }
}

export function t(path) {
  const keys = path.split('.')
  const msg = messages[locale.value] || {}
  return keys.reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), msg) || path
}