let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length
let active = 0

list[active].classList.add('active')

// animação inicial do título
const title = list[active].querySelector('.title')
title.style.animation = 'none'
void title.offsetWidth
title.style.animation = 'fadeInUp 0.6s ease forwards'

next.onclick = () => {
    list[active].classList.remove('active')

    active = (active + 1) % count

    list[active].classList.add('active')

    // reinicia animação do título
    const title = list[active].querySelector('.title')
    title.style.animation = 'none'
    void title.offsetWidth
    title.style.animation = 'fadeInUp 0.6s ease forwards'
}

prev.onclick = () => {
    list[active].classList.remove('active')

    active = (active - 1 + count) % count

    list[active].classList.add('active')

    // reinicia animação do título
    const title = list[active].querySelector('.title')
    title.style.animation = 'none'
    void title.offsetWidth
    title.style.animation = 'fadeInUp 0.6s ease forwards'
}