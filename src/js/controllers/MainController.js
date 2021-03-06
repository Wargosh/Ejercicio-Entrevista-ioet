import Days from '../model/Days.js'
import Employee from '../model/Employee.js'
import { getPairCombinations, fillDaysOfEntry } from './Validator.js'
import { addColors, addNewCell, showErrorMessage, hideErrorMessage, setBodyTable, showTableEmployees } from '../view/ui.js'

let employees = []
const days = new Days()

const fileInput = document.getElementById('input-file');
fileInput.onchange = () => {
    if (fileInput.value.endsWith('.txt') || fileInput.value.endsWith('.csv')) {
        const selectedFile = fileInput.files[0];
        hideErrorMessage()
        readFileText(selectedFile)
    } else {
        showErrorMessage('Formato del archivo debe ser .txt o .csv')
        return;
    }
}

async function readFileText(file) {
    employees = []
    var reader = new FileReader(file);
    reader.onload = function (props) {
        const rows = this.result.split(/\r\n|\n/);
        if (rows.length < 2 && !rows[0]) {
            showErrorMessage('No existe información en el archivo')
            return;
        }

        for (let line = 0; line < rows.length; line++) {
            if ((rows[line]).trim().length === 0) continue

            const dataEmployee = rows[line].split('=')
            if (dataEmployee.length < 2) {
                showErrorMessage('No se encontro información de los empleados')
                return;
            } else if (dataEmployee[0].trim() === '') {
                showErrorMessage('Existen registros sin un nombre de empleado')
                return;
            }

            const { result, errors } = fillDaysOfEntry(dataEmployee[1])
            if (errors.length > 0) {
                for (const error of errors)
                    showErrorMessage(error)
                return;
            }

            const employee = new Employee()
            employee.setInfoEmployee(line, dataEmployee[0], result)
            employees.push(employee)
        }
        calculateMatchesBetweenEmployees()
        LoadDataOnTable()
        showTableEmployees()
    }
    reader.readAsText(file)
}

const calculateMatchesBetweenEmployees = () => {
    const combinations = getPairCombinations(employees);
    for (let i = 0; i < combinations.length; i++) {
        const pair = combinations[i];
        const daysMatched = countMatches(pair)
        console.log("matches between ", pair[0].name, ' and ', pair[1].name, ' is ', daysMatched.length, daysMatched)
    }
}

const countMatches = (pair) => {
    const daysMatched = []
    days.getAllowedDays().forEach((day) => {
        if (pair[0].entryDays[day].length > 0 && pair[1].entryDays[day].length > 0) {
            const dateEntry1 = pair[0].entryDays[day][0]
            const dateEntry2 = pair[1].entryDays[day][0]
            // if employee 1 entry after of employee 2
            if (dateEntry1.getTime() >= dateEntry2.getTime()) {
                const dateDeparture2 = pair[1].entryDays[day][1]
                // verify that the exit of employee 2 is more than employee 1 entry
                if (dateEntry1.getTime() < dateDeparture2.getTime())
                    daysMatched.push(day)
            }
            // if employee 1 entry before of employee 2
            else if (dateEntry1.getTime() <= dateEntry2.getTime()) {
                const dateDeparture1 = pair[0].entryDays[day][1]
                // verify that the exit of employee 1 is more than employee 2 entry
                if (dateDeparture1.getTime() > dateEntry2.getTime())
                    daysMatched.push(day)
            }
        }
    })
    return daysMatched
}

const LoadDataOnTable = () => {
    let tableBody = ''
    employees.map((employee) => {
        let drawRow = '<tr>'
        drawRow += addNewCell(employee.name)

        days.getAllowedDays().map((day) => {
            drawRow += addNewCell(employee.entryDays[day]/*, [1, 2, 3]*/)
        })

        drawRow += '</tr>'
        tableBody += drawRow
    })
    setBodyTable(tableBody)
}

export const setToHoursAndMinutes = (date) => {
    return setTo2Digits(date.getHours()) + ':' + setTo2Digits(date.getMinutes());
}

const setTo2Digits = (num) => { return String(num).padStart(2, '0') }
