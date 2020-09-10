import { DateHelpers } from './date-helpers';

export class DateBuilder {
  constructor(private date: Date) {}

  getDate(): Date {
    return this.date;
  }

  static today(): DateBuilder {
    return new DateBuilder(new Date(Date.now()));
  }

  private checkNegativeNumber(value: number): void {
    if (value < 0) throw new TypeError('Negative number not supported.');
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
