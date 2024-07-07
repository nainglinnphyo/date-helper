"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  TimeZone: () => TimeZone
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TimeZone
});
