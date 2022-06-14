import Days from '../model/Days.js'
import Employee from '../model/Employee.js'
import { getPairCombinations, fillDaysOfEntry } from './Validator.js'
import { addColors, addNewCell, showErrorMessage, setBodyTable, showTableEmployees } from '../view/ui.js'
const anyDate = '2022-12-12'
let employees = []
const days = new Days()

const fileInput = document.getElementById('input-file');
fileInput.onchange = () => {
    const selectedFile = fileInput.files[0];
    console.log(selectedFile);
    readFileText(selectedFile)
}

async function readFileText(file) {
    employees = []
    var reader = new FileReader(file);
    reader.onload = function (props) {
        const rows = this.result.split(/\r\n|\n/);
        if (rows.length < 2 && !rows[0]) {
            showErrorMessage('No existe información en el archivo')
            return 'No existe información en el archivo'
        }

        for (let line = 0; line < rows.length; line++) {
            if ((rows[line]).trim().length === 0) continue

            const dataEmployee = rows[line].split('=')
            if (dataEmployee.length < 2) {
                showErrorMessage('No se encontro información de los empleados')
                return 'No se encontro información de los empleados'
            }

            const { result, errors } = fillDaysOfEntry(dataEmployee[1])
            if (errors.length > 0) {
                showErrorMessage('Existen errores en el formato de las horas de entrada/salida.')
                return 'Existen errores en el formato de las horas de entrada/salida.'
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
            const dateEntry1 = new Date(`${anyDate} ${pair[0].entryDays[day][0]}:00`)
            const dateEntry2 = new Date(`${anyDate} ${pair[1].entryDays[day][0]}:00`)

            // if employee 1 entry after of employee 2
            if (dateEntry1.getTime() >= dateEntry2.getTime()) {
                const dateDeparture2 = new Date(`${anyDate} ${pair[1].entryDays[day][1]}:00`)
                // verify that the exit of employee 2 is more than employee 1 entry
                if (dateEntry1.getTime() < dateDeparture2.getTime())
                    daysMatched.push(day)
            }
            // if employee 1 entry before of employee 2
            else if (dateEntry1.getTime() <= dateEntry2.getTime()) {
                const dateDeparture1 = new Date(`${anyDate} ${pair[0].entryDays[day][1]}:00`)
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