export class DateHelpers {
  static daysInCurrentMonth(date: Date): number {
    const offset: number = 1;
    return new Date(date.getFullYear(), date.getMonth() + offset, 0).getDate();
  }

  static daysInPreviousMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  }
}
