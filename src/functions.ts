import { newCurrentProp } from "./types";

export function getCurrent(getCurrentProp?: newCurrentProp) {
  const utcDate = new Date();

  const mstOffset = getCurrentProp?.timeZone
    ? getCurrentProp?.timeZone * 60 * 60 * 1000
    : 0;

  // Convert UTC date to milliseconds since Unix Epoch
  const utcTime = utcDate.getTime();

  // Add the Timezone offset to the UTC time
  const mstTime = utcTime + mstOffset;

  // Create a new Date object with the Timezone time
  const mstDate = new Date(mstTime);

  return mstDate;
}
