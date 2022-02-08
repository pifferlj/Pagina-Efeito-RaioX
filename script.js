const circle = document.getElementById('circle')
document.addEventListener('mousemove', e => {
  let mouse_x = e.clientX
  let mouse_y = e.clientY
  circle.style.left = `${mouse_x - 100}px`
  circle.style.top = `${mouse_y - 100}px`
})
