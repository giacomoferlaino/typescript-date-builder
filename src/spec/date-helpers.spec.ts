import { DateHelpers } from '../date-helpers';

describe('class: DateHelpers', () => {
  describe('method: daysInCurrentMonth', () => {
    it('should return the number of days in the current month', () => {
      expect(DateHelpers.daysInCurrentMonth(new Date(2000, 0, 1))).toBe(31);
      expect(DateHelpers.daysInCurrentMonth(new Date(2000, 1, 1))).toBe(29);
      expect(DateHelpers.daysInCurrentMonth(new Date(2001, 1, 1))).toBe(28);
    });
  });

  describe('method: daysInPreviousMonth', () => {
    it('should return the number of days in the previous month', () => {
      expect(DateHelpers.daysInPreviousMonth(new Date(2000, 0, 1))).toBe(31);
      expect(DateHelpers.daysInPreviousMonth(new Date(2000, 1, 1))).toBe(31);
      expect(DateHelpers.daysInPreviousMonth(new Date(2000, 2, 1))).toBe(29);
      expect(DateHelpers.daysInPreviousMonth(new Date(2001, 2, 1))).toBe(28);
    });
  });

  describe('method: equals', () => {
    it('should return true if the two dates are equal', () => {
      expect(
        DateHelpers.equals(new Date(2000, 0, 1), new Date(2000, 0, 1))
      ).toBe(true);
      expect(
        DateHelpers.equals(
          new Date(1999, 11, 31, 0, 0, 0, 1),
          new Date(1999, 11, 31, 0, 0, 0, 1)
        )
      ).toBe(true);
    });
    it('should return false if the two dates are not equal', () => {
      expect(
        DateHelpers.equals(new Date(2001, 0, 1), new Date(2000, 0, 1))
      ).toBe(false);
      expect(
        DateHelpers.equals(
          new Date(2000, 0, 1, 0, 0, 0, 1),
          new Date(2000, 0, 1, 0, 0, 0, 0)
        )
      ).toBe(false);
    });
  });

  describe('method: isAfter', () => {
    it('should return true if the first date is later than the second one', () => {
      expect(
        DateHelpers.isAfter(new Date(2000, 0, 1), new Date(1999, 0, 1))
      ).toBe(true);
      expect(
        DateHelpers.isAfter(
          new Date(2000, 0, 2, 0, 0, 0, 1),
          new Date(2000, 0, 2, 0, 0, 0, 0)
        )
      ).toBe(true);
    });

    it('should return false if the first date is before than the second one', () => {
      expect(
        DateHelpers.isAfter(new Date(1999, 0, 1), new Date(2000, 0, 1))
      ).toBe(false);
      expect(
        DateHelpers.isAfter(
          new Date(2000, 0, 2, 0, 0, 0, 0),
          new Date(2000, 0, 2, 0, 0, 0, 1)
        )
      ).toBe(false);
    });
  });

  describe('method: isBefore', () => {
    it('should return true if the first date is before than the second one', () => {
      expect(
        DateHelpers.isBefore(new Date(1999, 0, 1), new Date(2000, 0, 1))
      ).toBe(true);
      expect(
        DateHelpers.isBefore(
          new Date(2000, 0, 2, 0, 0, 0, 0),
          new Date(2000, 0, 2, 0, 0, 0, 1)
        )
      ).toBe(true);
    });

    it('should return false if the first date is later than the second one', () => {
      expect(
        DateHelpers.isBefore(new Date(2000, 0, 1), new Date(1999, 0, 1))
      ).toBe(false);
      expect(
        DateHelpers.isBefore(
          new Date(2000, 0, 2, 0, 0, 0, 1),
          new Date(2000, 0, 2, 0, 0, 0, 0)
        )
      ).toBe(false);
    });
  });

  describe('method: daysDifference', () => {
    it('should return an integer representing the days difference', () => {
      expect(
        DateHelpers.daysDifference(new Date(2000, 0, 1), new Date(1999, 0, 1))
      ).toBe(365);
      expect(
        DateHelpers.daysDifference(new Date(2000, 1, 1), new Date(2000, 0, 1))
      ).toBe(31);
      expect(
        DateHelpers.daysDifference(new Date(2000, 0, 2), new Date(2000, 0, 1))
      ).toBe(1);
      expect(
        DateHelpers.daysDifference(new Date(1999, 0, 1), new Date(2000, 0, 1))
      ).toBe(-365);
      expect(
        DateHelpers.daysDifference(new Date(2000, 0, 1), new Date(2000, 1, 1))
      ).toBe(-31);
      expect(
        DateHelpers.daysDifference(new Date(2000, 0, 1), new Date(2000, 0, 2))
      ).toBe(-1);
    });

    it('should return a rounded value in case the date also contains hours/minutes/seconds/milliseconds', () => {
      expect(
        DateHelpers.daysDifference(
          new Date(2000, 0, 1),
          new Date(1999, 0, 1, 0, 0, 0, 1)
        )
      ).toBe(365);
      expect(
        DateHelpers.daysDifference(
          new Date(2000, 1, 1, 12, 1, 0, 0),
          new Date(2000, 0, 1)
        )
      ).toBe(32);
      expect(
        DateHelpers.daysDifference(
          new Date(1999, 0, 1, 0, 0, 0, 0),
          new Date(2000, 0, 1, 0, 0, 0, 1)
        )
      ).toBe(-365);
      expect(
        DateHelpers.daysDifference(
          new Date(2000, 0, 1, 12, 1, 0, 0),
          new Date(2000, 1, 1)
        )
      ).toBe(-30);
    });
  });
});
