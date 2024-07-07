import { StartOfProp, TimeZone, Unit } from "./types";

export class DateHelper {
  private date: Date;

  constructor(date?: Date) {
    this.date = date || new Date();
  }

  startOf(props: StartOfProp): Date {
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

    return new Date(this.date.getTime()); // Return a new Date instance to avoid mutating internal state
  }
}
