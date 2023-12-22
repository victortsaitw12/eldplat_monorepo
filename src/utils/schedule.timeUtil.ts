import { MissionData } from "@contents/Assignment/assignment.typing";
export interface I_MonthItem {
  id: string;
  date: string;
  isToday: boolean;
  otherMonth: string;
  weeks: number;
  detail: I_DetailItem[] | null | MissionData[];
}

export interface I_DetailItem {
  schd_Type: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //--獲取當月的最後一天--
  getDaysInOneMonth(date: Date): number {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const d = new Date(year, month, 0);
    return d.getDate();
  },

  getMonthweek(date: Date, startWithSunday = true): number {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dateFirstOne = new Date(`${year}/${month}/1`);
    return startWithSunday
      ? dateFirstOne.getDay() === 0
        ? 7
        : dateFirstOne.getDay()
      : dateFirstOne.getDay() === 0
      ? 6
      : dateFirstOne.getDay() - 1;
  },

  getOtherMonth(
    date: Date,
    str: "nextMonth" | "prevMonth",
    _type: any = null
  ): Date {
    const timeArray = this.dateFormat(date).split("/");
    const year = timeArray[0];
    const month = timeArray[1];
    const day = timeArray[2];

    let year2 = parseInt(year);
    let month2: number;

    if (str === "nextMonth") {
      month2 = parseInt(month) + 1;
      if (month2 === 13) {
        year2 = year2 + 1;
        month2 = 1;
      }
    } else {
      month2 = parseInt(month) - 1;
      if (month2 === 0) {
        year2 = year2 - 1;
        month2 = 12;
      }
    }

    let day2 = parseInt(day);
    const days2 = new Date(year2, month2, 0).getDate();
    if (day2 > days2) {
      day2 = days2;
    }

    const timeStemp = `${year2}/${this.formatZero(month2)}/${this.formatZero(
      day2
    )}`;
    return new Date(timeStemp);
  },

  getNowMonthList(date: Date, hideOthersDate = false): I_MonthItem[] {
    const arr: I_MonthItem[] = [];
    const num = this.getDaysInOneMonth(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const toDay = this.dateFormat(new Date());

    for (let i = 0; i < num; i++) {
      const nowTime = `${year}/${this.formatZero(month)}/${this.formatZero(
        i + 1
      )}`;
      const tempDate = new Date(nowTime);
      arr.push({
        id: String(i + 1),
        date: nowTime,
        isToday: toDay === nowTime,
        otherMonth: "nowMonth",
        weeks: tempDate.getDay(),
        detail: null
      });
    }
    return arr;
  },

  getPrevMonthList(date: Date): I_MonthItem[] {
    const arr: I_MonthItem[] = [];
    const leftNum = this.getMonthweek(date);
    const num =
      this.getDaysInOneMonth(this.getOtherMonth(date, "prevMonth")) -
      leftNum +
      1;
    const preDate = this.getOtherMonth(date, "prevMonth");
    for (let i = 0; i < leftNum; i++) {
      const nowTime = `${preDate.getFullYear()}-${this.formatZero(
        preDate.getMonth() + 1
      )}-${this.formatZero(num + i)}`;
      const tempDate = new Date(nowTime);
      arr.push({
        id: this.hideOthersDate ? "" : `${preDate.getMonth() + 1}/${num + i}`,
        date: nowTime,
        isToday: false,
        otherMonth: "prevMonth",
        weeks: tempDate.getDay(),
        detail: null
      });
    }
    return leftNum === 7 ? [] : arr;
  },

  getNextMonthList(date: Date): I_MonthItem[] {
    const arr: I_MonthItem[] = [];
    const nextDate = this.getOtherMonth(date, "nextMonth");
    const leftLength = this.getDaysInOneMonth(date) + this.getMonthweek(date);
    const _length = 7 - (leftLength % 7);
    for (let i = 0; i < _length; i++) {
      const nowTime = `${nextDate.getFullYear()}-${this.formatZero(
        nextDate.getMonth() + 1
      )}-${this.formatZero(i + 1)}`;
      const tempDate = new Date(nowTime);
      arr.push({
        id: this.hideOthersDate ? "" : `${nextDate.getMonth() + 1}/${i + 1}`,
        date: nowTime,
        isToday: false,
        otherMonth: "nextMonth",
        weeks: tempDate.getDay(),
        detail: null
      });
    }
    return _length === 7 ? [] : arr;
  },

  formatZero(date: number): string {
    return date < 10 ? "0" + date : date.toString();
  },
  getNowMonthScheduleList(date: Date): I_MonthItem[] {
    const arr = [];
    const num = this.getDaysInOneMonth(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const toDay = this.dateFormat(new Date());

    for (let i = 0; i < num; i++) {
      const nowTime = `${year}/${this.formatZero(month)}/${this.formatZero(
        i + 1
      )}`;
      const tempDate = new Date(nowTime);

      arr.push({
        id: String(i + 1),
        date: nowTime,
        otherMonth: "nowMonth",
        isToday: toDay === nowTime,
        weeks: tempDate.getDay(),
        detail: []
      });
    }
    return arr;
  },
  // format日期
  dateFormat(date: string | Date): string {
    date = typeof date === "string" ? new Date(date.replace(/\-/g, "/")) : date;
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  },
  getMonthList(date: Date): I_MonthItem[] {
    return [
      ...this.getPrevMonthList(date),
      ...this.getNowMonthList(date),
      ...this.getNextMonthList(date)
    ];
  },
  startWithSunday: true, // start with sunday
  hideOthersDate: false // hide others
};
