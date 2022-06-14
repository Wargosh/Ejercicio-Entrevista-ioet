import { checkAcronymOfDay, getIndexOfDay, fillDaysOfEntry, validateFormatOfTheHour, getPairCombinations } from '../js/controllers/Validator.js'

test('Obtener "true" al pasar un parametro que exista en el método "checkAcronymOfDay"', () => {
    const result = checkAcronymOfDay("SU")
    expect(result).toBe(true)
})

test('Obtener "false" al pasar un parametro que NO exista en el método "checkAcronymOfDay"', () => {
    const result = checkAcronymOfDay("FRIDAY")
    expect(result).toBe(false)
})

test('Obtener indice "0" al pasar un parametro que exista en el método "getIndexOfDay"', () => {
    const result = getIndexOfDay("SU")
    expect(result).toBe(0)
})

test('Obtener indice "-1" al pasar un parametro que NO existe en el método "getIndexOfDay"', () => {
    const result = getIndexOfDay("SUM")
    expect(result).toBe(-1)
})

test('Obtener ningun error al pasar el formato correcto de los horarios en el método "fillDaysOfEntry"', () => {
    const { errors } = fillDaysOfEntry("SU21:00-23:00,TU17:00-20:30")
    expect(errors.length).toBe(0)
})

test('Obtener 1 error al pasar un formato incorrecto de los horarios en el método "fillDaysOfEntry"', () => {
    const { errors } = fillDaysOfEntry("SU21:00-23:00,XX17:00-20:30")
    expect(errors.length).toBe(1)
})

test('Obtener 1 error al pasar un formato incorrecto de los horarios en el método "fillDaysOfEntry"', () => {
    const { errors } = fillDaysOfEntry("SU21:00-XX:00,FR17:00-20:30")
    expect(errors.length).toBe(1)
})

test('Obtener almenos 1 error al pasar el parametro de los horarios incompleto en el método "fillDaysOfEntry"', () => {
    const { errors } = fillDaysOfEntry("SU21:00-XX:00,FR17:00")
    expect(errors.length).toBeGreaterThanOrEqual(1)
})

test('Obtener "true" al pasar un formato correcto de la hora en el método "validateFormatOfTheHour"', () => {
    const result = validateFormatOfTheHour("23:59")
    expect(result).toBe(true)
})

test('Obtener "false" al pasar un formato incorrecto de la hora en el método "validateFormatOfTheHour"', () => {
    const result = validateFormatOfTheHour("23:79")
    expect(result).toBe(false)
})

test('Obtener "false" al pasar un formato incorrecto de la hora en el método "validateFormatOfTheHour"', () => {
    const result = validateFormatOfTheHour("1X:19")
    expect(result).toBe(false)
})