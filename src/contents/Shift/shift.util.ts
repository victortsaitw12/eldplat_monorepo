/* -------------------
 0. TYPING  
------------------- */

/* -------------------
 1. CONSANTS
------------------- */

// ------------------- get Date => certain Date ------------------- //
export const MINUTE_INTERVAL = 15;
/* -------------------
 2. GET STH (DATE OR NUMBER for javascript calculation)
------------------- */
// ------------------- get Date => certain Date ------------------- //
export const getFirstDate = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 1);

export const getDayStart = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const getDayEnd = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59);

export const getTmrStart = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

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

// ------------------- formate Date => "週五" ------------------- //
export const formatDAY = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { weekday: "short" };
  const formatedDate = new Intl.DateTimeFormat("zh-TW", options).formatToParts(
    date
  );
  return formatedDate;
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

// ------------------- formate Date from DB "2023-04-01"=> "2023-4-1 ------------------- //
export const removePad = (input: string) => input.replaceAll("-0", "-");

/* -------------------
 4. TRANSLATE (for i18n NOT IN USE)
------------------- */
// get formated dates (i18n, not in use)
export const formatIntl = (date: Date) => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const locales = "zh-TW";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: userTimezone
  };

  // get the local time string for the UTC time
  const localTime = date.toLocaleString(locales, options);
  return localTime;
};

// ------------------- formate Date => FOR 資料庫相關  ------------------- //
// ------------------- formate Date => "2023 / 03 / 08" ------------------- //
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

//-- keep for 跨時區 NOT-IN-USE -- //
// format (UTC string) => {local date: Date} to user???
// "4/6/2023, 2:26:48 PM"
// format (date:Date) => {local string for user} (frontend)
export const formatLocal = (date: Date) => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTime = date.toLocaleString(undefined, {
    timeZone: userTimezone
  });
  return localTime;
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

export const throttle = (fn: (args?: any) => void, delay: number) => {
  let timer;
  let lastExecTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    const execute = () => {
      fn.apply(this, args);
      lastExecTime = currentTime;
    };

    if (currentTime - lastExecTime >= delay) {
      execute();
    } else {
      clearTimeout(timer);
      timer = setTimeout(execute, delay);
    }
  };
};

export default throttle;
