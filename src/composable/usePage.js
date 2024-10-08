import { onMounted, onUnmounted, ref } from 'vue'

export function usePage() {

  const page = ref(parseHash())
  
  let removeListener

  onMounted(() => {
    const listener = () => {
      page.value = parseHash()
    }
    window.addEventListener("hashchange", listener)
    removeListener = () => {
      window.removeEventListener("hashchange", listener)
    }
  })

  onUnmounted(() => {
    removeListener()
  })

  return {
    page
  }
}

function parseHash() {
  return window.location.hash.replace("#", "")
}