window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() { 
  showNavOnScroll()
  showaBackToTopButttonOnScroll()

  activaMenuAtCurrentSection(home)
  activaMenuAtCurrentSection(services)
  activaMenuAtCurrentSection(about)
  activaMenuAtCurrentSection(contact)
}

function activaMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2
 
//verificar se a seção passou da linha
// quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

//verificar se a base está abaixo da linha alvo
  const sectionEndAt = sectionTop + sectionHeight
  const sectiionEndPassedTargetLine = sectionEndAt <= targetLine

// limites da seção
  const sectionBoundaries = 
  sectionTopReachOrPassedTargetLine = sectionEndAt && !sectiionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const navigation = document.querySelector('#navigation');
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showaBackToTopButttonOnScroll() {
  const navigation = document.querySelector('#show');
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .cards
  #about, 
  #about header, 
  #about .content`)
