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
});
