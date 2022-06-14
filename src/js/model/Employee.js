export default class Employee {
    constructor() {
        this.id = null
        this.name = ''
        this.entryDays = { SU: [], MO: [], TU: [], WE: [], TH: [], FR: [], SA: [] }
    }

    setInfoEmployee(id, name, entryDays) {
        this.id = id
        this.name = name
        this.entryDays = entryDays
    }

    setName(name) {
        this.name = name
    }

    setEntryDays(entryDays) {
        this.entryDays = entryDays
    }

    getEntryDays() {
        return this.entryDays
    }
}