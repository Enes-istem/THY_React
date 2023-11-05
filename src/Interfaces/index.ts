export interface Welcome {
    flights: IFlight[];
}

export interface IFlight {
    originAirport:            NAirport;
    destinationAirport:       NAirport;
    arrivalDateTimeDisplay:   string;
    departureDateTimeDisplay: string;
    flightDuration:           string;
    fareCategories:           FareCategories;
}

export interface NAirport {
    name:    string;
    code:    string;
    city:    City;
    country: Country;
}

export interface City {
    code: string;
    name: string;
}

export interface Country {
    code: string;
    name: string;
}

export interface FareCategories {
    BUSINESS: Business;
    ECONOMY:  Economy;
}
export interface Business {
    subcategories: Subcategory[];
}

export interface Economy {
    subcategories: Subcategory[];
}

export interface Subcategory {
    brandCode: BrandCode;
    price:     Price;
    order:     number;
    status:    Status;
    rights:    string[];
}

export enum BrandCode {
    EcoFly = "ecoFly",
    ExtraFly = "extraFly",
    PrimeFly = "primeFly",
}

export interface Price {
    amount:   number;
    currency: Currency;
}

export interface Currency {
    Try : string,
}

export enum Status {
    Available = "AVAILABLE",
    Error = "ERROR",
}
