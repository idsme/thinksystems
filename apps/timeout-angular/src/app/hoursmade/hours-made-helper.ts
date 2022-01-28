import {WorkedPeriod} from './worked-period';

export class HoursMadeHelper {

  /**
   * Creates a Worked period based on Defaults and overrides.
   * @param {number} month
   * @param {number} year
   * @param {number} dayOfTheMonth
   * @returns {WorkedPeriod}
   */
  public static createDefaultPeriod(month: number, year: number, dayOfTheMonth: number) {
    const workedPeriod = new WorkedPeriod();
    workedPeriod.monthOfTheYear = month;
    workedPeriod.dayOfTheMonth = dayOfTheMonth;
    workedPeriod.year = year;

    return workedPeriod;
  }

  public static convertDefaultFreePeriod(workingDay: WorkedPeriod) {
    console.log(`convertDefaultFreePeriod`);

    workingDay.hoursPerDay = 0;
    workingDay.projectName = 'FREE';
    workingDay.clientCode = 'None';
    workingDay.rateAtThatTime = 0;
  }
}
