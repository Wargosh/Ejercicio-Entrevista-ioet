const checkAcronymOfDay = (day) => {
    return days.getAllowedDays().some((allowedDay) => allowedDay === day ? true : false)
}

const getIndexOfDay = (day) => {
    if (!checkAcronymOfDay(day)) {
        showErrorMessage('Formato inválido.')
        return 'Formato inválido.'
    }

    let indexDay = -1
    days.getAllowedDays().forEach((allowedDay, index) => {
        if (allowedDay === day)
            indexDay = index
    })
    return indexDay
}
// console.log(getIndexOfDay('TH'))

const fillDaysOfEntry = (days) => {
    const errors = []
    const splitDays = days.split(',')
    let employee = new Employee()

    if (splitDays.length < 1) {
        errors.push('No existen horas de entrada/salida para el empleado.')
        return { result: [], errors: errors }
    }

    splitDays.forEach(day => {
        const acronymDay = day.substring(0, 2)
        const indexDay = getIndexOfDay(acronymDay)
        if (indexDay === 'Formato inválido.') {
            errors.push('Formato del día no es válido.')
            return { result: [], errors: errors }
        }
        if (indexDay !== -1)
            employee.entryDays[acronymDay] = day.substring(2).split('-')
    })

    return { result: employee.entryDays, errors: errors }
}

const getPairCombinations = (listEmployees) => {
    const pairs = new Array((listEmployees.length * (listEmployees.length - 1)) / 2)
    let pos = 0

    for (var i = 0; i < listEmployees.length; i++) {
        for (var j = i + 1; j < listEmployees.length; j++) {
            pairs[pos++] = [listEmployees[i], listEmployees[j]]
        }
    }

    return pairs;
}
