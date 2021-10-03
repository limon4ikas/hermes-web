export interface StravaTokenResponse {
  accessToken: string;
  expiresAt: number;
  expiresIn: number;
  refreshToken: string;
  tokenType: string;
  athlete: StravaAthlete;
}

export interface StravaTokenAuthBody {
  stravaAuthCode: string;
  idToken: string;
}

export interface StravaTokenAuthResponse {
  type: string;
  message?: string;
}

export interface StravaAthlete {
  id: number;
  resourceState: number;
  premium: false;
  summit: false;
  badgeTypeId: number;
  weight: number;
  username: string;
  firstname: string;
  lastname: string;
  bio: string;
  city: string;
  state: string;
  country: string;
  sex: string;
  createdAt: string;
  updatedAt: string;
  profileMedium: string;
  profile: string;
  friend: null;
  follower: null;
}

export interface Activity {
  resourceState: number;
  athlete: { id: number; resourceState: number };
  name: string;
  distance: string;
  movingTime: string;
  elapsedTime: string;
  totalElevationGain: number;
  type: string;
  workoutType: number;
  id: string;
  externalId: string;
  uploadId: string;
  startDate: string;
  startDateLocal: string;
  timezone: string;
  utcOffset: number;
  startLatlng: [number, number];
  endLatlng: [number, number];
  locationCity: string | null;
  locationState: string | null;
  locationCountry: string;
  startLatitude: string;
  startLongitude: string;
  achievementCount: number;
  kudosCount: number;
  commentCount: number;
  athleteCount: number;
  photoCount: number;
  map: {
    id: string | null;
    summaryPolyline: string;
    resourceState: number;
  };
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  gearId: string;
  fromAcceptedTag: boolean;
  uploadIdStr: string;
  averageSpeed: number;
  maxSpeed: number;
  averageCadence: number;
  hasHeartrate: boolean;
  averageHeartrate: number;
  maxHeartrate: number;
  heartrateOptOut: boolean;
  displayHideHeartrateOption: boolean;
  elevHigh: number;
  elevLow: number;
  prCount: number;
  totalPhotoCount: number;
  hasKudoed: boolean;
}
