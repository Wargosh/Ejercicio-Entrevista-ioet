import AllowedDays from '../model/Days.js'
import Employee from '../model/Employee.js'

const anyDate = '2022-12-12'
const allowedDays = new AllowedDays()
// allows the time format to be 24H
const validHour = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/

export const checkAcronymOfDay = (day) => {
    return allowedDays.getAllowedDays().some((allowedDay) => allowedDay === day ? true : false)
}

export const getIndexOfDay = (day) => {
    let indexDay = -1
    if (!checkAcronymOfDay(day)) return indexDay

    allowedDays.getAllowedDays().forEach((allowedDay, index) => {
        if (allowedDay === day)
            indexDay = index
    })
    return indexDay
}

export const fillDaysOfEntry = (days) => {
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
        if (indexDay === -1) {
            errors.push('Formato del día no es válido.')
            return { result: [], errors: errors }
        }

        const hours = day.substring(2).split('-')
        if (!validateFormatOfTheHour(hours[0]) || !validateFormatOfTheHour(hours[1])) {
            errors.push('Formato de las horas no es válido.')
            return { result: [], errors: errors }
        }

        const { resultHours, error } = checkTheInputAndOutputTimeRange(hours)
        if (error !== '') {
            errors.push(error)
            return { result: [], errors: errors }
        }

        employee.entryDays[acronymDay] = resultHours
    })

    return { result: employee.entryDays, errors: errors }
}

export const validateFormatOfTheHour = (hour) => {
    if (validHour.test(hour)) return true

    return false
}

export const checkTheInputAndOutputTimeRange = (hours) => {
    const timeEntry = new Date(`${anyDate} ${hours[0]}:00`)
    const timeDeparture = new Date(`${anyDate} ${hours[1]}:00`)
    if (timeEntry.getTime() >= timeDeparture.getTime()) {
        return { hours: [], error: 'El rango entre las horas de entrada y salida esta mal especificado.' }
    }

    return { resultHours: [timeEntry, timeDeparture], error: '' }
}

export const getPairCombinations = (listEmployees) => {
    const pairs = new Array((listEmployees.length * (listEmployees.length - 1)) / 2)
    let pos = 0

    for (var i = 0; i < listEmployees.length; i++) {
        for (var j = i + 1; j < listEmployees.length; j++) {
            pairs[pos++] = [listEmployees[i], listEmployees[j]]
        }
    }

    return pairs;
}
