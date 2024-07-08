export type Unit = "day" | "month" | "year";
export enum TimeZone {
  MY = 23400000,
  TH = 25200000,
  NY = -14400000,
  UTC = 0,
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
