export class Store {

    private subscribers: Function[]
    private reducers: { [key: string]: Function }
    private state: { [key: string]: any }

    constructor(reducers = {}, initialState = {}) {
        this.state = initialState
    }

    get value() { // it's used like this: console.log(store.value)
        return this.state
    }

}