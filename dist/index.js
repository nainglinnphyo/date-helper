// src/functions.ts
function getCurrent(getCurrentProp) {
  const utcDate = /* @__PURE__ */ new Date();
  const mstOffset = getCurrentProp?.timeZone ? getCurrentProp?.timeZone * 60 * 60 * 1e3 : 0;
  const utcTime = utcDate.getTime();
  const mstTime = utcTime + mstOffset;
  const mstDate = new Date(mstTime);
  return mstDate;
}

// src/types.ts
var TimeZone = /* @__PURE__ */ ((TimeZone2) => {
  TimeZone2[TimeZone2["MY"] = 6.5] = "MY";
  TimeZone2[TimeZone2["TH"] = 6] = "TH";
  return TimeZone2;
})(TimeZone || {});

// src/index.ts
process.env.TZ = "UTC";
console.log(
  getCurrent({
    timeZone: 6 /* TH */
  })
);
export {
  TimeZone
};
