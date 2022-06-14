const message = document.getElementById('output')
const tableDOM = document.getElementById('table_employees')
const tableBody = document.getElementById('table_body')

export const addColors = (colors) => {
    return `<div class="colors">
                ${colors.map(
        (color) =>
            `<div class="circle" style="background: var(--color-${color});"></div> `
    )}
            </div>`
}

export const addNewCell = (label, colors) => {
    return `<td>
                <div>
                    ${label.length !== 0 && colors ? addColors(colors) : ''}
                    <p>${label.length !== 2 ? label : [label[0], label[1]].join(' - ')}</p>
                </div>
            </td>`
}

export const showErrorMessage = (msg) => {
    message.textContent = msg
    hideTableEmployees()
}

export const hideErrorMessage = () => {
    message.textContent = ''
}
hideErrorMessage()

export const setBodyTable = (content) => {
    tableBody.innerHTML = content
}

export const showTableEmployees = () => {
    tableDOM.hidden = false
}

export const hideTableEmployees = () => {
    tableDOM.hidden = true
}
// initialized for default
hideTableEmployees()