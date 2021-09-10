const imgs = document.getElementById('img')
const img = document.querySelectorAll('#img img');
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')

function carousel() {
  i++

  if (i > img.length - 1) {
    i = 0
  }

  changeOnclick()

  transform()

  ballColor()
}

setInterval(carousel, 4000)

let i = 0
activeClass(first)

function changeOnclick() {
  addClassOnCLick(first, 0)

  addClassOnCLick(second, 1)

  addClassOnCLick(third, 2)

  addClassOnCLick(fourth, 3)
}

function addClassOnCLick(span, number) {
  span.addEventListener('click', () => {
    i = number
    transform()
    remove()
    activeClass(span)
  })
}

const transform = () => imgs.style.transform = `translateX(${-i * 850}px)`

function remove() {
  first.classList.remove('active')
  second.classList.remove('active')
  third.classList.remove('active')
  fourth.classList.remove('active')
}

function activeClass(span) {
  span.classList.add('active')
}

function ballColor() {

  switch (i) {
    case 0:
      remove()
      activeClass(first)
      break;

    case 1:
      remove()
      activeClass(second)
      break;

    case 2:
      remove()
      activeClass(third)

      break;

    case 3:
      remove()
      activeClass(fourth)

      break;
    default: remove()
      break;
  }

}

