let derniere_position_de_scroll_connue = 0
let ticking = false

function setColor(position_scroll) {
  const elemFooter = document.getElementById('footer')
  const height = document.documentElement.scrollHeight
  if (position_scroll < height / 3 && position_scroll > 0) {
    elemFooter.style.background = `red`
  } else {
    elemFooter.style.background = `pink`
  }
}
window.addEventListener('scroll', function (e) {
  derniere_position_de_scroll_connue = window.scrollY
  if (!ticking) {
    window.requestAnimationFrame(function () {
      setColor(derniere_position_de_scroll_connue)
      ticking = false
    })
  }
  ticking = true
})
