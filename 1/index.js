
const headingButton = document.querySelector('.heading-button')
const heading = document.querySelector('.heading2')

headingButton.addEventListener('click', () => {
	heading.classList.toggle('dark')
})

const moveRight = document.querySelector('.move2')
const moveRightButton = document.querySelector('.slide-right-button')

moveRightButton.addEventListener('click', () => {
	moveRight.classList.toggle('slide-right')
})

const lifted = document.querySelector('.lifted2')
const falling = document.querySelector('.falling2')
const liftButton = document.querySelector('.lifted-button')
const fallButton = document.querySelector('.falling-button')

liftButton.addEventListener('click', () => {
	lifted.classList.toggle('lifted-active')
})

fallButton.addEventListener('click', () => {
	falling.classList.toggle('falling-active')
})

const widthHeight = document.querySelector('.width-height2')
const scale = document.querySelector('.scale2')
const widthHeightButton = document.querySelector('.width-height-button')
const scaleButton = document.querySelector('.scale-button')

widthHeightButton.addEventListener('click', () => {
	widthHeight.classList.toggle('width-height-active')
})

scaleButton.addEventListener('click', () => {
	scale.classList.toggle('scale-active')
})