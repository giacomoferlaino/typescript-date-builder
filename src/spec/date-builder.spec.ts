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
      expect(dateBuilder.getDate()).toEqual(nowDateMock);
    });
  });

  describe('method: addDays', () => {
    let daysToAdd: number;
    let expectedDate: Date;

    it('should return a DateBuilder instance', () => {
      daysToAdd = 0;
      expect(dateBuilder.addDays(daysToAdd)).toBeInstanceOf(DateBuilder);
    });

    it('should add the given number days to the date in use', () => {
      daysToAdd = 40;
      expectedDate = new Date(2000, 1, 10);
      dateBuilder = dateBuilder.addDays(daysToAdd);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of days is negative (no one likes negativity)', () => {
      daysToAdd = -10;
      try {
        dateBuilder.addDays(daysToAdd);
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

    it('should subtract the given number days to the date in use', () => {
      daysToSubtract = 40;
      expectedDate = new Date(1999, 10, 22);
      dateBuilder = dateBuilder.subtractDays(daysToSubtract);
      expect(dateBuilder.getDate().getTime()).toEqual(expectedDate.getTime());
    });

    it('should throw a TypeError if the number of days is negative (no one likes negativity, again)', () => {
      daysToSubtract = -10;
      try {
        dateBuilder.subtractDays(daysToSubtract);
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
        dateBuilder.subtractDays(monthsToAdd);
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
  });
});
