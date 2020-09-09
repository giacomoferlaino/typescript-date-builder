export class DateBuilder {
  static milliseconds: number = 1000;
  static seconds: number = 60;
  static minutes: number = 60;
  static hours: number = 24;
  private dayMultipler: number;

  constructor(private date: Date) {
    this.dayMultipler =
      DateBuilder.milliseconds *
      DateBuilder.seconds *
      DateBuilder.minutes *
      DateBuilder.hours;
  }

  getDate(): Date {
    return this.date;
  }

  static today(): DateBuilder {
    return new DateBuilder(new Date(Date.now()));
  }

  addDays(days: number): DateBuilder {
    const daysToAdd: number = days * this.dayMultipler;
    this.date = new Date(this.date.getTime() + daysToAdd);
    return this;
  }
}
