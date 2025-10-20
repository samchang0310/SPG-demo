export function smoothScrollTo(targetId, duration = 300) { // duration 單位 ms，預設 300ms
  const target = document.getElementById(targetId)
  if (!target) return

  const headerOffset = 100
  const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - headerOffset
  const startPosition = window.pageYOffset
  const distance = offsetPosition - startPosition
  let startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    } else {
      window.scrollTo(0, offsetPosition)
    }
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}