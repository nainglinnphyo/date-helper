export type Unit = "day" | "month" | "year";

export enum TimeZone {
  UTC = 0,
  MY = 480, // Malaysia Time (UTC+8) in minutes
  TH = 420, // Thailand Time (UTC+7) in minutes
  NY = -240, // New York Time (UTC-4) in minutes during DST
  MM = 390, // Myanmar Time (UTC+6:30) in minutes
}

export type StartOfProp = {
  unit: Unit;
  as?: TimeZone;
};

export type getCurrentProp = {
  timezone?: TimeZone;
};

export type initializeProps = {
  date?: Date;
  timezone?: TimeZone;
};
