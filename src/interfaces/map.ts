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

export interface IHospitalDetailInfo {
  id: string;
  name: string;
  type: string;
  phoneNumber: string;
  address: string;
  homepage: string;
  establishedDate: string;
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
    Mon: {
      start: string;
      end: string;
    };
    Tue: {
      start: string;
      end: string;
    };
    Wed: {
      start: string;
      end: string;
    };
    Thu: {
      start: string;
      end: string;
    };
    Fri: {
      start: string;
      end: string;
    };
    Sat: {
      start: string;
      end: string;
    };
    Sun: {
      start: string;
      end: string;
    };
    lunch: {
      start: string;
      end: string;
    };
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
