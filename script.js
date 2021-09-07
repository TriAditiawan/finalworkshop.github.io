if (localStorage.getItem('theme') == 'dark') setDarkMode(true)
function setDarkMode() {
  let isDark = document.body.classList.toggle('darkmode')
  let caption = ''
  if (isDark) {
    text = "ubah mode terang"
    localStorage.setItem('theme', 'dark')
  }
  else {
    text = "ubah mode gelap"
    localStorage.removeItem('theme')
  }
  document.getElementById('darkBtn').innerHTML = text
}