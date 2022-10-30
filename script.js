const imgsWrapper = document.getElementById('img-wrapper')
const img = document.querySelectorAll('#img-wrapper img')
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const back = document.getElementById('back')
const next = document.getElementById('next')

let widthOfImages = img[0].offsetWidth
let currentDevice = window.innerWidth > 850 ? "desktop" : "mobile"

let lastActive, startDrag
let canPass = true

const devices = {
  mobile: () => {
    if (window.innerWidth > 850) {
      widthOfImages = img[0].offsetWidth
      changeSlide()
      currentDevice = "desktop"
    }
  },
  desktop: () => {
    if (window.innerWidth < 850) {
      widthOfImages = img[0].offsetWidth
      changeSlide()
      currentDevice = "mobile"
    }
  }
}

let indexOfBallActive = 0
activeClass(first)

const ballOfIndex = {
  0: first,
  1: second,
  2: third,
  3: fourth
}

function activeCarousel() {
  if (canPass) {
    lastActive = ballOfIndex[indexOfBallActive]
    indexOfBallActive++

    if (indexOfBallActive > img.length - 1) {
      indexOfBallActive = 0
    }
    changeSlide()

    remove()
    activeClass(ballOfIndex[indexOfBallActive])
  } else {
    canPass = true
  }
}

setInterval(activeCarousel, 4000)

back.addEventListener('click', changeSlideToBack)

next.addEventListener('click', changeSlideToNext)

addClassOnCLick(first, 0)

addClassOnCLick(second, 1)

addClassOnCLick(third, 2)

addClassOnCLick(fourth, 3)

imgsWrapper.addEventListener('dragstart', (event) => { startDrag = event.clientX })

imgsWrapper.addEventListener('dragend', (event) => {
  startDrag < (event.clientX - 100) && changeSlideToBack()
  startDrag > (event.clientX + 100) && changeSlideToNext()
})

window.addEventListener("resize", function () {
  devices[currentDevice]()
})

function addClassOnCLick(span, number) {
  span.addEventListener('click', () => {
    lastActive = ballOfIndex[indexOfBallActive]
    indexOfBallActive = number
    changeSlide()
    remove()
    activeClass(span)
    canPass = false
  })
}

function changeSlideToBack() {
  lastActive = ballOfIndex[indexOfBallActive]
  indexOfBallActive -= 1

  if (indexOfBallActive < 0) {
    indexOfBallActive = 3
  }

  changeSlide()

  remove()
  activeClass(ballOfIndex[indexOfBallActive])

  canPass = false
}

function changeSlideToNext() {
  lastActive = ballOfIndex[indexOfBallActive]
  indexOfBallActive += 1

  if (indexOfBallActive > 3) {
    indexOfBallActive = 0
  }

  changeSlide()

  remove()
  activeClass(ballOfIndex[indexOfBallActive])

  canPass = false
}

const changeSlide = () => imgsWrapper.style.transform = `translateX(${-indexOfBallActive * widthOfImages}px)`

function remove() {
  lastActive.classList.remove('active')
}

function activeClass(span) {
  span.classList.add('active')
}
