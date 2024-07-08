import { DateHelper } from "./functions";
import { TimeZone } from "./types";
export * from "./types";
process.env.TZ = "UTC";

const helper = new DateHelper();
console.log("MM TIME ", helper.getCurrent({ timezone: TimeZone.MM }));
console.log("TH TIME ", helper.getCurrent({ timezone: TimeZone.TH }));
console.log("NY TIME ", helper.getCurrent({ timezone: TimeZone.NY }));
console.log("UTC TIME ", helper.getCurrent());
