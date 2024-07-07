export type Unit = "day" | "month" | "year";
export enum TimeZone {
  MY = 63000000,
  TH = 6,
}

export type StartOfProp = {
  unit: Unit;
  as: TimeZone;
};
