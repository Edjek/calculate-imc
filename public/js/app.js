const formImc = document.forms.formImc

formImc.addEventListener('submit', function (e) {
    e.preventDefault()
    const size = formImc.size.value
    const weight = formImc.weight.value

    const message = document.querySelector('.message')
    if (message) {
        removeElement(message)
    }

    if (isValidate(size, weight)) {
        const result = calculateImc(weight, size)
        createElement('div', 'message', `Votre imc est de ${result}`, formImc, 'beforeend')
    } else {
        createElement('div', 'message', `Veuillez entrer des valeurs valides`, formImc, 'beforeend')
    }
})

function isValidate(size, weight) {
    return /^[0-9]{2,3}$/.test(size) && /^[0-9]{2,3}$/.test(weight)
}

function calculateImc(weight, size) {
    const result = weight / Math.pow(size / 100, 2)
    return result.toFixed(1);
}

function createElement(elem, className, text, elemParent, position) {
    const messageResult = document.createElement(elem)
    messageResult.classList.add(className)
    messageResult.textContent = text
    elemParent.insertAdjacentElement(position, messageResult)
}

function removeElement(elem) {
    elem.remove()
}
