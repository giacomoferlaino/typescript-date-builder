import { DateBuilder } from '../date-builder';

const nowDateMock: number = new Date(2000, 0, 1).getTime();

describe('class: DateBuilder', () => {
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
      jest.spyOn(Date, 'now').mockReturnValue(nowDateMock);
      dateBuilder = DateBuilder.today();
    });

    it('should create a DateBuilder set to the current date', () => {
      expect(dateBuilder.getDate()).toEqual(new Date(nowDateMock));
    });
  });

  describe('method: addDays', () => {
    let daysToAdd: number;
    let expectedDate: Date;

    beforeEach(() => {
      daysToAdd = 40;
      expectedDate = new Date(2000, 1, 10);
    });

    it('should return a DateBuilder instance', () => {
      expect(dateBuilder.addDays(daysToAdd)).toBeInstanceOf(DateBuilder);
    });

    it('should add the given days to the date in use', () => {
      dateBuilder = dateBuilder.addDays(daysToAdd);
      expect(dateBuilder.getDate()).toEqual(expectedDate);
    });

    it('should also work with negative numbers', () => {
      daysToAdd = -10;
      expectedDate = new Date(1999, 11, 22);
      dateBuilder = dateBuilder.addDays(daysToAdd);
      expect(dateBuilder.getDate()).toEqual(expectedDate);
    });
  });
});
