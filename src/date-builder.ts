import { DateHelpers } from './date-helpers';

export class DateBuilder {
  constructor(private date: Date) {}

  getDate(): Date {
    return this.date;
  }

  static today(): DateBuilder {
    const now: Date = new Date(Date.now());
    return new DateBuilder(
      new Date(now.getFullYear(), now.getMonth(), now.getDate())
    );
  }

  static now(): DateBuilder {
    return new DateBuilder(new Date(Date.now()));
  }

  private checkNegativeNumber(value: number): void {
    if (value < 0) throw new TypeError('Negative number not supported.');
  }

  addMinutes(minutes: number): DateBuilder {
    this.checkNegativeNumber(minutes);
    const minutesToAdd: number = minutes * DateHelpers.millisecondsInAMinute;
    this.date = new Date(this.date.getTime() + minutesToAdd);
    return this;
  }

  subtractMinutes(minutes: number): DateBuilder {
    this.checkNegativeNumber(minutes);
    const minutesToSubtract: number =
      minutes * DateHelpers.millisecondsInAMinute;
    this.date = new Date(this.date.getTime() - minutesToSubtract);
    return this;
  }

  addHours(hours: number): DateBuilder {
    this.checkNegativeNumber(hours);
    const hoursToAdd: number = hours * DateHelpers.millisecondsInAnHour;
    this.date = new Date(this.date.getTime() + hoursToAdd);
    return this;
  }

  subtractHours(hours: number): DateBuilder {
    this.checkNegativeNumber(hours);
    const hoursToSubtract: number = hours * DateHelpers.millisecondsInAnHour;
    this.date = new Date(this.date.getTime() - hoursToSubtract);
    return this;
  }

  addDays(days: number): DateBuilder {
    this.checkNegativeNumber(days);
    const daysToAdd: number = days * DateHelpers.millisecondsInADay;
    this.date = new Date(this.date.getTime() + daysToAdd);
    return this;
  }

  subtractDays(days: number): DateBuilder {
    this.checkNegativeNumber(days);
    const daysToAdd: number = days * DateHelpers.millisecondsInADay;
    this.date = new Date(this.date.getTime() - daysToAdd);
    return this;
  }

  addMonths(months: number): DateBuilder {
    this.checkNegativeNumber(months);
    for (let i: number = 0; i < months; i++) {
      const daysInCurrentMonth: number = DateHelpers.daysInCurrentMonth(
        this.date
      );
      this.addDays(daysInCurrentMonth);
    }
    return this;
  }

  subtractMonths(months: number): DateBuilder {
    this.checkNegativeNumber(months);
    for (let i: number = 0; i < months; i++) {
      const daysInPreviousMonth: number = DateHelpers.daysInPreviousMonth(
        this.date
      );
      this.subtractDays(daysInPreviousMonth);
    }
    return this;
  }
}
