const imgsWrapper = document.getElementById('img-wrapper')
const img = document.querySelectorAll('#img-wrapper img')
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const back = document.getElementById('back')
const next = document.getElementById('next')
const widthOfImages = img[0].offsetWidth

let lastActive
let canPass = true

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
    transform()
    
    remove()
    activeClass(ballOfIndex[indexOfBallActive])
  } else {
    canPass = true
  }
}

setInterval(activeCarousel, 4000)

back.addEventListener('click', backOnCLick)

next.addEventListener('click', nextOnCLick)

addClassOnCLick(first, 0)

addClassOnCLick(second, 1)

addClassOnCLick(third, 2)

addClassOnCLick(fourth, 3)

function addClassOnCLick(span, number) {
    span.addEventListener('click', () => {
    lastActive = ballOfIndex[indexOfBallActive]
    indexOfBallActive = number
    transform()
    remove()
    activeClass(span)
    canPass = false
  })
}

function backOnCLick() {
    lastActive = ballOfIndex[indexOfBallActive]
    indexOfBallActive -= 1

    if (indexOfBallActive < 0) {
      indexOfBallActive = 3
    }

    transform()
  
    remove()
    activeClass(ballOfIndex[indexOfBallActive])

    canPass = false 
}

function nextOnCLick() {
    lastActive = ballOfIndex[indexOfBallActive]
    indexOfBallActive += 1

    if (indexOfBallActive > 3) {
      indexOfBallActive = 0
    }

    transform()
  
    remove()
    activeClass(ballOfIndex[indexOfBallActive])  

    canPass = false
}

const transform = () => imgsWrapper.style.transform = `translateX(${-indexOfBallActive * widthOfImages}px)`

function remove() {
  lastActive.classList.remove('active')
}

function activeClass(span) {
  span.classList.add('active')
}
