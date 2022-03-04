const imgs = document.getElementById('img')
const img = document.querySelectorAll('#img img')
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const back = document.getElementById('back')
const next = document.getElementById('next')

let pass = true

let i = 0
activeClass(first)


function carousel() {

  if (pass) {
    i++


    if (i > img.length - 1) {
      i = 0
    }
    transform()

    ballColor()
  } else {
    pass = true
  }


}

setInterval(carousel, 4000)

backOnCLick()

nextOnCLick()

changeOnclick()


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
    pass = false
  })
}

function backOnCLick() {
  back.addEventListener('click', () => {
    i -= 1

    if (i < 0) {
      i = 3
    }

    transform()

    ballColor(i)

    pass = false
  })
}

function nextOnCLick(number) {
  next.addEventListener('click', () => {
    i += 1

    if (i > 3) {
      i = 0
    }

    transform()

    ballColor(i)

    pass = false

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

function ballColor(indexNumber) {

  switch (indexNumber) {
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

