const message = document.getElementById('output')
const tableDOM = document.getElementById('table_employees')
const tableBody = document.getElementById('table_body')

const addColors = (colors) => {
    return `<div class="colors">
                ${colors.map(
        (color) =>
            `<div class="circle" style="background: var(--color-${color});"></div> `
    )}
            </div>`
}

const addNewCell = (label, colors) => {
    return `<td>
                <div>
                    ${label.length !== 0 && colors ? addColors(colors) : ''}
                    <p>${label.length !== 2 ? label : [label[0], label[1]].join(' - ')}</p>
                </div>
            </td>`
}

const showErrorMessage = (msg) => {
    message.textContent = msg
    hideTableEmployees()
}

const hideErrorMessage = () => {
    message.textContent = ''
}
hideErrorMessage()

const setBodyTable = (content) => {
    tableBody.innerHTML = content
}

const showTableEmployees = () => {
    tableDOM.hidden = false
}

const hideTableEmployees = () => {
    tableDOM.hidden = true
}
// initialized for default
hideTableEmployees()