AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false
})

// Script untuk membuka dan menutup menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
  // Animasi untuk efek menu
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('opacity-100')
    mobileMenu.classList.add('opacity-0')
  } else {
    mobileMenu.classList.remove('opacity-0')
    mobileMenu.classList.add('opacity-100')
  }
})
