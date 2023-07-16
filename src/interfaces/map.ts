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
  lunchTime: {
    start: string;
    end: string;
  };
  point: {
    x: number;
    y: number;
  };
  emergencyNight: string;
  nightService: string;
  operatingStatus: "OPEN" | "CLOSED" | "UNKNOWN";
}

export interface IUserMapResponse {
  total: number;
  hospitals: IHospitalInfo[];
}
