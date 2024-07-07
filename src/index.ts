import { DateHelper } from "./functions";
import { TimeZone } from "./types";
export * from "./types";
process.env.TZ = "UTC";

const dateHelper = new DateHelper().startOf({ as: TimeZone.MY, unit: "day" });
console.log(dateHelper);
