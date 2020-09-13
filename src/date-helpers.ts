export class DateHelpers {
  static readonly milliseconds: number = 1000;
  static readonly seconds: number = 60;
  static readonly minutes: number = 60;
  static readonly hours: number = 24;
  static readonly millisecondsInASecond: number = DateHelpers.milliseconds;
  static readonly millisecondsInAMinute: number =
    DateHelpers.millisecondsInASecond * DateHelpers.seconds;
  static readonly millisecondsInAnHour: number =
    DateHelpers.millisecondsInAMinute * DateHelpers.minutes;
  static readonly millisecondsInADay: number =
    DateHelpers.millisecondsInAnHour * DateHelpers.hours;

  static daysInCurrentMonth(date: Date): number {
    const offset: number = 1;
    return new Date(date.getFullYear(), date.getMonth() + offset, 0).getDate();
  }

  static daysInPreviousMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  }

  static equals(firstDate: Date, secondDate: Date): boolean {
    return firstDate.getTime() === secondDate.getTime();
  }

  static isAfter(firstDate: Date, secondDate: Date): boolean {
    return firstDate.getTime() > secondDate.getTime();
  }

  static isBefore(firstDate: Date, secondDate: Date): boolean {
    return firstDate.getTime() < secondDate.getTime();
  }

  static daysDifference(firstDate: Date, secondDate: Date): number {
    const timeDifference: number = firstDate.getTime() - secondDate.getTime();
    const daysDifference: number =
      timeDifference / DateHelpers.millisecondsInADay;
    return Math.round(daysDifference);
  }
}
