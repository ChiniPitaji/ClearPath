export interface TrafficData {
  id: string;
  timestamp: string;
  location: {
    lat: number;
    lng: number;
  };
  density: number;
  speed: number;
}

export interface PollutionData {
  id: string;
  timestamp: string;
  location: {
    lat: number;
    lng: number;
  };
  aqi: number;
  pollutants: {
    pm25: number;
    pm10: number;
    no2: number;
    so2: number;
    o3: number;
    co: number;
  };
}

export interface Feedback {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  issueType: 'TRAFFIC' | 'POLLUTION' | 'INFRASTRUCTURE';
  description: string;
  timestamp: string;
  status: 'PENDING' | 'IN_REVIEW' | 'RESOLVED';
}