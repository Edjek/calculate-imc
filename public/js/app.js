const formImc = document.forms.formImc

formImc.addEventListener('submit', function (e) {
    e.preventDefault()
    const size = formImc.size.value
    const weight = formImc.weight.value

    const result = calculateImc(weight, size)
    createElement('div', 'message', `Votre imc est de ${result}`, formImc, 'beforeend')
})

function calculateImc(weight, size) {
    const result = weight / Math.pow(size / 100, 2)
    return result
}

function createElement(elem, className, text, elemParent, position) {
    const messageResult = document.createElement(elem)
    messageResult.classList.add(className)
    messageResult.textContent = text
    elemParent.insertAdjacentElement(position, messageResult)
}