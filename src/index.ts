import * as Fn from "./functions";
import { TimeZone } from "./types";
export * from "./types";
process.env.TZ = "UTC";

console.log(
  Fn.getCurrent({
    timeZone: TimeZone.TH,
  })
);
