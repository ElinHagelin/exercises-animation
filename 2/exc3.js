let items = document.querySelectorAll('.flex-container > *')
const selectedClass = 'selected'

for (let i = 0; i < items.length; i++) {
	const element = items[i]
	element.addEventListener('click', () => {
		for (let j = 0; j < items.length; j++) {
			items[j].classList.remove(selectedClass)
		}

		items[i].classList.add(selectedClass)
	})

}