interface Fee {
  cost: string;
  description: string;
  title: string;
}

interface Image {
  credit: string;
  altText: string;
  title: string;
  caption: string;
  url: string;
}

export interface ParkDetail {
  states: string;
  weatherInfo: string;
  directionsInfo: string;
  addresses: any[]; // Replace any with actual type when known.
  entranceFees: Fee[];
  topics: any[]; // Replace any with actual type when known.
  name: string;
  latitude: string;
  activities: any[]; // Replace any with actual type when known.
  operatingHours: any[]; // Replace any with actual type when known.
  url: string;
  longitude: string;
  contacts: {}; // Define a proper interface/type if possible.
  entrancePasses: any[]; // Replace any with actual type when known.
  parkCode: string;
  designation: string;
  images: Image[];
  fullName: string;
  latLong: string;
  id: string;
  directionsUrl: string;
  description: string;
}

export interface ParkResponse {
  total: string;
  data: ParkDetail[];
  limit: string;
  start: string;
}
