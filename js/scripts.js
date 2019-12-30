
const form = document.querySelector("form.pokemon")

form.addEventListener("change", () => {
	for (showcase of document.querySelectorAll(".showcase")) {
		showcase.removeAttribute("data-active")
	}

	const selectedRadioButton = form.querySelector("input[name=starters]:checked")

	if (selectedRadioButton) {
		const {value} = selectedRadioButton
		const showcase = document.querySelector(`.showcase[data-character="${value}"]`)
		showcase.setAttribute("data-active", "")
	}
})
