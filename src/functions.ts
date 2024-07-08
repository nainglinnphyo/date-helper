import {
  getCurrentProp,
  initializeProps,
  StartOfProp,
  TimeZone,
  Unit,
} from "./types";

export class DateHelper {
  private date: Date;
  private initialTimezoneOffset: number;

  // constructor(props?: initializeProps) {
  //   this.date = props?.date ? new Date(props.date) : new Date();
  //   this.initialTimezoneOffset = props?.timezone || 0;
  //   this.date.setMilliseconds(
  //     this.date.getMilliseconds() + this.initialTimezoneOffset
  //   );
  // }
  constructor(date?: Date, timezone: TimeZone = TimeZone.UTC) {
    this.date = date ? new Date(date) : new Date();
    this.initialTimezoneOffset = timezone; // Store the initial timezone offset in minutes
    this.date.setMilliseconds(
      this.date.getMilliseconds() + this.initialTimezoneOffset
    );
  }
  format(formatString: string): string {
    // Implement your own date formatting logic or use a library like moment.js/dayjs
    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, "0");
    const day = String(this.date.getDate()).padStart(2, "0");
    const hours = String(this.date.getHours()).padStart(2, "0");
    const minutes = String(this.date.getMinutes()).padStart(2, "0");
    const seconds = String(this.date.getSeconds()).padStart(2, "0");
    return formatString
      .replace("YYYY", year.toString())
      .replace("MM", month)
      .replace("DD", day)
      .replace("HH", hours)
      .replace("mm", minutes)
      .replace("ss", seconds);
  }

  startOf(props: StartOfProp) {
    switch (props.unit) {
      case "year":
        this.date.setMonth(0);
      // Falls through intentionally
      case "month":
        this.date.setDate(1);
      // Falls through intentionally
      case "day":
        this.date.setHours(0, 0, 0, 0);
        break;
      default:
        throw new Error(`Unsupported unit: ${props.unit}`);
    }

    if (props.as) {
      this.date.setMilliseconds(this.date.getMilliseconds() + props.as);
    }

    return this; // Return a new Date instance to avoid mutating internal state
  }

  getCurrent(props?: getCurrentProp) {
    console.log(this.date);
    const offset =
      props?.timezone !== undefined
        ? props.timezone
        : this.initialTimezoneOffset;
    console.log(offset);
    const newDate = new Date(this.date.getTime());
    newDate.setMilliseconds(
      newDate.getMilliseconds() + offset - this.initialTimezoneOffset
    );
    // console.log("inside ", newDate);
    this.date = newDate;
    return this;
  }

  toDate(): Date {
    return this.date; // Return the JavaScript Date object
  }
}
