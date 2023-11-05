import City from "./City"
import Country from "./Country"

export default class Airport {
    private _name: String
    private _code: String
    private _city: City
    private _country: Country

   
    constructor(name,code,city,country){
        this._name = name
        this._code = code
        this._city = city
        this._country = country
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
 
    public get city(): City {
        return this._city
    }
    public set city(value: City) {
        this._city = value
    }
   
    public get country(): Country {
        return this._country
    }
    public set country(value: Country) {
        this._country = value
    }
}