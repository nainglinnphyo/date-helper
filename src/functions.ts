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

  // constructor(date?: Date, timezone: TimeZone = TimeZone.UTC) {
  //   this.date = date ? new Date(date) : new Date();
  //   this.initialTimezoneOffset = timezone * 60000; // Store the initial timezone offset in milliseconds
  //   this.date.setTime(this.date.getTime() + this.initialTimezoneOffset);
  // }

  constructor(props?: initializeProps) {
    this.date = props?.date ? new Date(props.date) : new Date();
    this.initialTimezoneOffset = props?.timezone ? props.timezone * 60000 : 0; // Store the initial timezone offset in milliseconds
    this.date.setTime(this.date.getTime() + this.initialTimezoneOffset);
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
    const newDate = new Date(this.date.getTime()); // Create a new date instance to avoid mutating the original date

    switch (props.unit) {
      case "year":
        newDate.setMonth(0);
      // Falls through intentionally
      case "month":
        newDate.setDate(1);
      // Falls through intentionally
      case "day":
        newDate.setHours(0, 0, 0, 0);
        break;
      default:
        throw new Error(`Unsupported unit: ${props.unit}`);
    }

    if (props.as) {
      newDate.setMilliseconds(newDate.getMilliseconds() + props.as);
    }

    return new DateHelper({
      date: newDate,
      timezone: this.initialTimezoneOffset / 60000,
    }); // Return a new DateHelper instance
  }

  getCurrent(props?: getCurrentProp) {
    const offset =
      props?.timezone !== undefined
        ? props.timezone * 60000
        : this.initialTimezoneOffset;
    const newDate = new Date(this.date.getTime());
    const offsetDifference = offset - this.initialTimezoneOffset; // Calculate the offset difference in milliseconds
    newDate.setTime(newDate.getTime() + offsetDifference);

    return new DateHelper({
      date: newDate,
      timezone: this.initialTimezoneOffset / 60000,
    }); // Return a new DateHelper instance
  }

  toDate(): Date {
    return new Date(this.date.getTime()); // Return a copy of the internal date to avoid external mutation
  }
}
