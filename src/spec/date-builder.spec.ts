import { DateBuilder } from '../date-builder';

const nowDateMock: Date = new Date(2000, 0, 1);

describe('class: DateBuilder', () => {
  const negativeNumberError: TypeError = new TypeError(
    'Negative number not supported.'
  );
  let dateBuilder: DateBuilder;

  beforeEach(() => {
    dateBuilder = new DateBuilder(new Date(nowDateMock));
  });

  describe('method: getDate', () => {
    let expectedDate: Date;

    beforeEach(() => {
      expectedDate = new Date(nowDateMock);
    });

    it('should return the date currenly in use', () => {
      expect(dateBuilder.getDate()).toEqual(expectedDate);
    });
  });

  describe('method: today', () => {
    beforeEach(() => {
      jest.spyOn(Date, 'now').mockReturnValue(nowDateMock.getTime());
      dateBuilder = DateBuilder.today();
    });

    it('should create a DateBuilder set to the current date', () => {
      expect(dateBuilder.getDate().getTime()).toEqual(nowDateMock.getTime());
    });

    it('should ignore hours, minutes, seconds and milliseconds', () => {
      const date: Date = new Date(
        nowDateMock.getFullYear(),
        nowDateMock.getMonth(),
        nowDateMock.getDate(),
        1,
        1,
        1
      );
      jest.spyOn(Date, 'now').mockReturnValue(date.getTime());
      dateBuilder = DateBuilder.today();
      expect(dateBuilder.getDate().getTime()).toEqual(nowDateMock.getTime());
    });
  });

  describe('method: now', () => {
    beforeEach(() => {
      jest.spyOn(Date, 'now').mockReturnValue(nowDateMock.getTime());
      dateBuilder = DateBuilder.now();
    });

    it('should create a DateBuilder set to the current date', () => {
      expect(dateBuilder.getDate().getTime()).toEqual(nowDateMock.getTime());
    });

    it('should keep in consideration hours, minutes, seconds and milliseconds', () => {
      const date: Date = new Date(
        nowDateMock.getFullYear(),
        nowDateMock.getMonth(),
        nowDateMock.getDate(),
        1,
        1,
        1
      );
      jest.spyOn(Date, 'now').mockReturnValue(date.getTime());
      dateBuilder = DateBuilder.now();
      expect(dateBuilder.getDate().getTime()).not.toEqual(
        nowDateMock.getTime()
      );
    });
  });

  describe('method: addSeconds', () => {
    let secondsToAdd: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      secondsToAdd = 0;
      expect(dateBuilder.addSeconds(secondsToAdd)).toBeInstanceOf(DateBuilder);
    });

    it('should add the given number of seconds to the date in use', () => {
      secondsToAdd = 40;
      expectedDate = new Date(2000, 0, 1, 0, 0, 40);
      dateBuilder = dateBuilder.addSeconds(secondsToAdd);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of hours is negative', () => {
      secondsToAdd = -10;
      try {
        expect(dateBuilder.addSeconds(secondsToAdd)).toThrowError();
      } catch (err) {
        expect(err).toEqual(negativeNumberError);
      }
    });
  });

  describe('method: subtractSeconds', () => {
    let secondsToSubtract: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      secondsToSubtract = 0;
      expect(dateBuilder.subtractSeconds(secondsToSubtract)).toBeInstanceOf(
        DateBuilder
      );
    });

    it('should subtract the given number of seconds to the date in use', () => {
      secondsToSubtract = 40;
      expectedDate = new Date(1999, 11, 31, 23, 59, 20);
      dateBuilder = dateBuilder.subtractSeconds(secondsToSubtract);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of hours is negative', () => {
      secondsToSubtract = -10;
      try {
        expect(dateBuilder.subtractSeconds(secondsToSubtract)).toThrowError();
      } catch (err) {
        expect(err).toEqual(negativeNumberError);
      }
    });
  });

  describe('method: addMinutes', () => {
    let minutesToAdd: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      minutesToAdd = 0;
      expect(dateBuilder.addMinutes(minutesToAdd)).toBeInstanceOf(DateBuilder);
    });

    it('should add the given number of minutes to the date in use', () => {
      minutesToAdd = 40;
      expectedDate = new Date(2000, 0, 1, 0, 40);
      dateBuilder = dateBuilder.addMinutes(minutesToAdd);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of hours is negative', () => {
      minutesToAdd = -10;
      try {
        expect(dateBuilder.addMinutes(minutesToAdd)).toThrowError();
      } catch (err) {
        expect(err).toEqual(negativeNumberError);
      }
    });
  });

  describe('method: subtractMinutes', () => {
    let minutesToSubtract: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      minutesToSubtract = 0;
      expect(dateBuilder.subtractMinutes(minutesToSubtract)).toBeInstanceOf(
        DateBuilder
      );
    });

    it('should subtract the given number of minutes to the date in use', () => {
      minutesToSubtract = 40;
      expectedDate = new Date(1999, 11, 31, 23, 20);
      dateBuilder = dateBuilder.subtractMinutes(minutesToSubtract);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of hours is negative', () => {
      minutesToSubtract = -10;
      try {
        expect(dateBuilder.subtractMinutes(minutesToSubtract)).toThrowError();
      } catch (err) {
        expect(err).toEqual(negativeNumberError);
      }
    });
  });

  describe('method: addHours', () => {
    let hoursToAdd: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      hoursToAdd = 0;
      expect(dateBuilder.addHours(hoursToAdd)).toBeInstanceOf(DateBuilder);
    });

    it('should add the given number of hours to the date in use', () => {
      hoursToAdd = 40;
      expectedDate = new Date(2000, 0, 2, 16);
      dateBuilder = dateBuilder.addHours(hoursToAdd);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of hours is negative', () => {
      hoursToAdd = -10;
      try {
        expect(dateBuilder.addHours(hoursToAdd)).toThrowError();
      } catch (err) {
        expect(err).toEqual(negativeNumberError);
      }
    });
  });

  describe('method: subtractHours', () => {
    let hoursToSubtract: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      hoursToSubtract = 0;
      expect(dateBuilder.subtractHours(hoursToSubtract)).toBeInstanceOf(
        DateBuilder
      );
    });

    it('should subtract the given number of hours to the date in use', () => {
      hoursToSubtract = 40;
      expectedDate = new Date(1999, 11, 30, 8);
      dateBuilder = dateBuilder.subtractHours(hoursToSubtract);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of hours is negative', () => {
      hoursToSubtract = -10;
      try {
        expect(dateBuilder.subtractHours(hoursToSubtract)).toThrowError();
      } catch (err) {
        expect(err).toEqual(negativeNumberError);
      }
    });
  });

  describe('method: addDays', () => {
    let daysToAdd: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      daysToAdd = 0;
      expect(dateBuilder.addDays(daysToAdd)).toBeInstanceOf(DateBuilder);
    });

    it('should add the given number of days to the date in use', () => {
      daysToAdd = 40;
      expectedDate = new Date(2000, 1, 10);
      dateBuilder = dateBuilder.addDays(daysToAdd);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of days is negative (no one likes negativity)', () => {
      daysToAdd = -10;
      try {
        expect(dateBuilder.addDays(daysToAdd)).toThrowError();
      } catch (err) {
        expect(err).toEqual(negativeNumberError);
      }
    });
  });

  describe('method: subtractDays', () => {
    let daysToSubtract: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      daysToSubtract = 0;
      expect(dateBuilder.subtractDays(daysToSubtract)).toBeInstanceOf(
        DateBuilder
      );
    });

    it('should subtract the given number of days to the date in use', () => {
      daysToSubtract = 40;
      expectedDate = new Date(1999, 10, 22);
      dateBuilder = dateBuilder.subtractDays(daysToSubtract);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of days is negative (no one likes negativity, again)', () => {
      daysToSubtract = -10;
      try {
        expect(dateBuilder.subtractDays(daysToSubtract)).toThrowError();
      } catch (err) {
        expect(err).toEqual(negativeNumberError);
      }
    });
  });

  describe('method: addMonths', () => {
    let monthsToAdd: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      expect(dateBuilder.addMonths(monthsToAdd)).toBeInstanceOf(DateBuilder);
    });

    it('should add the given number of months to the date in use', () => {
      monthsToAdd = 4;
      expectedDate = new Date(2000, 4, 1, 1); // 1 hour added because of the timezone "problem"
      dateBuilder = dateBuilder.addMonths(monthsToAdd);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of months is negative', () => {
      monthsToAdd = -10;
      try {
        expect(dateBuilder.addMonths(monthsToAdd)).toThrowError();
      } catch (err) {
        expect(err).toEqual(negativeNumberError);
      }
    });
  });

  describe('method: subtractMonths', () => {
    let monthsToSubtract: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      expect(dateBuilder.subtractMonths(monthsToSubtract)).toBeInstanceOf(
        DateBuilder
      );
    });

    it('should subtract the given number of months to the date in use', () => {
      monthsToSubtract = 2;
      expectedDate = new Date(1999, 10, 1);
      dateBuilder = dateBuilder.subtractMonths(monthsToSubtract);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of months is negative', () => {
      monthsToSubtract = -10;
      try {
        expect(dateBuilder.subtractMonths(monthsToSubtract)).toThrowError();
      } catch (err) {
        expect(err).toEqual(negativeNumberError);
      }
    });
  });
});
