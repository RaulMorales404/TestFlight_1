export interface DataDetails {
  boardingTerminal: string;
  boardingGate: string;
  boardingTime: string;
  arrivalDateTime: Date;
  arrivalTerminal: string;
  marketingCarrier: string;
  operatingFlightCode: string;
  flightStatus: string;
  departureAirport: string;
  arrivalAirport: string;
  departureDateTime: Date;
  origin: string;
  destination: string;
}
export interface DestinationState {
  origin: string;
  destination: string;
  flightNumber: string;
  dateDestine: string;
  dateflightNumber: string;
}
export type RootStackParamList = {
  SearchFlight: undefined;
  ResultSearchFlight: {stateDestination: DestinationState}
  DetailsFlight:{ dataDetails: DataDetails };
};
