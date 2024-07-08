export type Unit = "day" | "month" | "year";

export enum TimeZone {
  UTC = 0,
  GMT = 0,
  WET = 0,
  CET = 3600000, // UTC+1
  WAT = 3600000, // UTC+1
  CAT = 7200000, // UTC+2
  EET = 7200000, // UTC+2
  SAST = 7200000, // UTC+2
  EAT = 10800000, // UTC+3
  MSK = 10800000, // UTC+3
  IRST = 12600000, // UTC+3:30
  GST = 14400000, // UTC+4
  MUT = 14400000, // UTC+4
  RET = 14400000, // UTC+4
  SAMT = 14400000, // UTC+4
  AFT = 16200000, // UTC+4:30
  PKT = 18000000, // UTC+5
  TFT = 18000000, // UTC+5
  UZT = 18000000, // UTC+5
  IST = 19800000, // UTC+5:30
  NPT = 20700000, // UTC+5:45
  BDT = 21600000, // UTC+6
  MMT = 23400000, // UTC+6:30
  ICT = 25200000, // UTC+7
  WIB = 25200000, // UTC+7
  MYT = 28800000, // UTC+8
  SGT = 28800000, // UTC+8
  AWST = 28800000, // UTC+8
  CST = 28800000, // UTC+8
  PHT = 28800000, // UTC+8
  JST = 32400000, // UTC+9
  KST = 32400000, // UTC+9
  ACST = 34200000, // UTC+9:30
  ACDT = 37800000, // UTC+10:30
  AEST = 36000000, // UTC+10
  CHST = 36000000, // UTC+10
  KOST = 39600000, // UTC+11
  NCT = 39600000, // UTC+11
  FJT = 43200000, // UTC+12
  NZST = 43200000, // UTC+12
  WST = 43200000, // UTC+12
  TOT = 46800000, // UTC+13
  LINT = 50400000, // UTC+14

  // American time zones
  NST = -12600000, // UTC-3:30
  AST = -14400000, // UTC-4
  EST = -18000000, // UTC-5
  CST_US = -21600000, // UTC-6 (Central Standard Time in the US)
  CST_CN = 28800000, // UTC+8 (China Standard Time)
  MST = -25200000, // UTC-7
  PST = -28800000, // UTC-8
  AKST = -32400000, // UTC-9
  HST = -36000000, // UTC-10

  // US daylight saving time zones
  EDT = -14400000, // UTC-4
  CDT = -18000000, // UTC-5
  MDT = -21600000, // UTC-6
  PDT = -25200000, // UTC-7
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
