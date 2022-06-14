import { checkAcronymOfDay, getIndexOfDay, fillDaysOfEntry } from '../js/controllers/Validator.js'
import { validateFormatOfTheHour, checkTheInputAndOutputTimeRange } from '../js/controllers/Validator.js'

/* Testing method: checkAcronymOfDay 
**
** This method only checks for the existence of the entered day acronym parameter within an already 
** established array of allowed days and returns true or false if it exists.
** The array of allowed acronyms is: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
*/
test('Obtener "true" al pasar un parametro que exista en el método "checkAcronymOfDay"', () => {
    const result = checkAcronymOfDay("SU")
    expect(result).toBe(true)
})

test('Obtener "false" al pasar un parametro que NO exista en el método "checkAcronymOfDay"', () => {
    const result = checkAcronymOfDay("FRIDAY")
    expect(result).toBe(false)
})

/* Testing method: getIndexOfDay 
**
** This method only checks for the existence of the entered day acronym parameter and returns its index,
** if not found it will return a value of -1.
*/
test('Obtener indice "0" al pasar un parametro que exista en el método "getIndexOfDay"', () => {
    const result = getIndexOfDay("SU")
    expect(result).toBe(0)
})

test('Obtener indice "-1" al pasar un parametro que NO existe en el método "getIndexOfDay"', () => {
    const result = getIndexOfDay("SUM")
    expect(result).toBe(-1)
})

/* Testing method: fillDaysOfEntry 
**
** This method checks that the entered parameter contains the desired format, dividing it into arrays
** and checking each part against the set format of the days and hours in/out. 
** If it does not find any errors during the process it returns the information of the days worked by
** the employees ready to be handled.
*/
test('Obtener ningun error al pasar el formato correcto de los horarios en el método "fillDaysOfEntry"', () => {
    const { errors } = fillDaysOfEntry("SU21:00-23:00,TU17:00-20:30")
    expect(errors.length).toBe(0)
})

test('Obtener almenos 1 error al pasar un formato incorrecto de los horarios en el método "fillDaysOfEntry"', () => {
    const { errors } = fillDaysOfEntry("SU21:00-23:00,XX17:00-20:30")
    expect(errors.length).toBeGreaterThanOrEqual(1)
})

test('Obtener almenos 1 error al pasar un formato incorrecto de los horarios en el método "fillDaysOfEntry"', () => {
    const { errors } = fillDaysOfEntry("SU21:00-XX:00,FR17:00-20:30")
    expect(errors.length).toBeGreaterThanOrEqual(1)
})

test('Obtener almenos 1 error al pasar el parametro de los horarios incompleto en el método "fillDaysOfEntry"', () => {
    const { errors } = fillDaysOfEntry("SU21:00-XX:00,FR17:00")
    expect(errors.length).toBeGreaterThanOrEqual(1)
})

/* Testing method: validateFormatOfTheHour 
**
** This method checks that the input parameter is indeed an HH:MM format, using a regular expression
** to quickly detect if there are any invalid characters.
*/
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

/* Testing method: checkTheInputAndOutputTimeRange
** 
** This method checks that the range between the employee's clock-in and clock-out time is correct,
** i.e. if the clock-in time parameter is greater than or equal to the clock-out time, it will not be
** accepted and will return an error.
*/
test('Obtener ningun error al pasar un rango de tiempo correcto en el método "checkTheInputAndOutputTimeRange"', () => {
    const { error } = checkTheInputAndOutputTimeRange(["21:00", "22:00"])
    expect(error).toBe('')
})

test('Obtener error al pasar un rango de tiempo incorrecto en el método "checkTheInputAndOutputTimeRange"', () => {
    const { error } = checkTheInputAndOutputTimeRange(["21:00", "07:00"])
    expect(error.length).toBeGreaterThanOrEqual(1)
})