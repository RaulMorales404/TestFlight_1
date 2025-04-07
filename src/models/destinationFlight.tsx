export interface FlightModel {
    flightStatusCollection: FlightStatusCollection[];
}

export interface FlightStatusCollection {
    status:                   Status;
    boardingTerminal:         string;
    boardingGate:             Gate;
    boardingTime:             string;
    estimatedDepartureTime:   Date;
    estimatedArrivalTime:     Date;
    delayInMinutes:           number;
    arrivalTerminal:          string;
    arrivalGate:              Gate;
    segment:                  Segment;
    outGate:                  OutGate;
    legType:                  LegType;
    totalFlightTimeInMinutes: number;
}

export enum Gate {
    NA = "N/A",
}

export enum LegType {
    NonStop = "NON-STOP",
}

export interface OutGate {
    accuracy:      Accuracy;
    dateTimeUtc:   string;
    dateTimeLocal: string;
    sourceType:    SourceType;
}

export enum Accuracy {
    Actual = "Actual",
    Estimated = "Estimated",
}

export enum SourceType {
    AirlineData = "AirlineData",
}

export interface Segment {
    segmentCode:             string;
    departureAirport:        DepartureAirport;
    arrivalAirport:          ArrivalAirport;
    departureDateTime:       Date;
    arrivalDateTime:         Date;
    flightStatus:            Status;
    operatingCarrier:        TingCarrier;
    marketingCarrier:        TingCarrier;
    operatingFlightCode:     string;
    marketingFlightCode:     string;
    flightDurationInMinutes: number;
    aircraftType:            string;
    stops:                   any[];
}

export enum ArrivalAirport {
    Cun = "CUN",
}

export enum DepartureAirport {
    Mex = "MEX",
}

export enum Status {
    Arrived = "ARRIVED",
    Delayed = "DELAYED",
    OnTime = "ON_TIME",
}

export enum TingCarrier {
    Am = "AM",
}
