export interface ITimeDuration {
  start: string;
  end: string;
}

export interface IHospitalInfo {
  id: string;
  name: string;
  type: string;
  phoneNumber: string;
  address: string;
  meToHospitalDistance: string;
  operatingTime: {
    start: string;
    end: string;
  };
  lunchTime: ITimeDuration;
  point: {
    x: number;
    y: number;
  };
  emergencyNight: string;
  nightService: string;
  operatingStatus: "OPEN" | "CLOSED" | "UNKNOWN";
}

export interface IHospitalDetailInfo {
  id: string;
  name: string;
  type: string;
  phoneNumber: string;
  address: string;
  homepage: string;
  establishedDate: string;
  meToHospitalDistance: string;
  operatingTime: ITimeDuration;
  lunchTime: ITimeDuration;
  point: {
    x: number;
    y: number;
  };
  nearbyPublicBuilding: string;
  direction: string;
  distance: string;
  parkingSpace: string;
  parkingFee: string;
  parkingExtraInfo: string;
  emergencyNight: string;
  emergencyNightPhone: string;
  nightService: string;
  operatingStatus: "OPEN" | "CLOSED" | "UNKNOWN";
  schedule: {
    Mon: ITimeDuration;
    Tue: ITimeDuration;
    Wed: ITimeDuration;
    Thu: ITimeDuration;
    Fri: ITimeDuration;
    Sat: ITimeDuration;
    Sun: ITimeDuration;
    lunch: ITimeDuration;
  };
  department: {
    name: string;
    count: string;
  }[];
  specialTreatment: {
    name: string;
  }[];
  equipment: {
    name: string;
  }[];
  excellentAgency: {
    name: string;
    grade: string;
  }[];
}

export interface IUserMapResponse {
  total: number;
  Page: number;
  hospitals: IHospitalInfo[];
}
