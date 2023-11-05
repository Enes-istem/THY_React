export default class Country {
    private _name: String
 
    private _code: String
 

    constructor(name,code){
        this._name = name
        this._code = code
    }

    public get name(): String {
        return this._name
    }
    public set name(value: String) {
        this._name = value
    }

    public get code(): String {
        return this._code
    }
    public set code(value: String) {
        this._code = value
    }
}