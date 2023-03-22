const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="" alt="" />'
  title.innerHTML = 'Orange Laptop'
  excerpt.innerHTML =
    'This is a perfect orange coloured laptop with a high spec for developers'
  profile_img.innerHTML =
    '<img src="" alt="" />'
  name.innerHTML = 'Beloved Adejuyigbe'
  date.innerHTML = '22 Mar, 2023'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
