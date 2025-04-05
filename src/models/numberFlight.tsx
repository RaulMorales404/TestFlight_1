export interface NumberFlightModel {
    flightStatusCollection: FlightStatusCollection[];
}

export interface FlightStatusCollection {
    status:                   string;
    boardingTerminal:         string;
    boardingGate:             string;
    boardingTime:             string;
    estimatedDepartureTime:   Date;
    estimatedArrivalTime:     Date;
    delayInMinutes:           number;
    arrivalTerminal:          string;
    arrivalGate:              string;
    segment:                  Segment;
    outGate:                  OutGate;
    legType:                  string;
    totalFlightTimeInMinutes: number;
}

export interface OutGate {
    accuracy:      string;
    dateTimeUtc:   string;
    dateTimeLocal: string;
    sourceType:    string;
}

export interface Segment {
    segmentCode:             string;
    departureAirport:        string;
    arrivalAirport:          string;
    departureDateTime:       Date;
    arrivalDateTime:         Date;
    flightStatus:            string;
    operatingCarrier:        string;
    marketingCarrier:        string;
    operatingFlightCode:     string;
    marketingFlightCode:     string;
    flightDurationInMinutes: number;
    aircraftType:            string;
    stops:                   any[];
}
