/* -------------------
 1. CONSANTS
------------------- */
export const MINUTE_INTERVAL = 15;
export const TotalMS = 1000 * 60 * 60 * 24;
export const eventH = 24; // (Icon)16px + 4px * 2  > (font)0.86rem + 4px * 2
export const gapH = 4;
export const cellPd = 8;

/* -------------------
 2. GET STH (DATE OR NUMBER for javascript calculation)
------------------- */
// ------------------- get Date => certain Date ------------------- //
export const getDayStart = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const getDayEnd = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59);

// ------------------- get Date => certain number ------------------- //
export const getTotalDays = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
export const getLastMonthTotalDays = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 0).getDate();

/* -------------------
 3. FORMATING (for UI, DB)
------------------- */

// ------------------- formate Date => "2023 / 3" ------------------- //
export const formatYYYYMM = (date: Date) => {
  // month is 0-based
  return `${date.getFullYear()} / ${date.getMonth() + 1}`;
};

// ------------------- formate Date => "08:00 AM" ------------------- //
export const formatTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  };
  const formatedDate = new Intl.DateTimeFormat("en-TW", options).format(date);
  return formatedDate;
};
// ------------------- formate Date => "2023 / 03 / 08 週三" ------------------- //
export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  };
  const formatedDate = new Intl.DateTimeFormat("zh-TW", options)
    .format(date)
    .replaceAll("/", " / ")
    .replace("（", " ")
    .replace("）", " ");
  return formatedDate;
};

/* -------------------
 4. TRANSLATE (for i18n NOT IN USE)
------------------- */
// ------------------- formate Date => FOR 資料庫相關  ------------------- //
export const formatDateForAPI = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };
  const formatedDate = new Intl.DateTimeFormat("zh-TW", options)
    .format(date)
    .replaceAll("/", "-");
  return formatedDate;
};
//-- keep for 跨時區 NOT-IN-USE -- //
//"2023-04-06T14:11:00+0800"
//format (local date:Date) => {UTC string} to DB
export const formatToDB = (date: Date) => {
  const now = date || new Date(Math.floor(Date.now() / 1000) * 1000);
  const nowTimestamp = now.valueOf();
  const timezoneOffset = now.getTimezoneOffset();
  const timezoneOffsetMiliSeconds = timezoneOffset * 60 * 1000;
  const offsetNow = new Date(nowTimestamp - timezoneOffsetMiliSeconds);
  const timezoneOffsetHours = Math.floor(Math.abs(timezoneOffset) / 60);
  const timezoneOffsetString =
    (timezoneOffset < 0 ? "+" : "-") +
    timezoneOffsetHours.toString().padStart(2, "0") +
    "00";
  const isoString = offsetNow
    .toISOString()
    .replace(".000Z", timezoneOffsetString);
  return isoString;
};

export const formatToDBDate = (date: Date) => {
  const now = date || new Date(Math.floor(Date.now() / 1000) * 1000);
  const nowTimestamp = now.valueOf();
  const timezoneOffset = now.getTimezoneOffset();
  const timezoneOffsetMiliSeconds = timezoneOffset * 60 * 1000;
  const offsetNow = new Date(nowTimestamp - timezoneOffsetMiliSeconds);
  const isoString = offsetNow.toISOString().split("T")[0];
  return isoString;
};

/* -------------------
 5. debounce/ throttle/ observer
------------------- */
export const debounce = (fn: (args?: any) => void, delay: number) => {
  let timer: any = null;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// export const throttle = (fn: (args?: any) => void, delay: number) => {
//   let timer;
//   let lastExecTime = 0;

//   return function (...args) {
//     const currentTime = Date.now();

//     const execute = () => {
//       fn.apply(this, args);
//       lastExecTime = currentTime;
//     };

//     if (currentTime - lastExecTime >= delay) {
//       execute();
//     } else {
//       clearTimeout(timer);
//       timer = setTimeout(execute, delay);
//     }
//   };
// };

// export default throttle;
